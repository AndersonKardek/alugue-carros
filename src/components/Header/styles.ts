import styled from "styled-components";

export const Content = styled.nav`
  height: 100px;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 4;

  div {
    display: flex;
    align-items: center;
    img {
      width: 5rem;
      margin-right: 6px;
    }
  }

  .buttons {
    gap: 16px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ListStyle = styled.ul`
  display: flex;
  list-style: none;

  li {
    text-decoration: none;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-weight: bold;
      font-size: 1rem;
      margin: 0px 10px;

      &:hover {
        color: ${(props) => props.theme.colors.primary};

        transition: all 0.4s ease-in-out;
      }
    }
  }
`;

export const Button = styled.button`
  font-size: 1em;
  font-weight: bold;
  padding: 0.25em 1em;
  border: 0px;
  border-radius: 3px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};

    transition: all 0.4s ease-in-out;
  }
`;
