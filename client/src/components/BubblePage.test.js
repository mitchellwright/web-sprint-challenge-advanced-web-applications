import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import { axiosWithAuth as mockAxiosWithAuth } from "../utils/axiosWithAuth";
import { getColorsApi as mockGetColorsApi } from "../utils/getColorsApi";

jest.mock("../utils/getColorsApi");

let mockColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
];

test("Fetches data and renders the bubbles", async () => {
  // mockAxiosWithAuth.mockResolvedValue(mockColors);
  mockGetColorsApi.mockResolvedValueOnce(mockColors);

  // Arrange
  await render(<BubblePage />);
  // Act
  waitFor(() => {
    const color = screen.getByTestId("1");
    expect(color).toEqual(1);
  });
  // Assert
});
