import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

it("should render correctly Logo", () => {
  const { getByText } = render(<Logo />);
  expect(getByText(/bookgo/i)).toBeInTheDocument();
});

it("should render correctly SearchBox", () => {
  const { getByTestId } = render(<SearchBox />);
  expect(getByTestId("searchBoxElement")).toBeInTheDocument();
});

it("should change search text", () => {
  render(<SearchBox />);

  const searchBox = screen.getByRole("SearchInput");
  userEvent.type(searchBox, "teste");
  expect(searchBox).toHaveValue("teste");
});
