import styled from "styled-components";

interface IProps {
  secundary?: boolean;
  displayIcon?: boolean;
}

export const Button = styled.button<IProps>`
  display: flex;
  justify-content: ${({ displayIcon }) =>
    displayIcon ? "space-between" : "center"};
  align-items: center;
  padding: 16px;
  width: 11em;
  height: 58px;
  border-radius: 4px;
  font-size: 1em;
  font-weight: bold;
  background-color: ${({ secundary }) =>
    secundary
      ? (props) => props.theme.colors.secundary
      : (props) => props.theme.colors.primary};
  color: #ffff;

  transition: all 400ms ease-in-out;

  &:hover {
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.3);

    color: ${({ secundary }) =>
      secundary
        ? (props) => props.theme.colors.primary
        : (props) => props.theme.colors.secundary};
  }

  & svg {
    display: flex;
    align-items: end;
    margin-left: 8px;
    font-size: 24px;
  }
`;
