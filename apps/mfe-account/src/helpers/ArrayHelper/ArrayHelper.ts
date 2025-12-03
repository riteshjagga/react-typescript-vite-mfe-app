export function removeFalseyValues<T>(items: T[]) {
  return items.filter(
    (item) => item !== undefined && item !== null && item !== false
  );
}
