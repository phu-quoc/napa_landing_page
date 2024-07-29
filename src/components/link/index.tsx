import "./style.css";
import { ReactNode } from "react";
import { Link, To } from "react-router-dom";

type Props = {
  to: To;
  className?: string;
  children?: ReactNode;
};
const LinkComponent = ({ to, className, children }: Props) => {
  return (
    <Link
      to={to}
      className={className ? `link-component ${className}` : "link-component"}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
