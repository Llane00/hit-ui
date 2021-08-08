import Button from "../Button"
import React from "react"
import renderer from "react-test-renderer"

describe('button', () => {
  it('是一个div', () => {
    const tree = renderer
        .create(<Button/>)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})