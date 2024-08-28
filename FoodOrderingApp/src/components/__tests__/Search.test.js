import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should render body with Restaurant list and check with search Input  ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = await screen.getByText("Search");

  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {
    target: { value: "burger" },
  });

  fireEvent.click(searchBtn);
  //Screen should load six cards

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
});
