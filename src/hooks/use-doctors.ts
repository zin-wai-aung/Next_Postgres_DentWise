"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createDoctor, getDoctors, updateDoctor } from "../lib/actions/doctors";

export function useGetDoctors() {
     const result = useQuery({
          queryKey: ["getDoctors"],
          queryFn:getDoctors
     });

     return result
}

export function useCreateDoctor() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      // invalidate related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error while  creating doctor",error),
  });

  return result;
}

export function useUpdateDoctor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDoctor,
    onSuccess: () => {
      // invalidate related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Fail to update doctor",error),
  });

}
