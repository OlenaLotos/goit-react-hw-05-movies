import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleLink = styled(NavLink)`
  padding-bottom: 12px;
  color: #310649;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  list-style: none;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    color: #09010e;
  }
`;

export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  margin: 0;
  padding-top: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: #806d8c;
`;
