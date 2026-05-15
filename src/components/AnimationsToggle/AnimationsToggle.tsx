import ToggleIconButton from "../ToggleIconButton";
import { ReactNode } from "react";
import { useAnimationStore } from "@/stores/animationStore";

type AnimationsToggleProps = {
  className?: string;
  title?: string;
  enabledAnimationsIcon: ReactNode;
  disabledAnimationsIcon: ReactNode;
};

const AnimationsToggle = (props: AnimationsToggleProps) => {
  const { className, title, enabledAnimationsIcon, disabledAnimationsIcon } =
    props;

  const animationsEnabled = useAnimationStore(
    (state) => state.animationsEnabled,
  );
  const toggleAnimations = useAnimationStore((state) => state.toggleAnimations);

  return (
    <ToggleIconButton
      className={className ?? ""}
      onClick={toggleAnimations}
      title={title}
      aria-label={`${animationsEnabled ? "Выключить" : "Включить"} анимации`}
      icon={animationsEnabled ? enabledAnimationsIcon : disabledAnimationsIcon}
    />
  );
};

export default AnimationsToggle;
