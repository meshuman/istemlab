import { ImageResponse } from "next/og";

export const alt = "I.STEM Lab: applied AI and geospatial intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#fff", padding: 80 }}>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 4, color: "#7fb59f" }}>I.STEM LAB</div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, maxWidth: 980 }}>Applied AI and geospatial intelligence, built to deliver.</div>
        <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>GeoAI · RAG and agents · 3D, VR and AR · istemlab.ai</div>
      </div>
    ),
    size
  );
}
