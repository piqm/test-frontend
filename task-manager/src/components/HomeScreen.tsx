import React from "react";
import { Plus, User } from "lucide-react";

const HomeScreen: React.FC<{
  onNavigateToTasks: () => void;
  onNavigateToList: () => void;
}> = ({ onNavigateToTasks, onNavigateToList }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600">
            Gestiona tus tareas y explora elementos
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onNavigateToTasks}
            className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Plus size={24} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Tareas</h2>
                <p className="text-gray-600">Administra tu lista de tareas</p>
              </div>
            </div>
          </button>

          <button
            onClick={onNavigateToList}
            className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <User size={24} className="text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Listado</h2>
                <p className="text-gray-600">Explora elementos remotos</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
