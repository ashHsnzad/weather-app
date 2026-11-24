import styled from "styled-components";
const WrapperLandingPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: var(--fixed-width);
  margin: 3rem auto;
  gap: 0.5rem;
  position: relative;
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  .carts-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .recent-locations {
    /* position: fixed; */
    top: 15rem;
  }
  .opaque {
    opacity: 50%;
  }
  .map {
    width: 500px;
    max-width: 90vw;
    height: 400px;
  }
  .form {
    border-radius: 6px;
    input {
      background-color: var(--white);
    }
  }
  .auto-complete {
    width: auto;
    margin-top: 1rem;
    border-radius: 5px;
    z-index: 10;
  }
`;
export default WrapperLandingPage;
