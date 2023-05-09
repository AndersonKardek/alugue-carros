import styled from "styled-components";

interface IProps {
  bgColor?: boolean;
}

export const Button = styled.button<IProps> `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 26px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({bgColor}) => bgColor ? props=>props.theme.colors.primary : "transparent"};
  color: ${({bgColor}) => bgColor ? "white" : props => props.theme.colors.text};
  box-shadow: ${({bgColor}) => bgColor ? "0 2px 4px 0 rgba(0, 0, 0, 0.3)" : "0 0 0 0 rgba(0, 0, 0, 0)"};

  transition: all 400ms ease-in-out;

  &:hover {
    border-radius: 8px;

    color: ${({bgColor}) => bgColor ? "white" : props => props.theme.colors.primary};
  }

  & svg {
    margin-left: 8px;
    font-size: 24px;
  }
`;