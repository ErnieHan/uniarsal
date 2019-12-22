import styled from "styled-components";

export const Content = styled.div`
  max-width: 1280px;
  margin: 35px auto;
`;

export const BoxContent = styled.div`
  width: calc(25% - 1rem);
  border: 2px solid #ffc75e;
  border-radius: 5px;
  background: #394955;
  position: relative;
  margin-right: 1rem;
  margin-bottom: 2rem;
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
