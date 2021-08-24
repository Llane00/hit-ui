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

  it('接受undefined className', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a')
  })

  it('接受undefined和中文 className', () => {
    const result = classes('a', undefined, '测试类');
    expect(result).toEqual('a 测试类')
  })
})
