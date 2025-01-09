import { FC, PropsWithChildren } from "react";
import { DEVICE_STYLE_MAP } from "./styles";
import { DeviceType } from "./model";

export const Device: FC<
  Required<PropsWithChildren<{ device: DeviceType }>>
> = ({ device, children }) => (
  <div className={DEVICE_STYLE_MAP[device]}>{children}</div>
);
