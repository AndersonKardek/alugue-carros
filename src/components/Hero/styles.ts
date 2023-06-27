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
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 3.7rem;
    margin-bottom: 2rem;

    strong {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;

    .link {
      display: flex;
      justify-content: "space-between";
      align-items: center;
      padding: 1.6rem;
      width: 17rem;
      border-radius: 0.4rem;
      font-size: 1.6rem;
      font-weight: bold;
      background-color: ${(props) => props.theme.colors.primary};
      color: #ffff;

      transition: all 400ms ease-in-out;

      &:hover {
        border-radius: 1.6rem;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.3);

        color: ${(props) => props.theme.colors.secundary};
      }

      & svg {
        display: flex;
        text-align: end;
        margin-left: 0.8rem;
        font-size: 2.4rem;
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
