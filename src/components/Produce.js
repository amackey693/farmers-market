import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  let allProduce = props.selection;
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <ul>
        {allProduce.map(produce => (
          <li>
            {produce}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default Produce;