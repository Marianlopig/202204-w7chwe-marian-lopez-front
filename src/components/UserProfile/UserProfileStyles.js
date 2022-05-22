import styled from "styled-components";

export const UserProfileStyles = styled.div`
  img {
    width: 200px;
    object-fit: cover;

    -webkit-box-reflect: right -100px linear-gradient(transparent, transparent, #0004);

    transform-origin: center;
    transform: perspective(800px) rotateY(25deg);
    transition: 0.5s;
  }
  .container {
    max-width: 600px;
    max-height: 350px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .container:hover img {
    opacity: 0.3;
  }
  .container img:hover {
    transform: perspective(800px) rotateY(0deg);
    opacity: 1;
  }
`;
