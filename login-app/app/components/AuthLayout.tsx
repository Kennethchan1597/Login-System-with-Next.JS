import { ReactNode } from "react";

type AuthLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export default function AuthLayout({ left, right }: AuthLayoutProps) {
  return (
    <main style={{ position: "relative", width: "100%" }}>
      <div className="glass-board" />

      <div className="layout">
        <div className="left">{left}</div>
        <div className="right">{right}</div>
      </div>
    </main>
  );
}