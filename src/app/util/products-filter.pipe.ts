import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter',
})
export class ProductsSearchPipe implements PipeTransform {
  transform(items: any, searchProducts: any): any[] {
    if (!items) return [];
    if (!searchProducts) return items;

    searchProducts = searchProducts.toLowerCase();

    return items.filter((item: any) => {
      const data = item.name.toLowerCase().includes(searchProducts);
      return data;
    });
  }
}
