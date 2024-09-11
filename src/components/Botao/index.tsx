import React from "react";
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    texto?: string;
    onClick?: () => void;
    children?: React.ReactNode
}

function Botao( { onClick, type, children, texto } : Props){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {texto || children}
        </button>
    )
}

export default Botao;
