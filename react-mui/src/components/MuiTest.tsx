import { css, SerializedStyles } from "@emotion/react";

const divStyle: SerializedStyles = css`
  background-color: hotpink;
  font-size: 124px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

export const MuiTest = () => {
  return <div css={divStyle}>Test111</div>;
};
