import React from "react";
import { CardDeck, ListGroup, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../styles/HomePage.css";

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

const duedates = [
  {
    id: 1,
    title: "Assignment 1",
    className: "Software Engineering",
    author: "Eric Carle",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
  },

  {
    id: 2,
    title: "HW 3",
    className: "Algorithms",
    author: "Giles Andreae",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51qvh4MALwL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "Quiz 5",
    className: "Thermodynamics",
    author: "Craig Smith",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg",
  },
];

const DueDate = (props) => {
  return (
    <div className="dueDate">
      <h2>{props.title}</h2>
      <h4>{props.className}</h4>
    </div>
  );
};

const DueDatesHomePage = () => {
  return (
    <section className="dueDateList">
      <h1>Upcoming Assignments: </h1>
      <ListGroup variant="flush">
        {duedates.map((i) => {
          return (
            <ListGroup.Item>
              <DueDate {...i}></DueDate>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </section>
  );
};

const recentnotes = [
  {
    id: 1,
    lastupdated: "10:21 am",
    title: "Project Notes",
    className: "Software Engineering",
    author: "Eric Carle",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
  },

  {
    id: 2,
    lastupdated: "Yesterday",
    title: "Heap Sort",
    className: "Algorithms",
    author: "Giles Andreae",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51qvh4MALwL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "Magnetism",
    lastupdated: "10/21/20",
    className: "Thermodynamics",
    author: "Craig Smith",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg",
  },
];

const RecentNote = (props) => {
  return (
    <div className="recent-notes-list">
      <h2>{props.title}</h2>
      <h4>{props.className}</h4>
      <h6>{props.lastupdated}</h6>
    </div>
  );
};

const RecentNotesHomePage = () => {
  return (
    <section className="recent-notes">
      <h1>Recent Notes</h1>
      <ListGroup variant="flush">
        {recentnotes.map((i) => {
          return (
            <ListGroup.Item>
              <RecentNote {...i}></RecentNote>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="main-page">
      <CourseListHomePage className="courseList"></CourseListHomePage>
      <Row>
        <Col>
          <RecentNotesHomePage />
        </Col>
        <Col>
          <DueDatesHomePage />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
