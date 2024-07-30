import { Card, Flex } from "antd";
import "./style.scss";
import { Article } from "../../../../types/card";
import Button from "../../../../components/button";
import Text from "../../../../components/text";

type Props = {
  item: Article;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
};
const ArticleCard = ({ item, className, onClick, isMobile }: Props) => {
  return (
    <Card
      onClick={onClick}
      hoverable
      bordered={false}
      className={`article-card ${className || ""}`}
      style={{ borderRadius: 4, height: "100%" }}
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
      <Flex
        vertical
        className={`
            ${isMobile ? "article-card__body--mobile" : ""} article-card__body
          `}
      >
        <Text size="24" weight="7">
          {item.title}
        </Text>
        <Text size="18" className="mt-16">
          {item.content}
        </Text>
      </Flex>
      <div
        className={`${
          isMobile ? "article-card__footer--mobile" : ""
        } article-card__footer`}
      >
        <Button className="btn-component--py-0 btn-dark-red">
          <Flex>
            <Text size="16" color="dark-red" className="px-0 py-0 pr-16">
              Buy Now
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
        </Button>
      </div>
    </Card>
  );
};
export default ArticleCard;
