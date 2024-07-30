import { Col, Flex, Row, Typography } from "antd";
import "./style.scss";
import FeedbackCard from "./feedbackCard";
import Button from "../../../components/button";
import { FEEDBACKS } from "../../../mocks/feedbacks";
import { useDevice } from "../../../hooks/useDevice";

const { Title } = Typography;

const Feedback = () => {
  const { isMobile } = useDevice();

  return (
    <Flex
      className={`${isMobile ? "container--mobile" : ""} container feedback`}
      vertical
    >
      <Flex
        justify={isMobile ? "center" : "space-between"}
        align="center"
        className={isMobile ? "py-0" : "py-80"}
      >
        <Title level={isMobile ? 5 : 2}>Because they love us</Title>
        {!isMobile && (
          <Flex justify="center" align="center" className="rounded">
            <Button className="btn-dark-red rounded mr-24">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#78350f"
              >
                <path
                  d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
                  stroke="#78350f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
            <Button className="btn-dark-red rounded">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#78350f"
              >
                <path
                  d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                  stroke="#78350f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
          </Flex>
        )}
      </Flex>
      <Row
        gutter={24}
        className={`${isMobile ? "mt-32" : "mt-80"} feedback__slider`}
      >
        <div className={"feedback__bg-slider"} />
        {FEEDBACKS.map((item, i) => (
          <Col span={isMobile ? 18 : 7} key={i}>
            <FeedbackCard item={item} isMobile={isMobile} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Feedback;
