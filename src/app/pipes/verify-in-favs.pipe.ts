import { Pipe, PipeTransform } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Pipe({
  name: 'verifyInFavs'
})
export class VerifyInFavsPipe implements PipeTransform {
  constructor(private readonly favsService: FavoritesService) {}

  transform(value: string, trigger: any): boolean {
    const findInFavs = this.favsService.items ? this.favsService.items.filter(item => item.id === value) : [];
    return !!findInFavs.length;
  }
}
