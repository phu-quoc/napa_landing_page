import { Col, Flex, Row, Typography } from "antd";
import "./style.scss";
import EventCard from "./eventCard";
import LinkComponent from "../../../components/link";
import Button from "../../../components/button";
import { EVENTS } from "../../../mocks/events";
import { useDevice } from "../../../hooks/useDevice";
import ROUTERS from "../../../constants/router";
import Text from "../../../components/text";

const { Title } = Typography;
const Event = () => {
  const { isMobile } = useDevice();

  return (
    <div className="event">
      <div
        className={`${
          isMobile ? "container--mobile" : ""
        } container event__wrapper event--bg-image`}
      >
        <Flex
          justify={isMobile ? "center" : "space-between"}
          align="center"
          wrap
        >
          <Title level={isMobile ? 5 : 2}>Amazing events</Title>
          <LinkComponent
            to={ROUTERS.ARTICLES.path}
            className="link-dark-red py-0"
          >
            <Flex justify="center" align="center">
              <Text color="dark-red" className="px-0 py-16">
                Explore Articles
              </Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 24 24"
                width="24"
                fill="currentColor"
              >
                <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
              </svg>
            </Flex>
          </LinkComponent>
        </Flex>
        <Row gutter={[24, 24]} className={isMobile ? "mt-32" : "mt-80"}>
          {EVENTS.map((item, i) => (
            <Col xs={24} sm={24} md={24} lg={6} xl={6} key={i}>
              <EventCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
      <div
        className={`${
          isMobile ? "container--mobile" : ""
        } container bg-dark event__signup`}
      >
        {!isMobile && <div className="event__bg-signup" />}
        <Flex
          className="event__text-box--mobile"
          justify={isMobile ? "center" : "space-between"}
          align="center"
          wrap
        >
          <Title level={isMobile ? 5 : 2} className="event__signup--title">
            Collect More Sneakers Today
          </Title>
          <Button
            className={`${isMobile ? "btn-outline mt-32" : "btn-outline"} btn-white px-20 py-24 font-size-24 `}
          >
            <Text size="24" color="white" className="py-24">
              Sign up now
            </Text>
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Event;
