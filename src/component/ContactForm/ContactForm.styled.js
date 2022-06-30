import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: inherit;
    justify-content: space-around;
  }
`;
export const Span = styled.span`
  font-size: 12px;
  color: grey;
`;
export const Form = styled.form`
  margin-top: 15px;
  font-size: 18px;
`;
export const Label = styled.label`
  display: block;
  margin-top: 4px;
  margin-bottom: 4px;
`;
export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  border-radius: 4px;
`;
export const Button = styled.button`
  display: block;
  margin: 0 auto 16px;
  background-color: rgb(53, 64, 95);
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 8px 14px 6px;
  text-transform: uppercase;
  border-radius: 5px;
  &:hover {
    background-color: rgb(0, 60, 255);
  }
  svg {
    margin-right: 10px;
    vertical-align: middle;
    padding-bottom: 4px;
  }
`;
