// Checks if the field exists, is an array, and has a length greater than 0
export function hasValidArrayField<T>(obj: T, field: keyof T): boolean {
  const value = obj[field];
  return Array.isArray(value) && value.length > 0;
}

// Checks if the value is a number and if it is even
export function isEven(value: number): boolean {
  return typeof value === "number" && value % 2 === 0;
}
