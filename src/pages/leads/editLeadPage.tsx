import { useParams } from "react-router-dom";
import { useUpdateLead } from "@/hooks/useUpdateLeads";
import { useGetLeadById } from "@/hooks/useGetLeads";
import { useNavigate } from "react-router-dom";
import LeadForm from "@/components/leadsManagement/LeadForm";
import PageHeader from "@/components/ui/PageHeader";
import { CreateLeadInput } from "@/zodSchemas/leads.schema";
import LoadingScreen from "@/components/ui/LoadingScreen";

 const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: lead, isLoading } = useGetLeadById(id);

  const mutation = useUpdateLead();

  const handleUpdate = async (values: CreateLeadInput) => {
    await mutation.mutateAsync({
      id: id!,
      payload: values,
    });

    navigate("/leads");
  };

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <PageHeader title="Edit Lead" subtitle="Update business information." />

      <LeadForm
        initialValues={lead?.data as unknown as CreateLeadInput}
        submitLabel="Update Lead"
        loading={mutation.isPending}
        onSubmit={handleUpdate}
        onCancel={() => navigate(-1)}
      />
    </>
  );
};

export default EditPage;
