import React, { useEffect, useState } from "react";

function TaskManager() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");

  console.log("Input value:", task);
  console.log("Todo:", todo);

  const handleAdd = () => {
    if (task.trim() === "") {
      setMessage("❗ Please enter a task.");
      setMsgType("error");
      setTimeout(() => setMessage(""), 1000);
      return;
    }

    setTodo([...todo, { it: Date.now(), text: task,completed:false}]);
    setTask("");
    setMessage("✅ Task added!");
    setMsgType("success");

    setTimeout(() => setMessage(""), 1000);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const deleteTask = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };


  const toggleComplete = (index) => {
    const updatedTodos = todo.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="Task_manager_section  bg-bg-secondary flex flex-col items-center justify-center gap-10 mx-12">
      <div className=" Title pt-[120px]  flex flex-col items-center gap-6  ">
        <h1 className="font-extrabold text-7xl text-brand-electric-blue leading-16">
          Task Manager
        </h1>
        <p className="text-lg leading-8 text-text-secondary w-lg text-center">
          Your daily todo list
        </p>
      </div>

      <div className="Task_container p-16 mb-[120px] flex flex-col gap-4 bg-bg-primary rounded-4xl w-[849px]">
        <div className="Task_1 flex items-center justify-between w-full ">
          <div className="flex items-center">
            <input
              className="px-[9px] py-[10px] mr-1.5 w-6 h-6 rounded-xs"
              type="checkbox"
            />
            <span className="text-[#3C434A]">Task item one</span>
          </div>
          <button
            onClick={() => deleteTask(index)}
            className="h-7 w-[103px] px-4 py-1 flex items-center justify-center text-[#FC4B4B] border border-[#FC4B4B] rounded-sm"
          >
            X delete
          </button>
        </div>
        <div className="Task_2 flex items-center justify-between w-full ">
          <div className="flex items-center">
            <input
              className="px-[9px] py-[10px] mr-1.5 w-6 h-6 rounded-xs"
              type="checkbox"
            />
            <span className="text-[#3C434A]">Task item two</span>
          </div>
          <button className="h-7 w-[103px] px-4 py-1 flex items-center justify-center text-[#FC4B4B] border border-[#FC4B4B] rounded-sm">
            X delete
          </button>
        </div>



        {todo.map((item, index) => (
          <div
            key={index}
            className="Task flex items-center justify-between w-full "
          >
            <div className="flex items-center">
              <input
              onChange={()=>toggleComplete(index)}
              checked={todo.completed}
                className="px-[9px] py-[10px] mr-1.5 w-6 h-6 rounded-xs"
                type="checkbox"
              />
              <span className="text-[#3C434A]">{item.text}</span>
            </div>

            <button
              onClick={() => deleteTask(index)}
              className="h-7 w-[103px] px-4 py-1 flex items-center justify-center text-[#FC4B4B] border border-[#FC4B4B] rounded-sm"
            >
              X delete
            </button>
          </div>
        ))}

        {message && (
          <p
            className={`mb-2 text-sm font-medium ${
              msgType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="Input h-[60px] border border-[#9E9E9E] rounded-2xl px-3.5 py-3">
          <input
            value={task}
            onChange={handleChange}
            type="text"
            className=" h-full  w-full outline-none"
            placeholder="Add new task"
          />
        </div>

        <button
          onClick={handleAdd}
          className="w-48 h-11  bg-button-primary text-bg-primary rounded-2xl font-medium "
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskManager;
