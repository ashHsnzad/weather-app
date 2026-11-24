import styled from "styled-components";
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: var(--fixed-width);
  background-color: var(--white);
  padding: 1rem 1rem;
  max-width: 90vw;
  margin: 1rem 0;
  gap: 2rem;

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
    width: 100%;

    /* padding-left: 0; */
  }
  .date-overall {
    display: flex;
    justify-content: space-between;
    width: 40%;
    align-items: center;

  }
  .date {
    width: 35%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    gap: 3px;
    h4 {
      font-weight: 600;
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
      font-weight: 600;
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

  h3 {
    font-weight: 600;
  }

  .alert {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--grey-300);
    border-radius: 6px;
    padding: 0.4rem 0.8rem;
    gap: 0.7rem;
    margin-top: 1rem;
  }
  .alert-title {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid var(--grey-200);
    svg {
      color: #bd1c11;
      font-size: 1.4rem;
    }
  }
  .alert-type h5 {
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  .alert-duration {
    margin-bottom: 0.3rem;
  }
  .data-table {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.3rem;
  }

  .data-table div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey-200);
    padding-bottom: 1rem;

    :last-child {
      font-weight: 700;
      text-transform: lowercase;
      small {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .data-table :last-child {
    border: none;
  }
`;
export default Wrapper;
