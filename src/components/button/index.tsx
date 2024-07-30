import { ReactNode } from "react";
import "./style.scss";

type Props = {
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ type, className, onClick, children }: Props) => {
  return (
    <button
      type={type || "button"}
      className={`btn-component ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
