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
      alignItems: "center",
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
      gap: "10px",
      flexWrap: "wrap",
      width: "100vw",
      maxWidth: "100%",
      padding: "30px",
    }}
  >
    {Object.values(DeviceType).map((deviceType) => (
      <div
        key={deviceType}
        style={{
          flex: "0.5 0.5",
          margin: "10px",
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
