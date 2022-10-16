import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  border: 1px solid teal;
  border-radius: 20px;
  h3 {
    color: teal;
  }
  button {
    border-radius: 0 0 20px 20px;
    height: 5rem;
  }
  button:hover {
    background-color: lightgray;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
`;
