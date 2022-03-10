import { render } from "@testing-library/react";
import { Card } from ".";

describe("Card Component", () => {
  it("should render correctly Card", () => {
    const { getByText } = render(
      <Card title={"Titulo"} authors={["Test"]} imageLink={"Image"} />
    );

    expect(getByText(/titulo/i)).toBeInTheDocument();

    expect(getByText(/test/i)).toBeInTheDocument();
  });
});
