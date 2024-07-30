import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { clsx } from "clsx";
import "./style.scss";

type Props = TextProps & {
  size?: "16" | "18" | "20" | "24";
  className?: string;
  style?: React.CSSProperties;
  weight?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  color?: string;
};
const Text = ({
  children,
  size = "16",
  className,
  style,
  weight = "4",
  color,
  ...rest
}: Props) => {
  return (
    <Typography.Text
      className={clsx(
        "component-text",
        `component-text-size-${size}`,
        `component-text-weight-${weight}`,
        `component-text-color-${color}`,
        className,
      )}
      style={style}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
};

export default Text;
