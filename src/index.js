export default function flatten(input) {
  if (!Array.isArray(input)) {
    throw new Error('wrong argument type');
  }

  let flat = [];
  input.forEach((item) => {
    if (Array.isArray(item))
      flat = flat.concat(flatten(item));
    else
      flat.push(item);
  });
  return flat;
}
