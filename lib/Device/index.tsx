import { FC, PropsWithChildren } from "react";
import { DEVICE_STYLE_MAP } from "./styles";
import { DeviceType } from "./model";
import styles from "./devices.module.css";

type DeviceProps = {
  device: DeviceType;
  growOnHover?: boolean;
  dropShadow?: boolean;
  onClick?: () => void;
};

export const Device: FC<Required<PropsWithChildren> & DeviceProps> = ({
  device,
  growOnHover,
  dropShadow,
  onClick,
  children,
}) => (
  <div
    className={`${DEVICE_STYLE_MAP[device].main.join(" ")} ${
      growOnHover ? styles.growOnHover : ""
    } ${dropShadow ? styles.shadow : ""}`}
    onClick={onClick}
  >
    <div className={styles.screen}>{children}</div>
    {DEVICE_STYLE_MAP[device].notch && (
      <div className={DEVICE_STYLE_MAP[device].notch} />
    )}
  </div>
);
