import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageFileConstraintService {

  constructor() { }

  /**
   * Validate constraints of file to upload
   * @param manageFile: Element reference of file input
   */
  validateConstraints(manageFile: ElementRef, constraints: {type: string, value: number | string[]}[] ): {msg: string, status: boolean} {
    let response: {msg: string, status: boolean} = {msg: '', status: false};
    if (manageFile.nativeElement.files.length === 0) {
      response = {msg: 'Sin archivo seleccionado.', status: true};
      return response;
    }

    for (const constraint of constraints) {
      const validConstraintResponse = this.validateContraint(manageFile, constraint);
      if (validConstraintResponse.status) {
        response = validConstraintResponse;
        break;
      }
    }
    return response;
  }

  /**
   * Validate constraint
   * @param manageFile: Element reference of file input
   * @param constraint: Constraint object of file to upload
   */
  private validateContraint(manageFile: ElementRef, constraint: {type: string, value: number | string[]}): {msg: string, status: boolean} {
    let response;
    switch (constraint.type) {
      case 'max':
        response = this.valideMaxSize(manageFile, constraint.value as number);
        break;
      case 'format':
        response = this.validateFormat(manageFile, constraint.value as string[]);
        break;
      default:
        break;
    }
    return response;
  }

  /**
   * Validate max sise constraint
   * @param manageFile: Element reference of file input
   * @param mb: Megabytes value
   */
  private valideMaxSize(manageFile: ElementRef, mb: number): {msg: string, status: boolean} {
    return { msg: 'El peso máximo permitido son ' + mb + 'MB.', status: (manageFile.nativeElement.files[0].size / 1000000) > mb };
  }

  /**
   * Validate format constraint
   * @param manageFile: Element reference of file input
   * @param formats: Array of format values
   */
  private validateFormat(manageFile: ElementRef, formats: string[]): {msg: string, status: boolean} {
    // let target = manageFile.nativeElement.files[0].name.split('.');
    // target = target[target.length - 1];
    const target = this.getExtension(manageFile.nativeElement.files[0]);
    return { msg: 'No se permiten archivos de tipo ' + target + '.', status: formats.indexOf(target) === -1 };
  }

  /**
   * Get base64 of file target
   * @param file: File object
   */
  public getBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result as string);
      };

      reader.onerror = (error) => {
        reject(false);
      };
    });
  }

  /**
   * Get extension file
   * @param file: File object
   */
  getExtension(file: File | string): string {
    let name;
    if (typeof file === 'string') {
      name = file;
    } else {
      name = file.name;
    }
    const pieces = name.split('.');
    const ext = pieces[pieces.length - 1];
    return ext;
  }

}
