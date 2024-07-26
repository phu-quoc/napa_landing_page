import { Col, Flex, Image, Row, Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.css";
import Button from "../../../components/button";
import Link from "../../../components/link";
import IMAGES from "../../../constants/image";
import { useDevice } from "../../../hooks/useDevice";
import { HEROES } from "../../../mocks/heroes";

const { Title, Paragraph, Text } = Typography;
const Hero = () => {
  const { isMobile } = useDevice();
  return (
    <Flex
      className={
        isMobile ? "container container--mobile hero" : "container hero"
      }
      vertical
    >
      <Row gutter={[80, 32]}>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <Flex
            className={
              isMobile
                ? "hero__text-box hero__text-box--mobile"
                : "hero__text-box"
            }
            justify="center"
            vertical
            align={isMobile ? "center" : "start"}
          >
            <Title level={isMobile ? 2 : 1}>Collectible Sneakers</Title>
            <Paragraph className="mt-32 font-size-18">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </Paragraph>
            <Flex className="mt-32">
              <Button className="btn-outline btn-dark-red p-16 font-size-20">
                Sign up now
              </Button>
              <Link className="link-dark-red ml-16">
                <PlayCircleOutlined />
                <Text className="hero__text text-dark-red">Watch Demo</Text>
              </Link>
            </Flex>
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <Image preview={false} width="100%" src={IMAGES.SHOE} />
        </Col>
      </Row>
      <Row gutter={[80, 32]} className="pt-80">
        {HEROES.map((item, i) => (
          <Col xs={24} sm={24} md={24} lg={8} xl={8} key={i}>
            <Flex vertical className={isMobile ? "hero__text-box--mobile" : ""}>
              <div className="hero__icon-box">
                {item.block}
                <img width="50px" className="hero__icon-1" src={item.image} />
              </div>
              <Text className="sub-title">{item.title}</Text>
              <Text className="font-size-18">{item.content}</Text>
            </Flex>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Hero;
