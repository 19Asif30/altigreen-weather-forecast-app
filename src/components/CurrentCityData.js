import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBListGroup,
  MDBCol,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { MyContext } from "./AppContext";

export default function CurrentCityData() {
  const { currentWeather } = useContext(MyContext);
  return (
    <MDBCard style={{ maxWidth: "1000px", marginTop: "5px" }}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://media.istockphoto.com/id/1357360760/photo/first-snow-covered-autumn-colored-leaves-close-up-selective-focus.jpg?s=612x612&w=0&k=20&c=KY5MdfhzkduPrOAqcHxwDYqTT4PAEx0wSOaf02JRqw0="
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>
              Current weather of {currentWeather.city}
            </MDBCardTitle>
            <MDBCardText>
              It's a bit {currentWeather.weather} in {currentWeather.city} now.
            </MDBCardText>
            <MDBListGroup flush>
              {Object.entries(currentWeather).map((item) => (
                <MDBListGroupItem
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="key-name">{item[0]}</span>
                  <span className="value-name">{item[1]}</span>
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
