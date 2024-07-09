import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen px-4 md:px-14 lg:px-64 ", className)}
    >
      {children}
    </div>
  );
}
