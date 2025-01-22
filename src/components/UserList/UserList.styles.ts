import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FavoriteButtonProps {
  bgColor?: string;
}

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 16px;
  width: 80%;
  height: 100%;
`;

export const FavoriteButon = styled.button<FavoriteButtonProps>`
  padding: 10px 20px;
  background: ${({ bgColor }) => bgColor};
  color: #fff;
  border-radius: 4px;
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

export const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  row-gap: 16px;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  width: 100%;
`;

export const CardContent = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  min-width: 70%;
  gap: 8px;
`;
