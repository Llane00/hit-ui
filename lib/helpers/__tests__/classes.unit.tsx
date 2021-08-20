import classes from "../classes"

describe('classes', () => {
  it('接受1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  })

  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b')
  })
})
