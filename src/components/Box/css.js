import styled from "styled-components";

export const Content = styled.div`
  max-width: 1280px;
  margin: 35px auto;
  @media (max-width: 767px) {
    padding: 135px 15px 15px 15px;
    margin: 0;
  }
`;

export const BoxContent = styled.div`
  width: calc(25% - 1rem);
  border: 2px solid #ffc75e;
  border-radius: 5px;
  background: #394955;
  position: relative;
  margin-right: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Title = styled.div`
  background: ${props => (props.active ? "orangered" : "#40aca3")};
  position: absolute;
  top: -15px;
  left: 20px;
  padding: 0.5rem;
  min-width: 215px;
  text-align: center;
  border: 2px solid orange;
  transform: skew(-15deg);
  border-radius: 5px;
  h3 {
    font-size: 1rem;
    transform: skew(15deg);
  }
`;

export const Body = styled.div`
  padding: 1rem;
  padding-top: 35px;
  line-height: 1.5rem;
`;
