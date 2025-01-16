import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadManageService {

  constructor() { }

  /**
   * Download file by ArrayBuffer instnace
   * @param arrayBuffer: ArrayBuffer instance
   * @param filename: File name
   * @param contentType: Mime type of file
   */
  async byArrayBuffer(arrayBuffer: [], filename: string, contentType: string): Promise<boolean> {
    const blob = new Blob(arrayBuffer, { type: contentType });
    const url = window.URL.createObjectURL(blob);
    this.download(url, filename);
    return true;
  }

  /**
   * Download file by ArrayBuffer instnace
   * @param blob: Blob instance
   * @param filename: File name
   */
  async byBuffer(blob: Blob, filename: string): Promise<boolean> {
    const url = window.URL.createObjectURL(blob);
    this.download(url, filename);
    return true;
  }

  /**
   * Download file
   * @param url: Url object
   * @param filename: File name
   */
  private download(url, filename): void {
    const container = document.getElementById('downloadContainer');
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}`;
    container.appendChild(a);
    a.click();
    container.innerHTML = '';
  }

}
