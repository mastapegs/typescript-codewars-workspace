import { booleanToString } from "./boolean_to_string";

describe("solution", function () {
  it('When we pass in true, we want the string "true" as output', function () {
    expect(booleanToString(true)).toEqual("true");
  });
  it('When we pass in false, we want the string "false" as output', function () {
    expect(booleanToString(false)).toEqual("false");
  });
});
