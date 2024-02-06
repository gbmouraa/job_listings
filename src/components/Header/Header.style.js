import styled from "styled-components";
import bgHeaderMobile from "../../assets/images/bg-header-mobile.svg";

export const Head = styled.header`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${bgHeaderMobile});
  background-repeat: no-repeat;
  background-size: cover;
`;
