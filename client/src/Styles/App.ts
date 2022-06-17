import styled from "styled-components";

export const Main = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    min-width: 300px;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
