import * as FaIcon from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AdminPerguruanTinggiPageStyle.css";
import useDaftarKampus from "../hooks/useDaftarKampus";
import { axiosInstance } from "../utils/axios";
import { mutate } from "swr";

const AdminPerguruanTinggiPage = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useDaftarKampus();

  const onDelete = async (id: number) => {
    try {
      await axiosInstance.delete("/v1/koordinat-kampus/" + id);
      alert("Berhasil menghapus data perguruan tinggi");
      mutate("/v1/koordinat-kampus");
    } catch (error) {
      alert("Gagal menghapus data perguruan tinggi");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="admin-perguruan-tinggi">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Perguruan Tinggi</th>
              <th>Alamat</th>
              <th>Kabupaten/Kota</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="nama">{item.Name}</td>
                  <td className="alamat">{item.Alamat}</td>
                  <td>{item.Kabupaten}</td>
                  <td>{item.X}</td>
                  <td>{item.Y}</td>
                  <td>
                    <div className="button-container">
                      <button
                        className="edit"
                        onClick={() => navigate(`edit/${item.id}`)}
                      >
                        <FaIcon.FaEdit size={11} />
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => onDelete(item.id)}
                      >
                        <FaIcon.FaTrash size={11} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPerguruanTinggiPage;
