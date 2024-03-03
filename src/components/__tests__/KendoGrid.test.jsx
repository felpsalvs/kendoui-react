import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { KendoGrid } from "../KendoGrid";

jest.mock("../../contexts/MoviesContext", () => ({
  useMovies: jest.fn(() => ({
    dataState: {},
    moviesList: [],
    exportPDF: jest.fn(),
    fetchMovies: jest.fn(),
    gridPDFExportRef: { current: null },
    onDataStateChange: jest.fn(),
  })),
}));

describe("KendoGrid Component", () => {
  it("renders without errors", () => {
    render(<KendoGrid />);
    expect(screen.getByText("Export PDF")).toBeInTheDocument();
  });

  it("renders the 'Export PDF' button", () => {
    render(<KendoGrid />);
    expect(screen.getByText("Export PDF")).toBeInTheDocument();
  });
});
