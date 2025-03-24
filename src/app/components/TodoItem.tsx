interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="flex items-center p-4 border-b">
      <div
        onClick={() => toggleTodo(todo.id)}
        className={`w-6 h-6 flex items-center justify-center border-2 rounded-full cursor-pointer 
          ${todo.completed ? "border-green-500 bg-green-500" : "border-gray-400"}`}
      >
        {todo.completed && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`flex-1 text-xl ml-3 ${todo.completed ? "line-through text-gray-400" : ""}`}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500 text-lg">
        ✖
      </button>
    </li>
  );
};

export default TodoItem;
