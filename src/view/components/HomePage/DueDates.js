import React from "react";
import { CardDeck, ListGroup, Row, Col } from "react-bootstrap";

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

export default DueDatesHomePage;
