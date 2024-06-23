export async function fetchFakeCompanies() {
  try {
    const response = await fetch(
      'https://fakerapi.it/api/v1/companies?_locale=en_US&_quantity=10000',
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error('Failed to fetch companies', error);
  }
}
