import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      { id: 1, name: 'Food', price: '$10.00' },
      { id: 2, name: 'Clothes', price: '$10.00' },
      { id: 3, name: 'Sparkling Water', price: '$10.00' },
      { id: 4, name: 'KAle', price: '$10.00' }
    ];
    return {orders};
  }
}
