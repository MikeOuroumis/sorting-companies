import {Company} from '../domain/company';
import {searchCompanies} from './searching';

describe('searchCompanies', () => {
  const companies: Company[] = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Amazon'},
    {id: 3, name: 'Facebook'},
    {id: 4, name: 'Google'},
    {id: 5, name: 'Microsoft'},
    {id: 6, name: 'Netflix'},
  ];

  it('should return companies that match the query', () => {
    const result = searchCompanies(companies, 'Go');
    expect(result).toEqual([{id: 4, name: 'Google'}]);
  });

  it('should return an empty array if no companies match the query', () => {
    const result = searchCompanies(companies, 'Zy');
    expect(result).toEqual([]);
  });

  it('should perform a case-insensitive search', () => {
    const result = searchCompanies(companies, 'google');
    expect(result).toEqual([{id: 4, name: 'Google'}]);
  });

  it('should handle an empty array', () => {
    const result = searchCompanies([], 'Go');
    expect(result).toEqual([]);
  });

  it('should handle a query that matches multiple companies', () => {
    const companiesWithPrefix: Company[] = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Amazon'},
      {id: 3, name: 'Facebook'},
      {id: 4, name: 'Google'},
      {id: 5, name: 'GoPro'},
      {id: 6, name: 'Microsoft'},
      {id: 7, name: 'Netflix'},
    ];
    const result = searchCompanies(companiesWithPrefix, 'Go');
    expect(result).toEqual([
      {id: 4, name: 'Google'},
      {id: 5, name: 'GoPro'},
    ]);
  });

  it('should log the execution time', () => {
    console.log = jest.fn();
    searchCompanies(companies, 'Go');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('milliseconds'),
    );
  });
});
