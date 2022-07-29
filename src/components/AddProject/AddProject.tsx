import { Button, TextField } from "@mui/material";
import { useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import {
  addTodos,
  Todo,
  statusList,
} from "../../features/handleTodos/TodosSlice";
import Icons from "../Icons";
import { v4 as uuid } from "uuid";

interface Props {
  className?: string;
}
const AddProject = ({ className }: Props) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      addTodos({ id: uuid(), name: title, date: date, status: statusList[2] })
    );
    setTitle("");
    setDate("");
  };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleChangeDate = (e: any) => {
    setDate(e.target.value);
  };

  const handleCloseModal = () => {
    const addProject = document.querySelector(".addProject");
    addProject?.classList.add("hidden");
  };

  const handleStopPropagationClose = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className={className} onClick={handleCloseModal}>
      <div className="absolute top-0 right-0 left-0 bottom-0 z-20 flex-grow flex justify-center items-center  text-center bg-black/10">
        <div
          className="w-1/2 border bg-white p-4 rounded-md"
          onClick={handleStopPropagationClose}
        >
          <h2 className="text-2xl font-semibold text-start">
            Add a New Project
          </h2>
          <form className="pb-8 pt-12 px-4" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div className="flex ">
                <TextField
                  id="title"
                  size="small"
                  variant="standard"
                  label="Title"
                  type="text"
                  className="w-full py-2"
                  onChange={handleChangeTitle}
                  value={title}
                />
                <label htmlFor="title">
                  <Icons.Edit className="mt-6" fontSize="small" />
                </label>
              </div>
              <div className=" w-full pt-4">
                <input
                  type="date"
                  className="w-full outline-none  py-1 mt-2 border-b"
                  onChange={handleChangeDate}
                  value={date}
                />
              </div>
            </div>
            <div className="flex justify-end" onClick={handleCloseModal}>
              <Button variant="contained" type="submit" className="!mt-8">
                Add project
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProject;
