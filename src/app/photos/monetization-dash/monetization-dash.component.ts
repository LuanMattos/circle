import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/user/user';
import {environment} from '../../../environments/environment';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  templateUrl: 'monetization-dash.component.html',
  styleUrls: ['./monetization-dash.component.scss'],
})
export class MonetizationDashComponent implements OnInit {
  user$: Observable<User>;
  avatarDefault: string = environment.ApiUrl + 'https://be.mycircle.click/storage/profile_default/default.png';
  inviteForm: FormGroup;
  accountForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUserByToken();
    this.inviteForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
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
    alert('df');
  }

  sendDataAccount(): any {
    if (!this.accountForm.get('valor').value.toString().match(/^[0-9]+(\.?[0-9]+)?$/) ){
      return false;
    }
  }

}
