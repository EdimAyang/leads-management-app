import styled from "styled-components";
import { FilterValues } from "@/pages/leads";

type Props = {
  initialValues: FilterValues;

  onChange: (key: keyof FilterValues, value?: string) => void;

  onReset: () => void;

  onClose: () => void;
};

const FilterPopover = ({
  onClose,
  onChange,
  onReset,
  initialValues,
}: Props) => {
 

  return (
    <Container>
      <Heading>Filters</Heading>

      <Field>
        <Label>Category</Label>

        <Select
          value={initialValues.category ?? ""}
          onChange={(e) => {
            onChange("category", e.target.value || undefined)
            onClose()
          }}
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
          value={initialValues.status ?? ""}
          onChange={(e) => {
            onChange("status", e.target.value || undefined)
            onClose()
          }}
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
          value={initialValues.staffName ?? ""}
          onChange={(e) =>{
            onChange("staffName", e.target.value || undefined)
            onClose()
          }}
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
          value={initialValues.location ?? ""}
          onChange={(e) => {
            onChange("location", e.target.value || undefined)
            onClose()
          }}
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
            onChange("category", undefined);
            onChange("status", undefined);
            onChange("staffName", undefined);
            onChange("location", undefined);

            onReset();

            onClose();
          }}
        >
          Reset
        </SecondaryButton>
      </Footer>
    </Container>
  );
};

export default FilterPopover;

export const Container = styled.div`
  position: absolute;

  top: calc(100% + 8px);
  left: 0;

  width: 280px;

  max-height: calc(100vh - 180px);

  overflow-y: auto;

  padding: 16px;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  z-index: 1000;
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
