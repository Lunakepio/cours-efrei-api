export function modulo(array) {
  if (array.length === 0) {
    return NaN; // Retourne NaN pour un tableau vide
  }
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result %= array[i];
  }
  return result;
}
