import React from "react";
import { CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import courses from "./courses-list";

const Course = (props) => {
  return (
    <Card
      className="courseCard"
      onClick={() => alert("Should route to course")}
    >
      <Card.Img variant="top" src={props.img} className="courseThumbnail" />
      <Card.Body>
        <Card.Title className="card-title">{props.courseName}</Card.Title>
        <Card.Subtitle className="card-subtitle">{props.prof}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

const CourseListHomePage = () => {
  return (
    <CardDeck className="courseCardDeck">
      {courses.map((course) => {
        return <Course {...course}></Course>;
      })}
    </CardDeck>
  );
};

export default CourseListHomePage;
