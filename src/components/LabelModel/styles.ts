import styled from "styled-components";

export const LabelStyles = styled.label<React.FC>`
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  span {
    margin-left: 0.4rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.primary};
  }
  & svg {
    margin-right: 0.8rem;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;
