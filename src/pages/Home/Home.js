import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Card, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";
import "./Home.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { CgLogOff } from "react-icons/cg";
const Home = () => {
  const [allStations, setAllStations] = useState([]);

  useEffect(() => {
    fetch("https://rocky-island-17503.herokuapp.com/allstation")
      .then((res) => res.json())
      .then((data) => setAllStations(data));
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex justify-content-center my-5">
        <Card style={{ width: "18rem" }}>
          <Card.Body className="station-top">
            <IoChevronBackOutline />
            <Card.Title>STATIONS</Card.Title>
            <CgLogOff />
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {allStations.map((allStation, index) => (
                <Accordion>
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                      <span>{allStation.stationName}</span>
                    </Accordion.Header>
                    <Accordion.Body className="station-body">
                      <p>Name: {allStation.stationName}</p>
                      <p>Frequency: {allStation.frequency}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>Runing</Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
