
export default function flatten(input) {
  let flat = [];
  input.forEach((item) => {
    if (Array.isArray(item))
      flat = flat.concat(flatten(item));
    else
      flat.push(item);
  });
  return flat;
}

let test = [1, [[2, 3.1], 3], 4];

console.log(flatten(test));
