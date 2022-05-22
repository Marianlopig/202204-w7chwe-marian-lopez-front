import styled from "styled-components";

export const UserListStyles = styled.div`
  .maincontainer {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 90px;
    margin: 0 auto;
    padding: 40px 0;
  }
`;
