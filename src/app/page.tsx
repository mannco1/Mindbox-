"use client";
import { useState } from "react";
import TodoItem from "@/app/components/TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl text-red-300 mt-10 font-thin">todos</h1>
      <div className="w-full max-w-2xl bg-white shadow-lg mt-5 rounded"> {/* Изменено здесь */}
        <input
          className="w-full p-4 text-xl border-b outline-none placeholder-gray-300"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <ul>
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          ))}
        </ul>
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
          <span>{todos.filter(todo => !todo.completed).length} items left</span>
          <div className="space-x-2">
            {["all", "active", "completed"].map(f => (
              <button
                key={f}
                className={`px-2 py-1 ${filter === f ? "border border-gray-400 rounded" : ""}`}
                onClick={() => setFilter(f as any)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <button onClick={clearCompleted} className="hover:underline">Clear completed</button>
        </div>
      </div>
    </div>
  );
}
