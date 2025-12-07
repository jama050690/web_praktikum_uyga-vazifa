import { log } from "console";
import path from "path";

// Absolyut path yasang
// path.resolve() yordamida:
//  src, utils, helpers.js degan segmentlardan absolyut manzil yasang.

function masala_7() {
  let res = path.resolve("/src/utils/helpers.js");
  var result = path.isAbsolute("/src/utils/helpers.js");
  console.log(result);
  console.log(res);
}
masala_7();
