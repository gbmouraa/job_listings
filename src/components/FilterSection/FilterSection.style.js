import styled from "styled-components";
import { motion } from "framer-motion";

export const FiltersWrapper = styled(motion.div)`
  width: 100%;
  max-width: 106rem;
  background-color: #fff;
  box-shadow: 0px 6px 18px #cae0e0;
  border-radius: 0.5rem;
  padding: 2.8rem 4rem;
  display: flex;
  align-items: center;
  margin-top: -9rem;
  flex-wrap: wrap;
  row-gap: 2rem;
`;

export const FiltersArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.lightCyan};
  width: fit-content;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 1.5rem;
  margin-right: 1.2rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0 0.8rem;
  }
`;

export const DeleteButton = styled.button`
  width: 2.8rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};

  img {
    width: 1.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerCyan};
  }
`;

export const ClearAllButton = styled.button`
  margin-left: auto;
  font-size: 1.6rem;
  font-weight: 700;
  color: #959696;
  background-color: transparent;
  transform: translateY(0.3rem);

  div {
    width: 0;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.4s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    div {
      width: 100%;
    }
  }
`;
