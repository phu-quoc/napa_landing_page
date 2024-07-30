import { Col, Flex, Row, Typography } from "antd";
import "./style.scss";
import Button from "../../../components/button";
import IMAGES from "../../../constants/image";
import { useDevice } from "../../../hooks/useDevice";

const { Title, Text } = Typography;

const Registration = () => {
  const { isMobile } = useDevice();

  return (
    <Flex
      className={`${isMobile ? "registration--mobile" : ""} registration container px-160`}
      vertical
    >
      <Flex className={`${isMobile ? "box--mobile" : ""} box`} vertical>
        <Row gutter={80}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Flex
              vertical
              className={isMobile ? "registration__text-box--mobile" : ""}
            >
              <Flex className="mb-24">
                <Title level={isMobile ? 5 : 2}>Why join us</Title>
              </Flex>
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-5 -7 24 24"
                  width="24"
                  fill="#15803D"
                >
                  <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                </svg>
                <Text className="text-20 ml-8">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </Text>
              </Flex>
              <Flex align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-5 -7 24 24"
                  width="24"
                  fill="#15803D"
                >
                  <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                </svg>
                <Text className="text-20 ml-8">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </Text>
              </Flex>
              <Flex align="center" className="mb-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-5 -7 24 24"
                  width="24"
                  fill="#15803D"
                >
                  <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                </svg>
                <Text className="text-20 ml-8">
                  Ullamcorper ornare in et egestas dolor orci.
                </Text>
              </Flex>
              <Flex>
                <Button className="btn-outline btn-dark-red registration__video-box">
                  Sign up now
                </Button>
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="registration__video-box">
              <div className="bg-deco-video" />
              <img src={IMAGES.DESKTOP} className="image" />
            </div>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};

export default Registration;
