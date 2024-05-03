import useSWR from "swr";
import { axiosInstance } from "../utils/axios";
import { PerguruanTinggiProps } from "../constants/interfaces";

const useDaftarKampus = () => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR<PerguruanTinggiProps[]>(
    "/v1/koordinat-kampus",
    fetcher
  );
  return {
    data,
    isLoading,
    error,
  };
};

export default useDaftarKampus;
