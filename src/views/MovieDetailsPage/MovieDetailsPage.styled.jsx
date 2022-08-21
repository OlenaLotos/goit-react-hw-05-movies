import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  position: absolute;
  padding: 4px;
  font-size: 16px;
  width: 100px;
  margin-left: 12px;
  margin-bottom: 16px;
  margin-top: 4px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  &:hover {
    background-color: #806d8c;
    border-radius: 4px;
    color: #310649;
  }
`;

export const MovieCont = styled.div`
  display: flex;
  background-color: #e9def0;
  color: black;
`;

export const MovieAbout = styled.div`
  margin-left: 20px;
  margin-top: 16px;
`;

export const MovieGenres = styled.div`
  display: flex;
`;

export const MovieGenresP = styled.p`
  margin-right: 16px;
  font-weight: 400;
  margin-top: 0;
`;
export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
  margin-top: 16px;
  padding-top: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Links = styled.div`
  background-color: #806d8c;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
`;

export const StyleLink = styled(Link)`
  padding-bottom: 12px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 3px solid transparent;

  text-decoration: none;
  list-style: none;
  margin-right: 20px;
  &:active {
    color: #806d8c;
  }
  &:hover {
    cursor: pointer;
    color: #e9def0;
  }
`;

export const Img = styled.img`
  border-radius: 4px;
  margin-left: 20px;
  margin-top: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
