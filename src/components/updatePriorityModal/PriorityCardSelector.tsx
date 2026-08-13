import { Priority } from "@/types/leads.types";
import { PriorityCard } from "./priorityCard";
import styled from "styled-components";

const priorities: Priority[] = ["HIGH", "MEDIUM", "LOW"];

type PrioritySelectorProps = {
  value: Priority;
  onChange: (priority: Priority) => void;
};

export const PrioritySelector = ({
  value,
  onChange,
}: PrioritySelectorProps) => {
  return (
    <Container>
      {priorities.map((priority) => (
        <PriorityCard
          key={priority}
          priority={priority}
          selected={value === priority}
          onClick={() => onChange(priority)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
