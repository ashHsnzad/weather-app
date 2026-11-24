import styled from "styled-components";
const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  z-index: 10;
  background-color: white;
  box-shadow: var(--shadow-2);

  .place-info {
    border-bottom: 1px solid var(--grey-300);
    padding: 10px;
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
  }
`;

export default Wrapper;
