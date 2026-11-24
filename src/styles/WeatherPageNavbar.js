import styled from "styled-components";
const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top-navbar {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100vw;
    background-color: black;
    color: white;
    height: 4rem;
    /* position: relative; */
    h4 {
      color: white;
    }
  }
  .top-nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--fixed-width);
    max-width: 90vw;
    display: flex;
  }
  .left-side {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .right-side {
    display: flex;
    align-items: center;
    width: 300px;
  }
  .auto-complete {
    width: 300px;
    /* margin-top: 1rem; */

    position: fixed;
    top: 2.9rem;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    img {
      height: 1.6rem;
    }
  }

  .summary {
    margin-left: 10px;
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      height: 2rem;
    }
  }

  .reports {
    width: var(--fixed-width);
    margin: 0 1.9rem;
    display: flex;
    justify-content: start;
    gap: 4rem;
    height: 3rem;
    border-bottom: 1px solid var(--grey-400);
    max-width: 90vw;
    a {
      text-decoration: none;
      color: var(--grey-700);

      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        color: black;
        border-bottom: 1px solid red;
      }
    }
  }

  h5 {
    text-transform: uppercase;
  }
`;

export default Wrapper;
