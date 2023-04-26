import React from "react";
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, ...rest }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading"> {title}</h1>
              </>
            )}
            {rest.children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
