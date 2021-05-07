import Compile from "../Compiler/main";
import { formname } from "../exampleCodes/formname";

test("Testing For loop", () => {
  const expected = ["t", "te", "tes", "test"];
  // const formnamedata = Data(formname);
  var { linebylineOutput } = Compile(formname);
  expect(linebylineOutput).toStrictEqual(expected);
});
