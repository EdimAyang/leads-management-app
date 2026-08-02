import styled from "styled-components";
import PageHeader from "@/components/header/PageHeader";
import LeadBreakdown from "@/components/leadBreakdown/index";
import Toolbar from "@/components/toolbar/index";
import EmptyTable from "@/components/empty/index";
// import FloatingButton from "@/components/fab";
import { DataTable } from "@/components/table";
import Pagination from "@/components/table/pagination";
import { useGetLeads } from "@/hooks/useGetLeads";
import { getLeadColumns } from "@/components/table/coulmns";
import { useNavigate, useSearchParams } from "react-router-dom";
import { leadQuerySchema } from "@/zodSchemas/leads.schema";
import { Lead, LeadCategory, LeadStatus } from "@/types/leads.types";
import { useMemo, useState } from "react";
import LeadDetailsModal from "@/components/leadModal";

export type FilterValues = {
  category?: string;
  status?: string;
  staffName?: string;
  location?: string;
};

const LeadsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(Number(searchParams.get("page") ?? "1"), 1);

  const limit = Math.max(Number(searchParams.get("limit") ?? "10"), 1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const navigate = useNavigate();

  const handleView = (lead: Lead) => {
    setSelectedLead(lead);
    setDetailsOpen(true);
  };

  const handleEdit = (lead: Lead) => {
    navigate(`/leads/${lead.id}/editLeadPage`);
  };

  const columns = useMemo(
    () =>
      getLeadColumns({
        onView: handleView,
        onEdit: handleEdit,
      }),
    [],
  );

  const query = leadQuerySchema.parse({
    page,
    limit,

    q: searchParams.get("q") ?? undefined,

    category:
      (searchParams.get("category") as LeadCategory | null) ?? undefined,

    status: (searchParams.get("status") as LeadStatus | null) ?? undefined,

    staffName: searchParams.get("staffName") ?? undefined,

    location: searchParams.get("location") ?? undefined,
  });

  const { data, isLoading } = useGetLeads(query);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));

    setSearchParams(params);
  };

  // const handleApplyFilters = (values: FilterValues) => {
  //   const params = new URLSearchParams(searchParams);

  //   Object.entries(values).forEach(([key, value]) => {
  //     if (value) {
  //       params.set(key, value);
  //     } else {
  //       params.delete(key);
  //     }
  //   });

  //   // Return to first page when filters change
  //   params.set("page", "1");

  //   setSearchParams(params);
  // };

  // const handleResetFilters = () => {
  //   const params = new URLSearchParams(searchParams);

  //   params.delete("category");
  //   params.delete("status");
  //   params.delete("staffName");
  //   params.delete("location");

  //   params.set("page", "1");

  //   setSearchParams(params);
  // };

  return (
    <>
      <LeadDetailsModal
        open={detailsOpen}
        lead={selectedLead}
        onClose={() => setDetailsOpen(false)}
        onEdit={() => {
          if (selectedLead) {
            navigate(`/leads/${selectedLead.id}/edit`);
          }
        }}
      />
      <Container>
        <PageHeader />

        <LeadBreakdown />

        <Toolbar
          filters={{
            category: query.category,
            status: query.status,
            staffName: query.staffName,
            location: query.location,
          }}
        />

        {data ? (
          <>
            <DataTable
              data={data?.data ?? []}
              columns={columns}
              loading={isLoading}
              emptyMessage="No leads found."
            />

            <Pagination
              page={page ?? 1}
              totalPages={data?.pagination?.totalPages ?? 1}
              limit={Number(data?.pagination?.limit)}
              total={Number(data?.pagination?.total)}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <EmptyTable />
        )}

        {/* <FloatingButton /> */}
      </Container>
    </>
  );
};

export default LeadsPage;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding-bottom: 120px;
`;
