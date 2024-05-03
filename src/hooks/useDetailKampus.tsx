import useSWR from "swr";
import { axiosInstance } from "../utils/axios";
import { PerguruanTinggiProps } from "../constants/interfaces";
import { useParams } from "react-router-dom";

const useDetailKampus = () => {
  const { id } = useParams<{ id: string }>();

  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR<PerguruanTinggiProps>(
    `/v1/koordinat-kampus/${id}`,
    fetcher
  );
  return {
    data,
    isLoading,
    error,
  };
};

export default useDetailKampus;
