import { FC } from "react";
import { Device } from "../lib/Device";
import { DeviceType } from "../lib/Device/model";

const App: FC = () => (
  <>
    <Device device={DeviceType.Desktop}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "orange",
        }}
      >
        Desktop
      </div>
    </Device>
    <Device device={DeviceType.Mobile}>
      <div
        style={{
          width: "200px",
          height: "500px",
          backgroundColor: "purple",
        }}
      >
        Desktop
      </div>
    </Device>
  </>
);

export default App;
