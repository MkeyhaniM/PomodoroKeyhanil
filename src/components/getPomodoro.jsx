"use client";

import NotField from "./notField";
import { useRef, useEffect, useState } from "react";

const GetPomodoro = () => {
  const intervalRef = useRef();

  const [task, setTask] = useState({});
  const coun = 0;

  const GetModel = (check, operation) => {
    if (check && !operation) {
      document.getElementById("createTask").show();
    } else if (!check && !operation) {
      document.getElementById("createTask").close();
      intervalRef.current.value = "";
    } else if (!check && operation) {
      document.getElementById("createTask").close();
      setTask({
        ...task,
        id: coun + 1,
        name: intervalRef.current.value,
        date: new Date().toLocaleString,
      });
    }
  };

  const CreateTask = () => {
    return <div></div>;
  };

  return (
    <div>
      <div>
        {
         if (task.length) {
          task.map(e =>{
            return <CreateTask information={e}/>
           }
         }
        }</div>
      <div
        onClick={() => GetModel(true, false)}
        className="bg-zinc-200 w-fit p-2 rounded-lg m-10 hover:bg-zinc-300 hover:transition-all hover:duration-500 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h3 className="inline ml-2 text-lg font-Ubuntu">Create new field</h3>
      </div>
      <div>
        <dialog
          className="absolute top-0 h-screen w-screen bg-black bg-opacity-80"
          id="createTask"
          close="true"
        >
          <div className="w-1/4 bg-white mx-auto mt-[300px] p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-Ubuntu mt-5">Create a task</h3>
            <input
              type="text"
              ref={intervalRef}
              className="w-full p-2 my-2 font-Ubuntu border text-sky-600 font-bold border-sky-600 border-b-4 border-t-0 border-r-0 border-l-0 placeholder:text-sky-600 focus:outline-none"
              placeholder="weekend vacation"
            />
            <div className="flex justify-around my-5">
              <button
                onClick={() => GetModel(false, true)}
                className="p-2 rounded-sm bg-green-500 font-Ubuntu hover:bg-green-400 active:scale-95"
              >
                Create
              </button>
              <button
                onClick={() => GetModel(false, false)}
                className="p-2 rounded-sm bg-red-500 font-Ubuntu hover:bg-red-400 active:scale-95"
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      </div>
      {!task.length && <NotField />}
    </div>
  );
};

export default GetPomodoro;
