import Image from "next/image";
import logoImg from "@/assests/Logo.svg";

export default function HyrixLogo({ size = 200 }: { size?: number }) {
  return (
    <Image
      src={logoImg}
      alt="Hyrix Logo"
      width={size}
      height={size}
      priority
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}