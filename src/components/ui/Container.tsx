import { cn } from "@/lib/cn";

/**
 * Centered content column with consistent max-width and gutters.
 * Every section pulls its horizontal rhythm from here.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
