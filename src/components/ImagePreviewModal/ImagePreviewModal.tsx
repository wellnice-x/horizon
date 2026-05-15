import type { ImagePreviewData } from "@/types/ui/image-preview";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@/assets/icons/close-icon.svg?react";
import styles from "./ImagePreviewModal.module.scss";

type ImagePreviewModalProps = ImagePreviewData & {
  isOpen: boolean;
  onClose: () => void;
};

const ImagePreviewModal = (props: ImagePreviewModalProps) => {
  const { isOpen, imageSrc, alt = "", title, onClose } = props;

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const overlayElement = overlayRef.current;
    const imageElement = imageRef.current;

    if (!overlayElement || !imageElement) {
      return;
    }

    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;

      startY = event.clientY;
      startScrollTop = overlayElement.scrollTop;

      imageElement.style.cursor = "grabbing";
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) {
        return;
      }

      const deltaY = event.clientY - startY;

      overlayElement.scrollTop = startScrollTop - deltaY;
    };

    const stopDragging = () => {
      isDragging = false;
      imageElement.style.cursor = "";
    };

    imageElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      imageElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.documentElement.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} ref={overlayRef} onClick={onClose}>
      <button
        className={styles.closeButton}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Закрыть изображение"
      >
        <CloseIcon className={styles.closeIcon} />
      </button>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Предпросмотр изображения"}
        tabIndex={-1}
      >
        {title && <p className={styles.title}>{title}</p>}

        <img
          className={styles.image}
          ref={imageRef}
          src={imageSrc}
          alt={alt}
          draggable={false}
        />
      </div>
    </div>,
    document.body,
  );
};

export default ImagePreviewModal;
