import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const ContentSession = styled.div`
  display: flex;
  flex-flow: column nowrap;

  span {
    display: flex;
    gap: 3px;
  }
`;

export const Spinner = styled(FaSpinner)`
  font-size: 50px;
  color: #007bff;
  animation: spin 1s linear infinite;
  margin-top: 40px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
