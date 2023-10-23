import { Account } from '@accounts/shared-models';
import { MatSort, SortDirection } from '@angular/material/sort';

export const sortingAccountManager = <T extends Account>(
  items: T[],
  sort: MatSort
):T[] => {
  if (!sort.active || sort.direction === '') {
    return items;
  }
  return items.sort(sortAlphabetically(sort.active as keyof Account,sort.direction));
}

// sort Alphabetically
const sortAlphabetically =
  <T, K extends keyof T>(property: K, order:SortDirection) =>
  (a: T, b: T) => {

    if(a[property] === b[property]){
      return 0
    }
    return a[property] < b[property] ? (order === 'asc' ? -1 : 1) :(order === 'asc' ? 1 : -1)
  };
