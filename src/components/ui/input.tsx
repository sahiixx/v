import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md bg-bg-elevated px-4 text-base text-fg shadow-hairline outline-none transition-[box-shadow] duration-150 ease-out placeholder:text-subtle hover:shadow-hairline-hover focus-visible:shadow-hairline-hover focus-visible:ring-2 focus-visible:ring-ring/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
