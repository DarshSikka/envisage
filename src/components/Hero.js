// Hero Section
// Component-Class based

//Import react essentials
import React, { Component } from "react";

//Import self made components
import TypingEffect from "./TypingEffect";
import logo from "../assets/toplogo.svg";

// Setup class
export default class Hero extends Component {
  // Constructor to get props
  constructor(props) {
    super(props);
    this.Radio = this.Radio.bind(this);
  }
  // Handle image function, radio button can call to this
  handleImage(id) {
    return () => {
      this.setState({ image: id });
    };
  }
  // check image function, radio button can call to this
  checkImage(id) {
    return this.state.image === id ? true : false;
  }
  // Set Interval in *window* to change image every 5 seconds(5000 milliseconds)
  componentDidMount() {
    window.setInterval(() => {
      if (this.state.image < 2) {
        this.setState({ image: this.state.image + 1 });
      } else {
        this.setState({ image: 0 });
      }
    }, 5000);
  }

  // configure state, image index and list of images
  state = {
    image: 0,
    homeImageList: [
      "https://i.picsum.photos/id/264/1440/900.jpg?hmac=EOOVXZJpAE8AtwcMoo2LnZFqUF8Mch9zYJOl4J6Lgl0",
      "https://i.picsum.photos/id/180/1440/900.jpg?hmac=bOxux5-Kt4k0MEIfXOxnKnsxwNxJQQkWLt-TPqN4clI",
      "https://i.picsum.photos/id/842/1440/900.jpg?hmac=BV2uI4GP4T5K1KHbNKSx52HGRjOxbkKYrYz71ADbtuo",
    ],
  };
  // Minimal method to render radio input with methods defined earlier
  Radio({ id }) {
    return (
      <input
        type="radio"
        name="img"
        onChange={this.handleImage(id)}
        checked={this.checkImage(id)}
      />
    );
  }
  // render static page
  render() {
    return (
      <div
        className="hero"
        style={{
          background: `url(${this.state.homeImageList[this.state.image]})`,
        }}
      >
        <div className="hero-content">
          <div className="hero-radio">
            <this.Radio id={0} />
            <this.Radio id={1} />
            <this.Radio id={2} />
          </div>
          <div className="hero-text">
            <h1>{this.props.title}</h1>
            <TypingEffect
              words={["abc", "bcd"]}
              style={{ textAlign: "center" }}
            />
          </div>
          <img src={logo} />
        </div>
      </div>
    );
  }
}
// thanks for viewing the file :)
