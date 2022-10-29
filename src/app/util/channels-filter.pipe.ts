import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'channelsFilter'
  }) 
  export class ChannelsSearchPipe implements PipeTransform {
  
    transform(items: any, searchChannels: any): any[] {
      if(!items) return [];
      if(!searchChannels) return items;
  
      searchChannels = searchChannels.toLowerCase();
  
      return items.filter( (item: any ) => {
          const data=item.name.toLowerCase().includes(searchChannels);
        return data;
      });
    }
  
  }