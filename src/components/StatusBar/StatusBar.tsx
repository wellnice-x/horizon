import styles from "./StatusBar.module.scss";
import WifiIcon from "@/assets/icons/wifi-icon.svg?react";
import SignalIcon from "@/assets/icons/network-signal-icon.svg?react";
import BatteryIcon from "@/assets/icons/battery-icon.svg?react";

const StatusBar = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.statusBar} ${className ?? ""}`}>
      <BatteryIcon className={styles.icon} />
      <WifiIcon className={styles.icon} />
      <SignalIcon className={styles.icon} />
    </div>
  );
};

export default StatusBar;
