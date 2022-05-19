/* eslint-disable prettier/prettier */
/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Button from "../Button.jsx"

test("Button handles click", () => {
  const handleClick = jest.fn()
  render(<Button value="AC" handleClick={handleClick} />)
  fireEvent.click(screen.getByText("AC"))
  expect(handleClick).toHaveBeenCalled()
})