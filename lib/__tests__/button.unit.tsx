import Button from "../button"
import React from "react"
import renderer from "react-test-renderer"
import {mount} from 'enzyme';

describe('button', () => {
  it('是一个div', () => {
    const tree = renderer
        .create(<Button/>)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click test', () => {
    const fn = jest.fn();
    const iconComponent = mount(<Button onClick={fn}/>)
    iconComponent.simulate("click");
    expect(fn).toBeCalled();
  })
})