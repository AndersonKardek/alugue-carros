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
  padding: 1.6rem;
  width: 16rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: ${({ secundary }) =>
    secundary
      ? (props) => props.theme.colors.secundary
      : (props) => props.theme.colors.primary};
  color: #ffff;

  transition: all 400ms ease-in-out;

  &:hover {
    border-radius: 1.6rem;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.3);

    color: ${({ secundary }) =>
      secundary
        ? (props) => props.theme.colors.primary
        : (props) => props.theme.colors.secundary};
  }

  & svg {
    display: flex;
    align-items: end;
    margin-left: 0.8rem;
    font-size: 2.4rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
