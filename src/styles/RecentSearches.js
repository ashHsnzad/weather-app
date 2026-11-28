import styled from "styled-components";

const Wrapper = styled.section`
  background-color: white;
  box-shadow: var(--shadow-2);

  position: relative;
  left: 0;
  width: 100%;
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);

  .recent-search {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--grey-100);
    padding: 10px;
    &:hover {
      background-color: var(--grey-100);
    }
  }
  .location {
    h3 {
      font-weight: 700;
      color: var(--grey-600);
      margin-bottom: 5px;
    }
    h4 {
      margin-bottom: 0;
    }
  }
  img {
    width: 2rem;
  }
  h3 {
    font-weight: 700;
    color: var(--grey-600);
  }
  :last-child div {
    border-bottom: none;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
`;
export default Wrapper;
