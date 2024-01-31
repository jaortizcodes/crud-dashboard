import { DistributorService } from "../../../services/DatabaseService";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllDistributors() {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["getAllDistributors"],
    queryFn: DistributorService.getAll,
  });
  return {
    isPending,
    error,
    data,
    refetch,
  };
}
