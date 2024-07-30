import { Col, Flex, Image, Row, Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import Button from "../../../components/button";
import LinkComponent from "../../../components/link";
import IMAGES from "../../../constants/image";
import { useDevice } from "../../../hooks/useDevice";
import { HEROES } from "../../../mocks/heroes";
import ROUTERS from "../../../constants/router";
import Text from "../../../components/text";

const { Title, Paragraph } = Typography;
const Hero = () => {
  const { isMobile } = useDevice();
  return (
    <Flex
      className={`${isMobile ? "container--mobile" : ""} container hero`}
      vertical
    >
      <Row gutter={[80, 32]}>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <Flex
            className={`${
              isMobile ? "hero__text-box--mobile" : ""
            } hero__text-box`}
            justify="center"
            vertical
            align={isMobile ? "center" : "start"}
          >
            <Title level={isMobile ? 2 : 1}>Collectible Sneakers</Title>
            <Paragraph className="mt-32 text-18">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </Paragraph>
            <Flex className="mt-32">
              <Button className="btn-outline btn-dark-red p-16 text-20">
                Sign up now
              </Button>
              <LinkComponent
                to={ROUTERS.HOME.path}
                className="link-dark-red ml-16"
              >
                <PlayCircleOutlined />
                <Text color="dark-red" weight="5" className="hero__text">
                  Watch Demo
                </Text>
              </LinkComponent>
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
              <Text size="20" weight="5">
                {item.title}
              </Text>
              <Text size="18">{item.content}</Text>
            </Flex>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Hero;
