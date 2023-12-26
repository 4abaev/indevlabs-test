import findMissingNumber from "./missingNumber";

describe('findMissingNumber', () => {
    test('Тест случая с пропущенным числом в середине последовательности', () => {
      const input: number[] = [7, 9, 10, 11, 12];
      const result = findMissingNumber(input);
      expect(result).toBe(8);
    });
  
    test('Тест случая с отсутствия пропусков', () => {
        const input: number[] = [7, 9, 8, 10, 11, 12];
        const result = findMissingNumber(input);
        expect(result).toBe(6);
    });

    test('Тест случая с пустым массивом', () => {
      const input: number[] = [];
      const result = findMissingNumber(input);
      expect(result).toBe(0);
    });
  
    test('Тест случайной последовательности с пропущенным числом', () => {
      const input: number[] = [9, 3, 7, 2, 0, 5, 6, 8];
      const result = findMissingNumber(input);
      expect(result).toBe(1);
    });
  
    test('Тест большой последовательности с пропущенным числом', () => {
      const input: number[] = Array.from({ length: 1000000 }, (_, i) => i + 1);
      input.splice(500000, 1);
      const result = findMissingNumber(input);
      expect(result).toBe(500001);
    });
  });