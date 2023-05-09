import styled from "styled-components";

interface IProps {
  bgColor?: boolean;
}

export const Button = styled.button<IProps> `
  background-color: ${({bgColor}) => bgColor ? props=>props.theme.colors.primary : "transparent"};
  width: 200px;
  height: 50px;
  color: ${({bgColor}) => bgColor ? "white" : props => props.theme.colors.text};
  font-weight: bold;

  &:hover {
    background-color: darkred;
  }
`;