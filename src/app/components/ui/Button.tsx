import cn from "@/app/utils/className";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva("px-5 py-2 rounded-md", {
  variants: {
    variant: {
      default:
        "bg-primary hover:bg-primary-dark transition text-foreground hover:text-white px-5 py-2 text-sm",
    },
  },
  defaultVariants: { variant: "default" },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <button className={cn(buttonVariants({ className, variant }))} {...props}>
      {children}
    </button>
  );
};

export { buttonVariants, Button };
