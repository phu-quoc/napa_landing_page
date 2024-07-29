import "./style.css";
import { lazy } from "react";

const Hero = lazy(() => import("../../modules/home/hero"));
const Product = lazy(() => import("../../modules/home/product"));
const Registration = lazy(() => import("../../modules/home/registration"));
const Feedback = lazy(() => import("../../modules/home/feedback"));
const Collection = lazy(() => import("../../modules/home/collection"));
const Chart = lazy(() => import("../../modules/home/chart"));
const Article = lazy(() => import("../../modules/home/article"));
const Event = lazy(() => import("../../modules/home/event"));

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Registration />
      <Feedback />
      <Collection />
      <Chart />
      <Article />
      <Event />
    </>
  );
};

export default Home;
