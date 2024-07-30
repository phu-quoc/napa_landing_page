import { Col, Flex, Image, List, Row, Typography } from "antd";
import "./style.scss";
import Button from "../button";
import { FOOTERS } from "../../mocks/footers";
import IMAGES from "../../constants/image";
import { useDevice } from "../../hooks/useDevice";
import ROUTERS from "../../constants/router";
import LinkComponent from "../link";

const { Text } = Typography;
const { Item } = List;
const Footer = () => {
  const { isMobile } = useDevice();
  return (
    <div className={`${isMobile ? "footer--mobile" : ""} footer bg-dark`}>
      <Row
        gutter={[48, 48]}
        className={`${isMobile ? "footer__table--mobile" : ""} footer__table`}
      >
        {FOOTERS.map((data, i) => (
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} key={i}>
            <List
              className="footer__list"
              header={
                <Text className="footer__subtitle ant-list-header">
                  {data.header}
                </Text>
              }
              dataSource={data.data}
              renderItem={(item) => (
                <Item>
                  <LinkComponent
                    to={ROUTERS.RESOURCES.path}
                    className="footer__link footer__link--p-0"
                  >
                    {item}
                  </LinkComponent>
                </Item>
              )}
            />
          </Col>
        ))}
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Text className="footer__subtitle text-white">Get the App</Text>
          <div className="mt-8">
            <Button className="footer__button">
              <Image preview={false} width="100%" src={IMAGES.APP_STORE} />
            </Button>
          </div>
          <div className="mt-8">
            <Button className="footer__button">
              <Image preview={false} width="100%" src={IMAGES.GOOGLE_PLAY} />
            </Button>
          </div>
          <div className="pt-48 pb-12 py-0 mt-8">
            <Text className="footer__subtitle text-white">Follow Us</Text>
          </div>
          <Flex justify={isMobile ? "center" : "flex-start"}>
            <Button className="footer__button">
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -5 24 24"
                width="24"
                fill="currentColor"
              >
                <path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"></path>
              </svg>
            </Button>
            <Button className="footer__button">
              <svg
                className="ml-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-7 -2 24 24"
                width="24"
                fill="currentColor"
              >
                <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"></path>
              </svg>
            </Button>
            <Button className="footer__button">
              <svg
                className="ml-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -4 24 24"
                width="24"
                fill="currentColor"
              >
                <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path>
              </svg>
            </Button>
            <Button className="footer__button">
              <svg
                className="ml-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="24"
                fill="currentColor"
              >
                <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
                <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
                <circle cx="15.156" cy="4.858" r="1.237"></circle>
              </svg>
            </Button>
            <Button className="footer__button">
              <svg
                className="ml-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="24"
                fill="currentColor"
              >
                <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path>
              </svg>
            </Button>
          </Flex>
        </Col>
      </Row>
      <Row
        gutter={isMobile ? [48, 24] : [48, 48]}
        className={`${
          isMobile ? "footer__copyright--mobile" : ""
        } footer__copyright`}
      >
        <Col
          flex="auto"
          xs={24}
          sm={24}
          md={24}
          className="footer__copyright-text"
        >
          <Text className="text-white text-16">
            Collers @ 2023. All rights reserved.
          </Text>
        </Col>
        <Col>
          <Row gutter={32}>
            <Col>
              <LinkComponent
                to={ROUTERS.RESOURCES.path}
                className="footer__link"
              >
                Terms
              </LinkComponent>
            </Col>
            <Col>
              <LinkComponent
                to={ROUTERS.RESOURCES.path}
                className="footer__link"
              >
                Privacy
              </LinkComponent>
            </Col>
            <Col>
              <LinkComponent
                to={ROUTERS.RESOURCES.path}
                className="footer__link"
              >
                Contact
              </LinkComponent>
            </Col>
            <Col className="footer__copyright-text">
              <LinkComponent
                to={ROUTERS.RESOURCES.path}
                className="footer__link footer__link--p-0"
              >
                <svg
                  className="mr-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="20"
                  fill="currentColor"
                >
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
                  <path d="M10 18c.448 0 1.119-.568 1.747-1.823C12.532 14.607 13 12.392 13 10c0-2.392-.468-4.607-1.253-6.177C11.119 2.568 10.447 2 10 2c-.448 0-1.119.568-1.747 1.823C7.468 5.393 7 7.608 7 10c0 2.392.468 4.607 1.253 6.177C8.881 17.432 9.553 18 10 18zm0 2c-2.761 0-5-4.477-5-10S7.239 0 10 0s5 4.477 5 10-2.239 10-5 10z"></path>
                  <path d="M2 12h16v2H2v-2zm0-6h16v2H2V6z"></path>
                </svg>
                EN
              </LinkComponent>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
