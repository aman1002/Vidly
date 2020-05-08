import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart clickable";
    if (!this.props.liked) classes = "fa fa-heart-o clickable";
    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
