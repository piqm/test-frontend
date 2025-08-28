import React, { createContext, useContext, useReducer } from "react";
import type { TaskAction, TaskState } from "../types";
import { taskReducer } from "../reducers/taskReducer";

interface TaskContextType {
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
}

// Contexto para la gestión del estado tipo Redux
const TaskContext = createContext<TaskContextType | null>(null);

// export const TaskContext = createContext<{
//   state: TaskState;
//   dispatch: React.Dispatch<TaskAction>;
// } | null>(null);

// Componente del proveedor de tareas
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook personalizado para usar el contexto de tareas
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within TaskProvider");
  }
  return context;
};
