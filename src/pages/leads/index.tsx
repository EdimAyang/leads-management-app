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
import { useState } from "react";
import LeadDetailsModal from "@/components/leadModal";
import UpdateStatusModal from "@/components/upsateStatusModal";
import { useUpdateLeadStatus, useUpdatePriorityStatus } from "@/hooks/useUpdateLeads";
import UpdatePriorityModal from "@/components/updatePriorityModal";

export type FilterValues = {
  category?: string;
  status?: string;
  staffName?: string;
  location?: string;
};

const LeadsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(Number(searchParams.get("page") ?? "1"), 1);
  const [statusLead, setStatusLead] = useState<Lead | null>(null);
  const [priorityLead, setPriorityLead] = useState<Lead | null>(null);

  const limit = Math.max(Number(searchParams.get("limit") ?? "10"), 1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleUpdateStatus = (lead: Lead) => {
    setSelectedLead(null);
    setStatusLead(lead);
  };

  const handleUpdatePriority = (lead: Lead) => {
    setSelectedLead(null);
    setPriorityLead(lead);
  };

  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead);
  };
  const navigate = useNavigate();

  const handleView = (lead: Lead) => {
    setStatusLead(null);
    setSelectedLead(lead);
  };

  const handleEdit = (lead: Lead) => {
    setStatusLead(null);
    setSelectedLead(null);
    navigate(`/leads/${lead.id}/editLeadPage`);
  };

  const columns = getLeadColumns({
    onView: handleView,
    onEdit: handleEdit,
    onUpdateStatus: handleUpdateStatus,
    onUpdatePriority: handleUpdatePriority,
  });

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

  const statusMutation = useUpdateLeadStatus();
  const priorityMutation = useUpdatePriorityStatus()

  return (
    <>
      {selectedLead && (
        <LeadDetailsModal
          open
          lead={selectedLead}
          onClose={() => {
            setStatusLead(null);
            setSelectedLead(null);
            setPriorityLead(null)
          }}
          onEdit={() => {
            navigate(`/leads/${selectedLead.id}/editLeadPage`);
          }}
        />
      )}

      {statusLead && (
        <UpdateStatusModal
          open
          lead={statusLead}
          loading={statusMutation.isPending}
          disabled={statusMutation.isPending}
          onClose={() => {
            setStatusLead(null);
            setSelectedLead(null);
            setPriorityLead(null)
          }}
          onSubmit={async (status) => {
            await statusMutation.mutateAsync({
              id: statusLead.id,
              status,
            });

            setStatusLead(null);
            setSelectedLead(null);
            setPriorityLead(null)
          }}
        />
      )}

       {priorityLead && (
        <UpdatePriorityModal
          open
          lead={priorityLead}
          loading={priorityMutation.isPending}
          disabled={priorityMutation.isPending}
          onClose={() => {
            setStatusLead(null);
            setSelectedLead(null);
            setPriorityLead(null)
          }}
          onSubmit={async (priority) => {
            await priorityMutation.mutateAsync({
              id: priorityLead.id,
              priority,
            });

            setStatusLead(null);
            setSelectedLead(null);
            setPriorityLead(null)
          }}
        />
      )}
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
              onRowClick={(lead) => handleRowClick(lead)}
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
