import styled from 'styled-components';

export const Img = styled.img`
  height: auto;
  width: 112px;
  border-radius: 4px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #e9def0;
  margin-top: 4px;
`;

export const List = styled.li`
  margin-right: 16px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const Title = styled.p`
  color: #c880f4;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
`;

export const Character = styled.p`
  color: #806d8c;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
`;
