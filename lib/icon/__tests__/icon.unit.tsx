import React from "react"
import renderer from "react-test-renderer"
import Icon from "../icon"
import {mount} from 'enzyme';

describe('icon', () => {
  it('render的是一个icon up图标', () => {
    const tree = renderer
        .create(<Icon name="up"/>)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click test', () => {
    const fn = jest.fn();
    const iconComponent = mount(<Icon name="up" onClick={fn}/>)
    iconComponent.find('svg').simulate("click");
    expect(fn).toBeCalled();
  })
})