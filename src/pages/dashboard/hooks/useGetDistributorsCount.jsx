import React from "react";

import { useQuery } from "@tanstack/react-query";
import { DistributorService } from "../../../services/DatabaseService";
export default function useGetDistributorsCount() {
  const { data } = useQuery({
    queryKey: ["getDistributorsCount"],
    queryFn: DistributorService.countData,
  });
  return {
    data,
  };
}
