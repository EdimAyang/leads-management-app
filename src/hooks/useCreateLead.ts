import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLead } from "@/api/services/leads.services";
import { getErrorMessage } from "@/utils/getEerror";

export function useCreateLead() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: createLead,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });

      navigate("/leads");
    },

    onError: (error: unknown) => {
      const err = getErrorMessage(error, 'Fail to create');

      toast.error(err);
    },
  });
}
