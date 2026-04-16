"use client";

import Image from "next/image";
import { useState } from "react";

export default function AdContent() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="ad-card" style={{ color: "white", textAlign: "center" }}>
        ad content
      </div>
    );
  }

  return (
    <div className="ad-card" style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src="/n8.png"
        alt="ad"
        fill
        style={{
          objectFit: "cover",
          borderRadius: "24px"
        }}
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}