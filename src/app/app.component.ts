import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "./core/ux/animations";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent{
  title='App'
  constructor(
    private titleService:Title) {}

  prepareRoute(outlet: RouterOutlet) {
      (outlet.activatedRouteData.title  && this.titleService.setTitle(outlet.activatedRouteData.title))
      return outlet && outlet.activatedRouteData
      && outlet.activatedRouteData.animation;
  }
}
