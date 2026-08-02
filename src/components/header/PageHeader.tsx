import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const PageHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Left>
        <Title>Leads</Title>

        <Description>
          Manage and track all business leads.
        </Description>
      </Left>

      <Right>
        <AddButton onClick={() => navigate("/leads/new")}>
          <Plus size={18} />

          Add Lead
        </AddButton>
      </Right>
    </Container>
  );
};

export default PageHeader;




export const Container = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  @media (max-width: 768px) {
    align-items: flex-start;

    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;
`;

export const Right = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;

  font-weight: 700;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AddButton = styled.button`
  display: flex;

  align-items: center;

  gap: 10px;

  padding: 12px 20px;

  border: none;

  border-radius: 10px;

  cursor: pointer;

  color: white;

  background: ${({ theme }) => theme.colors.primary};

  transition: 0.25s;

  &:hover {
    opacity: 0.9;
  }
`;