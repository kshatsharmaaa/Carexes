// JSON -> Javasccript object Notation
/* const user = {
name = "abc",
age = 25
} // this is a js obj
*/

// json can be used to convert ans obj to a string and vice versa
// const user = '{name="abc", age:"21"}'
function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


// JSON.parse
// JSON.stringify
// JSON.stringify() is used to convert a JavaScript object into a json string
// JSON.parse() is used to convert a json string into a JavaScript object
