import styled from "styled-components";
const Wrapper = styled.main`
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 2rem;
  .further-ahead div {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    height: 1px;
    background-color: var(--grey-400);
    border: none;
  }
`;
export default Wrapper;
