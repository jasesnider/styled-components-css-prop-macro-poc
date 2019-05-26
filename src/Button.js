import React from "react";
import "styled-components/macro";

const Button = props => {
  const { label, secondary, onClickHandler } = props;
  return (
    <button
      css={
        secondary &&
        `
          color: papayawhip;
          background: palevioletred;
        `
      }
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Button;
