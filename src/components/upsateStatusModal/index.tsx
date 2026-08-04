import { Lead, LeadStatus } from "@/types/leads.types";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Modal, { ModalFooter } from "@/components/ui/Modal";
import { StatusSelector } from "@/components/upsateStatusModal/StatusCardSelector";


type Props = {
  open: boolean;
  lead: Lead;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (status: LeadStatus) => void;
};

export default function UpdateStatusModal({
  open,
  lead,
  loading,
  onClose,
  onSubmit,
}: Props) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);

  useEffect(() => {
    setStatus(lead.status);
  }, [lead]);

  if (!open) return null;

  return (
    <Modal open={open} title="Update Lead Status" onClose={onClose}>
      <StatusSelector value={status} onChange={setStatus} />

      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button loading={loading} onClick={(e: React.MouseEvent<HTMLButtonElement>) =>{
            e.stopPropagation();
            onSubmit(status);
        }}>
          Update Status
        </Button>
      </ModalFooter>
    </Modal>
  );
}
