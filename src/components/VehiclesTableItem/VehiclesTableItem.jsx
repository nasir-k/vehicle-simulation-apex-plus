import React from "react";

import { useNavigate } from "react-router-dom";

import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

const TableItem = ({
  vehicle,
  serialNumber,
  scenerioId,
  handleDeleteClick,
}) => {
  const navigate = useNavigate();

  return (
    <div className="table-item">
      <span>{serialNumber}</span>
      <span>{vehicle.name}</span>
      <span>{vehicle.positionX}</span>
      <span>{vehicle.positionY}</span>
      <span>{vehicle.speed}</span>
      <span>{vehicle.direction}</span>
      <span>
        <img
          src={EditIcon}
          alt="Edit"
          height={25}
          onClick={() => navigate(`/add-vehicle/${scenerioId}/${vehicle.id}`)}
        />
      </span>
      <span>
        <img
          src={DeleteIcon}
          alt="Delete"
          height={45}
          onClick={() => handleDeleteClick(+scenerioId, vehicle.id)}
        />
      </span>
    </div>
  );
};

export default TableItem;
