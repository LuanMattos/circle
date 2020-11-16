import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";

@Component({
  templateUrl:'./signin.component.html'
})
export class SignInComponent implements OnInit{

  loginForm:FormGroup;
  authInvalid:string;
  fromUrl:string;
  blockSubmited:boolean = false;

  @ViewChild('userNameInput') userNameInput:ElementRef;
  submitInput:ElementRef;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private platformDetectionService:PlatformDetectorService
    ) {}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
        userName:['',Validators.required],
        password:['',Validators.required]
    });
  }

    login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.blockSubmited = true;

    if(this.loginForm.valid && !this.loginForm.pending)

      this.authService.authenticate(userName,password)
      .subscribe(
        (res)=> {
          this.authInvalid = '';
          this.fromUrl
            ?
            this.router.navigateByUrl(this.fromUrl)
            :

            this.router.navigate(['timeline', userName])
        },
        err=> {
          this.authInvalid = 'Usuário / senha incorreto(s)';
          this.platformDetectionService.isPlatformBrowser()
            && this.userNameInput.nativeElement.focus();
          this.blockSubmited = false;
        }
      )
  }

}
