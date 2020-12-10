import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SpinnerService} from '../shared/spinner/spinner.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {slideInAnimation} from '../core/ux/animations';

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ConfirmationComponent implements OnInit{
  isSpinnerVisibile$: Observable<boolean> = this.spinnerService.isNavigationPending$;
  userName: string;
  confirmationForm: FormGroup;

  constructor(
    private spinnerService: SpinnerService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void{
    this.userName = this.activatedRoute.snapshot.params.userName;

    this.confirmationForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }
  save(): void{

  }
}
