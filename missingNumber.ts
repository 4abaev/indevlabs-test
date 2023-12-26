function findMissingNumber(arr: number[]): number {  
      
  // на случай пустого массива
  if (arr.length === 0) {
    return 0;
  }

  // Сначала отсортируем массив чисел
  arr.sort((a, b) => a - b);

  // Затем найдем первое пропущенное число
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (arr[i - arr[0]] !== i) {
      return i;
    }
  }
  // Если пропущенное число не найдено, то возвращаем длину массива
  return arr.length;
}

export default findMissingNumber;
