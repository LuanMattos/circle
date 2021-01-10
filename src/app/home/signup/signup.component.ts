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
  styleUrls: ['./signup.component.scss'],
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;
  classButton = '';

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

  signUp(): void{
    const newUser = this.signupForm.getRawValue() as NewUser;
    if (this.signupForm.valid && !this.signupForm.pending && !this.classButton) {
      this.classButton = 'disabled';
      this.signUpService
        .newUser(newUser)
        .subscribe(
          () => {
            this.alertService.success('Congratulations! Soon you will receive an E-mail with a confirmation code. Don\'t forget to check your spam box.\n');
            this.router.navigate(['']);
          },
          err => {
            this.classButton = '';
            this.alertService.danger(err.message);
          }
        );
    }
  }

}
