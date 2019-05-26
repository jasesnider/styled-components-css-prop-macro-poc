import React from "react";
import "styled-components/macro";

const secondaryStyles = `
background-color: #6C757D;
border-color: #6C757D;
color: white;

&:hover {
  background-color: #5A6268;
  border-color: #545B62;

}
`;

const isSecondary = secondary =>
  secondary &&
  `
  background-color: #6C757D;
  border-color: #6C757D;
  color: white;
  
  &:hover {
    background-color: #5A6268;
    border-color: #545B62;
  
  }
  `;

const Button = props => {
  const { label, secondary, onClickHandler } = props;
  return (
    <button css={isSecondary(secondary)} onClick={onClickHandler}>
      {label}
    </button>
  );
};

// const Button = props => {
//   const { label, secondary, onClickHandler } = props;
//   return (
//     <button css={secondary && secondaryStyles} onClick={onClickHandler}>
//       {label}
//     </button>
//   );
// };

// const Button = props => {
//   const { label, secondary, onClickHandler } = props;
//   return (
//     <button
//       css={
//         secondary &&
//         `
//           background-color: #6C757D;
//           border-color: #6C757D;
//           color: white;

//           &:hover {
//             background-color: #5A6268;
//             border-color: #545B62;

//           }
//         `
//       }
//       onClick={onClickHandler}
//     >
//       {label}
//     </button>
//   );
// };

export default Button;
