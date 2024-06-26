"use client";

import WhiteLogo from "@/app/assets/logo-white.svg";
import styles from "./logo.module.css";

export default function Logo() {
  const logoStyle = styles.logo + " max-w-36 mb-6";
  return (
    <div className={logoStyle}>
      <WhiteLogo />
    </div>
  );
}
