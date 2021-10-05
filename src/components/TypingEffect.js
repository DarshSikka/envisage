import React from "react";
class TypingEffect extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    currentWord: this.props.words[0],
    currentType: "",
    deleting: false,
  };
  componentDidMount() {
    window.setInterval(() => {
      if (this.state.deleting && this.state.currentType === "") {
        this.setState({ deleting: false });
      }
      if (
        this.state.currentType === this.state.currentWord &&
        !this.state.deleting
      ) {
        this.setState({ deleting: true });
      } else if (this.state.deleting === false) {
        this.setState({
          currentType:
            this.state.currentType +
            this.state.currentWord[this.state.currentType.length],
        });
      } else if (this.state.deleting) {
        console.log("deleting");
        this.setState({
          currentType: this.state.currentType.replace(
            this.state.currentType[this.state.currentType.length - 1],
            ""
          ),
        });
      }
    }, 400);
  }
  render() {
    return <div>{this.state.currentType}</div>;
  }
}

export default TypingEffect;
