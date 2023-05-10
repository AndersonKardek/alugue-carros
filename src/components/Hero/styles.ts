import styled from "styled-components";

export const ImgBgHero = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const ImgCarHero = styled.img`
  width: 65%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-top: 10em;

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
    gap: 16px;
  }
`;
