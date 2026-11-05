import styled from "styled-components";

const WrapperNavbar = styled.nav`
  background-color: var(--matte-black);
  color: var(--white);
  display: flex;
  justify-content: center;
  height: 5rem;
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .logo-img {
    height: 1rem;
  }
  .logo {
    font-size: 1.3rem;
  }
  .menu-btn {
    display: none;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    gap: 1rem;
    cursor: pointer;
  }

  .nav-links a:hover {
    color: var(--primary-500);
  }
  .nav-links a.active {
    color: var(--primary-400);
  }

  a {
    color: white;
  }

  @media screen and (max-width: 768px) {
    .menu-btn {
      display: block;
    }
    .nav-links {
      display: none;
    }
  }
`;
export default WrapperNavbar;
