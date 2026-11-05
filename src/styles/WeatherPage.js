import { HiH3 } from "react-icons/hi2";
import styled from "styled-components";
const WrapperWeatherPage = styled.article`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: 0 auto 3rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .map-container {
    width: var(--fixed-width);
    max-width: 90vw;
    margin: 1rem 0;
    border-radius: var(--borderRadius);
    background-color: var(--white);
  }
  .map-title {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .map {
    width: 100%;
    height: 355px;
  }
  .leaflet-container {
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
`;

export default WrapperWeatherPage;
