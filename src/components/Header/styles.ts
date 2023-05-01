import styled from "styled-components";

export const Container = styled.nav`
  height: 100px;
  background-color: ${(props) => props.theme.colors.background};
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 10rem;

  div {
    display: flex;
    align-items: center;
    img {
      width: 5rem;
      margin-right: 6px;
    }
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
