function toCamelCase(str) {
  let camel = str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  return camel;
}

console.log(toCamelCase("the-stealth-warrior"));
