import { render, fireEvent } from "@testing-library/react";
import TasksScreen from "../../components/TasksScreen";
import type { TaskState } from "../../types";
import { useTasks } from "../../context/TaskContext";

jest.mock("../../App", () => {
  const actual = jest.requireActual("../../App");
  return {
    ...actual,
    useTasks: jest.fn(),
  };
});

describe("TasksScreen", () => {
  const mockDispatch = jest.fn();
  const mockState: TaskState = { tasks: [] };
  (useTasks as jest.Mock).mockReturnValue({
    state: mockState,
    dispatch: mockDispatch,
  });

  it("should render title", () => {
    const { getByText } = render(<TasksScreen onBack={() => {}} />);
    expect(getByText("Mis Tareas")).toBeInTheDocument();
  });

  it("should open modal when button is clicked", () => {
    const { getByText } = render(<TasksScreen onBack={() => {}} />);
    fireEvent.click(getByText("Agregar Nueva Tarea"));
    expect(getByText("Agregar Nueva Tarea")).toBeInTheDocument();
  });
});
