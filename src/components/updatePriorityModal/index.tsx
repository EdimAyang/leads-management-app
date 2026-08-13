import { Lead, Priority } from "@/types/leads.types";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Modal, { ModalFooter } from "@/components/ui/Modal";
import { PrioritySelector } from "./PriorityCardSelector";


type Props = {
  open: boolean;
  lead: Lead;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (priority: Priority) => void;
  disabled:boolean;
};

export default function UpdatePriorityModal({
  open,
  lead,
  loading,
  onClose,
  onSubmit,
  disabled
}: Props) {
  const [priority, setPriority] = useState<Priority>(lead.priority);

  useEffect(() => {
    setPriority(lead.priority);
  }, [lead]);

  if (!open) return null
  return (
    <Modal open={open} title="Update Lead Priority" onClose={onClose}>
      <PrioritySelector value={priority} onChange={setPriority} />

      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button loading={loading} onClick={(e: React.MouseEvent<HTMLButtonElement>) =>{
            e.stopPropagation();
            onSubmit(priority);
        }}
        disabled={disabled}
        >
          Update Priority
        </Button>
      </ModalFooter>
    </Modal>
  );
}
