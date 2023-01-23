const stringMatching = (value) => {
  const openBracket = value.indexOf('{');
  const closeBracket = value.indexOf('}');
  const duplicated = value
    .split('')
    .filter((item, index) => value.indexOf(item) !== index)
    .filter((item) => item === '{' || item === '}');

  if (duplicated.length > 0) {
    return false;
  }

  return openBracket < closeBracket || value.length === 0;
};

const testCase1 = stringMatching('{}');
const testCase2 = stringMatching('}{');
const testCase3 = stringMatching('');
const testCase4 = stringMatching('{123...123}');
const testCase5 = stringMatching('{}}');
const testCase6 = stringMatching('{{}');

console.log(`
  test case 1: ${testCase1}
  test case 2: ${testCase2}
  test case 3: ${testCase3}
  test case 4: ${testCase4}
  test case 5: ${testCase5}
  test case 6: ${testCase6}
`);
