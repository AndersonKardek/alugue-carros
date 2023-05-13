import styled from "styled-components";

export const ImgBgHero = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const ImgCarHero = styled.img`
  width: 100%;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  /* margin-top: 10em; */
  height: 75vh;

  h5 {
    font-size: 1.8em;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 3em;
    margin-bottom: 20px;

    strong {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  span {
    font-size: 1.2em;
    font-weight: 600;
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .link {
      display: flex;
      justify-content: "space-between";
      align-items: center;
      padding: 16px;
      width: 12em;
      border-radius: 4px;
      font-size: 1em;
      font-weight: bold;
      background-color: ${(props) => props.theme.colors.primary};
      color: #ffff;

      transition: all 400ms ease-in-out;

      &:hover {
        border-radius: 16px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.3);

        color: ${(props) => props.theme.colors.secundary};
      }

      & svg {
        display: flex;
        text-align: end;
        margin-left: 8px;
        font-size: 24px;
      }

      @media (max-width: 500px) {
        justify-content: space-between;
        width: 100%;
      }
    }
  }
  @media (max-width: 800px) {
    text-align: center;
  }
`;
