import styled from "styled-components";

export const Input = styled.div`
  display: flex;
	flex-direction: column;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 5px;
`;

export const Value = styled.div`
  input {
    display: inline-block;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: auto;
    padding: 8px;

  }
`;