import LeadForm from "@/components/leadsManagement/LeadForm";
import PageHeader from "@/components/ui/PageHeader";
import { useCreateLead } from "@/hooks/useCreateLead";
import { useNavigate } from "react-router-dom";
import type { CreateLeadInput } from "@/zodSchemas/leads.schema";

export default function CreateLeadPage() {
  const mutation = useCreateLead();

  const navigate = useNavigate();

  const handleCreate = async (values: CreateLeadInput) => {
    try {
      await mutation.mutateAsync(values);
      navigate("/leads");
    } catch (error) {
      console.error("Error creating lead:", error);
    }
  };
  return (
    <>
      <PageHeader title="Create Lead" subtitle="Capture a new business lead." />

      <LeadForm submitLabel="Create Lead" onSubmit={handleCreate} disabled={mutation.isPending}/>
    </>
  );
}
