import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/user/user';
import {environment} from '../../../environments/environment';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MonetizationDashService} from './monetization-dash.service';
import {AlertService} from '../../shared/alert/alert.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: 'monetization-dash.component.html',
  styleUrls: ['./monetization-dash.component.scss'],
})
export class MonetizationDashComponent implements OnInit {
  user$: Observable<User>;
  avatarDefault: string = environment.ApiUrl + 'https://be.mycircle.click/storage/profile_default/default.png';
  inviteForm: FormGroup;
  accountForm: FormGroup;
  confirmInviteForm: FormGroup;
  formMonetizationHide = false;
  dataDashboard;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private monetizationDashService: MonetizationDashService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.dataDashboard = this.activatedRoute.snapshot.data.monetization;
    console.log(this.dataDashboard);
    this.user$ = this.userService.getUserByToken();
    this.inviteForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
    this.confirmInviteForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
    this.accountForm = this.formBuilder.group({
      beneficiario: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      instituicao: ['', [Validators.required]],
      tipoConta: ['', [Validators.required]],
      valor: ['',
        [
          Validators.required
        ]
      ],
      agencia: ['', [Validators.required]],
      conta: ['', [Validators.required]],
    });
  }

  sendInvite(): void {
    this.monetizationDashService.sendInvite(
      this.inviteForm.getRawValue()
    ).subscribe((response) => {
      if (response === 'success'){
        this.inviteForm.reset();
        this.alertService.success('Convite enviado');
      }else{
        this.alertService.danger(response);
      }
    });
  }

  sendDataAccount(): any {
    if (!this.accountForm.get('valor').value.toString().match(/^[0-9]+(\.?[0-9]+)?$/) ){
      return false;
    }
  }
  confirmInvite(): any {
    const value = this.confirmInviteForm.get('userName').value;
    if ( value ){
      this.monetizationDashService.confirmInvite(value)
        .subscribe((response) => {
          this.confirmInviteForm.reset();
          if (response === 'success'){
            this.inviteForm.reset();
            this.formMonetizationHide = true;
            this.alertService.success('Convite do seu amigo confirmado!');
          }else{
            this.alertService.danger(response);
          }
      });
    }
  }

}
