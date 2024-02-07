import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url("/images/bg-header-mobile.svg");
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 560px) {
    background-image: url("/images/bg-header-desktop.svg");
  }
`;
