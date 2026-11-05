import styled from "styled-components";

const Wrapper_CurrentWeather = styled.section`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 1px;
  .current-title {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 1rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .current-summary {
    display: flex;
    height: 14rem;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 1rem;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .temps-icon-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    padding-bottom: 2rem;
    gap: 0.5rem;
  }
  .temps-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-bottom: 2rem;
  }
  .description h4 {
    margin-left: 10px;
  }
  .wind-aqi {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 50%;
    height: 80%;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.2rem 0;
      border-bottom: 0.2px solid var(--grey-200);
      margin: 0;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export default Wrapper_CurrentWeather;
