import { LeadStatus } from "@/types/leads.types";
import { StatusCard } from "@/components/upsateStatusModal/StatusCard";
import styled from "styled-components";

const statuses: LeadStatus[] = [
  "NEW",
  "VERIFIED",
  "UNVERIFIED",
  "IN_TALKS",
  "FOLLOW_UP",
  "CLOSED_DEAL",
  "NOT_INTERESTED",
  "INACTIVE",
];

type StatusSelectorProps = {
  value: LeadStatus;
  onChange: (status: LeadStatus) => void;
};

export const StatusSelector = ({ value, onChange }: StatusSelectorProps) => {
  return (
    <Container>
      {statuses.map((status) => (
        <StatusCard
          key={status}
          status={status}
          selected={value === status}
          onClick={() => onChange(status)}
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
