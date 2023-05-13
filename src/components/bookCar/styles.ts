import styled from "styled-components";

export const WrapperSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15em;
  margin-bottom: 30px;

  form {
    width: 100vw;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 32px;

    h2 {
      margin-bottom: 1.5em;
      font-size: 1.7em;
    }
  }

  .formContent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    .btn {
      margin-top: 21px;
    }

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

  input {
    padding: 12px;
  }
`;
