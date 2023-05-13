import styled from "styled-components";

export const WrapperSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10em;
  margin-bottom: 30px;

  form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100vw;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 32px;

    @media (max-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    transition: all 400ms ease-in-out;
  }
`;

export const DropDownDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 6px;
  }
  select {
    padding: 12px;
  }
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .input {
    padding: 12px;
  }
`;
