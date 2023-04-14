import styled from 'styled-components';

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatEl = styled.li`
  font-size: 18px;
  font-weight: 500;
  :not(:last-child) {
    margin-bottom: 6px;
  }
`;
