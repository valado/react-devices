import { FC } from "react";
import { Device } from "../lib/Device";
import { DeviceType } from "../lib/Device/model";

const Content: FC<{ label: string }> = ({ label }) => (
  <div
    style={{
      height: "450px",
      width: "100%",
      backgroundImage: `linear-gradient(45deg, purple, #21888f)`,
      animation: "gradient 5s ease infinite",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h2>CONTENT</h2>
      <p>{label}</p>
    </div>
  </div>
);

const App: FC = () => (
  <div
    style={{
      display: "flex",
      gap: "30px 30px",
      flexWrap: "wrap",
      padding: "50px",
    }}
  >
    {Object.values(DeviceType).map((deviceType) => (
      <div
        key={deviceType}
        style={{
          flex: "1 1",
        }}
      >
        <Device device={deviceType as DeviceType} growOnHover>
          <Content label={deviceType} />
        </Device>
      </div>
    ))}
  </div>
);

export default App;
