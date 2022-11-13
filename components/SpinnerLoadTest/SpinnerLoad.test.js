import { render, screen } from "@testing-library/react";
import SpinnerLoad from "../SpinnerLoad";
import '@testing-library/jest-dom'


describe("Loader animation component", () => {
  it("renders successfully", () => {
    const { container } = render(<SpinnerLoad />);
    expect(container).toMatchSnapshot();
  });
});