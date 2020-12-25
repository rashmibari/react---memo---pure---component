import React, { PureComponent } from "react";
import ButtonMemo from "./ButtonMemo";
import CountMemo from "./CountMemo";
import TitleMemo from "./TitleMemo";

class ParentPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
      salary: 2000,
      title:
        "Performance Testing Parent is PureComponent and Childs are function component so using react memo"
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
        <TitleMemo title={this.state.title} />
        <CountMemo count={this.state.age} title={this.state.title}>
          Age :
        </CountMemo>
        <ButtonMemo handleClick={this.onIncrementAge}>
          {" "}
          Increment Age{" "}
        </ButtonMemo>
        <hr />
        <CountMemo count={this.state.salary} title={this.state.title}>
          Salary :
        </CountMemo>
        <ButtonMemo handleClick={this.onIncrementSalary}>
          {" "}
          Increment Salary{" "}
        </ButtonMemo>
      </>
    );
  }
}

export default ParentPureComponent;
