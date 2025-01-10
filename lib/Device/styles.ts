import { DeviceType } from "./model";
import styles from "./devices.module.css";

type Styles = {
  main: string[];
  screen?: string;
  notch?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DEVICE_STYLE_MAP: { [key: string]: Styles } = {
  [DeviceType.BROWSER]: { main: [styles.browser], screen: styles.screen },
  [DeviceType.DESKTOP]: {
    main: [styles.desktop],
    screen: styles.desktopScreen,
    notch: styles.desktopNotch,
  },
  [DeviceType.PHONE]: {
    main: [styles.phone, styles.light],
    screen: styles.screen,
    notch: styles.notch,
  },
  [DeviceType.TABLET]: { main: [styles.tablet], screen: styles.screen },
  [DeviceType.TABLET_LANDSCAPE]: {
    main: [styles.tablet, styles.landscape],
    screen: styles.screen,
  },
  [DeviceType.LAPTOP]: {
    main: [styles.laptop],
    screen: styles.laptopScreen,
    notch: styles.laptopNotch,
  },
};
