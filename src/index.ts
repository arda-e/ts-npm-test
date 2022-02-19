export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const id = (birthYear: number, name: string, lastName: string, isCoder: boolean): string => {
  let str = `${birthYear} -  ${name} ${lastName} - Coder : ${isCoder}`
  return str
}
