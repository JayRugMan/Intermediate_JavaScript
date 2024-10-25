// Format numbers for Currency
const makeMoney = (number) => {
  // Truncate decimal to hudredths then create array of whole and decimal values
  const parts = number.toFixed(2).split(".");

  // In the whole number section, put commas after every third number from the right
  parts[0] = parts[0].match(/.{1,3}(?=(.{3})*$)/g).join(",");

  // Join whole and decimal numbers joined with a '.' and add a '$' sign - returns as string
  return `$${parts.join(".")}`;
}

export { makeMoney };