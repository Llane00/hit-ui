import classPrefixMaker from '../classPrefixMaker'

describe('classPrefixMaker', () => {
  const scopedClass = classPrefixMaker('hit-ui-test')

  it('接受1个 className', () => {
    const result = scopedClass('a')
    expect(result).toEqual('hit-ui-test-a')
  })

  it('接受1个 className array', () => {
    const result = scopedClass(['a', 'b'])
    expect(result).toEqual('hit-ui-test-a hit-ui-test-b')
  })

  it('接受一个数组包含undefined和中文 className', () => {
    const result = scopedClass(['a', '测试类'])
    expect(result).toEqual('hit-ui-test-a hit-ui-test-测试类')
  })

  it('接受一个className，且还有extra className', () => {
    const result = scopedClass('a', {
      extra: 'more',
    })
    expect(result).toEqual('hit-ui-test-a more')
  })

  it('接受一个空className数组，且还有extra className', () => {
    const result = scopedClass([], {
      extra: 'more',
    })
    expect(result).toEqual('more')
  })

  it('接受一个空className数组，且还有多个extra className', () => {
    const result = scopedClass([], {
      extra: 'more more2 more3',
    })
    expect(result).toEqual('more more2 more3')
  })

  it('接受一个数组包含undefined和中文 className，且还有extra className', () => {
    const result = scopedClass(['a', '测试类'], {
      extra: 'more',
    })
    expect(result).toEqual('hit-ui-test-a hit-ui-test-测试类 more')
  })

  it('综合测试', () => {
    expect(scopedClass('')).toEqual('hit-ui-test')
    expect(scopedClass('x')).toEqual('hit-ui-test-x')
    expect(scopedClass(['a', { 'a-1': true }])).toEqual(
      'hit-ui-test-a hit-ui-test-a-1'
    )
    expect(scopedClass([{ 'a-1': true }])).toEqual('hit-ui-test-a-1')
    expect(scopedClass([{ 'a-1': true }, { 'a-2': true }])).toEqual(
      'hit-ui-test-a-1 hit-ui-test-a-2'
    )
    expect(scopedClass([{ 'a-1': true }, { 'a-2': false }])).toEqual(
      'hit-ui-test-a-1'
    )
    expect(
      scopedClass([{ 'a-1': true }, { 'a-2': true }], { extra: 'more1 more2' })
    ).toEqual('hit-ui-test-a-1 hit-ui-test-a-2 more1 more2')
    expect(
      scopedClass([{ 'a-1': true }, { 'a-2': false }], { extra: 'more1 more2' })
    ).toEqual('hit-ui-test-a-1 more1 more2')
  })
})
