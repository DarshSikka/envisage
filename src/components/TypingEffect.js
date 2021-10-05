// Typing Effect Component
// Component- Class Based

// Import react essentials
import React from "react";

//Setup class component
class TypingEffect extends React.Component {
  // Constructor to receive props
  constructor(props) {
    super(props);
    this.props = props;
  }
  // Set state variables
  state = {
    currentWord: this.props.words[0],
    currentType: "",
    deleting: false,
    currentWordIndex: 0,
  };

  // Set 0.4 second(400 millisecond) interval when component mounts
  componentDidMount() {
    window.setInterval(() => {
      // Case- if word needs to be changed, as it just deleted the previous word
      if (this.state.deleting && this.state.currentType === "") {
        this.setState({ deleting: false });
        this.setState({
          currentWordIndex: this.state.currentWordIndex === 0 ? 1 : 0,
        });
        this.setState({
          currentWord: this.props.words[this.state.currentWordIndex],
        });
        console.log(this.state.currentWord);
      }

      // Case- if typing needs to be stopped, deleting needs to be started, as word has already been typed
      if (
        this.state.currentType === this.state.currentWord &&
        !this.state.deleting
      ) {
        this.setState({ deleting: true });
      }
      // Case- if it has to continue typing
      else if (this.state.deleting === false) {
        this.setState({
          currentType:
            this.state.currentType +
            this.state.currentWord[this.state.currentType.length],
        });
      }
      // If text needs to be deleted
      else if (this.state.deleting) {
        this.setState({
          currentType: this.state.currentType.replace(
            this.state.currentType[this.state.currentType.length - 1],
            ""
          ),
        });
      }
    }, 400);
  }
  // Render typing effect
  render() {
    return <div style={this.props.style}> &nbsp;{this.state.currentType}</div>;
  }
}

export default TypingEffect;
