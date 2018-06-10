import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {

  public static readonly COMPANY_NAME: string = 'Bioclimatic Big Pool';
  public static readonly COMPANY_LOGOTYPE_IMAGE_URL: string = '../../../assets/images/Master_Logo_big.svg';
  public static readonly SPLASH_IMAGE_URL: string = '../../../assets/images/splash.jpg';
  public static readonly APPLICATION_VERSION: string = '1.0.0-Demo';

  constructor() {
  }// Constructor

}// ApplicationSettingsService
