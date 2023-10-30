import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const SquareSpinner = styled.div<any>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: relative;
  border: 4px solid ${(props) => props.color};
  animation: fulfilling-square-spinner-animation 4000ms infinite ease;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    vertical-align: top;
    display: inline-block;
    background-color: ${(props) => props.color};
    width: 100%;
    opacity: 1;
    animation: fulfilling-square-spinner-inner-animation 4000ms infinite ease-in;
  }

  @keyframes fulfilling-square-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fulfilling-square-spinner-inner-animation {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
`;

const propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  size: 50,
  color: "#fff",
  className: "",
};

const FulfillingSquareSpinner = ({
  size = "",
  color = "",
  className = "",
  ...props
}) => (
  <SquareSpinner
    size={size}
    color={color}
    className={`fulfilling-square-spinner${className ? " " + className : ""}`}
    {...props}
  >
    <div className="spinner-inner" />
  </SquareSpinner>
);

FulfillingSquareSpinner.propTypes = propTypes;
FulfillingSquareSpinner.defaultProps = defaultProps;

export default FulfillingSquareSpinner;
