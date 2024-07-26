import "./style.css";
import Hero from "../../modules/home/hero";
import Product from "../../modules/home/product";
import Registration from "../../modules/home/registration";
import Feedback from "../../modules/home/feedback";
import Collection from "../../modules/home/collection";
import Chart from "../../modules/home/chart";
import Article from "../../modules/home/article";
import Event from "../../modules/home/event";

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
