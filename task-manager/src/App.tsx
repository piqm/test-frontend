import React, { useState } from "react";
import TasksScreen from "./components/TasksScreen";
import ElementsListScreen from "./components/ElementsListScreen";
import HomeScreen from "./components/HomeScreen";
import { TaskProvider } from "./context/TaskContext";
import type { Screen } from "./types";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "tasks":
        return <TasksScreen onBack={() => setCurrentScreen("home")} />;
      case "list":
        return <ElementsListScreen onBack={() => setCurrentScreen("home")} />;
      default:
        return (
          <HomeScreen
            onNavigateToTasks={() => setCurrentScreen("tasks")}
            onNavigateToList={() => setCurrentScreen("list")}
          />
        );
    }
  };

  return (
    <TaskProvider>
      <div className="min-h-screen">{renderScreen()}</div>
    </TaskProvider>
  );
};

export default App;
