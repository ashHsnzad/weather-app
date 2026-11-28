import styled from "styled-components";
const Wrapper = styled.div`
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);
  background-color: white;
  box-shadow: var(--shadow-2);
  position: relative;
  left: 0;
  /* margin-top: 3rem; */
  width: 100%;

  .place-info {
    border-bottom: 1px solid var(--grey-100);
    padding: 10px;
    &:hover {
      background-color: var(--grey-100);
    }
    h3 {
      font-weight: 700;
      color: var(--grey-600);
      margin-bottom: 5px;
    }
    h4 {
      margin-bottom: 0;
    }
  }
  :last-child div {
    border-bottom: none;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
`;

export default Wrapper;
