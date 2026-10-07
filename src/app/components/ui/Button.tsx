import cn from "@/app/utils/className";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center text-[15px] font-medium tracking-[-0.01em] transition-[transform,border-color,background-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl border border-cobalt bg-cobalt px-5 py-3 text-ink hover:border-paper hover:motion-safe:-translate-y-px",
        secondary:
          "rounded-xl border border-paper bg-transparent px-5 py-3 text-paper hover:border-paper hover:motion-safe:-translate-y-px",
        text: "border-b border-transparent px-0 py-1 text-paper hover:border-paper hover:motion-safe:-translate-y-px",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps;

export function Button({
  className,
  variant,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonVariantProps;

export function ButtonLink({ className, variant, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}

export { buttonVariants };
