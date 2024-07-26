import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useDevice } from "../hooks/useDevice";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { isMobile } = useDevice();

  return (
    <div
      style={{ overflowX: "hidden" }}
      className={isMobile ? "app-bg--mobile" : "app-bg"}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
