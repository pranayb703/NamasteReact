import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should render a restaurant card", async () => {
  render(<RestaurantCard resObj={MOCK_DATA} />);
  console.log(MOCK_DATA.info.name);
  //console.log(screen.debug()); // Check the rendered component
  //expect(screen.getByRole("restaurant-card")).toHaveProp("resObj", MOCK_DATA);

  const name = await screen.findByText(/King/);

  //   const elements = screen.getAllByText("Burger King");
  //   expect(elements.length).toBeGreaterThan(0);

  expect(name).toBeInTheDocument();
});

//Write a testcase for withDealLabel
