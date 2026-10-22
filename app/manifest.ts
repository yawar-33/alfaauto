import type { MetadataRoute } from "next";
import { BIZ } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BIZ.name, short_name: "Alfa Auto", start_url: "/", display: "standalone",
    background_color: "#ffffff", theme_color: "#0c1320",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
