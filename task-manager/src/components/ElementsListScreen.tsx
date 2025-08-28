import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowLeft, Loader2, User } from "lucide-react";

interface Element {
  id: string;
  name: string;
  avatar?: string;
}

const ElementsListScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://6172cfe5110a740017222e2b.mockapi.io/elements"
        );
        if (response.status !== 200) {
          throw new Error("Error al cargar los elementos");
        }
        setElements(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    fetchElements();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2
            size={48}
            className="animate-spin text-blue-500 mx-auto mb-4"
          />
          <p className="text-gray-600">Cargando elementos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <button
              onClick={onBack}
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver
            </button>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold">Lista de Elementos</h1>
          <div className="w-16"></div> {/* Espaciador */}
        </div>

        {/* Lista de elementos */}
        <div className="space-y-3">
          {elements.map((element) => (
            <div
              key={element.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                {element.avatar ? (
                  <img
                    src={element.avatar}
                    alt={element.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.setAttribute(
                        "style",
                        "display: flex"
                      );
                    }}
                  />
                ) : null}
                <div
                  className={`w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center ${
                    element.avatar ? "hidden" : ""
                  }`}
                >
                  <User size={24} className="text-blue-600" />
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {element.name}
                </h3>
                <p className="text-sm text-gray-500">ID: {element.id}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contador de elementos */}
        <div className="mt-6 text-center text-gray-600">
          Total: {elements.length} elemento{elements.length !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
};

export default ElementsListScreen;
