import styled from "styled-components";
const WrapperGeneralError = styled.section`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: normal;
  justify-content: center;
  margin-top: 6rem;

  img {
    width: 80vw;
    max-width: 450px;
    display: block;
    margin-top: 2rem;
  }
  h3 {
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-800);
    text-transform: capitalize;
    text-decoration: underline;
    &:hover {
      color: var(--primary-600);
    }
  }
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
`;

export default WrapperGeneralError;
