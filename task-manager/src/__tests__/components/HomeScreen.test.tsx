import { render, fireEvent } from "@testing-library/react";
import HomeScreen from "../../components/HomeScreen";

describe("HomeScreen", () => {
  it("should render main title", () => {
    const { getByText } = render(
      <HomeScreen onNavigateToTasks={() => {}} onNavigateToList={() => {}} />
    );
    expect(getByText("Task Manager")).toBeInTheDocument();
  });

  it("should call onNavigateToTasks when Tareas button is clicked", () => {
    const onNavigateToTasks = jest.fn();
    const { getByText } = render(
      <HomeScreen
        onNavigateToTasks={onNavigateToTasks}
        onNavigateToList={() => {}}
      />
    );
    fireEvent.click(getByText("Tareas"));
    expect(onNavigateToTasks).toHaveBeenCalled();
  });

  it("should call onNavigateToList when Listado button is clicked", () => {
    const onNavigateToList = jest.fn();
    const { getByText } = render(
      <HomeScreen
        onNavigateToTasks={() => {}}
        onNavigateToList={onNavigateToList}
      />
    );
    fireEvent.click(getByText("Listado"));
    expect(onNavigateToList).toHaveBeenCalled();
  });
});
