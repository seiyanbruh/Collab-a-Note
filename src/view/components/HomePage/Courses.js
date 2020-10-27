import React from "react";
import { CardDeck, ListGroup, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Course = (props) => {
  return (
    <Card className="courseCard">
      <Card.Img variant="top" src={props.img} className="courseThumbnail" />
      <Card.Body>
        <Card.Title className="card-title">{props.Name}</Card.Title>
        <Card.Subtitle className="card-subtitle">{props.prof}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

const courses = [
  {
    id: 1,
    Name: "Software Engineering",
    prof: "Dr. Zhang",
    img:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    id: 2,
    Name: "Algorithms",
    prof: "Dr. Kramer",
    img:
      "https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200",
  },
  {
    id: 3,
    Name: "Thermodynamics",
    prof: "Dr. Crescimanno",
    img:
      "https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg",
  },
];

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
