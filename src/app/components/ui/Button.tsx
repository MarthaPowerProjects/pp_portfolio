import cn from "@/app/utils/className";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 font-medium tracking-[-0.01em] transition-[transform,border-color,background-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-lg border border-volt bg-volt text-ink hover:border-volt-soft hover:bg-volt-soft hover:motion-safe:-translate-y-px",
        secondary:
          "rounded-lg border-[1.5px] border-current bg-transparent hover:motion-safe:-translate-y-px",
        text: "border-b border-transparent px-0 py-1 hover:border-current hover:motion-safe:-translate-y-px",
      },
      size: {
        md: "px-5 py-3 text-[15px]",
        lg: "px-6 py-3.5 text-[16px]",
      },
    },
    compoundVariants: [{ variant: "text", size: ["md", "lg"], className: "px-0 py-1" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonVariantProps;

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
