import classNames from "classnames"

type ShadowBgProps = {
    variant: "shadowG" | "shadowP" | "shadowM"
}

export function ShadowBg({ variant }: ShadowBgProps) {
    const shadowClass = classNames(
        "shadow-bg",
        {
            "shadow-bg": variant === "shadowP",
            "shadow-right": variant === "shadowM",
            "shadow-left": variant === "shadowG",
        },
    );

    return (
        <div className={shadowClass}></div>
    )
}