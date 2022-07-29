import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import {
  updateTodoStatus,
  deleteTodo,
} from "../../features/handleTodos/TodosSlice";
// import { Colors } from "../Dashboard/Dashboard";
import Icons from "../Icons";

interface Props {
  themeColor?: string;
  date?: string;
  name?: string;
  propsDaggable?: any;
  index?: number;
  id: string;
  status: Status;
}

export interface Status {
  status: string;
  color: string;
}

export const statusList: Status[] = [
  // {
  //   status: "All",
  //   color: "#3B82F6",
  // },
  {
    status: "ONGOING",
    color: "#FB8C02",
  },
  {
    status: "COMPLETED",
    color: "#3DD2C2",
  },
  {
    status: "OVERDUE",
    color: "#F93E70",
  },
];

const ListTodo = ({ themeColor, date, name, id, status }: Props) => {
  const todo = document.querySelector(".todo");

  const dispatch = useAppDispatch();
  const getDataTodos = useAppSelector((state) => state.hanldeTodos);

  {
    if (name === "" && date === "") {
      return <div className="hidden"></div>;
    } else {
      return (
        <div
          style={{ borderLeft: `4px solid ${status.color}` }}
          className="todo flex items-center mx-16 border-b border-l-4 py-1 bg-white"
        >
          <div className="ml-1 w-2/5 text-start ">
            <div className="text-gray-500 text-xs ml-4">Project title</div>
            <div className="text-sm mt-1">
              <Icons.DragIndicator htmlColor="gray" className="mr-1 mb-2" />
              {name}
            </div>
          </div>
          <div className="flex-grow flex justify-around items-center">
            <div className="date ">
              <div className="text-gray-500 text-xs">Due by</div>
              <div className="text-sm mt-1">{date}</div>
            </div>
            <div className="status">
              <div>
                <button
                  onClick={() => {
                    dispatch(updateTodoStatus(id));
                  }}
                  style={{ background: `${status.color}` }}
                  className="p-1 px-2 text-sm text-white uppercase rounded-xl hover:opacity-75"
                >
                  {status.status}
                </button>
              </div>
            </div>
            <div>
              <Icons.Trash
                className="ml-4 cursor-pointer rounded-full hover:bg-gray-200 p-1"
                fontSize="large"
                htmlColor={status.color}
                onClick={() => dispatch(deleteTodo(id))}
              />
            </div>
          </div>
        </div>
      );
    }
  }
};

export default memo(ListTodo);
