import styled from "styled-components";
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  .drop-down {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10000;
    display: flex;
    flex-direction: column;
  }
  .ip-location {
    background-color: white;
    height: 3rem;
    border-top: 2px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: var(--fixed-width);
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    h4 {
      margin-left: 0.7rem;
    }
    &:hover {
      background-color: var(--grey-100);
    }
  }
  .ip-location.no-radius {
    border-radius: 0;
    
  }

  .active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .auto-complete {
  }
`;
export default Wrapper;
