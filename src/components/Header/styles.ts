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

  .logoWrapper {
    display: flex;
    align-items: center;
    img {
      width: 5rem;
      margin-right: 6px;
    }
  }

  .buttons {
    display: flex;
    gap: 16px;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  .hambMenu {
    z-index: 5;
  }

  .showMobile {
    display: none;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  .mobileNav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffff;
  }

  .linkMobile {
    margin-top: 13px;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  & svg {
    font-size: 1.7em;
    z-index: 5;
    cursor: pointer;

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

export const ListStyle = styled.ul`
  display: flex;
  list-style: none;

  .link {
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

  @media (max-width: 1200px) {
    display: none;
  }
`;
