import styled from "styled-components";
const CarouselWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 1px;

  .hourly-title {
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    padding: 1rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  button {
    border: none;
    color: white;
    background-color: var(--grey-400);
    width: 2rem;
    font-size: 1.1rem;

    cursor: pointer;
    &:disabled {
      background-color: var(--grey-200);
    }
  }

  .carousel {
    display: grid;
    grid-template-columns: auto 1fr auto;
    background-color: var(--white);
    overflow: hidden;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .hourly-data {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.3rem;
  }
  .each-hour {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .temp {
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.3rem;
  }
  .precipitation {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  }
`;
export default CarouselWrapper;
