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
import { useEffect, useState } from "react";

type Branch = "Benin" | "Lagos";

const branchOptions: Record<Branch, { staff: string[]; locations: string[] }> =
  {
    Benin: {
      staff: [
        "Ose David",
        "Jackson EdimAyang",
        "Obina ",
        "Wesley",
        "Elizerbeth",
        "Samson Osiomwan",
        "Christabel",
      ],
      locations: [
        "Sapele Road",
        "GRA",
        "Ugbowo",
        "Upper mission road",
        "Airport Road",
        "Ekewan road",
        "Adesuwa",
        "Oluku",
      ],
    },
    Lagos: {
      staff: ["Samson Osiomwan", "sofia ", "Ose David", "Ijeoma"],
      locations: [
        "Ikeja",
        "Lekki",
        "Victoria Island",
        "Surulere",
        "Yaba",
        "Ajah",
        "Ikorodu",
        "Epe",
        "Abijo GRA",
        "Lekki Phase 1",
        "Lekki Phase 2",
        "Ikoyi",
        "Magodo",
        "Ojodu",
        "Ogba",
        "Mushin",
        "Agege",
        "Festac Town",
        "Isolo",
        "Oshodi",
        "Shomolu",
        "Abraham Adesanya",
        "Ikotun",
        "Alimosho",
        "Egbeda",
        "Iyana Ipaja",
        "Bariga",
        "Apapa",
        "Badagry",
        "Epe Town",
        "Ibeju-Lekki",
      ],
    },
  };

function getBranch(initialValues?: Partial<CreateLeadInput>): Branch {
  const lagosOptions = branchOptions.Lagos;

  return lagosOptions.staff.includes(initialValues?.staffName ?? "") ||
    lagosOptions.locations.includes(initialValues?.location ?? "")
    ? "Lagos"
    : "Benin";
}

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
  const [branch, setBranch] = useState<Branch>("Benin");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
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
      setBranch(getBranch(initialValues));
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

          <FormField label="Branch" required>
            <Select
              value={branch}
              onChange={(event) => {
                setBranch(event.target.value as Branch);
                setValue("staffName", "");
                setValue("location", "");
                clearErrors(["staffName", "location"]);
              }}
            >
              <option value="Benin">Benin</option>
              <option value="Lagos">Lagos</option>
            </Select>
          </FormField>

          <FormField
            label="Assign Staff"
            required
            error={errors.staffName?.message}
          >
            <Select {...register("staffName")}>
              <option value="">Select Staff</option>
              {branchOptions[branch].staff.map((staffName) => (
                <option key={staffName} value={staffName}>
                  {staffName}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField label="Location" required error={errors.location?.message}>
            <Select {...register("location")}>
              <option value="">Select Location</option>
              {branchOptions[branch].locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
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
