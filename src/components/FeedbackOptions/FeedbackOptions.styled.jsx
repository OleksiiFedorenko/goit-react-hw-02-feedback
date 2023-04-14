import styled from 'styled-components';

export const Options = styled.ul`
  display: flex;
  gap: 10px;

  margin: 0;
  padding: 0;
  margin-left: 10px;

  list-style: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  background-color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &.good:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-4px);
  }

  &.neutral:hover {
    background-color: #d2d4d3;
    box-shadow: 0px 15px 20px rgba(220, 221, 221, 0.4);
    color: #fff;
    transform: translateY(-4px);
  }

  &.bad:hover {
    background-color: #e52e2e;
    box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
    color: #fff;
    transform: translateY(-4px);
  }
`;
