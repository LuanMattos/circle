import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from "@angular/core";

import {Photo} from "../../../photos/photo/photo";
import {UserService} from "../../../core/user/user.service";

@Directive({
  selector:'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit{
  @Input() ownedPhoto:Photo;

  constructor(
      private userService:UserService,
      private el:ElementRef,
      private render:Renderer2
  ) {}

  ngOnInit(){
    this.userService.getUser()
      .subscribe(user => {
        if(this.userService.isLogged())
        if(user && user.user_id != this.ownedPhoto.user_id){
          this.render.setStyle(this.el.nativeElement,'display','none');
        }
      })
  }

}
