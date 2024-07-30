import { Card, Image, Typography } from "antd";
import "./style.scss";
import { Event } from "../../../../types/card";
import Button from "../../../../components/button";

const { Text } = Typography;

type Props = {
  item: Event;
  className?: string;
  onClick?: () => void;
};
const EventCard = ({ item, className, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      hoverable
      bordered={false}
      className={`${className ? `event-card ${className}` : "event-card"}`}
      style={{ borderRadius: 4, height: "100%" }}
    >
      <div className="event-card__body">
        <div>
          <Text className="text-18">{item.text}</Text>
        </div>
        <Text className="h6">{item.title}</Text>
        <div className="mt-16">
          <Image
            preview={false}
            width="100%"
            height={220}
            style={{ objectFit: "cover" }}
            className="event-card__image"
            src={item.url}
          />
        </div>
      </div>
      <div className="event-card__footer">
        <Button className="event-card__button btn-dark-red">
          <Text className="px-0 py-0 pr-16 text-16 text-dark-red">Buy Now</Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 24 24"
            width="24"
            fill="currentColor"
          >
            <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
          </svg>
        </Button>
      </div>
    </Card>
  );
};
export default EventCard;
