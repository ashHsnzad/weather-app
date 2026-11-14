import styled from "styled-components";
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 1px;

  /* .daily-forecast {
    display: flex;
    flex-direction: column;
    gap: 1px;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    overflow: hidden;
  } */
  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    width: 100%;
    padding: 0.3rem 1rem;
    /* padding-left: 0; */
  }
  .date {
    width: 35%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    gap: 3px;
    h4 {
      font-weight: 700;
    }
  }
  .overall {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
    }
  }
  .high-low {
    small {
      font-size: 0.6rem;
    }
    h3 {
      font-weight: 700;
    }
  }

  .precipitation {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }
    img {
      width: 30px;
    }
  }
`;
export default Wrapper;
