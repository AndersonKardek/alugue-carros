import styled from "styled-components";

export const LabelStyles = styled.label<React.FC>`
  display: flex;
  align-items: center;
  font-size: 1em;

  span {
    margin-left: 4px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.primary};
  }
  & svg {
    margin-right: 8px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
