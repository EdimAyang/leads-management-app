import styled from "styled-components";
import PageHeader from "@/components/header/PageHeader";
import LeadBreakdown from "@/components/leadBreakdown/index";
import Toolbar from "@/components/toolbar/index";
import EmptyTable from "@/components/empty/index";
import FloatingButton from "@/components/fab";
import { DataTable } from "@/components/table";

const LeadsPage = () => {
  return (
    <Container>
      <PageHeader />

      <LeadBreakdown />

      <Toolbar />

      <DataTable
        data={data?.data ?? []}
        columns={columns}
        loading={isLoading}
        emptyMessage="No leads found."
      />

      <Pagination
        page={data?.pagination.page ?? 1}
        totalPages={data?.pagination.totalPages ?? 1}
      />

      <EmptyTable />

      <FloatingButton />
    </Container>
  );
};

export default LeadsPage;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding-bottom: 120px;
`;
