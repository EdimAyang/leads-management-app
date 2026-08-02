import { useState } from "react";
import styled from "styled-components";
import { FilterValues } from "@/pages/leads";

type Props = {
  initialValues: FilterValues;

  onApply: (filters: FilterValues) => void;

  onReset: () => void;

  onClose: () => void;
};

const FilterPopover = ({ onClose, onApply, onReset, initialValues }: Props) => {
  const [filters, setFilters] = useState(initialValues);
  return (
    <Container>
      <Heading>Filters</Heading>

      <Field>
        <Label>Category</Label>

        <Select
          value={filters.category ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              category: e.target.value || undefined,
            }))
          }
        >
          <option value="">All Categories</option>
          <option value="HOTEL">Hotel</option>
          <option value="RESTAURANT">Restaurant</option>
          <option value="BAKERY">Bakery</option>
        </Select>
      </Field>

      <Field>
        <Label>Status</Label>

        <Select
          value={filters.status ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              status: e.target.value || undefined,
            }))
          }
        >
          <option value="">All Statuses</option>
          <option value="NEW">New</option>
          <option value="VERIFIED">Verified</option>
          <option value="UNVERIFIED">Unverified</option>
          <option value="IN_TALKS">In Talks</option>
          <option value="FOLLOW_UP">Follow Up</option>
          <option value="CLOSED_DEAL">Closed Deal</option>
          <option value="NOT_INTERESTED">Not Interested</option>
          <option value="INACTIVE">Inactive</option>
        </Select>
      </Field>

      <Field>
        <Label>Staff</Label>

        <Select
          value={filters.staffName ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              staffName: e.target.value || undefined,
            }))
          }
        >
          <option value="">All Staff</option>

          {/* Replace these with your API response later */}
          <option value="Wole">Wole</option>
          <option value="Obina">Obina</option>
          <option value="Ose">Ose</option>
          <option value="Betty">Betty</option>
        </Select>
      </Field>

      <Field>
        <Label>Location</Label>

        <Select
          value={filters.location ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              location: e.target.value || undefined,
            }))
          }
        >
          <option value="">All Locations</option>

          {/* Replace these with your API response later */}
          <option value="Sapele Road">Sapele Road</option>
          <option value="GRA">GRA</option>
          <option value="Ugbowo">Ugbowo</option>
          <option value="Upper mission road">Upper mission road</option>
          <option value="Airport Road">Airport Road</option>
          <option value="Ekewan road">Ekewan road</option>
          <option value="Adesuwa">Adesuwa</option>
          <option value="Oluku">Oluku</option>
        </Select>
      </Field>

      <Footer>
        <SecondaryButton
          onClick={() => {
            setFilters({});

            onReset();

            onClose();
          }}
        >
          Reset
        </SecondaryButton>

        <PrimaryButton
          onClick={() => {
            onApply(filters);

            onClose();
          }}
        >
          Apply Filters
        </PrimaryButton>
      </Footer>
    </Container>
  );
};

export default FilterPopover;

export const Container = styled.div`
  position: absolute;

  top: calc(100% + 12px);

  left: 0;

  width: 340px;

  padding: 20px;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

  z-index: 100;
`;

export const Heading = styled.h3`
  margin-bottom: 20px;
`;

export const Field = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;

  margin-bottom: 18px;
`;

export const Label = styled.label`
  font-size: 14px;

  font-weight: 600;
`;

export const Select = styled.select`
  height: 44px;

  padding: 0 12px;

  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 12px;

  margin-top: 24px;
`;

export const SecondaryButton = styled.button`
  padding: 10px 16px;

  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: transparent;

  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  padding: 10px 18px;

  border: none;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  cursor: pointer;
`;
