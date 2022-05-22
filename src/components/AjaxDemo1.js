import React, { Component } from "react";

export default class AjaxDemo1 extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => console.log(comments));
  }

  render() {
    return <div>AjaxDemo1</div>;
  }
}
