import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  invert?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, invert = false, ...props }, ref) => {
  const transitionClasses = "transition-all duration-500";
  const buttonClasses = cn(
    "group relative w-32 cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold",
    invert ? "border-primary bg-primary text-primary-foreground" : "bg-background",
    className,
  );

  const primaryTextClasses = cn(
    "inline-block translate-x-1",
    transitionClasses,
    "group-hover:translate-x-12 group-hover:opacity-0",
    invert && "text-primary-foreground",
  );

  const secondaryTextClasses = cn(
    "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0",
    transitionClasses,
    "group-hover:-translate-x-1 group-hover:opacity-100",
    invert ? "text-foreground" : "text-primary-foreground",
  );

  const backgroundClasses = cn(
    "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg opacity-0",
    transitionClasses,
    "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:opacity-100",
    invert
      ? "bg-background group-hover:bg-background"
      : "bg-primary group-hover:bg-primary",
  );

  return (
    <button ref={ref} className={buttonClasses} {...props}>
      <span className={primaryTextClasses}>
        {text}
      </span>
      <div className={secondaryTextClasses}>
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className={backgroundClasses}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
