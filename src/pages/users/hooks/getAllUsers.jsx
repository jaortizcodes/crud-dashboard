import { UserService } from "../../../services/DatabaseService";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllUsers() {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: UserService.getAll,
  });
  return {
    isPending,
    error,
    data,
    refetch,
  };
}
