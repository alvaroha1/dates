import styled from "styled-components";

export const Item = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 12px 12px 20px 12px;
  height: 40px;
  width: 80%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 32%;
  overflow: auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const List = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 12px 12px 12px 12px;
  width: 80%;
  padding: 8px;
  text-align: center;
  max-height: 60vh;
  overflow: auto;
`;
