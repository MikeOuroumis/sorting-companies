import {Company} from '../domain/company';
import {mergeSort} from './sotring';

describe('mergeSort', () => {
  it('should sort an array of companies by their names', () => {
    const companies: Company[] = [
      {id: 4, name: 'Google'},
      {id: 2, name: 'Amazon'},
      {id: 3, name: 'Facebook'},
      {id: 1, name: 'Apple'},
      {id: 6, name: 'Netflix'},
      {id: 5, name: 'Microsoft'},
    ];

    const sortedCompanies = mergeSort(companies);

    expect(sortedCompanies).toEqual([
      {id: 2, name: 'Amazon'},
      {id: 1, name: 'Apple'},
      {id: 3, name: 'Facebook'},
      {id: 4, name: 'Google'},
      {id: 5, name: 'Microsoft'},
      {id: 6, name: 'Netflix'},
    ]);
  });

  it('should handle an empty array', () => {
    const companies: Company[] = [];
    const sortedCompanies = mergeSort(companies);
    expect(sortedCompanies).toEqual([]);
  });

  it('should handle an array with one company', () => {
    const companies: Company[] = [{id: 1, name: 'Apple'}];
    const sortedCompanies = mergeSort(companies);
    expect(sortedCompanies).toEqual([{id: 1, name: 'Apple'}]);
  });

  it('should handle an already sorted array', () => {
    const companies: Company[] = [
      {id: 2, name: 'Amazon'},
      {id: 1, name: 'Apple'},
      {id: 3, name: 'Facebook'},
      {id: 4, name: 'Google'},
      {id: 5, name: 'Microsoft'},
      {id: 6, name: 'Netflix'},
    ];

    const sortedCompanies = mergeSort(companies);

    expect(sortedCompanies).toEqual(companies);
  });

  it('should handle an array with duplicate names', () => {
    const companies: Company[] = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Facebook'},
      {id: 4, name: 'Google'},
      {id: 5, name: 'Google'},
    ];

    const sortedCompanies = mergeSort(companies);

    // Check that the sorted array contains the expected objects
    expect(sortedCompanies).toEqual(
      expect.arrayContaining([
        expect.objectContaining({id: 1, name: 'Apple'}),
        expect.objectContaining({id: 2, name: 'Apple'}),
        expect.objectContaining({id: 3, name: 'Facebook'}),
        expect.objectContaining({id: 4, name: 'Google'}),
        expect.objectContaining({id: 5, name: 'Google'}),
      ]),
    );
  });
});
