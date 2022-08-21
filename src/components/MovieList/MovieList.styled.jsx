import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: #e9def0;
  padding-top: 48px;
  margin: 0;
`;

export const StyleLink = styled(Link)`
  display: block;
  color: black;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    color: #806d8c;
  }
`;

export const Li = styled.li`
  margin-right: 16px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 4px;
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;
