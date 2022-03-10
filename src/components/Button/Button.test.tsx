import { render } from "@testing-library/react";
import { GoBackButton } from "./GoBack";
import { FavoriteButton } from "./Favorite";

it("should render correctly Go Back button", () => {
  const { getByRole } = render(<GoBackButton aria-label="Go back" />);

  expect(
    getByRole("button", {
      name: /go back/i,
    })
  ).toBeInTheDocument();
});

it("should render correctly Favorite button", () => {
  const { getByRole } = render(
    <FavoriteButton aria-label="remove from favorites" />
  );

  expect(
    getByRole("button", {
      name: /remove from favorites/i,
    })
  ).toBeInTheDocument();
});
