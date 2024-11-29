import styled, { css } from "styled-components";

export const Toast = styled.div`
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  margin: 2.4rem;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.RED};
  `};
`;
