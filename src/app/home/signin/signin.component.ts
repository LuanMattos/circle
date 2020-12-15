import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';

import {AuthService} from '../../core/auth/auth.service';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  loginForm: FormGroup;
  authInvalid: string;
  fromUrl: string;
  blockSubmited: boolean = false;

  @ViewChild('userNameInput') userNameInput: ElementRef;
  submitInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectionService: PlatformDetectorService,
  ) {}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
     this.authService.stopRefreshTokenTimer();
  }

  login(): void{
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.blockSubmited = true;

    if ( this.loginForm.valid && !this.loginForm.pending)

      this.authService.authenticate(userName, password)
      .subscribe(
        (res) => {
          this.authInvalid = '';
          const verification = res.body?.user_code_verification;
          if (verification){
            this.router.navigate(['confirmation', userName]);
          }else{
            this.router.navigate(['timeline', userName]);
          }
          this.authInvalid = res.body;
          this.blockSubmited = false;
          this.platformDetectionService.isPlatformBrowser()
          && this.userNameInput.nativeElement.focus();
        }
      );
  }

}
