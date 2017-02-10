import React, { Component } from 'react';

const Cell = props =>
  <rect
    className={props.status}
    x={props.x}
    y={props.y}
    height={props.height}
    width={props.width}
  />;

Cell.propTypes = {
  status: React.PropTypes.string.isRequired,
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired };

export default Cell;

