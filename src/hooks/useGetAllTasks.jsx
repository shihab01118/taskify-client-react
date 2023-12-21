import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tasks, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks/${user?.email}`);
      return res.data;
    },
  });

  return { tasks, refetch };
};

export default useGetAllTasks;
