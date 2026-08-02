import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLead } from "@/api/services/leads.services";

export function useCreateLead() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: createLead,

    onSuccess: () => {
      toast.success("Lead created successfully");

      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });

      navigate("/leads");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}
