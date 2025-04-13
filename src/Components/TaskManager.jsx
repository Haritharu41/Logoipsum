import React, { useState } from "react";

function TaskManager() {

 
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      text: "Task item one",
      completed: false,
    },
    {
      id: Date.now() + 1,
      text: "Task item Two",
      completed: false,
    },
  ]);

  

  const handleAdd = () => {


    if (task.trim() === "") {
      setMessage("❗ Please enter a task.");
      setMsgType("error");
      setTimeout(() => setMessage(""), 1500);
      return;
    }

    setTodo([...todo, { id: Date.now(), text: task, completed: false }]);
    setTask("");
    setMessage("✅ Task added!");
    setMsgType("success");

    setTimeout(() => setMessage(""), 1500);

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
    setTodo(updatedTodos);
  };

  return (
    <div className="bg-bg-secondary px-4 sm:px-8 md:px-12 lg:px-24 py-36 md:mx-20 flex flex-col items-center gap-10">
      <div className="text-center space-y-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-7xl text-brand-electric-blue">
          Task Manager
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-md mx-auto">
          Your daily todo list
        </p>
      </div>

      <div className="w-full max-w-3xl bg-bg-primary rounded-3xl px-6 py-10 flex flex-col gap-5 shadow-md">
        {todo.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-2 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <input
                onChange={() => toggleComplete(index)}
                checked={item.completed}
                type="checkbox"
                className="w-5 h-5"
              />
              <span
                className={`text-sm sm:text-base text-[#3C434A] ${
                  item.completed ? "line-through" : ""
                }`}
              >
                {item.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(index)}
              className="px-3 py-1 cursor-pointer text-xs sm:text-sm text-[#FC4B4B] border border-[#FC4B4B] rounded"
            >
              X delete
            </button>
          </div>
        ))}

        {message && (
          <p
            className={`text-sm font-medium ${
              msgType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="border border-[#9E9E9E] rounded-2xl px-4 py-2">
          <input
            value={task}
            onChange={handleChange}
            type="text"
            className="w-full h-10 outline-none text-sm sm:text-base"
            placeholder="Add new task"
          />
        </div>

        <button
          onClick={handleAdd}
          className="w-full cursor-pointer sm:w-48 h-11 bg-button-primary text-bg-primary rounded-2xl font-medium"
        >
          Add Task
        </button>

      </div>

    </div>
  );
}

export default TaskManager;
