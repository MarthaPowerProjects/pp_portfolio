import cn from "@/app/utils/className";
import type { HTMLAttributes } from "react";

export default function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-[min(1080px,calc(100%-48px))] md:w-[min(1080px,calc(100%-80px))]",
        className,
      )}
      {...props}
    />
  );
}
