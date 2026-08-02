import { editLead } from "@/api/services/leads.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CreateLeadInput } from "@/zodSchemas/leads.schema";


export function useUpdateLead() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation<any, unknown, { id: string; payload: CreateLeadInput }>({
    mutationFn: ({ id, payload }) => editLead(id, payload),

    onSuccess: () => {
      toast.success("Lead updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });

      navigate("/leads");
    },

    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : "Failed to update lead";
      toast.error(message);
    },
  });
}
