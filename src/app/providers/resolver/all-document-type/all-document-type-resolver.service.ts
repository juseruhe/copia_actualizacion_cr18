import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Interfaces */
import { IDocumentType } from '@interface/IDocumentType';

@Injectable({
  providedIn: 'root'
})
export class AllDocumentTypeResolverService implements Resolve<IDocumentType[]> {

  private documentTypeList: IDocumentType[] = [
    {id: 'CC', name: 'Cédula de ciudadania'},
    {id: 'TI', name: 'Tarjeta de identidad'},
    {id: 'CE', name: 'Cédula de extranjería'},
    {id: 'PA', name: 'Pasaporte'},
    {id: 'NIT', name: 'NIT'}
  ];

  constructor() { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<IDocumentType[]> {
    return this.documentTypeList;
  }
}
