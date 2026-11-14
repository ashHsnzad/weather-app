import styled from "styled-components";
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  cursor: pointer;
  border-radius: 3px;

  .hour-summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 10px;
  }

  .left-side {
    display: flex;
    align-items: center;
    h4 {
      font-weight: 700;
    }
    img {
      width: 40px;
      margin-left: 10px;
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
  }
  .rain-button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    button {
      border: none;
      background-color: transparent;
      padding-top: 2px;
      cursor: pointer;
    }
  }
  .rain {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 3rem;
  }
  .condition-text {
    margin-bottom: 2rem;
  }

  .each-two-sells {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .each-sell {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--grey-300);
    sup,
    small {
      font-size: 7px;
    }
  }
  .last-one {
    border-bottom: none;
  }

  .accordion :last-of-type div {
    border-bottom: none;
  }
`;

export default Wrapper;
