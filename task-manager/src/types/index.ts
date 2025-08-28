// Tipos
export interface Task {
  id: string;
  description: string;
  createdAt: Date;
}

export interface Element {
  id: string;
  name: string;
  avatar?: string;
}

export interface TaskState {
  tasks: Task[];
}

export interface TaskAction {
  type: "ADD_TASK" | "REMOVE_TASK";
  payload: Task | string;
}

// Componente principal de la aplicación
export type Screen = "home" | "tasks" | "list";
