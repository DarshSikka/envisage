import React from "react";
import rightarrow from "../assets/right-arrow.svg";
import leftarrow from "../assets/left-arrow.svg";
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
    current: 0,
    cur: this.props.features[0],
  };
  max = 3;
  handleIncrement() {
    this.setState({ current: this.state.current + 1 });
    if (this.state.current >= this.max) {
      this.setState({ current: 0 });
    }
    this.setState({ cur: this.props.features[this.state.current] });
    console.log(this.state.cur);
  }
  handleDecrement() {
    this.setState({ current: this.state.current - 1 });
    if (this.state.current <= 0) {
      this.setState({ current: this.max });
    }
    this.setState({ cur: this.props.features[this.state.current] });
  }

  componentDidMount() {
    window.setInterval(() => this.handleIncrement(), 4000);
  }
  render() {
    return (
      <>
        <div className="customers">
          <h1>What our customers have to say</h1>
          <div className="features">
            <div className="left-arrow" onClick={this.handleDecrement}>
              <i class="fas fa-angle-left"></i>
            </div>
            <div className="feature-text">
              <img src={this.state.cur.image} />
              <h1>{this.state.cur.name}</h1>
              <h2>{this.state.cur.description}</h2>
            </div>
            <div className="right-arrow" onClick={this.handleIncrement}>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Features;
