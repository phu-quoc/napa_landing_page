import { Card, Col, Flex, Row, Typography } from "antd";
import "./style.css";
import Button from "../../../components/button";
import { PRODUCTS } from "../../../mocks/products";
import { useDevice } from "../../../hooks/useDevice";

const { Title, Text } = Typography;

const Product = () => {
  const { isMobile } = useDevice();

  return (
    <Flex
      className={
        isMobile ? "container container--mobile product" : "container product"
      }
      style={{ background: "#0F172A" }}
      vertical
    >
      <Flex justify={isMobile ? "center" : "space-between"} align="center" wrap>
        <Title level={isMobile ? 5 : 2} style={{ color: "#FFFFFF" }}>
          The best of the best
        </Title>
        <Button
          className={`${isMobile ? "btn-outline mt-32" : "btn-outline"} btn-white px-20 py-24 font-size-24`}
        >
          Sign up now
        </Button>
      </Flex>
      <Row
        gutter={[48, 32]}
        className={isMobile ? "pt-32 product__group" : "pt-80 product__group"}
      >
        <div className="product__backlights" />
        {PRODUCTS.map((item, i) => (
          <Col xs={24} sm={24} md={24} lg={8} xl={8} key={i}>
            <Card
              hoverable
              bordered={false}
              className="card bg-dark"
              style={{ borderRadius: 4 }}
              cover={
                <img
                  alt="example"
                  src={item.url}
                  style={{
                    height: 220,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    objectFit: "cover",
                  }}
                />
              }
            >
              <Flex vertical className="card-body">
                <Text className="h6 text-white">{item.title}</Text>
                <Text className="mt-16 font-size-18 text-white">
                  {item.content}
                </Text>
              </Flex>
              <Flex className="card-footer" justify="center" vertical>
                <Button className="btn-outline btn-white p-16">
                  <Flex align="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-3 -4 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"></path>
                    </svg>
                    <Text className="px-0 py-16 text-white font-size-20">
                      Buy Now
                    </Text>
                  </Flex>
                </Button>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Product;
