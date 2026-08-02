import { FileSearch } from "lucide-react";
import styled from "styled-components";


const EmptyTable = () => {
  return (
    <Container>
      <Icon>
        <FileSearch size={42} />
      </Icon>

      <Text>No leads found</Text>

      <Description>
        Start by creating your first lead.
      </Description>
    </Container>
  );
};

export default EmptyTable;



export const Container = styled.div`
  min-height: 350px;

  border-radius: 16px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 16px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.h3`
  font-size: 1.3rem;

  font-weight: 600;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;