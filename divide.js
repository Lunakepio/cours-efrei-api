export function Divide(a, b){

  if(b === 0){
    throw new Error('Cannot Divide per Zero');
  }
  return a / b;
}