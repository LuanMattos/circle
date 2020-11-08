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
  fromUrl:string;

  @ViewChild('userNameInput') userNameInput:ElementRef;

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

    if(this.loginForm.valid && !this.loginForm.pending)

      this.authService.authenticate(userName,password)
      .subscribe(
        (res)=> {

          this.fromUrl
            ?
            this.router.navigateByUrl(this.fromUrl)
            :
            console.log(this.fromUrl)
            this.router.navigate(['user', userName])
        },
        err=> {
          this.loginForm.reset();

          this.platformDetectionService.isPlatformBrowser()
            && this.userNameInput.nativeElement.focus();

        }
      )
  }

}
