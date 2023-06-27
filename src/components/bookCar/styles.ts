import styled from "styled-components";

export const WrapperSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  margin-bottom: 3rem;

  form {
    width: 100vw;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    padding: 3.2rem;

    h2 {
      margin-bottom: 1.5rem;
      font-size: 1.7rem;
    }
  }

  .formContent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;

    .btn {
      margin-top: 2.1rem;
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
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  select {
    padding: 1.2rem;
  }
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  input {
    padding: 1.2rem;
  }
`;
