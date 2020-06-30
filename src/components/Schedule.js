import React from "react";
import PropTypes from "prop-types";

function Schedule(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p>{props.location} at booth {props.booth}</p>
      <p>Hours: {props.hours}</p>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default Schedule;