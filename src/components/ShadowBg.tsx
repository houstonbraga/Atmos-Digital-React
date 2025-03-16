import classNames from "classnames"
import { twMerge } from "tailwind-merge";

type ShadowBgProps = {
    variant: "shadowCenter" | "shadowRight" | "shadowLeft";
    className?: string;
}

export function ShadowBg({ variant, className }: ShadowBgProps) {
    const shadowClass = classNames(
        {
            "shadow-bg": variant === "shadowCenter",
            "shadow-right": variant === "shadowRight",
            "shadow-left": variant === "shadowLeft",
        },
    );

    return (
        <div className={twMerge(shadowClass, className)} data-variant={variant}></div>
    )
}