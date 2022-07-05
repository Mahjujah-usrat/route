import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1>Welcome to Routing!!!</h1>
            {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/countries">Countries</Link>
            <Link to="/about">About</Link>
          </nav> */}
            <hr />
            <div className="box">
              <div className="box1">
                <button>
                  <Link to="/">Home</Link>
                </button>
              </div>
              <div className="box2">
                <button>
                  <Link to="/friends">Friends</Link>
                </button>
              </div>

              <div className="box4">
                <button>
                  {" "}
                  <Link to="/countries">Countries</Link>
                </button>
              </div>
              <button>
                {" "}
                <Link to="/about">About</Link>
              </button>
              <div className="box3">
                <button>
                  <Link to="/posts">Posts</Link>
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Header;
