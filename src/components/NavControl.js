import React from "react";
import Home from "./Home";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";

class NavControl extends React.Component {
  // NavStyle() {
  //   const navStyle = {
  //     alignItems: 'center',
  //     textAlign: 'center',
  //   }
  // }
  constructor(props) {
    super(props);
    this.navStyle = {

    };
    this.state = {
      viewVisibleOnPage: "home"
    }
  }

  homeButtonClick = () => {
    this.setState({ viewVisibleOnPage: "home" })
  }

  scheduleButtonClick = () => {
    this.setState({ viewVisibleOnPage: "schedule" })
  }

  produceButtonClick = () => {
    this.setState({ viewVisibleOnPage: "produce" })
  }

  render() {
    let currentlyVisibleView = null;
    let buttonPage1 = null;
    let buttonPage2 = null;
    let buttonText1 = null;
    let buttonText2 = null;
    if (this.state.viewVisibleOnPage === "home") {
      currentlyVisibleView = <Home />
      buttonPage1 = this.scheduleButtonClick;
      buttonText1 = "See Current Schedule";
      buttonPage2 = this.produceButtonClick;
      buttonText2 = "See Current Produce";
    } else if (this.state.viewVisibleOnPage === "schedule") {
      currentlyVisibleView = <ScheduleList />
      buttonPage1 = this.homeButtonClick;
      buttonText1 = "Home";
      buttonPage2 = this.produceButtonClick;
      buttonText2 = "See Current Produce";
    } else if (this.state.viewVisibleOnPage === "produce") {
      currentlyVisibleView = <ProduceList />
      buttonPage1 = this.homeButtonClick;
      buttonText1 = "Home";
      buttonPage2 = this.scheduleButtonClick;
      buttonText2 = "See Current Schedule";
    }
    return (
      <React.Fragment>
        <div style={this.navStyle}>
          <h2>{this.state.viewVisibleOnPage.toUpperCase()}</h2>
          <div className="button-wrapper">
            <button onClick={buttonPage1}>{buttonText1}</button>
            <button onClick={buttonPage2}>{buttonText2}</button>
          </div>
          {currentlyVisibleView}
        </div>
      </React.Fragment>
    )
  }
}

export default NavControl;