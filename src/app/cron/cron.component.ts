import {Component, OnInit} from '@angular/core';
import {CronService} from './cron.service';

@Component({
  selector: 'app-cron',
  templateUrl: './empty.component.html'
})
export class CronComponent implements OnInit {
  constructor(
    private cronService: CronService
  ) {
  }

  ngOnInit(): void{
    this.cronService.sendEmailLembreteZero().subscribe();
  }
}
