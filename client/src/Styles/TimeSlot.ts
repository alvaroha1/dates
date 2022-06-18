import styled from "styled-components";

export const ButtonDiv = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 18px 12px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #0e1012;
    border-color: #0e1012;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonDivSelected = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 18px 12px;
  color: #0e1012;
    border-color: #0e1012;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonDivDisabled = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 18px 12px;
  padding: 8px;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4
`;

export const BoxSelected = styled.div`
  border: 1px solid black;
`;

