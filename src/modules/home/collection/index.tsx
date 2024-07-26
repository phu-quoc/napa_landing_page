import { useState } from "react";
import { Col, Flex, Image, Row, Typography } from "antd";
import "./style.css";
import Button from "../../../components/button";
import { COLLECTIONS } from "../../../mocks/collections";
import IMAGES from "../../../constants/image";
import { useDevice } from "../../../hooks/useDevice";

const { Title, Text } = Typography;
const Collection = () => {
  const { isMobile } = useDevice();
  const [active, setActive] = useState(0);
  return (
    <Flex
      className={
        isMobile
          ? "container collection--mobile collection"
          : "container collection pb-128"
      }
      vertical
    >
      <Flex vertical className={isMobile ? "collection__text-box--mobile" : ""}>
        <Title level={isMobile ? 5 : 2}>Grow your collection</Title>
        <Text
          className={isMobile ? "font-size-16 mt-32" : "font-size-18 mt-32"}
        >
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </Text>
      </Flex>
      <Row gutter={80} className="mt-80">
        <Col>
          <Flex
            vertical={!isMobile}
            className="collection__group-button--mobile"
          >
            {COLLECTIONS.map((item, i) => (
              <Button
                key={i}
                onClick={() => setActive(i)}
                className={`p-16 ${active === i && "active"} ${i !== 0 && "mt-16"} flex-start`}
              >
                <Flex style={{ minWidth: "100%", flexWrap: "nowrap" }}>
                  {item.icon}
                  <Text className="font-size-20 px-0 py-16">{item.text}</Text>
                  {active === i && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-5 -5 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
                    </svg>
                  )}
                </Flex>
              </Button>
            ))}
          </Flex>
        </Col>
        <Col flex="auto">
          <Image preview={false} width="100%" src={IMAGES.COLLECTION} />
        </Col>
      </Row>
    </Flex>
  );
};

export default Collection;
