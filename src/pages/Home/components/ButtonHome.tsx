import classNames from "classnames"
import '../index.css'

type ButtonProps = {
    variant: 'primary' | 'secondary';
    title: string;
}

export function ButtonHome({ variant, title } : ButtonProps) {
    const buttonClass = classNames(
        "px-4 py-4 text-white font-semibold rounded-md w-[180px] cursor-pointer",
        {
            "button-primary": variant === 'primary',
            "button-secondary": variant === 'secondary'
        }
    )

    return <button className={buttonClass}>{title}</button>
};