import styled from "styled-components";
const Wrapper_TodaySummary = styled.section`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 1px;
  img {
    height: 30px;
  }

  .today-title {
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    padding: 1rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .today-high-low {
    background-color: var(--white);
    padding: 1rem;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    div {
      margin: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        margin-left: 1rem;
      }
    }
  }
`;

export default Wrapper_TodaySummary;
