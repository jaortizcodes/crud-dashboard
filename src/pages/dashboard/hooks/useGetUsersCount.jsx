import React from "react";

import { useQuery } from "@tanstack/react-query";
import { UserService } from "../../../services/DatabaseService";
export default function useGetUsersCount() {
  const { data } = useQuery({
    queryKey: ["getUsersCount"],
    queryFn: UserService.countData,
  });
  return {
    data,
  };
}
