// Hero Section
// Component-Class based

//Import react essentials
import React, { Component } from "react";
//Import self made components
import logo from "../assets/home/Logo.png";
import home1 from "../assets/home/1.png";
import home2 from "../assets/home/2.png";
import home3 from "../assets/home/3.png";
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
    homeImageList: [home1, home2, home3],
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
        style={{
          backgroundImage: `url(${this.state.homeImageList[this.state.image]})`,
          backgroundSize: "100%",
        }}
        className="hero"
      >
        <div className="hero-content">
          <div className="hero-radio">
            <this.Radio id={0} />
            <this.Radio id={1} />
            <this.Radio id={2} />
          </div>
          <div className="hero-text">
            <h1>{this.props.title}</h1>
            <h4 style={{ textAlign: "center" }}>Help with your farm</h4>
          </div>
          <img src={logo} width="200" />
        </div>
      </div>
    );
  }
}
// thanks for viewing the file :)
