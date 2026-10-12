import Image from "next/image";
import type { Work } from "@/lib/content";

/**
 * The square that sits left of a product name.
 *
 * Shipped App Store artwork when the product has it, and the first letter of
 * the name when it does not. The monogram is a FALLBACK, not a house style —
 * a real icon is better evidence that something actually shipped, so any
 * product that gains one should be given it rather than kept uniform.
 *
 * Sizes are fixed and match the box the monogram occupies, so adding an icon
 * to a product never changes the height of its card.
 */
export function ProductMark({
  work,
  size,
}: {
  work: Work;
  size: "lg" | "sm";
}) {
  const large = size === "lg";
  const box = large ? "h-12 w-12 rounded-2xl" : "h-9 w-9 rounded-lg";

  if (work.icon) {
    return (
      <Image
        src={work.icon}
        alt=""
        aria-hidden
        width={large ? 48 : 36}
        height={large ? 48 : 36}
        /* Decorative: the product name is right beside it, so announcing the
           icon would only repeat that name to a screen reader. */
        className={`${box} shrink-0 border border-line-strong object-cover`}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={`${box} grid shrink-0 place-items-center border border-line-strong bg-elevated font-mono font-medium ${
        large ? "text-xl" : "text-sm"
      }`}
      style={{ color: `rgb(${work.accent})` }}
    >
      {work.name.charAt(0)}
    </span>
  );
}
