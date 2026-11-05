import styled from "styled-components";
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 1px;
  .air-quality-title {
    background-color: var(--white);
    padding: 1rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
    h4 {
      text-transform: uppercase;
    }
  }
  .air-quality-container {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    padding: 1rem;
    gap: 1rem;
  }
  .air-quality {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-title {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .quality {
    height: 40px;
    padding-top: 0.5rem;
    h4 {
      margin-right: 0.5rem;
      font-weight: 700;
    }
  }

  .quality-description {
    text-transform: capitalize;
    font-size: 0.8rem;
  }
`;

export default Wrapper;
