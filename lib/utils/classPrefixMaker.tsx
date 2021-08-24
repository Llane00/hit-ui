function classPrefixMaker(prefix:string) {
  return function(classNameString:string) {
    return [prefix, classNameString].filter(Boolean).join('-');
  }
}

export default classPrefixMaker;