import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Client logos are small line art, where WebP at the default 75 shows ringing.
    qualities: [75, 100],
  },
};

export default nextConfig;
