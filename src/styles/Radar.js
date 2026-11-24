import styled from "styled-components";
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: 0 auto 3rem;
  justify-content: center;
  /* min-height: 100vh; */
  .map-container {
    width: var(--fixed-width);
    max-width: 90vw;
    margin: 1rem 0;
    border-radius: var(--borderRadius);
    background-color: var(--white);
  }
  .map-title {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    
  }
  .further-ahead div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      text-transform: uppercase;
    }
  }
  hr {
    height: 1px;
    background-color: var(--grey-400);
    border: none;
    margin-block: 0.3rem;
  }
`;
export default Wrapper;
