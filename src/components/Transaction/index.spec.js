import React from "react";
import { render } from "@testing-library/react";
import Transaction from ".";

describe("Transaction component", () => {
  let props;

  beforeEach(() => {
    props = {
      transaction: {
        value: 23,
        comment: "test",
        date: "01.01.2020",
      },
    };
  });

  it("should show transaction", () => {
    const { container } = render(<Transaction {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should show 2 zeros after amount", () => {
    const { getByTestId } = render(<Transaction {...props} />);
    const valueElement = getByTestId("transaction-value");
    expect(valueElement.textContent).toBe("23.00");
  });
});
