import styled from "styled-components";
import { motion } from "framer-motion";

export const JobsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4.4rem;
  margin-top: 5rem;
  padding: 0 2rem 6rem 2rem;
`;

export const Job = styled(motion.li)`
  position: relative;
  width: 100%;
  max-width: 106rem;
  list-style-type: none;
  display: flex;
  background-color: #fff;
  padding: 4rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 6px 18px #cae0e0;

  @media screen and (min-width: 1040px) {
    padding: 3rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media screen and (min-width: 1040px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DescriptionArea = styled.div`
  @media screen and (min-width: 1040px) {
    display: flex;
    align-items: center;
    column-gap: 2rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: #ccc;

  @media screen and (min-width: 1040px) {
    display: none;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const HeadDescription = styled.div`
  display: flex;
  align-items: center;
  span:first-child {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    margin-right: 2.4rem;
  }
`;

export const Featured = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 0.4rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

export const Logo = styled.img`
  position: absolute;
  top: -2.5rem;
  left: 2rem;
  width: 5rem;

  @media screen and (min-width: 1040px) {
    position: static;
    width: 9.2rem;
  }
`;

export const Badge = styled.span`
  color: #fff;
  background-color: ${(props) => props.theme.colors[props.backgroundcolor]};
  display: block;
  padding: 0.6rem 1rem 0.3rem;
  border-radius: 1.6rem;
  line-height: 0.9;
  font-size: 1.5rem;
  width: fit-content;
  margin-right: 0.8rem;
`;

export const Details = styled.ul`
  display: flex;
  column-gap: 2.8rem;
  list-style-type: disc;
  color: #959696;

  li:first-child {
    list-style-type: none;
  }
`;

export const Position = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #daeded;
    padding: 0.9rem 0.8rem 0.6rem;
    border-radius: 0.4rem;
    display: block;
    line-height: 0.9;
    height: fit-content;
    transition: all 0.7s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      cursor: pointer;
    }
  }
`;
