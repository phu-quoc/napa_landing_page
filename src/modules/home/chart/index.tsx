import { Image, Typography } from "antd";
import "./style.css";
import IMAGES from "../../../constants/image";
import { useDevice } from "../../../hooks/useDevice";

const { Title, Text } = Typography;
const Chart = () => {
  const { isMobile } = useDevice();

  return (
    <div
      className={`${isMobile ? "container container--mobile" : "container"} bg-dark-red chart-wrapper`}
    >
      <div className="chart">
        <Image
          preview={false}
          width="100%"
          style={{ opacity: 0.5, objectFit: "contain" }}
          src={IMAGES.MAP}
        />
        <div className="round">
          <img
            src={IMAGES.ELLIPSES}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt=""
          />
        </div>
      </div>
      <img src={IMAGES.CHART_POINT} className="chart__image" alt="" />
      <div className="chart__text-box">
        <Text
          className={`${isMobile ? "chart__title--mobile" : ""}
              chart__title text-white`}
        >
          11,658,467
        </Text>
        <Title level={isMobile ? 5 : 2} className="text-white">
          Shoes Collected
        </Title>
      </div>
    </div>
  );
};

export default Chart;
