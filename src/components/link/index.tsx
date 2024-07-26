import './style.css'
import {ReactNode} from "react";
type Props = {
    href?: string,
    className?: string,
    children?: ReactNode,

}
const Link = ({href, className, children}: Props) => {
    return (
        <a
            href={href}
            className={className ? `link-component ${className}` : 'link-component'}
        >
            {children}
        </a>
    )
}

export default Link;
