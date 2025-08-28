import { render, waitFor } from "@testing-library/react";
import ElementsListScreen from "../../components/ElementsListScreen";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ElementsListScreen", () => {
  it("should render loading state", () => {
    const { getByText } = render(<ElementsListScreen onBack={() => {}} />);
    expect(getByText("Cargando elementos...")).toBeInTheDocument();
  });

  it("should render elements after fetch", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      status: 200,
      data: [
        { id: "1", name: "Elemento 1" },
        { id: "2", name: "Elemento 2" },
      ],
    });
    const { getByText } = render(<ElementsListScreen onBack={() => {}} />);
    await waitFor(() => {
      expect(getByText("Elemento 1")).toBeInTheDocument();
      expect(getByText("Elemento 2")).toBeInTheDocument();
    });
  });

  it("should render error state", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Error de red"));
    const { getByText } = render(<ElementsListScreen onBack={() => {}} />);
    await waitFor(() => {
      expect(getByText(/Error/)).toBeInTheDocument();
    });
  });
});
