import { render, fireEvent } from "@testing-library/react";
import Modal from "../../components/Modal";

describe("Modal", () => {
  it("should render children when open", () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Contenido</div>
      </Modal>
    );
    expect(getByText("Contenido")).toBeInTheDocument();
  });

  it("should not render when closed", () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Contenido</div>
      </Modal>
    );
    expect(queryByText("Contenido")).toBeNull();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Contenido</div>
      </Modal>
    );
    fireEvent.click(getByRole("button"));
    expect(onClose).toHaveBeenCalled();
  });
});
