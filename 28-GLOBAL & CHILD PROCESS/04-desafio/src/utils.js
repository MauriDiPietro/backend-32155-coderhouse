
export const getMax = (numeros) => {
  const data = numeros.sort((a, b) => {
    if (a >= b) return 1
    return -1
  }); 
  return data[numeros.length - 1];
};


export const getMin = (numeros) => {
  const data = numeros.sort((a, b) => {
    if (a >= b) return 1
    return -1
  });  
  return data[0];
};

export const promedio = (numeros) => {
  let suma = 0;
  numeros.forEach((num) => (suma += num)); 
  return suma / numeros.length; 
};
