import { render } from "@testing-library/react";
import { Banner} from ".";

it("should render correctly Home Page", () => {
  const { getByTestId } = render(<Banner />);
  expect(getByTestId("Banner")).toBeInTheDocument();
});
