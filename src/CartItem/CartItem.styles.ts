import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid teal;
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    button {
      width: 1rem;
    }
  }
  img {
    max-width: 150px;
    object-fit: cover;
    margin-left: 30px;
  }
`;
