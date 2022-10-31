import React from "react";

import { useNavigate } from "react-router-dom";

import AddIcon from "../../assets/icons/add.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

import "./table-item.css";

const TableItem = ({ scenerio, serialNumber, handleDeleteScenerioClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="table-item"
      onClick={() => navigate(`/home/${scenerio.id}`)}
    >
      <span>{serialNumber}</span>
      <span>{scenerio?.name}</span>
      <span>{scenerio?.time}</span>
      <span>{scenerio?.vehicles?.length}</span>
      <span>
        <img
          src={AddIcon}
          alt="Add"
          height={25}
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/add-vehicle/${scenerio.id}`);
          }}
        />
      </span>
      <span>
        <img
          src={EditIcon}
          alt="Edit"
          height={25}
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/add-scenerio/${scenerio.id}`);
          }}
        />
      </span>
      <span>
        <img
          src={DeleteIcon}
          alt="Delete"
          height={45}
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteScenerioClick(scenerio.id);
          }}
        />
      </span>
    </div>
  );
};

export default TableItem;
