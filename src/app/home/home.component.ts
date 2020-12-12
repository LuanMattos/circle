import {Component, OnInit} from '@angular/core';
import {LogService} from '../core/log/log.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
  constructor(
    private logService: LogService
  ) {
  }
  ngOnInit(): void {
    this.logService.logHome();
  }
}
