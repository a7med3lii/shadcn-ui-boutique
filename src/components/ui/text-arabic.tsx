import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export interface TextArabicProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";
  className?: string;
}

const TextArabic = forwardRef<HTMLParagraphElement, TextArabicProps>(
  ({ variant = "p", className, ...props }, ref) => {
    const Tag = variant === "span" ? "span" : variant;

    const styles = {
      h1: "font-tajawal text-4xl font-bold leading-tight md:text-5xl lg:text-6xl",
      h2: "font-tajawal text-3xl font-bold leading-tight md:text-4xl",
      h3: "font-tajawal text-2xl font-bold leading-tight md:text-3xl",
      h4: "font-tajawal text-xl font-bold leading-tight md:text-2xl",
      h5: "font-tajawal text-lg font-bold leading-tight md:text-xl",
      h6: "font-tajawal text-base font-bold leading-tight md:text-lg",
      p: "font-tajawal text-base leading-relaxed",
      small: "font-tajawal text-sm leading-relaxed",
      span: "font-tajawal",
    };

    return (
      <Tag
        dir="rtl"
        className={cn(styles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArabic.displayName = "TextArabic";

export { TextArabic };