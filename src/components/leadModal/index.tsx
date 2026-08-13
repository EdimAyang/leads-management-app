import styled from "styled-components";
import { format } from "date-fns";

import {
  Building2,
  MapPin,
  Phone,
  User,
  Calendar,
  FileText,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import Modal from "@/components/ui/Modal";
import StatusBadge, { PriorityBadge } from "../statusBadge";
import { Lead } from "@/types/leads.types";
import DetailItem from "@/components/detailItem";


type Props = {
  open: boolean;

  lead: Lead | null;

  onClose: () => void;

  onEdit: () => void;
};

export default function LeadDetailsModal({
  open,
  lead,
  onClose,
  onEdit,
}: Props) {
  if (!lead) return null;

  return (
    <Modal
      open={open}
      title="Lead Details"
      onClose={onClose}
      footer={
        <>
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Close
          </Button>

          <Button onClick={onEdit}>
            Edit Lead
          </Button>
        </>
      }
    >
      <Content>
        <Card
          title="Business Information"
          icon={<Building2 size={18} />}
        >
          <Grid>
            <DetailItem
              label="Business Name"
              value={lead.businessName}
            />

            <DetailItem
              label="Category"
              value={lead.category}
            />

            <DetailItem
              label="Status"
              value={
                <StatusBadge
                  status={lead.status}
                />
              }
            />
            <DetailItem
              label="Priority"
              value={
                <PriorityBadge
                  priority={lead.priority}
                />
              }
            />

            <DetailItem
              label="Assigned Staff"
              icon={<User size={14} />}
              value={lead.staffName}
            />
          </Grid>
        </Card>

        <Card
          title="Contact Information"
          icon={<Phone size={18} />}
        >
          <Grid>
            <DetailItem
              icon={<Phone size={14} />}
              label="Phone Number"
              value={lead.phoneNumber}
            />

            <DetailItem
              icon={<MapPin size={14} />}
              label="Location"
              value={lead.location}
            />
          </Grid>

          <Divider />

          <Section>
            <SectionTitle>
              Address
            </SectionTitle>

            <NotesCard>
              {lead.address}
            </NotesCard>
          </Section>
        </Card>

        <Card
          title="Additional Information"
          icon={<FileText size={18} />}
        >
          <Section>
            <SectionTitle>
              Notes
            </SectionTitle>

            <NotesCard>
              {lead.notes || "No notes available."}
            </NotesCard>
          </Section>

          <Divider />

          <Meta>
            <DetailItem
              icon={<Calendar size={14} />}
              label="Created"
              value={format(
                new Date(lead.createdAt),
                "PPP p",
              )}
            />

            <DetailItem
              icon={<Calendar size={14} />}
              label="Last Updated"
              value={format(
                new Date(lead.updatedAt),
                "PPP p",
              )}
            />
          </Meta>
        </Card>
      </Content>
    </Modal>
  );
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.h3`
  margin: 0;

  font-size: 16px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text};
`;

export const NotesCard = styled.div`
  padding: 18px;

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.background};

  border: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme }) => theme.colors.text};

  line-height: 1.7;

  white-space: pre-wrap;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Divider = styled.div`
  height: 1px;

  background: ${({ theme }) => theme.colors.border};
`;