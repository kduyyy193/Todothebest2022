import React, { useEffect, useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Icons from "../Icons";
import ListTodo from "../ListTodo/ListTodo";
import AddProject from "../AddProject/AddProject";
import { useAppSelector } from "../../App/hooks";

interface Colors {
  blue: string;
  green: string;
  red: string;
  orange: string;
}
const Colors: Colors = {
  red: "#F93E70",
  blue: "#3B82F6",
  green: "#3DD2C2",
  orange: "#FB8C02",
};
export const OpenModalAddProject = () => {
  const addProject = document.querySelector(".addProject");
  addProject?.classList.toggle("hidden");
};

const handleOnDragEnd = (results: any) => {
  console.log(results);
};

const Danhboard = () => {
  const getDataTodos = useAppSelector((state) => state.hanldeTodos);

  const [filter, setFilter] = useState("ALL");
  const filteredTodos = useMemo(
    () =>
      getDataTodos.filter((todo) => {
        if (filter === "ALL") {
          return todo;
        }

        if (filter === "COMPLETED" && todo.status.status === "COMPLETED") {
          return todo;
        }

        if (filter === "ONGOING" && todo.status.status === "ONGOING") {
          return todo;
        }

        if (filter === "OVERDUE" && todo.status.status === "OVERDUE") {
          return todo;
        }
      }),
    [filter, getDataTodos]
  );

  const [dashboard, updateDashboard] = useState(getDataTodos);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(getDataTodos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateDashboard(items);
  };

  const handleNothingTodos = () => {
    const nothing = document.querySelector("#nothing");
    nothing?.setAttribute("class", "hidden");
  };

  useEffect(() => {
    if (getDataTodos.length > 1) {
      handleNothingTodos();
    }
  }, [getDataTodos]);

  return (
    <div>
      <AddProject className="addProject hidden flex-grow   " />
      <div className="text-gray-500 ml-8">Dashboard</div>
      <div className="flex mt-8 ml-4 items-center justify-between">
        <div className="had ">
          <Icons.Dashboard
            fontSize="large"
            className="p-1 hover:bg-slate-200 rounded-full hover:cursor-pointer ml-8 "
            htmlColor={Colors.blue}
            onClick={() => setFilter("ALL")}
          />
          <Icons.Check
            fontSize="large"
            className="p-1 hover:bg-slate-200 rounded-full hover:cursor-pointer ml-8"
            htmlColor={Colors.green}
            onClick={() => setFilter("COMPLETED")}
          />
          <Icons.Work
            fontSize="large"
            className="p-1 hover:bg-slate-200 rounded-full hover:cursor-pointer ml-8"
            htmlColor={Colors.orange}
            onClick={() => setFilter("ONGOING")}
          />
          <Icons.Time
            fontSize="large"
            className="p-1 hover:bg-slate-200 rounded-full hover:cursor-pointer ml-8"
            htmlColor={Colors.red}
            onClick={() => setFilter("OVERDUE")}
          />
        </div>
        <div className=" new mr-12" onClick={OpenModalAddProject}>
          <Icons.Plus
            className="p-1 hover:bg-slate-200 rounded-full hover:cursor-pointer new "
            fontSize="large"
            htmlColor={Colors.blue}
          />
        </div>
      </div>
      <div className="text-center pt-8 ">
        <div id="nothing">
          <div className=" text-6xl text-gray-400 mb-4"> Nothing here 😔</div>
          <span
            onClick={OpenModalAddProject}
            className=" text-4xl uppercase font-medium text-blue-500 hover:cursor-pointer hover:bg-blue-100 p-1"
          >
            Add new project
          </span>
        </div>
        <div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="getDataTodos">
              {(provided) => (
                <ul
                  className="getDataTodos"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {filteredTodos.map(({ date, name, status, id }, index) => {
                    return (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ListTodo
                              date={date}
                              name={name}
                              status={status}
                              id={id}
                            />
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Danhboard;
