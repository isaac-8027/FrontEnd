import Button from "./Button";
import "../pages/employeeHome.scss";
import { actionTypes } from "../pages/store/useReducer";
import { useEffect } from "react";
const ModalDelete = ({ deleteModal, state, employeeID, dispatcher }) => {
  const closeModal = (e) => {
    deleteModal(false);
  };
  const deleteEmployee = (e) => {
    dispatcher({
      type: actionTypes.DELETE_EMPLOYEE,
      payload: employeeID,
    });
    deleteModal(false);
  };
  useEffect(() => {
    console.log(state);
    console.log(employeeID);
  }, [state]);
  return (
    <div className="delete-modal-wrapper">
      <div className="delete-wrapper">
        <div className="close-wrapper">
          <p className="close-button" onClick={closeModal}>
            X
          </p>
        </div>
        <div className="text-wrapper">
          <h3>Are you sure ?</h3>
          <p>Do you want to delete this employee ?</p>
        </div>
        <div className="button-wrapper">
          <Button
            text="Delete"
            classname="delete-button"
            handleSubmit={deleteEmployee}
          />
          <Button
            text="Cancel"
            classname="cancel-delete-button"
            handleSubmit={closeModal}
          />
        </div>
      </div>
    </div>
  );
};export default ModalDelete;