import styled from "styled-components";
const WrapperSidebar = styled.aside`
  &.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
  }
  &.show-sidebar {
    opacity: 1;
    visibility: visible;
    background-color: var(--white);
  }

  .sidebar-container {
    padding: 2rem 0;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    margin-bottom: 0.8rem;
    padding-left: 1rem;
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
  .aside-close-btn {
    border: none;
    cursor: pointer;
    background: transparent;
    font-size: 2rem;
    position: absolute;
    right: 1rem;
    display: flex;
    align-items: end;
  }

  h4 {
    margin: 0.5rem 1rem;
  }

  hr {
    opacity: 0.4;
  }

  a {
    color: var(--black);
  }
  .sidebar-links a:hover {
    color: var(--primary-500);
  }
  .sidebar-links a.active {
    color: var(--primary-300);
  }
  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    margin: 0.5rem 1rem;
  }

  @media (min-width: 768px) {
    &.show-sidebar {
      display: none;
    }
  }
`;

export default WrapperSidebar;
