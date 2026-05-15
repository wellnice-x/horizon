import { ReactNode } from "react";
import { useAppearanceStore } from "@/stores/appearanceStore";
import toast from "react-hot-toast";
import useIsMobile from "@/hooks/useIsMobile";
import ToggleIconButton from "../ToggleIconButton";

type ParallaxToggleProps = {
  className?: string;
  title?: string;
  enabledParallaxIcon: ReactNode;
  disabledParallaxIcon: ReactNode;
};

const ParallaxToggle = (props: ParallaxToggleProps) => {
  const { className, title, enabledParallaxIcon, disabledParallaxIcon } = props;

  const isParallax = useAppearanceStore((state) => state.isParallax);
  const toggleParallax = useAppearanceStore((state) => state.toggleParallax);

  const isMobile = useIsMobile();

  const handleToggle = () => {
    if (isMobile) {
      toast.error("Не поддерживается на мобильных устройствах", {
        icon: "😕",
        id: "unsupportedOnMobileToast",
      });
    } else {
      toggleParallax();
    }
  };

  return (
    <ToggleIconButton
      className={className ?? ""}
      onClick={handleToggle}
      type="button"
      title={title}
      aria-label={`${isParallax ? "Выключить" : "Включить"} параллакс эффект`}
      icon={isParallax ? enabledParallaxIcon : disabledParallaxIcon}
    />
  );
};

export default ParallaxToggle;
