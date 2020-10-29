import React from "react";
import { ListGroup } from "react-bootstrap";

import recentnotes from "./recent-notes";
import courses from "./courses-list";

const RecentNote = (props) => {
  const result = courses.find((course) => course.code === props.courseCode);
  return (
    <div className="recent-notes-list" onClick={() => alert("route to note")}>
      <h2>{props.title}</h2>
      <h4 onClick={() => alert("route to course")}>{result.courseName}</h4>
      <h6>{props.lastUpdated}</h6>
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
