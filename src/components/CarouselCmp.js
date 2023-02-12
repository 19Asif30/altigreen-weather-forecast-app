import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { MyContext } from "./AppContext";
import Table from "./Table";

function CarouselCmp() {
  const { futureWeather } = useContext(MyContext);
  return (
    <Carousel
      variant="dark"
      controls={false}
      wrap={true}
      slide={true}
      style={{ backgroundColor: "green", padding: "20px" }}
    >
      {Object.keys(futureWeather).map((item) => (
        <Carousel.Item>
          <h1 style={{ color: "#64050F" }}>Forecast on {item}</h1>
          <Table arr={futureWeather[item]} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselCmp;
