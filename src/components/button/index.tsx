import {ReactNode} from 'react';
import './style.css'

type Props = {
    type?: 'button' | 'submit',
    className?: string,
    onClick?: () => void,
    children: ReactNode,
    id?: string

}

const Button = ({type, className, id, onClick, children}: Props) => {
    return (
        <button
            type={type ? type : "button"}
            className={className ? `btn-component ${className}` : 'btn-component'}
            id={id}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
