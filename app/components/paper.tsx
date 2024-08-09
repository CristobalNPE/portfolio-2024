import React from "react";
import { cn } from "~/lib/utils";

interface PaperProps {
  children?: React.ReactNode;
  className?: string;
}

export function Paper({ children, className }: PaperProps) {
  return (
    <div
      className={cn(
        `isolate bg-gradient-to-br from-secondary/30 to-secondary/40 backdrop-blur-md border rounded-lg p-9 shadow-md ring-1 ring-black/5 `,
        className && className
      )}
    >
      {children}
    </div>
  );
}
