import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {UserService} from '../../../core/user/user.service';

@Directive({
  selector: '[itemOwnerOnly]'
})
export class ItemOwnerOnlyDirective implements OnInit{
  @Input() ownedItem;

  constructor(
      private userService: UserService,
      private el: ElementRef,
      private render: Renderer2
  ) {}

  ngOnInit(): void{
    this.userService.getUserByToken()
      .subscribe(user => {
        if (this.userService.isLogged()){
          if (user && (user.user_id !== this.ownedItem.user_id)) {
            this.render.setStyle(this.el.nativeElement, 'display', 'none');
            }
          }
        }
      );
  }

}
