import styled from "styled-components";
const WrapperLocationsList = styled.main`
  display: flex;
  justify-content: center;
  margin: 10px auto;

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .result-length p {
    text-align: left;
  }
`;
export default WrapperLocationsList;
