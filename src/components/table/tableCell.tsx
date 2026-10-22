import styled from "styled-components";
import Tooltip from "@/components/ui/Tooltip";

type TableCellTextProps = {
  value: string | number;
};

export function TableCellText({
  value,
}: TableCellTextProps) {
  return (
    <Tooltip content={String(value)}>
      <CellText>{value}</CellText>
    </Tooltip>
  );
}

const CellText = styled.span`
  display: block;

  max-width: 160px;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
`;