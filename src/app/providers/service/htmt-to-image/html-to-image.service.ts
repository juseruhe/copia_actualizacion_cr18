import { Injectable } from '@angular/core';
import { toPng } from 'html-to-image';

@Injectable({
  providedIn: 'root'
})
export class HtmlToImageService {

  constructor() { }

  async getPng(query: string) {
    const node = document.querySelector(query);
    const dataUrl = await toPng(node as HTMLElement);
    return dataUrl; 
  }
}
