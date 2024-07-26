import { Flex, Typography } from "antd";
import "./style.css";
import Link from "../link";
import { useDevice } from "../../hooks/useDevice";
import Button from "../button";

const { Title } = Typography;
const Header = () => {
  const { isMobile } = useDevice();
  return (
    <Flex
      align="center"
      justify="space-between"
      className={isMobile ? "app-header app-header--mobile" : "app-header"}
    >
      <Link className="logo">
        <Title level={5} className="text-dark-red">
          Collers
        </Title>
      </Link>
      {isMobile ? (
        <div className="app-header__menu-scale">
          <svg
            width="24px"
            height="24px"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#78350f"
          >
            <path
              d="M3 5H11"
              stroke="#78350f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="#78350f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="#78350f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      ) : (
        <Flex align="center">
          <Link className="link-dark-red mr-8">Products</Link>
          <Link className="link-dark-red mr-8">Solutions</Link>
          <Link className="link-dark-red mr-8">Pricing</Link>
          <Link className="link-dark-red mr-8">Resources</Link>
          <Link className="link-dark-red mr-8">Log In</Link>
          <Button className="btn-outline btn-dark-red">Sign up now</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
