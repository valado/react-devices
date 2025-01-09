import { DeviceType } from "./model";
import styles from "./devices.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DEVICE_STYLE_MAP: { [key: string]: any } = {
  [DeviceType.Desktop]: styles.browser,
  [DeviceType.Mobile]: styles.iphone,
};
