import React from 'react';
import ButtonCss from "./Button.module.css"

type PropsTypeButton = {
    onClick:()=>void
    title: string
    disabled?: boolean

}

const Button: React.FC<PropsTypeButton> = ({title,onClick,disabled}) => {


    return (
        <button className={ButtonCss.button} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;