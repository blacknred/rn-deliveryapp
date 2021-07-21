import categories from './categories';
import restaurants from './restaurants';

type ApiMethodArgs = {
  id?: number;
  name?: string;
  categoryId?: number;
};

interface IApiMethods {
  [key: string]: (args?: any) => Promise<any>;
}

export function delay(func: any, ms = 1000) {
  return (t?: ApiMethodArgs) =>
    new Promise(resolve => setTimeout(() => resolve(func(t)), ms));
}

const api: IApiMethods = {
  getCategories: delay(() => categories, 1500),
  getRestaurants: delay(({categoryId}: ApiMethodArgs) => {
    if (!categoryId) {
      return restaurants;
    }
    return restaurants.filter(r => r.categories.includes(categoryId));
  }),
  getRestaurant: delay(({id}: ApiMethodArgs) =>
    restaurants.find(r => r.id === id),
  ),
};

export default api;
