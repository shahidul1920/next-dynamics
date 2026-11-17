import { ImageResponse } from "next/og";

export const alt = "Next Dynamics - Creative frontend engineering studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b1118",
          color: "#f8fafc",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#55d1ff",
            fontSize: 28,
            letterSpacing: "0.12em",
          }}
        >
          NEXT DYNAMICS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "950px",
            }}
          >
            High-performance web architecture.
          </div>
          <div
            style={{
              display: "flex",
              color: "#94a3b8",
              fontSize: 30,
              lineHeight: 1.3,
            }}
          >
            Creative frontend engineering for brands that cannot afford to be slow.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#55d1ff",
            fontSize: 24,
          }}
        >
          nextdynamics.tech
        </div>
      </div>
    ),
    size
  );
}
