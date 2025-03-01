import classNames from "classnames"

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
        className,
    );

    return (
        <div className={shadowClass} data-variant={variant}></div>
    )
}