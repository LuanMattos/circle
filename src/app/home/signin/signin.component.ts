import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import User = firebase.User;
import {AngularFireAuth} from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  loginForm: FormGroup;
  authInvalid: string;
  fromUrl: string;
  blockSubmited: boolean = false;
  userData: any;
  public readonly authState$: Observable<User | null> = this.afAuth.authState;


  @ViewChild('userNameInput') userNameInput: ElementRef;
  submitInput: ElementRef;

  constructor(
    public  afAuth: AngularFireAuth,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectionService: PlatformDetectorService
    ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  async login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.blockSubmited = true;

    if (this.loginForm.valid && !this.loginForm.pending)

      var result = await this.afAuth.signInWithEmailAndPassword(userName, password).catch(
        e => {
          this._snackBar.open('Wrong passwordor user', 'Error', {
            duration: 4000,
          });
        }
      );
    console.log(result);









      // this.authService.authenticate(userName,password)
      // .subscribe(
      //   (res)=> {
      //     this.authInvalid = '';
      //     this.fromUrl
      //       ?
      //       this.router.navigateByUrl(this.fromUrl)
      //       :
      //
      //       this.router.navigate(['timeline', userName])
      //   },
      //   err=> {
      //     this.authInvalid = 'Usuário / senha incorreto(s)';
      //     this.platformDetectionService.isPlatformBrowser()
      //       && this.userNameInput.nativeElement.focus();
      //     this.blockSubmited = false;
      //   }
      // )
  }

}
