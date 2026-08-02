import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <Fab onClick={() => navigate("/leads/new")}>
      <Plus size={26} />
    </Fab>
  );
};

export default FloatingButton;



export const Fab = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    position: fixed;

    right: 24px;

    bottom: 24px;

    width: 60px;

    height: 60px;

    border: none;

    border-radius: 50%;

    justify-content: center;

    align-items: center;

    cursor: pointer;

    color: white;

    background: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);

    z-index: 999;
  }
`;