import { ImageResponse } from "next/og";
import { BIZ } from "@/lib/site";

export const alt = `${BIZ.name}: roadworthy certificates, servicing and tyres in Oakleigh South`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share image generated at build time. Replace with a real workshop photo later if you like.
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0c1320", color: "#e9edf2", padding: 72 }}>
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: 2 }}>
          <span>ALFA</span><span style={{ color: "#f5b800", marginLeft: 14 }}>AUTO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Roadworthy, Servicing &amp; Tyres</div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 18, color: "#aeb9c6" }}>{`${BIZ.suburb}, Melbourne · ${BIZ.phone}`}</div>
        </div>
        <div style={{ display: "flex", height: 18, background: "#f5b800" }} />
      </div>
    ),
    size,
  );
}
