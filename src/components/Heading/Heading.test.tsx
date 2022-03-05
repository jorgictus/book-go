import { render } from "@testing-library/react";
import { Heading } from ".";

test("should render correctly Heading", () => {
  const { getByText } = render(<Heading>Heading</Heading>);
  expect(getByText('Heading')).toBeInTheDocument()
});
