import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'locationsFilter'
  }) 
  export class LocationsSearchPipe implements PipeTransform {
  
    transform(items: any, searchLocations: any): any[] {
      if(!items) return [];
      if(!searchLocations) return items;
  
      searchLocations = searchLocations.toLowerCase();
  
      return items.filter( (item: any ) => {
          const data=item.name.toLowerCase().includes(searchLocations);
        return data;
      });
    }
  
  }