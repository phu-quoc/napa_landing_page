import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { clsx } from "clsx";

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
        `text-${size}`,
        `font-weight-${weight}`,
        `text-${color}`,
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
