import { Injectable } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Icons} from '../DTO`s/icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) { }
              public registerIcons = () => {
    this.loadIcons(Object.values(Icons), '../../assets/resources/svg')
              }
              private loadIcons = (iconKeys: string[], iconUrl) => {
    iconKeys.forEach( (key) => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`))
    });
              }
}
