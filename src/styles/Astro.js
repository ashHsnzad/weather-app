import styled from "styled-components";
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  max-width: 90vw;
  margin: 1rem 0;
  gap: 1px;
  .astro-title {
    background-color: var(--white);
    padding: 1rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
    h4 {
      text-transform: uppercase;
    }
  }
  .astro {
    background-color: var(--white);
    padding: 0.8rem;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  hr {
    height: 0.8px;
    background-color: var(--grey-300);
    border: none;
    margin-block: 0.9rem;
  }
  .sun,
  .moon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;

    svg {
      font-size: 2rem;
    }
  }
  .sunIcon-duration,
  .moonIcon-phase {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;
  }

  .sunIcon {
    color: #f7cf07;
  }
  .moonIcon {
    color: #0c317a;
  }

  .rise-set {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-left: 1px solid var(--grey-300);
    padding-left: 1.4rem;
    width: 25%;
    height: 100%;
  }
  .rise,
  .set {
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 0.8rem;
    }
  }
`;

export default Wrapper;
