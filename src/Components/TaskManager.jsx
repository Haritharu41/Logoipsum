import React from "react";

function TaskManager() {
  return (
    <div className="Task_manager_section  bg-[#F1F0FF] flex flex-col items-center justify-center gap-10 mx-12">
      <div className=" Title mt-[120px]  flex flex-col items-center gap-6  ">
        <h1 className="font-extrabold text-7xl text-brand-electric-blue leading-16">
          Task Manager
        </h1>
        <p className="text-lg leading-8 text-text-secondary w-lg text-center">
          Your daily todo list
        </p>
      </div>

      <div className="Task_container p-16 mb-[120px] flex flex-col gap-4 bg-bg-primary rounded-4xl w-[849px]">
        <div className="Task flex items-center justify-between w-full ">
          <div className="flex items-center">
            <input
              className="px-[9px] py-[10px] mr-1.5 w-6 h-6 rounded-xs"
              type="checkbox"
            />
            <span className="text-[#3C434A]">Task item one</span>
          </div>
          <button className="h-7 w-[103px] px-4 py-1 text-[#FC4B4B] border border-[#FC4B4B] rounded-sm">
            X delete
          </button>
        </div>

        <div className="Task flex items-center justify-between w-full ">
          <div className="flex items-center">
            <input
              className="px-[9px] py-[10px] mr-1.5 w-6 h-6 text-[#7C8794]"
              type="checkbox"
            />
            <span className="text-text-primary">Task item two</span>
          </div>
        </div>

        <div className="Input h-[60px] border border-[#9E9E9E] rounded-2xl px-3.5 py-3">
          <input
            type="text"
            className=" h-full  w-full outline-none"
            placeholder="Add new task"
          />
        </div>

        <button className="w-48 h-11  bg-button-primary text-bg-primary rounded-2xl font-medium ">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskManager;
