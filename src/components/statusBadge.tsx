import { Status } from "@/types/leads.types";
import styled, { css } from "styled-components";
import { Hotel, UtensilsCrossed, Croissant } from "lucide-react";

type Props = {
  status: Status;
};

export default function StatusBadge({ status }: Props) {
  return <Badge status={status}>{status.replaceAll("_", " ")}</Badge>;
}

const variants = {
  NEW: css`
    background: #eff6ff;
    color: #2563eb;
  `,
  VERIFIED: css`
    background: #ecfdf5;
    color: #16a34a;
  `,
  UNVERIFIED: css`
    background: #f3f4f6;
    color: #6b7280;
  `,
  IN_TALKS: css`
    background: #fff7ed;
    color: #ea580c;
  `,
  FOLLOW_UP: css`
    background: #fefce8;
    color: #ca8a04;
  `,
  CLOSED_DEAL: css`
    background: #faf5ff;
    color: #9333ea;
  `,
  NOT_INTERESTED: css`
    background: #fef2f2;
    color: #dc2626;
  `,
  INACTIVE: css`
    background: #f3f4f6;
    color: #374151;
  `,
};

export const Badge = styled.span<{ status: keyof typeof variants }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 12px;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 600;

  text-transform: capitalize;

  ${({ status }) => variants[status]}
`;



type categoryProps = {
  category: "HOTEL" | "RESTAURANT" | "BAKERY";
};

export function CategoryBadge({ category }: categoryProps) {
  const config = {
    HOTEL: {
      icon: Hotel,
      label: "Hotel",
    },
    RESTAURANT: {
      icon: UtensilsCrossed,
      label: "Restaurant",
    },
    BAKERY: {
      icon: Croissant,
      label: "Bakery",
    },
  };

  const { icon: Icon, label } = config[category];

  return (
    <StyledCategoryBadge>
      <Icon size={14} />
      {label}
    </StyledCategoryBadge>
  );
}

export const StyledCategoryBadge = styled.div`
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 6px 12px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primary}15;

  color: ${({ theme }) => theme.colors.primary};

  font-weight: 600;

  font-size: 13px;
`;
