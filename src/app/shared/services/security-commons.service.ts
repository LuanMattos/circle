import {Injectable} from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({providedIn:'root'})
export class SecurityCommonsService{

  constructor(
    private sanitizer:DomSanitizer,
  ) {}

  passSecurityUrl( instance ){
    if( instance )
      instance = <string>this.sanitizer.bypassSecurityTrustUrl( instance );
    else
      instance = <string>this.sanitizer.bypassSecurityTrustUrl('');
  }
}
