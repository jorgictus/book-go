import { render } from "@testing-library/react";
import { HeroText } from ".";

it("should render correctly Home Page", () => {
  const { getByTestId } = render(<HeroText />);
  expect(getByTestId("HeroText")).toBeInTheDocument();
});
