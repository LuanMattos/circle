import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


import {fieldsSignupValidator} from '../../shared/validators/fields-signup.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';
import {NewUser} from './new-user.interface';
import {SignupService} from './signup.service';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';
import {userNamePassword} from '../../shared/validators/fields-signin.validator';
import {AlertService} from '../../shared/alert/alert.service';


@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit, AfterViewInit {

  signupForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(
    private userNotTakenValidator: UserNotTakenValidatorService,
    private formBuilder: FormBuilder,
    private signUpService: SignupService,
    private router: Router,
    private platformDetectionService: PlatformDetectorService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          this.userNotTakenValidator.checkUserEmailTaken()
        ]
      ],
      userName: [
        '',
        [
          fieldsSignupValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[a-z0-9_\-]+$/)
        ],
        [
          this.userNotTakenValidator.checkUserNameTaken()
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
          ]
        ]
      },
      {
        validator: userNamePassword
      }
    );
  }

  ngAfterViewInit(): void {
    this.platformDetectionService.isPlatformBrowser()
    && this.inputEmail.nativeElement.value;
  }

  signUp(): void{
    const newUser = this.signupForm.getRawValue() as NewUser;
    if (this.signupForm.valid && !this.signupForm.pending)
    this.signUpService
      .newUser(newUser)
      .subscribe(
        () => {
          this.alertService.success('Parabéns! Logo você receberá um E-mail com um código de confirmação. Não esqueça de verificar sua caixa de spam.');
          this.router.navigate(['']);
        },
        err => {
            this.alertService.danger(err.message);
        }
      );
  }

}
