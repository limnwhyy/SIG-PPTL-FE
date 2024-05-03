import { FaEye } from "react-icons/fa6";
import "./DetailButtonStyle.css";

const DetailButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="detail-button" onClick={onClick}>
      <FaEye size={12} />
      Detail
    </button>
  );
};

export default DetailButton;
