import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

export default function Header() {
  return (
    <>
      <MDBNavbar dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Weather Forecast App</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
