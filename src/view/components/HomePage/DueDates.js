import React from "react";
import { ListGroup } from "react-bootstrap";

import duedates from "./due-dates";
import courses from "./courses-list";

class DueDate extends React.Component {
  constructor(props) {
    super(props);
    this.result = courses.find(
      (courses) => courses.code === this.props.courseCode
    );
  }

  render() {
    return (
      <div className="dueDate" onClick={() => alert("Route to assignment")}>
        <h2>{this.props.title}</h2>
        <h4 onClick={() => alert("route to course")}>
          {this.result.courseName}
        </h4>
      </div>
    );
  }
}

class DueDatesHomePage extends React.Component {
  render() {
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
  }
}

export default DueDatesHomePage;
