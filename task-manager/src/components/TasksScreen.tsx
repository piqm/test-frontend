import React, { useState } from "react";
import { Plus, ArrowLeft, X } from "lucide-react";
import type { Task } from "../types";
import AddTaskModal from "./AddTaskModal";
import { useTasks } from "../context/TaskContext";

const TasksScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { state, dispatch } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      createdAt: new Date(),
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const handleRemoveTask = (taskId: string) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver
          </button>
          <h1 className="text-2xl font-bold">Mis Tareas</h1>
          <div className="w-16"></div> {/* Espaciador */}
        </div>

        {/* Botón para añadir tareas */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full mb-6 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Agregar Nueva Tarea
        </button>

        {/* Lista de tareas */}
        <div className="space-y-3">
          {state.tasks.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No hay tareas agregadas aún.</p>
              <p className="text-sm">¡Agrega tu primera tarea!</p>
            </div>
          ) : (
            state.tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start justify-between"
              >
                <div className="flex-1">
                  <p className="text-gray-800">{task.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Creada: {task.createdAt.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveTask(task.id)}
                  className="ml-4 text-red-500 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Contador de tareas */}
        {state.tasks.length > 0 && (
          <div className="mt-6 text-center text-gray-600">
            Total: {state.tasks.length} tarea
            {state.tasks.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Modal para añadir tareas */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default TasksScreen;
