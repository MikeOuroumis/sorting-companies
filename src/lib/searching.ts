import {Company} from '../domain/company';

export function searchCompanies(arr: Company[], query: string): Company[] {
  const normalizedQuery = query.toLowerCase();
  let results: Company[] = [];

  const startTime = performance.now();

  // Binary search to find the start index of potential matches
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid].name.toLowerCase().startsWith(normalizedQuery)) {
      right = mid - 1;
    } else if (arr[mid].name.toLowerCase() < normalizedQuery) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Perform a linear search from the found position
  for (let i = left; i < arr.length; i++) {
    const normalizedName = arr[i].name.toLowerCase();
    if (normalizedName.startsWith(normalizedQuery)) {
      results.push(arr[i]);
    } else if (normalizedName > normalizedQuery) {
      break; // Early exit since the array is sorted
    }
  }

  const endTime = performance.now();

  const timeTaken = endTime - startTime;
  console.log(`Searching finished in ${timeTaken.toFixed(2)} milliseconds`);

  return results;
}
