import React, { Component } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

class ParentClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
      salary: 2000,
      title:
        "Performance Testing with normal Class component and function component"
    };
  }

  onIncrementSalary = () => {
    this.setState(preState => {
      return {
        salary: preState.salary * 100,
        title: "Salary Increment Test"
      };
    });
  };

  onIncrementAge = () => {
    this.setState(preState => {
      return {
        age: preState.age + 2,
        title: "Age Increment Test"
      };
    });
  };

  render() {
    return (
      <>
        <Title title={this.state.title} />
        <Count count={this.state.age} title={this.state.title}>
          Age :
        </Count>
        <Button handleClick={this.onIncrementAge}> Increment Age </Button>
        <hr />
        <Count count={this.state.salary} title={this.state.title}>
          Salary :
        </Count>
        <Button handleClick={this.onIncrementSalary}> Increment Salary </Button>
      </>
    );
  }
}

export default ParentClassComponent;
