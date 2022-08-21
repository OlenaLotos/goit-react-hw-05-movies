import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px;
  font-size: 16px;
  width: 100px;
  margin-left: 12px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  &:hover {
    background-color: #806d8c;
    border-radius: 4px;
    color: #310649;
  }
`;
export const Form = styled.form`
  position: absolute;
  border-top: none;
  display: flex;
  width: 100%;
  padding-left: 20px;
  margin-top: 10px;
  color: white;
`;

export const MovieCont = styled.div`
  background-color: grey;
  width: 100%;
`;

export const Input = styled.input`
  background-color: transparent;
  border-top: none;
`;
