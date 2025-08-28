import { render, fireEvent } from "@testing-library/react";
import AddTaskModal from "../../components/AddTaskModal";

describe("AddTaskModal", () => {
  it("should render when open", () => {
    const { getByText } = render(
      <AddTaskModal isOpen={true} onClose={() => {}} onAddTask={() => {}} />
    );
    expect(getByText("Agregar Nueva Tarea")).toBeInTheDocument();
  });

  it("should not render when closed", () => {
    const { queryByText } = render(
      <AddTaskModal isOpen={false} onClose={() => {}} onAddTask={() => {}} />
    );
    expect(queryByText("Agregar Nueva Tarea")).toBeNull();
  });

  it("should show error if description is empty", () => {
    const { getByText } = render(
      <AddTaskModal isOpen={true} onClose={() => {}} onAddTask={() => {}} />
    );
    fireEvent.click(getByText("Agregar Tarea"));
    expect(
      getByText("La descripción de la tarea es requerida")
    ).toBeInTheDocument();
  });
});
