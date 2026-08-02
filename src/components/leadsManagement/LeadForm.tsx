import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLeadSchema, CreateLeadInput } from "@/zodSchemas/leads.schema";
import Grid from "../ui/Grid";
import FormField from "../ui/FormField";
import Select from "../ui/Select";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import Card from "../ui/Card";
import TextArea from "../ui/TextArea";
import { FileText } from "lucide-react";
import { Building2 } from "lucide-react";
import styled from "styled-components";
import { useEffect } from "react";

type LeadFormProps = {
  initialValues?: Partial<CreateLeadInput>;

  loading?: boolean;

  submitLabel: string;

  onSubmit: (values: CreateLeadInput) => void | Promise<void>;

  onCancel?: () => void;
};

export default function LeadForm({
  initialValues,
  loading,
  submitLabel,
  onSubmit,
  onCancel,
}: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateLeadInput>({
    resolver: zodResolver(createLeadSchema),

    defaultValues: {
      businessName: "",
      phoneNumber: "",
      category: undefined,
      status: "NEW",
      address: "",
      staffName: "",
      location: "",
      notes: "",

      ...initialValues,
    },
  });

  useEffect(() => {
    if (initialValues) {
      reset({
        businessName: "",
        phoneNumber: "",
        category: undefined,
        status: "NEW",
        address: "",
        staffName: "",
        location: "",
        notes: "",

        ...initialValues,
      });
    }
  }, [initialValues, reset]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Card
        title="Business Information"
        description="Capture the basic information about the business."
        icon={<Building2 size={20} />}
      >
        <Grid>
          <FormField
            label="Business Name"
            required
            error={errors.businessName?.message}
          >
            <TextInput
              placeholder="Business Name"
              {...register("businessName")}
            />
          </FormField>

          <FormField label="Phone Number" error={errors.phoneNumber?.message}>
            <TextInput placeholder="08012345678" {...register("phoneNumber")} />
          </FormField>

          <FormField label="Category" required error={errors.category?.message}>
            <Select {...register("category")}>
              <option value="">Select Category</option>
              <option value="HOTEL">Hotel</option>
              <option value="RESTAURANT">Restaurant</option>
              <option value="BAKERY">Bakery</option>
            </Select>
          </FormField>

          <FormField label="Status" required error={errors.status?.message}>
            <Select {...register("status")}>
              <option value="NEW">New</option>
              <option value="VERIFIED">Verified</option>
              <option value="UNVERIFIED">Unverified</option>
              <option value="IN_TALKS">In Talks</option>
              <option value="FOLLOW_UP">Follow Up</option>
              <option value="CLOSED_DEAL">Closed Deal</option>
              <option value="NOT_INTERESTED">Not Interested</option>
              <option value="INACTIVE">Inactive</option>
            </Select>
          </FormField>

          <FormField
            label="Assign Staff"
            required
            error={errors.staffName?.message}
          >
            <TextInput placeholder="John Doe" {...register("staffName")} />
          </FormField>

          <FormField label="Location" required error={errors.location?.message}>
            <Select {...register("location")}>
              <option value="">Select Location</option>
              <option value="Sapele Road">Sapele Road</option>
              <option value="GRA">GRA</option>
              <option value="Ugbowo">Ugbowo</option>
              <option value="Upper mission road">Upper mission road</option>
              <option value="Airport Road">Airport Road</option>
              <option value="Ekewan road">Ekewan road</option>
              <option value="Adesuwa">Adesuwa</option>
              <option value="Oluku">Oluku</option>
            </Select>
          </FormField>

          <div style={{ gridColumn: "1 / -1" }}>
            <FormField label="Address" required error={errors.address?.message}>
              <TextArea
                rows={4}
                placeholder="Business Address"
                {...register("address")}
              />
            </FormField>
          </div>
        </Grid>
      </Card>

      <div style={{ height: 24 }} />

      <Card
        title="Additional Information"
        description="Optional notes about this lead."
        icon={<FileText size={20} />}
        footer={
          <Card>
            {onCancel && (
              <Button variant="secondary" type="button" onClick={onCancel}>
                Cancel
              </Button>
            )}

            <Button type="submit" loading={loading}>
              {submitLabel}
            </Button>
          </Card>
        }
      >
        <FormField label="Notes" error={errors.notes?.message}>
          <TextArea
            rows={6}
            placeholder="Add notes about the business..."
            showCount
            maxLength={500}
            {...register("notes")}
          />
        </FormField>
      </Card>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
