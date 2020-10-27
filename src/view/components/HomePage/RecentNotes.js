import React from "react";
import { CardDeck, ListGroup, Row, Col } from "react-bootstrap";

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

export default RecentNotesHomePage;
