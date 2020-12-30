exports.ids = ["src-app-home-home-module"];
exports.modules = {

/***/ "22EC":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_validators_fields_signup_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/validators/fields-signup.validator */ "IfHE");
/* harmony import */ var _user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-not-taken.validator.service */ "Q3GV");
/* harmony import */ var _shared_validators_fields_signin_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/validators/fields-signin.validator */ "uABi");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.service */ "STsO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/platform-detector/platform-detector.service */ "QynK");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/alert/alert.service */ "/4oc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/vmessage/vmessage.component */ "u/iR");

















const _c0 = ["inputEmail"];
function SignUpComponent_app_vmessage_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 24);
} }
function SignUpComponent_app_vmessage_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 25);
} }
function SignUpComponent_app_vmessage_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 26);
} }
function SignUpComponent_app_vmessage_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 27);
} }
function SignUpComponent_app_vmessage_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 28);
} }
function SignUpComponent_app_vmessage_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 29);
} }
function SignUpComponent_app_vmessage_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 30);
} }
function SignUpComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dispon\u00EDvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_app_vmessage_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 32);
} }
function SignUpComponent_app_vmessage_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 33);
} }
function SignUpComponent_app_vmessage_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 28);
} }
function SignUpComponent_app_vmessage_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 34);
} }
function SignUpComponent_app_vmessage_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 35);
} }
const _c1 = function () { return [""]; };
class SignUpComponent {
    constructor(userNotTakenValidator, formBuilder, signUpService, router, platformDetectionService, alertService) {
        this.userNotTakenValidator = userNotTakenValidator;
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.router = router;
        this.platformDetectionService = platformDetectionService;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ],
                [
                    this.userNotTakenValidator.checkUserEmailTaken()
                ]
            ],
            userName: [
                '',
                [
                    _shared_validators_fields_signup_validator__WEBPACK_IMPORTED_MODULE_2__["fieldsSignupValidator"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9_\-]+$/)
                ],
                [
                    this.userNotTakenValidator.checkUserNameTaken()
                ]
            ],
            fullName: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)
                ]
            ],
            password: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14),
                ]
            ]
        }, {
            validator: _shared_validators_fields_signin_validator__WEBPACK_IMPORTED_MODULE_4__["userNamePassword"]
        });
    }
    ngAfterViewInit() {
        this.platformDetectionService.isPlatformBrowser()
            && this.inputEmail.nativeElement.value;
    }
    signUp() {
        const newUser = this.signupForm.getRawValue();
        if (this.signupForm.valid && !this.signupForm.pending)
            this.signUpService
                .newUser(newUser)
                .subscribe(() => {
                this.alertService.success('Parabéns! Logo você receberá um E-mail com um código de confirmação. Não esqueça de verificar sua caixa de spam.');
                this.router.navigate(['']);
            }, err => {
                this.alertService.danger(err.message);
            });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__["UserNotTakenValidatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_7__["PlatformDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-signup"]], viewQuery: function SignUpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEmail = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__["UserNotTakenValidatorService"]])], decls: 42, vars: 17, consts: [[1, "form", "mt-4", 3, "formGroup", "submit"], ["form", "ngForm"], [1, "form-group"], [1, "w-100"], ["matInput", "", "placeholder", "E-mail", "autofocus", "", "formControlName", "email"], ["inputEmail", ""], ["text", "E-mail j\u00E1 cadastrado", 4, "ngIf"], ["text", "E-mail \u00E9 obrigat\u00F3rio!", 4, "ngIf"], ["text", "E-mail inv\u00E1lido!", 4, "ngIf"], ["matInput", "", "placeholder", "Nome completo", "formControlName", "fullName"], ["text", "Nome completo \u00E9 obrigat\u00F3rio!", 4, "ngIf"], ["matInput", "", "placeholder", "Nome de usu\u00E1rio", "formControlName", "userName"], ["text", "M\u00EDnimo 2 caracteres!", 4, "ngIf"], ["text", "M\u00E1ximo 30 caracteres!", 4, "ngIf"], ["text", "Campo obrigat\u00F3rio!", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], ["text", "Usu\u00E1rio j\u00E1 cadastrado", 4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "password", "formControlName", "password"], ["text", "Senha \u00E9 obrigat\u00F3ria!", 4, "ngIf"], ["text", "M\u00E1ximo 14 caracteres!", 4, "ngIf"], ["text", "Senha e nome de usu\u00E1rio devem ser diferentes", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", 1, "w-100", "bg-dark", "text-white", 3, "disabled"], [1, "p-3"], [1, "ml-2", 3, "routerLink"], ["text", "E-mail j\u00E1 cadastrado"], ["text", "E-mail \u00E9 obrigat\u00F3rio!"], ["text", "E-mail inv\u00E1lido!"], ["text", "Nome completo \u00E9 obrigat\u00F3rio!"], ["text", "M\u00EDnimo 2 caracteres!"], ["text", "M\u00E1ximo 30 caracteres!"], ["text", "Campo obrigat\u00F3rio!"], [1, "text-success"], ["text", "Usu\u00E1rio j\u00E1 cadastrado"], ["text", "Senha \u00E9 obrigat\u00F3ria!"], ["text", "M\u00E1ximo 14 caracteres!"], ["text", "Senha e nome de usu\u00E1rio devem ser diferentes"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_0_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_app_vmessage_8_Template, 1, 0, "app-vmessage", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignUpComponent_app_vmessage_9_Template, 1, 0, "app-vmessage", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignUpComponent_app_vmessage_10_Template, 1, 0, "app-vmessage", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nome completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignUpComponent_app_vmessage_16_Template, 1, 0, "app-vmessage", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nome de usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_app_vmessage_22_Template, 1, 0, "app-vmessage", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignUpComponent_app_vmessage_23_Template, 1, 0, "app-vmessage", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_app_vmessage_24_Template, 1, 0, "app-vmessage", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_small_25_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignUpComponent_app_vmessage_26_Template, 1, 0, "app-vmessage", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignUpComponent_app_vmessage_32_Template, 1, 0, "app-vmessage", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignUpComponent_app_vmessage_33_Template, 1, 0, "app-vmessage", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignUpComponent_app_vmessage_34_Template, 1, 0, "app-vmessage", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SignUpComponent_app_vmessage_35_Template, 1, 0, "app-vmessage", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "J\u00E1 \u00E9 registrado?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("email").errors == null ? null : ctx.signupForm.get("email").errors.usuarioJaCadastrado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("email").errors == null ? null : ctx.signupForm.get("email").errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("email").errors == null ? null : ctx.signupForm.get("email").errors.email) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("fullName").errors == null ? null : ctx.signupForm.get("fullName").errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("userName").errors == null ? null : ctx.signupForm.get("userName").errors.minlength) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("userName").errors == null ? null : ctx.signupForm.get("userName").errors.maxlength) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("userName").errors == null ? null : ctx.signupForm.get("userName").errors.validadorPersonalizado) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("userName").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("userName").errors == null ? null : ctx.signupForm.get("userName").errors.usuarioJaCadastrado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("password").errors == null ? null : ctx.signupForm.get("password").errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("password").errors == null ? null : ctx.signupForm.get("password").errors.minlength) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("password").errors == null ? null : ctx.signupForm.get("password").errors.maxlength) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.errors == null ? null : ctx.signupForm.errors.userNamePassword) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupForm.invalid && !ctx.signupForm.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_13__["VmessageComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: 'signup.component.html',
                providers: [_user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__["UserNotTakenValidatorService"]]
            }]
    }], function () { return [{ type: _user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__["UserNotTakenValidatorService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_7__["PlatformDetectorService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }]; }, { inputEmail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputEmail']
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_log_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/log/log.service */ "fPlr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor(logService) {
        this.logService = logService;
    }
    ngOnInit() {
        this.logService.logHome();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_log_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 1437, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "svg-home", "bg-dark"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "alt", "Image from  Circle - Social Network", "viewBox", "0 0 400 400", "enable-background", "new 0 0 400 400", 0, "xml", "space", "preserve"], ["id", "jjperezaguinaga"], ["id", "countryObjects"], ["fill", "#F15C27", "d", "M124.467,134.068c-2.028,2.304-3.916,4.723-5.74,7.187c-0.104,0.155-0.359,0.16-0.568,0.012l-14.95-10.734\n\t\t\tc-0.208-0.149-0.431-0.462-0.492-0.699c-0.699-2.659-1.231-5.311-1.771-8.085c-0.046-0.243,0.114-0.458,0.359-0.476\n\t\t\tc2.819-0.201,5.698-0.233,8.443-0.247c0.239,0,0.59,0.138,0.781,0.308l13.809,12.168\n\t\t\tC124.531,133.671,124.588,133.925,124.467,134.068z"], ["fill", "#FFFFFF", "points", "109.465,128.355 107.582,126.629 109.685,128.071 \t\t"], ["fill", "#FFFFFF", "points", "109.95,127.335 107.582,126.629 109.983,126.959 \t\t"], ["fill", "#FFFFFF", "d", "M109.84,126.14c-0.774,0.136-1.513,0.311-2.258,0.489l2.092-0.86L109.84,126.14z"], ["fill", "#FFFFFF", "d", "M109.129,125.058l-1.547,1.571c0.38-0.634,0.787-1.249,1.219-1.843L109.129,125.058z"], ["fill", "#FFFFFF", "d", "M107.994,124.383c-0.166,0.732-0.298,1.487-0.412,2.246c-0.016-0.782-0.027-1.573,0.005-2.34\n\t\t\tL107.994,124.383z"], ["fill", "#FFFFFF", "points", "106.726,124.312 107.582,126.629 106.356,124.43 \t\t"], ["fill", "#FFFFFF", "points", "105.703,124.895 107.582,126.629 105.475,125.193 \t\t"], ["fill", "#FFFFFF", "points", "105.189,125.95 107.582,126.629 105.159,126.337 \t\t"], ["fill", "#FFFFFF", "points", "105.323,127.175 107.582,126.629 105.502,127.547 \t\t"], ["fill", "#FFFFFF", "points", "106.073,128.24 107.582,126.629 106.412,128.5 \t\t"], ["fill", "#FFFFFF", "points", "107.229,128.873 107.582,126.629 107.632,128.954 \t\t"], ["fill", "#FFFFFF", "points", "108.472,128.915 107.582,126.629 108.83,128.797 \t\t"], ["fill", "#FFFFFF", "d", "M105.982,128.708c1.341,1.008,3.124,0.926,3.979-0.188c0.83-1.134,0.584-2.828-0.718-3.921\n\t\t\tc-1.27-1.063-3.153-1.063-4.039,0.14C104.294,125.922,104.642,127.698,105.982,128.708z M106.258,128.35\n\t\t\tc-1.105-0.844-1.393-2.31-0.646-3.286c0.733-0.989,2.273-1.002,3.336-0.122c1.074,0.896,1.294,2.308,0.603,3.251\n\t\t\tC108.838,129.121,107.366,129.189,106.258,128.35z"], ["fill", "#E2324B", "d", "M110.884,132.913c-0.336-0.255-0.778-0.236-0.989,0.036c-0.212,0.272-0.109,0.695,0.229,0.944l2.261,1.664\n\t\t\tl0.741-0.955L110.884,132.913z"], ["fill", "#62381B", "d", "M113.064,130.075c-0.327-0.264-0.762-0.255-0.971,0.02c-0.21,0.273-0.113,0.707,0.218,0.965l2.205,1.735\n\t\t\tl0.734-0.96L113.064,130.075z"], ["fill", "#E2324B", "d", "M115.377,127.342c-0.318-0.273-0.757-0.282-0.981-0.02c-0.224,0.264-0.146,0.695,0.176,0.965l2.147,1.807\n\t\t\tl0.785-0.922L115.377,127.342z"], ["fill", "#2D948D", "d", "M115.571,136.443c-0.335-0.253-0.77-0.248-0.971,0.01c-0.201,0.259-0.089,0.67,0.25,0.92l2.26,1.663\n\t\t\tl0.702-0.902L115.571,136.443z"], ["fill", "#E2324B", "d", "M117.635,133.756c-0.327-0.264-0.753-0.267-0.951-0.006c-0.199,0.26-0.092,0.681,0.238,0.94l2.205,1.736\n\t\t\tl0.693-0.908L117.635,133.756z"], ["fill", "#62381B", "d", "M119.826,131.17c-0.318-0.273-0.748-0.294-0.96-0.045c-0.213,0.249-0.124,0.669,0.198,0.94l2.147,1.806\n\t\t\tl0.741-0.87L119.826,131.17z"], ["fill", "#E8D320", "d", "M104.14,122.559c-0.496-0.403-1.187-0.355-1.542,0.106s-0.235,1.156,0.27,1.547l0.763,0.596l1.261-1.642\n\t\t\tL104.14,122.559z"], ["fill", "#E8D320", "d", "M106.461,275.036c-0.349,0.277-0.433,0.754-0.188,1.066c2.043,2.535,4.219,4.961,6.444,7.338\n\t\t\tc0.278,0.279,0.764,0.256,1.084-0.055l4.005-3.871c-2.444-2.554-4.806-5.189-6.999-7.963L106.461,275.036z"], ["fill", "#E2324B", "d", "M110.794,271.563c2.193,2.774,4.557,5.41,7.001,7.961l5.168-4.996c-2.289-2.391-4.504-4.859-6.56-7.459\n\t\t\tL110.794,271.563z"], ["fill", "#E2324B", "d", "M106.249,265.622c1.323,1.861,2.651,3.722,4.097,5.492l5.635-4.465c-1.355-1.656-2.597-3.404-3.841-5.146\n\t\t\tL106.249,265.622z"], ["fill", "#F15C27", "d", "M94.775,273.646c-0.244,0.172-0.312,0.498-0.153,0.729l0.438,0.625c0.168,0.228,0.499,0.269,0.74,0.095\n\t\t\tl1.094-0.787c0.241-0.174,0.57-0.136,0.734,0.086l1.831,2.479c0.16,0.226,0.114,0.543-0.123,0.726l-1.068,0.821\n\t\t\tc-0.236,0.183-0.285,0.509-0.108,0.728l0.475,0.6c0.176,0.222,0.506,0.248,0.74,0.062l10.986-8.703\n\t\t\tc-1.443-1.771-2.771-3.633-4.097-5.49L94.775,273.646z"], ["fill", "#F15C27", "d", "M103.539,281.53c1.147,1.35,2.296,2.699,3.517,3.986l4.103-3.771c-1.167-1.227-2.265-2.518-3.361-3.809\n\t\t\tL103.539,281.53z"], ["fill", "#62381B", "d", "M107.03,285.444c-3.688,2.236-7.458,4.43-11.241,6.52c2.566-3.51,5.191-6.954,7.873-10.336\n\t\t\tC104.76,282.923,105.861,284.214,107.03,285.444z"], ["fill", "#FFFFFF", "points", "118.952,271.771 116.99,273.282 118.739,271.521 \t\t"], ["fill", "#FFFFFF", "points", "118.13,271.157 116.99,273.282 117.789,271.077 \t\t"], ["fill", "#FFFFFF", "points", "116.993,271.104 116.99,273.282 116.614,271.21 \t\t"], ["fill", "#FFFFFF", "points", "115.846,271.622 116.99,273.282 115.531,271.892 \t\t"], ["fill", "#FFFFFF", "points", "115.003,272.583 116.99,273.282 114.842,272.946 \t\t"], ["fill", "#FFFFFF", "points", "114.703,273.739 116.99,273.282 114.739,274.101 \t\t"], ["fill", "#FFFFFF", "points", "115.024,274.788 116.99,273.282 115.246,275.048 \t\t"], ["fill", "#FFFFFF", "points", "115.889,275.419 116.99,273.282 116.243,275.497 \t\t"], ["fill", "#FFFFFF", "points", "117.052,275.454 116.99,273.282 117.432,275.339 \t\t"], ["fill", "#FFFFFF", "points", "118.186,274.903 116.99,273.282 118.492,274.624 \t\t"], ["fill", "#FFFFFF", "points", "118.995,273.915 116.99,273.282 119.147,273.552 \t\t"], ["fill", "#FFFFFF", "points", "119.272,272.769 116.99,273.282 119.233,272.423 \t\t"], ["fill", "#FFFFFF", "d", "M118.603,275.048c1.199-1.112,1.449-2.76,0.603-3.719c-0.83-0.975-2.519-0.912-3.769,0.133\n\t\t\tc-1.25,1.048-1.543,2.734-0.66,3.771C115.679,276.253,117.412,276.153,118.603,275.048z M118.323,274.745\n\t\t\tc-0.989,0.908-2.424,0.996-3.165,0.154c-0.727-0.857-0.483-2.25,0.546-3.123c1.03-0.871,2.427-0.922,3.118-0.111\n\t\t\tC119.524,272.469,119.32,273.825,118.323,274.745z"], ["fill", "#E8D320", "d", "M101.849,273.831c-0.39,0.293-0.494,0.816-0.231,1.172c0.258,0.361,0.802,0.392,1.186,0.097l4.284-3.31\n\t\t\tl-0.912-1.209L101.849,273.831z"], ["fill", "#E8D320", "d", "M100.407,271.882c-0.396,0.283-0.504,0.802-0.241,1.156c0.263,0.355,0.792,0.408,1.184,0.117l4.35-3.221\n\t\t\tl-0.902-1.22L100.407,271.882z"], ["fill", "#FFFFFF", "d", "M106.376,282.931c-0.23,0.203-0.263,0.549-0.061,0.764c0.201,0.217,0.546,0.227,0.774,0.02l2.529-2.274\n\t\t\tl-0.695-0.764L106.376,282.931z"], ["fill", "#FFFFFF", "d", "M105.322,281.696c-0.232,0.199-0.266,0.543-0.073,0.768c0.191,0.226,0.532,0.242,0.764,0.041l2.558-2.243\n\t\t\tl-0.671-0.787L105.322,281.696z"], ["fill", "#FFFFFF", "d", "M112.992,280.753c-0.357,0.332-0.413,0.853-0.124,1.168c0.289,0.314,0.808,0.298,1.16-0.039l2.358-2.243\n\t\t\tl-1.008-1.099L112.992,280.753z"], ["fill", "#FFFFFF", "d", "M110.485,277.969c-0.367,0.317-0.44,0.84-0.164,1.165c0.273,0.328,0.808,0.314,1.169-0.01l2.428-2.166\n\t\t\tl-0.979-1.127L110.485,277.969z"], ["fill", "#FFFFFF", "d", "M108.065,275.104c-0.376,0.309-0.472,0.832-0.199,1.158c0.278,0.325,0.806,0.336,1.18,0.021l2.494-2.088\n\t\t\tl-0.952-1.15L108.065,275.104z"], ["fill", "#62381B", "d", "M121.234,267.339l-0.083,0.072l0.007,0.006l-0.288,0.41c-0.441,0.892-0.27,2.26-0.27,2.262\n\t\t\tc-0.01,0.011,1.33,0.349,2.273,0.019l0.443-0.236l0.008,0.008l0.079-0.071l0.747-0.681l1.736-1.58l-0.336-0.362l-2.271,2.047\n\t\t\tc-0.35,0.313-0.776,0.418-0.953,0.227c-0.181-0.188-0.031-0.602,0.323-0.916l2.29-2.024l-0.224-0.267l-2.297,2.021\n\t\t\tc-0.354,0.311-0.777,0.404-0.947,0.205c-0.168-0.197-0.015-0.607,0.342-0.916l2.314-1.998l-0.343-0.402l-1.829,1.562\n\t\t\tL121.234,267.339z"], ["fill", "#E8D320", "d", "M127.929,269.729c-0.619-0.597-1.168-1.26-1.76-1.885l-2.82,2.59l-0.093,0.086l-0.007-0.008\n\t\t\tc-1.025,0.789-3.277,0.161-3.263,0.141c-0.003-0.004-0.368-2.297,0.548-3.217l-0.008-0.011l0.097-0.079l2.92-2.476\n\t\t\tc-0.608-0.686-1.188-1.396-1.749-2.123l-5.399,4.326c2.056,2.604,4.271,5.07,6.561,7.463L127.929,269.729z"], ["fill", "#62381B", "d", "M116.292,260.702l-0.082,0.06l0.004,0.006l-0.318,0.334c-0.537,0.711-0.653,1.739-0.653,1.739\n\t\t\ts1.018,0.191,1.854-0.116l0.412-0.205l0.003,0.006l0.08-0.062l0.753-0.567l1.744-1.32l-0.195-0.266l-2.276,1.711\n\t\t\tc-0.354,0.266-0.723,0.367-0.825,0.229c-0.104-0.139,0.101-0.465,0.456-0.727l2.289-1.699l-0.139-0.188l-2.292,1.692\n\t\t\tc-0.354,0.262-0.726,0.363-0.829,0.224c-0.103-0.14,0.104-0.462,0.458-0.724l2.305-1.678l-0.211-0.285l-1.814,1.314\n\t\t\tL116.292,260.702z"], ["fill", "#62381B", "d", "M112.188,261.472c1.243,1.737,2.484,3.483,3.839,5.143l5.424-4.299l-1.199-1.521l-2.84,2.16l-0.094,0.072\n\t\t\tl-0.005-0.008c-1.006,0.674-2.688,0.297-2.689,0.295c-0.001-0.002,0.132-1.726,1.068-2.49l-0.005-0.008l0.096-0.068l2.896-2.086\n\t\t\tl-0.82-1.158L112.188,261.472z"], ["fill", "#F15C27", "d", "M111.109,266.483c-0.391,0.291-0.515,0.787-0.278,1.109c0.237,0.321,0.74,0.344,1.13,0.045l2.581-1.98\n\t\t\tl-0.825-1.123L111.109,266.483z"], ["fill", "#F15C27", "d", "M109.871,264.81c-0.396,0.283-0.523,0.772-0.286,1.094c0.237,0.322,0.749,0.35,1.14,0.059l2.619-1.934\n\t\t\tl-0.828-1.119L109.871,264.81z"], ["fill", "#F15C27", "d", "M109.154,266.923c0.301-0.221,0.69-0.198,0.872,0.048c0.183,0.245,0.087,0.627-0.21,0.85\n\t\t\tc-0.298,0.225-0.688,0.203-0.871-0.047C108.76,267.524,108.854,267.144,109.154,266.923z"], ["fill", "#E2324B", "d", "M118.194,280.028c1.581,1.65,3.253,3.201,4.918,4.762l4.829-5.326c-1.558-1.463-3.126-2.916-4.605-4.461\n\t\t\tL118.194,280.028z"], ["fill", "#F15C27", "d", "M108.184,289.817c-0.213,0.207-0.225,0.539-0.026,0.74l0.537,0.541c0.197,0.198,0.528,0.19,0.738-0.021\n\t\t\tl0.95-0.955c0.211-0.211,0.538-0.223,0.73-0.026c0.709,0.743,1.484,1.42,2.226,2.131c0.201,0.188,0.199,0.518-0.004,0.735\n\t\t\tl-0.919,0.984c-0.203,0.219-0.201,0.553,0.004,0.744l0.556,0.522c0.205,0.191,0.533,0.168,0.733-0.051l9.416-10.387\n\t\t\tc-1.665-1.56-3.337-3.111-4.917-4.76L108.184,289.817z"], ["fill", "#E8D320", "d", "M115.188,288.845c-0.336,0.354-0.349,0.883-0.026,1.186c0.321,0.303,0.852,0.258,1.184-0.1l3.686-3.961\n\t\t\tl-1.104-1.037L115.188,288.845z"], ["fill", "#E8D320", "d", "M113.452,287.155c-0.345,0.346-0.371,0.879-0.061,1.193c0.306,0.317,0.85,0.272,1.186-0.076l3.764-3.89\n\t\t\tl-1.075-1.067L113.452,287.155z"], ["fill", "#62381B", "d", "M127.295,273.536l-0.071,0.072l0.004,0.004l-0.261,0.383c-0.422,0.797-0.377,1.838-0.37,1.83\n\t\t\tc0.001,0,1.045,0.012,1.823-0.432l0.373-0.273l0.005,0.004l0.069-0.071l0.649-0.685l1.505-1.588l-0.241-0.225l-1.967,2.061\n\t\t\tc-0.304,0.318-0.653,0.482-0.779,0.365s0.02-0.472,0.326-0.787l1.98-2.051l-0.169-0.156l-1.984,2.045\n\t\t\tc-0.306,0.314-0.664,0.482-0.782,0.357c-0.121-0.125,0.031-0.479,0.342-0.795l1.997-2.033l-0.247-0.25l-1.575,1.594\n\t\t\tL127.295,273.536z"], ["fill", "#62381B", "d", "M123.377,274.964c1.479,1.541,3.046,2.994,4.604,4.457l4.647-5.125l-1.407-1.327l-2.449,2.598l-0.08,0.084\n\t\t\tl-0.006-0.006c-0.883,0.832-2.621,0.756-2.624,0.754c-0.014,0.008-0.138-1.734,0.664-2.646l-0.005-0.004l0.082-0.084l2.517-2.531\n\t\t\tl-0.995-1.006L123.377,274.964z"], ["fill", "#F15C27", "d", "M123.12,280.089c-0.338,0.353-0.376,0.857-0.084,1.13c0.291,0.272,0.796,0.206,1.128-0.15l2.224-2.375\n\t\t\tl-1.014-0.951L123.12,280.089z"], ["fill", "#F15C27", "d", "M121.637,278.63c-0.343,0.347-0.396,0.855-0.116,1.142c0.279,0.285,0.784,0.229,1.126-0.123l2.269-2.336\n\t\t\tl-0.979-0.986L121.637,278.63z"], ["fill", "#F15C27", "d", "M121.253,280.854c0.259-0.267,0.651-0.314,0.874-0.105s0.194,0.597-0.062,0.865\n\t\t\tc-0.257,0.271-0.646,0.316-0.874,0.105C120.965,281.51,120.992,281.122,121.253,280.854z"], ["fill", "#2D948D", "d", "M41.903,198.584l-0.006,0.608c-0.005,0.535,0.365,0.984,0.825,1.005\n\t\t\tc7.396,0.355,14.521,1.205,21.257,2.297c0.456,0.076,0.816-0.233,0.806-0.688c-0.041-1.834,0.022-3.669,0.031-5.503\n\t\t\tc0.002-0.458-0.336-0.771-0.798-0.703c-6.737,0.995-13.85,1.744-21.267,1.99C42.29,197.606,41.909,198.048,41.903,198.584z"], ["fill", "#2D948D", "d", "M99.486,192.356l0.25,0.026c0.139,0.016,0.274-0.242,0.304-0.58c0.098-1.289,0.216-2.576,0.396-3.856\n\t\t\tc0.042-0.335-0.256-0.5-0.666-0.372c-5.291,1.642-11.348,3.272-18.204,4.779c-0.442,0.096-0.815,0.502-0.835,0.903\n\t\t\tc-0.257,3.937-0.219,7.881-0.1,11.82c0.015,0.404,0.404,0.812,0.846,0.918c6.792,1.611,12.883,3.322,18.113,5.045\n\t\t\tc0.406,0.136,0.708-0.026,0.676-0.362c-0.112-1.287-0.289-2.57-0.338-3.863c-0.021-0.336-0.149-0.599-0.288-0.586l-0.251,0.024\n\t\t\tc-5.836,0.439-10.819-2.705-10.773-7.025C88.631,194.903,93.665,191.833,99.486,192.356z"], ["fill", "#2D948D", "d", "M67.169,195.928c-0.018,2.095-0.098,4.189-0.031,6.285c0.011,0.449,0.388,0.877,0.842,0.957\n\t\t\tc3.48,0.636,6.827,1.324,10.03,2.043c0.446,0.099,0.794-0.151,0.785-0.559c-0.105-3.666-0.148-7.337,0.09-11\n\t\t\tc0.019-0.408-0.325-0.662-0.772-0.57c-3.222,0.672-6.584,1.314-10.079,1.896C67.578,195.055,67.191,195.478,67.169,195.928z"], ["fill", "#2D948D", "d", "M41.474,197.614l-0.027,2.545c-0.005,0.533-0.355,0.971-0.785,0.976c-0.431,0.004-0.775-0.435-0.771-0.976\n\t\t\tl0.027-2.569c0.007-0.542,0.36-0.974,0.791-0.963C41.137,196.637,41.48,197.079,41.474,197.614z"], ["fill", "#2D948D", "d", "M38.765,200.782c0.427,0.197,0.811-0.207,0.814-0.75l0.024-2.321c0.006-0.542-0.368-0.954-0.799-0.764\n\t\t\tc-0.795,0.353-1.344,1.07-1.353,1.909C37.444,199.696,37.977,200.421,38.765,200.782z"], ["fill", "#2D948D", "d", "M37.364,199.745l-7.718-0.854c-0.46-0.055-0.459-0.136,0.002-0.182l7.735-0.743\n\t\t\tc0.46-0.042,0.829,0.358,0.823,0.895C38.2,199.396,37.824,199.794,37.364,199.745z"], ["fill", "#F15C27", "d", "M80.706,166.266c-1.572,5.52-2.765,11.145-3.562,16.823l3.004,0.417c0.777-5.539,1.94-11.024,3.475-16.411\n\t\t\tL80.706,166.266z"], ["fill", "#F15C27", "d", "M89.963,185.023l10.649,1.465c0.145-1.125,0.36-2.242,0.528-3.366l-10.594-1.83\n\t\t\tC90.359,182.537,90.124,183.774,89.963,185.023z"], ["fill", "#F15C27", "d", "M92.115,173.806l10.443,2.554c0.267-1.228,0.624-2.433,0.963-3.644l-10.34-2.94\n\t\t\tC92.805,171.115,92.413,172.45,92.115,173.806z"], ["fill", "#F15C27", "points", "90.652,180.642 101.234,182.534 101.467,181.352 90.907,179.333 \t\t"], ["fill", "#F15C27", "points", "91.647,175.745 102.135,178.113 102.418,176.942 91.961,174.449 \t\t"], ["fill", "#F15C27", "d", "M85.068,167.467c-1.533,5.386-2.692,10.869-3.46,16.405l7.864,1.082c0.161-1.253,0.398-2.496,0.587-3.746\n\t\t\tl-0.73-0.127c-2.584-0.428-4.335-2.561-3.879-4.756c0.423-2.201,2.966-3.439,5.463-2.812l0.72,0.176\n\t\t\tc0.3-1.361,0.692-2.704,1.072-4.048L85.068,167.467z"], ["fill", "#F15C27", "d", "M91.083,174.239c-2.15-0.521-4.405,0.419-4.752,2.271c-0.354,1.848,1.207,3.586,3.433,3.974l0.4,0.072\n\t\t\tl0.257-1.314l-0.399-0.077c-0.694-0.132-1.271-0.466-1.645-0.894c-0.373-0.428-0.537-0.933-0.438-1.427\n\t\t\tc0.101-0.496,0.442-0.894,0.951-1.136c0.521-0.239,1.189-0.315,1.878-0.159l0.397,0.089l0.313-1.303L91.083,174.239z"], ["fill", "#F15C27", "d", "M83.365,165.575c-1.87,6.332-3.229,12.807-4.052,19.348l1.722-1.128\n\t\t\tc0.771-5.563,1.936-11.075,3.477-16.484L83.365,165.575z"], ["fill", "#E8D320", "d", "M82.592,165.367c-1.879,6.364-3.243,12.87-4.072,19.444l0.809,0.103\n\t\t\tc0.822-6.531,2.179-12.994,4.045-19.315L82.592,165.367z"], ["fill", "#E8D320", "d", "M88.863,181.877l-0.316,1.951c-0.02,0.111-0.144,0.186-0.279,0.165l-2.375-0.343\n\t\t\tc-0.134-0.021-0.229-0.128-0.21-0.243l0.325-2c0.018-0.115,0.143-0.19,0.276-0.167l2.366,0.396\n\t\t\tC88.786,181.657,88.88,181.766,88.863,181.877z"], ["fill", "#E8D320", "d", "M98.899,183.531l-0.29,1.773c-0.017,0.101-0.14,0.168-0.274,0.146l-7.203-1.044\n\t\t\tc-0.136-0.019-0.231-0.123-0.213-0.232l0.311-1.908c0.019-0.109,0.142-0.179,0.276-0.156l7.178,1.197\n\t\t\tC98.819,183.329,98.916,183.43,98.899,183.531z"], ["fill", "#E8D320", "d", "M91.367,170.427c-0.171,0.637-0.379,1.265-0.518,1.909c-0.025,0.11-0.155,0.172-0.288,0.14l-2.326-0.589\n\t\t\tc-0.131-0.033-0.217-0.152-0.189-0.265c0.143-0.663,0.354-1.306,0.53-1.96c0.03-0.113,0.162-0.173,0.294-0.136l2.312,0.636\n\t\t\tC91.315,170.199,91.397,170.318,91.367,170.427z"], ["fill", "#E8D320", "d", "M101.178,173.113c-0.154,0.58-0.347,1.151-0.471,1.738c-0.024,0.101-0.15,0.154-0.283,0.121l-7.055-1.787\n\t\t\tc-0.134-0.034-0.221-0.148-0.194-0.255c0.135-0.632,0.339-1.247,0.506-1.871c0.03-0.108,0.161-0.163,0.293-0.128l7.015,1.934\n\t\t\tC101.123,172.903,101.206,173.013,101.178,173.113z"], ["fill", "#F15C27", "d", "M89.136,235.317c-0.405,0.127-0.643,0.514-0.529,0.859c0.443,1.426,0.94,2.831,1.468,4.229\n\t\t\tc0.126,0.344,0.549,0.5,0.946,0.352l15.057-5.646l-0.354-0.967l-0.061,0.022c-1.662,0.609-3.24,0.468-3.531-0.315\n\t\t\tc-0.265-0.791,0.896-1.883,2.575-2.435l0.062-0.021l-0.318-0.978L89.136,235.317z"], ["fill", "#E2324B", "d", "M89.951,240.964c-1.441-0.432-2.894-0.891-4.355-1.373c0.84-1.28,1.707-2.543,2.57-3.772\n\t\t\tC88.706,237.552,89.31,239.263,89.951,240.964z"], ["fill", "#69C8C3", "d", "M86.757,239.19c0.086,0.231,0.878,0.184,2.007-0.08l-0.386-1.105\n\t\t\tC87.329,238.499,86.67,238.956,86.757,239.19z"], ["fill", "#E2324B", "d", "M88.074,236.606l0.156,0.483c0.021,0.062-0.021,0.134-0.094,0.158l-2.143,0.715\n\t\t\tc-0.072,0.023-0.147-0.008-0.168-0.071l-0.16-0.494c-0.021-0.062,0.021-0.133,0.093-0.156l2.146-0.705\n\t\t\tC87.979,236.515,88.054,236.544,88.074,236.606z"], ["fill", "#FFFFFF", "d", "M95.016,237.544l0.238,0.65c0.032,0.088-0.029,0.188-0.137,0.229l-3.633,1.334\n\t\t\tc-0.106,0.039-0.22-0.004-0.254-0.092l-0.247-0.676c-0.033-0.092,0.027-0.195,0.135-0.234l3.645-1.301\n\t\t\tC94.869,237.417,94.984,237.458,95.016,237.544z"], ["fill", "#FFFFFF", "d", "M94.487,236.079l0.229,0.652c0.032,0.088-0.029,0.188-0.136,0.227l-3.651,1.283\n\t\t\tc-0.108,0.039-0.222-0.004-0.256-0.094l-0.237-0.68c-0.03-0.091,0.034-0.195,0.142-0.234l3.662-1.248\n\t\t\tC94.347,235.948,94.459,235.989,94.487,236.079z"], ["fill", "#FFFFFF", "d", "M94.007,234.597l0.214,0.657c0.028,0.089-0.037,0.189-0.145,0.228l-3.668,1.231\n\t\t\tc-0.108,0.037-0.221-0.01-0.25-0.1l-0.223-0.684c-0.03-0.093,0.034-0.197,0.143-0.23l3.679-1.201\n\t\t\tC93.866,234.466,93.978,234.507,94.007,234.597z"], ["fill", "#FFFFFF", "d", "M100.199,235.687l0.227,0.617c0.03,0.082-0.032,0.182-0.139,0.221l-3.634,1.334\n\t\t\tc-0.107,0.041-0.221,0.002-0.252-0.084l-0.234-0.646c-0.032-0.086,0.028-0.188,0.137-0.225l3.646-1.301\n\t\t\tC100.057,235.565,100.169,235.603,100.199,235.687z"], ["fill", "#FFFFFF", "d", "M99.697,234.292l0.218,0.619c0.03,0.084-0.031,0.185-0.14,0.219l-3.65,1.285\n\t\t\tc-0.108,0.037-0.222-0.002-0.253-0.09l-0.227-0.643c-0.028-0.088,0.036-0.189,0.145-0.228l3.663-1.252\n\t\t\tC99.559,234.169,99.67,234.206,99.697,234.292z"], ["fill", "#FFFFFF", "d", "M99.24,232.882l0.203,0.625c0.027,0.084-0.038,0.183-0.146,0.22l-3.667,1.233\n\t\t\tc-0.109,0.035-0.22-0.006-0.249-0.094l-0.211-0.65c-0.029-0.088,0.037-0.188,0.146-0.225l3.68-1.199\n\t\t\tC99.103,232.757,99.212,232.798,99.24,232.882z"], ["fill", "#2D948D", "d", "M90.992,224.729c-0.494,0.11-0.812,0.526-0.709,0.928c0.531,2.262,1.137,4.502,1.801,6.728\n\t\t\tc0.107,0.397,0.6,0.6,1.083,0.448l2.83-0.873c-0.793-2.606-1.495-5.239-2.117-7.891L90.992,224.729z"], ["fill", "#2D948D", "d", "M89.848,232.829l1.927,0.531c0.167,0.051,0.265-0.025,0.215-0.17c-0.82-2.697-1.546-5.42-2.19-8.162\n\t\t\tc-0.03-0.152-0.152-0.17-0.271-0.041l-1.398,1.422c-0.114,0.129-0.175,0.359-0.138,0.512c0.436,1.859,0.935,3.703,1.481,5.533\n\t\t\tC89.517,232.604,89.684,232.772,89.848,232.829z"], ["fill", "#E64534", "d", "M93.882,224.069c0.621,2.65,1.322,5.283,2.116,7.889l8.132-2.51c-0.397-1.383-0.814-2.762-1.179-4.154\n\t\t\tl-2.714,0.711c-0.749,0.197-1.469-0.108-1.611-0.688c-0.144-0.576,0.351-1.188,1.103-1.365l2.728-0.656l-0.277-1.121\n\t\t\tL93.882,224.069z"], ["fill", "#FFFFFF", "points", "94.957,230.827 95.075,231.243 93.177,231.812 93.056,231.388 \t\t"], ["fill", "#FFFFFF", "points", "94.767,230.165 94.886,230.577 92.984,231.136 92.863,230.712 \t\t"], ["fill", "#FFFFFF", "points", "94.24,228.337 94.36,228.751 92.449,229.274 92.327,228.853 \t\t"], ["fill", "#FFFFFF", "points", "94.067,227.669 94.171,228.087 92.257,228.597 92.152,228.171 \t\t"], ["fill", "#FFFFFF", "points", "93.612,225.823 93.716,226.243 91.793,226.72 91.687,226.294 \t\t"], ["fill", "#FFFFFF", "points", "93.444,225.153 93.549,225.573 91.624,226.036 91.517,225.61 \t\t"], ["fill", "#FFFFFF", "points", "98.16,229.885 98.274,230.286 96.376,230.854 96.259,230.444 \t\t"], ["fill", "#FFFFFF", "points", "97.976,229.239 98.091,229.642 96.189,230.198 96.071,229.788 \t\t"], ["fill", "#FFFFFF", "points", "97.465,227.469 97.582,227.872 95.67,228.394 95.551,227.983 \t\t"], ["fill", "#FFFFFF", "points", "97.298,226.821 97.398,227.228 95.482,227.737 95.381,227.321 \t\t"], ["fill", "#FFFFFF", "points", "96.856,225.032 96.958,225.438 95.035,225.915 94.932,225.503 \t\t"], ["fill", "#FFFFFF", "points", "96.694,224.382 96.795,224.788 94.869,225.255 94.766,224.839 \t\t"], ["fill", "#69C8C3", "d", "M85.183,214.507c-0.254,0.033-0.435,0.234-0.406,0.447c0.4,3.129,0.932,6.244,1.609,9.326\n\t\t\tc0.045,0.213,0.283,0.342,0.533,0.287l14.81-3.236c-0.641-2.887-1.136-5.807-1.509-8.735L85.183,214.507z"], ["fill", "#E2324B", "d", "M78.142,220.901c0.434,2.734,3.943,4.313,7.835,3.795c-0.729-3.305-1.298-6.641-1.726-9.996\n\t\t\tC80.414,215.515,77.628,218.181,78.142,220.901z"], ["fill", "#E2324B", "d", "M80.478,221.567c-3.156,0.215-6.317,0.404-9.483,0.565c3.036-0.905,6.078-1.786,9.125-2.643\n\t\t\tL80.478,221.567z"], ["fill", "#E2324B", "points", "76.847,219.614 77.355,222.548 79.974,222.063 79.477,219.192 \t\t"], ["fill", "#FFFFFF", "points", "96.847,219.974 96.992,219.944 96.844,219.96 \t\t"], ["fill", "#FFFFFF", "d", "M96.225,215.485c0.618-0.092,1.209-0.021,1.71,0.172l2.836-0.438l-0.053-0.41L96.225,215.485z"], ["fill", "#FFFFFF", "d", "M98.609,219.159c-0.426,0.373-0.971,0.658-1.616,0.785l4.458-0.869l-0.089-0.438L98.609,219.159z"], ["fill", "#FFFFFF", "points", "96.08,215.519 96.225,215.485 96.078,215.51 \t\t"], ["fill", "#FFFFFF", "d", "M94.508,218.058c0-0.002,0.665-1.392,1.652-1.978l-0.081-0.562c-1.522,0.352-2.527,2.717-2.535,2.725\n\t\t\tc0.008,0.006,1.756,1.896,3.3,1.717l-0.115-0.596C95.601,219.142,94.509,218.06,94.508,218.058z"], ["fill", "#FFFFFF", "d", "M96.16,216.081c0.171-0.104,0.353-0.178,0.542-0.225l-0.001-0.01l0.125-0.019l1.107-0.172\n\t\t\tc-0.5-0.191-1.092-0.264-1.71-0.172l-0.145,0.033L96.16,216.081z"], ["fill", "#FFFFFF", "d", "M97.441,219.38l-0.125,0.025l-0.002-0.012c-0.192,0.021-0.389,0.01-0.585-0.029l0.115,0.596l0.148-0.016\n\t\t\tc0.646-0.127,1.19-0.412,1.616-0.785L97.441,219.38z"], ["fill", "#FFFFFF", "d", "M97.524,217.757c-0.548,0.095-0.953,0.398-0.904,0.681c0.048,0.281,0.529,0.428,1.076,0.328l3.65-0.677\n\t\t\tl-0.167-0.971L97.524,217.757z"], ["fill", "#FFFFFF", "d", "M97.281,216.362c-0.55,0.086-0.953,0.385-0.904,0.668c0.049,0.281,0.533,0.434,1.081,0.34l3.659-0.625\n\t\t\tl-0.171-0.973L97.281,216.362z"], ["fill", "#FFFFFF", "d", "M92.725,222.239c-0.252-1.125-0.473-2.254-0.652-3.393l-2.438,0.43c-1.203,0.213-2.034,1.053-1.846,2.152\n\t\t\tc0.235,1.09,1.314,1.563,2.512,1.313L92.725,222.239z M90.246,222.478c-0.988,0.203-1.927-0.15-2.131-1.111\n\t\t\tc-0.169-0.971,0.574-1.646,1.566-1.822l2.112-0.377c0.15,0.968,0.339,1.924,0.553,2.879L90.246,222.478z"], ["fill", "#2D948D", "d", "M89.856,221.265c-0.29,0.057-0.482,0.293-0.432,0.528c0.05,0.24,0.325,0.384,0.614,0.326l1.924-0.391\n\t\t\tl-0.178-0.84L89.856,221.265z"], ["fill", "#2D948D", "d", "M89.621,219.954c-0.29,0.053-0.492,0.287-0.451,0.527s0.309,0.389,0.598,0.334l1.93-0.367l-0.145-0.846\n\t\t\tL89.621,219.954z"], ["fill", "#2D948D", "d", "M88.785,220.894c0.221-0.041,0.423,0.074,0.458,0.256c0.037,0.18-0.109,0.363-0.33,0.406\n\t\t\tc-0.222,0.043-0.432-0.07-0.471-0.254C88.409,221.118,88.564,220.935,88.785,220.894z"], ["fill", "#FFFFFF", "d", "M91.941,218.081c-0.216-1.131-0.372-2.27-0.519-3.412l-2.453,0.334c-1.211,0.164-2.069,0.974-1.925,2.078\n\t\t\tc0.176,1.101,1.253,1.613,2.455,1.41L91.941,218.081z M89.453,218.226c-0.99,0.164-1.93-0.226-2.081-1.195\n\t\t\tc-0.129-0.975,0.635-1.621,1.634-1.758l2.125-0.295c0.126,0.969,0.254,1.938,0.438,2.896L89.453,218.226z"], ["fill", "#2D948D", "d", "M89.107,216.999c-0.292,0.045-0.493,0.273-0.451,0.515c0.042,0.237,0.312,0.395,0.603,0.348l1.938-0.316\n\t\t\tl-0.146-0.846L89.107,216.999z"], ["fill", "#2D948D", "d", "M88.93,215.677c-0.291,0.043-0.501,0.271-0.469,0.514c0.032,0.238,0.294,0.397,0.585,0.354l1.942-0.293\n\t\t\tl-0.113-0.852L88.93,215.677z"], ["fill", "#2D948D", "d", "M88.061,216.585c0.224-0.032,0.423,0.09,0.447,0.273c0.021,0.184-0.134,0.358-0.354,0.395\n\t\t\tc-0.224,0.033-0.428-0.086-0.449-0.272C87.679,216.796,87.839,216.618,88.061,216.585z"], ["fill", "#FFFFFF", "d", "M81.818,222.628c0.108,0.511,0.697,0.832,1.373,0.783l-0.391-2.02\n\t\t\tC82.156,221.597,81.723,222.116,81.818,222.628z"], ["fill", "#FFFFFF", "d", "M81.42,220.337c0.089,0.513,0.664,0.849,1.338,0.812l-0.351-2.027\n\t\t\tC81.761,219.315,81.331,219.823,81.42,220.337z"], ["fill", "#FFFFFF", "d", "M81.029,218.042c0.073,0.517,0.663,0.859,1.336,0.836c-0.129-0.674-0.216-1.354-0.306-2.032\n\t\t\tC81.407,217.024,80.959,217.526,81.029,218.042z"], ["fill", "#FFFFFF", "d", "M79.816,221.812c0.09,0.52,0.665,0.856,1.339,0.815l-0.354-2.059\n\t\t\tC80.154,220.769,79.727,221.29,79.816,221.812z"], ["fill", "#FFFFFF", "d", "M79.415,219.485c0.09,0.52,0.667,0.865,1.343,0.838l-0.355-2.059\n\t\t\tC79.748,218.454,79.325,218.962,79.415,219.485z"], ["fill", "#FFFFFF", "d", "M83.854,223.403c0.106,0.502,0.692,0.812,1.365,0.756l-0.418-1.981\n\t\t\tC84.159,222.388,83.749,222.899,83.854,223.403z"], ["fill", "#FFFFFF", "d", "M83.419,221.153c0.086,0.506,0.659,0.828,1.331,0.787l-0.343-1.998\n\t\t\tC83.762,220.142,83.332,220.647,83.419,221.153z"], ["fill", "#FFFFFF", "d", "M83.029,218.896c0.088,0.506,0.662,0.838,1.339,0.809l-0.346-1.996\n\t\t\tC83.367,217.894,82.941,218.39,83.029,218.896z"], ["fill", "#FFFFFF", "d", "M82.687,216.63c0.068,0.511,0.629,0.854,1.303,0.839l-0.271-2.009\n\t\t\tC83.066,215.635,82.618,216.122,82.687,216.63z"], ["fill", "#E2324B", "d", "M98.192,265.872c-3.744-5.811-7.009-11.932-9.741-18.283c1.497-2.094,3.021-4.118,4.569-6.073\n\t\t\tc3.167,8.053,7.182,15.787,12.061,22.934L98.192,265.872z"], ["fill", "#2D948D", "d", "M114.332,252.128c0.981,1.519,1.905,3.07,2.957,4.539l-11.94,8.174c-2.357,0.396-4.777,0.761-7.156,1.031\n\t\t\tc1.229-2.127,2.486-4.203,3.778-6.229L114.332,252.128z"], ["fill", "#2D948D", "d", "M111.69,247.472c0.825,1.608,1.78,3.145,2.679,4.715l-12.357,7.524c-2.366,0.263-4.759,0.476-7.184,0.64\n\t\t\tc1.305-2.041,2.708-4.066,4.118-6.027L111.69,247.472z"], ["fill", "#62381B", "d", "M94.036,241.219c-0.232,0.092-0.355,0.319-0.277,0.514c1.531,3.957,3.354,7.799,5.315,11.561\n\t\t\tc0.099,0.183,0.355,0.236,0.575,0.119l11.837-6.301c-1.847-3.492-3.527-7.078-4.957-10.764L94.036,241.219z"], ["fill", "#FFFFFF", "d", "M100.938,255.989c-0.434,0.246-0.624,0.721-0.423,1.061c0.2,0.343,0.712,0.419,1.143,0.164l2.879-1.672\n\t\t\tl-0.699-1.19L100.938,255.989z"], ["fill", "#FFFFFF", "d", "M106.239,252.993c-0.434,0.246-0.632,0.705-0.441,1.029c0.189,0.324,0.691,0.383,1.124,0.133l2.878-1.678\n\t\t\tl-0.66-1.121L106.239,252.993z"], ["fill", "#FFFFFF", "d", "M104.045,261.14c-0.42,0.266-0.59,0.754-0.378,1.09c0.212,0.334,0.722,0.385,1.138,0.11l2.787-1.823\n\t\t\tl-0.736-1.166L104.045,261.14z"], ["fill", "#FFFFFF", "d", "M109.182,257.868c-0.42,0.267-0.6,0.742-0.398,1.06c0.2,0.316,0.699,0.352,1.116,0.079l2.787-1.823\n\t\t\tl-0.695-1.103L109.182,257.868z"], ["fill", "#FFFFFF", "d", "M100.392,249.925c0.221,0.451,0.899,0.562,1.516,0.244l4.5-2.303l-0.393-0.801l-5.639,2.824\n\t\t\tL100.392,249.925z"], ["fill", "#FFFFFF", "d", "M100.242,249.618c-0.224-0.451,0.103-1.061,0.725-1.361l4.543-2.217l0.395,0.801l-5.646,2.812\n\t\t\tL100.242,249.618z"], ["fill", "#FFFFFF", "d", "M98.718,246.44c0.205,0.457,0.877,0.592,1.504,0.297l4.576-2.148l-0.363-0.813l-5.732,2.631L98.718,246.44\n\t\t\tz"], ["fill", "#FFFFFF", "d", "M98.578,246.128c-0.206-0.459,0.141-1.055,0.772-1.338l4.617-2.059l0.365,0.815l-5.739,2.617\n\t\t\tL98.578,246.128z"], ["fill", "#FFFFFF", "d", "M97.164,242.899c0.188,0.467,0.855,0.621,1.491,0.346l4.647-1.983l-0.333-0.828l-5.821,2.432\n\t\t\tL97.164,242.899z"], ["fill", "#FFFFFF", "d", "M97.035,242.583c-0.188-0.465,0.179-1.053,0.819-1.311l4.687-1.898l0.335,0.828l-5.826,2.416\n\t\t\tL97.035,242.583z"], ["fill", "#A0BF3B", "d", "M106.783,243.644c0.578,1.19,2.098,1.653,3.487,1.123c-0.758-1.484-1.454-2.996-2.123-4.523\n\t\t\tC106.849,240.974,106.245,242.431,106.783,243.644z"], ["fill", "#E8D320", "d", "M107.914,248.618c0.916,1.74,3.168,2.312,5.175,1.398c-1.22-2.107-2.354-4.267-3.413-6.461\n\t\t\tC107.832,244.681,106.971,246.894,107.914,248.618z"], ["fill", "#A0BF3B", "d", "M103.476,235.714c0.437,1.25,1.936,1.828,3.369,1.414c-0.654-1.532-1.167-3.121-1.75-4.68\n\t\t\tC103.72,233.077,103.028,234.466,103.476,235.714z"], ["fill", "#A0BF3B", "d", "M106.763,236.923c-1.002,0.744-1.447,1.974-1.018,3.035c0.454,1.058,1.667,1.578,2.895,1.375\n\t\t\tC107.961,239.888,107.355,238.407,106.763,236.923z"], ["id", "pisa"], ["fill", "#69C8C3", "d", "M98.803,70.664c-0.266-0.447-0.863-0.557-1.337-0.239c-4.167,2.75-8.183,5.753-12.088,8.916\n\t\t\t\tc-0.444,0.367-0.553,1.005-0.243,1.426l4.449,5.97l1.038-0.847L87.4,81.504l0.305-0.248l-0.323-0.444\n\t\t\t\tc-0.333-0.46-0.295-1.086,0.083-1.396l0.076-0.062c0.379-0.312,0.951-0.186,1.28,0.282l0.317,0.447l0.305-0.244l3.152,4.438\n\t\t\t\tl0.898-0.7l-3.109-4.444l0.312-0.234l-0.31-0.45c-0.322-0.467-0.264-1.085,0.129-1.376l0.076-0.06\n\t\t\t\tc0.393-0.295,0.966-0.148,1.283,0.322l0.306,0.457l0.313-0.234l3.042,4.502l0.911-0.677l-3.012-4.526l0.312-0.232l-0.301-0.458\n\t\t\t\tc-0.312-0.475-0.245-1.096,0.146-1.387l0.079-0.058c0.392-0.291,0.957-0.136,1.264,0.342l0.296,0.464l0.313-0.23l2.946,4.58\n\t\t\t\tl0.92-0.661l-2.9-4.583l0.324-0.218l-0.29-0.465c-0.301-0.479-0.215-1.093,0.189-1.367l0.08-0.053\n\t\t\t\tc0.404-0.273,0.971-0.1,1.265,0.386l0.283,0.468l0.322-0.217l2.833,4.635l1.106-0.738L98.803,70.664z"], ["fill", "#69C8C3", "d", "M99.231,69.736c0.157,0.271,0.058,0.642-0.225,0.829c-4.829,3.195-9.551,6.62-14.031,10.371\n\t\t\t\tc-0.264,0.217-0.628,0.189-0.814-0.061l-0.031-0.042c-0.187-0.25-0.122-0.632,0.145-0.852c4.515-3.774,9.271-7.222,14.134-10.439\n\t\t\t\tc0.282-0.188,0.641-0.124,0.798,0.147L99.231,69.736z"], ["fill", "#69C8C3", "d", "M104.246,77.101c-0.321-0.541-1.021-0.687-1.563-0.325c-4.788,3.113-9.364,6.583-13.794,10.266\n\t\t\t\tc-0.51,0.418-0.61,1.162-0.226,1.656l6.178,7.842l1.166-0.953l-4.637-5.985l0.346-0.283l-0.398-0.523\n\t\t\t\tc-0.414-0.543-0.395-1.272,0.04-1.627l0.085-0.07c0.436-0.355,1.115-0.194,1.521,0.354l0.392,0.53l0.347-0.281l4.53,6.084\n\t\t\t\tl0.994-0.802l-4.483-6.127l0.345-0.279l-0.384-0.537c-0.403-0.561-0.36-1.28,0.091-1.616l0.087-0.065\n\t\t\t\tc0.451-0.333,1.128-0.15,1.519,0.412l0.375,0.538l0.358-0.265l4.351,6.194l1.027-0.753l-4.301-6.237l0.356-0.263l-0.367-0.547\n\t\t\t\tc-0.384-0.565-0.328-1.294,0.12-1.626l0.09-0.065c0.449-0.331,1.115-0.132,1.49,0.44l0.361,0.551l0.357-0.263l4.19,6.331\n\t\t\t\tl1.026-0.747l-4.13-6.357l0.369-0.247l-0.354-0.555c-0.366-0.575-0.286-1.293,0.177-1.604l0.093-0.062\n\t\t\t\tc0.464-0.308,1.128-0.087,1.484,0.494l0.347,0.56l0.367-0.245l4.004,6.431l1.244-0.82L104.246,77.101z"], ["fill", "#69C8C3", "d", "M104.719,76.015c0.19,0.325,0.083,0.761-0.238,0.974c-5.568,3.579-10.867,7.609-15.999,11.904\n\t\t\t\tc-0.302,0.25-0.733,0.212-0.967-0.081l-0.039-0.052c-0.23-0.295-0.171-0.738,0.134-0.989c5.168-4.342,10.532-8.392,16.144-12.009\n\t\t\t\tc0.326-0.215,0.742-0.126,0.933,0.197L104.719,76.015z"], ["fill", "#69C8C3", "d", "M109.448,85.681c-0.329-0.536-1.008-0.696-1.519-0.359c-4.476,2.933-8.747,6.203-12.913,9.643\n\t\t\t\tc-0.479,0.393-0.555,1.103-0.158,1.595l6.323,7.762l1.059-0.917l-4.723-5.9l0.325-0.263l-0.406-0.518\n\t\t\t\tc-0.421-0.534-0.43-1.239-0.021-1.569l0.081-0.064c0.408-0.332,1.073-0.157,1.486,0.387l0.4,0.521l0.325-0.262l4.618,6.001\n\t\t\t\tl0.93-0.743l-4.57-6.044l0.324-0.262l-0.394-0.529c-0.406-0.547-0.404-1.26,0.003-1.587l0.081-0.065\n\t\t\t\tc0.413-0.322,1.084-0.117,1.479,0.434l0.384,0.532l0.335-0.245l4.439,6.114l0.964-0.696l-4.391-6.159l0.335-0.245l-0.376-0.538\n\t\t\t\tc-0.393-0.56-0.366-1.262,0.056-1.572l0.085-0.059c0.422-0.311,1.073-0.099,1.456,0.465l0.37,0.546l0.336-0.245l4.282,6.253\n\t\t\t\tl0.96-0.691l-4.233-6.294l0.335-0.243l-0.363-0.552c-0.381-0.575-0.332-1.271,0.105-1.559l0.086-0.058\n\t\t\t\tc0.436-0.288,1.085-0.054,1.451,0.521l0.354,0.555l0.347-0.229l4.096,6.355l1.165-0.756L109.448,85.681z"], ["fill", "#69C8C3", "d", "M109.865,84.638c0.194,0.32,0.107,0.741-0.194,0.94c-5.235,3.329-10.146,7.169-14.973,11.173\n\t\t\t\tc-0.273,0.245-0.688,0.205-0.924-0.088l-0.041-0.048c-0.235-0.292-0.204-0.728,0.072-0.974c4.88-4.035,9.832-7.918,15.121-11.275\n\t\t\t\tc0.305-0.202,0.71-0.104,0.906,0.216L109.865,84.638z"], ["fill", "#69C8C3", "d", "M121.044,103.783c-0.344-0.519-0.982-0.715-1.425-0.432c-3.779,2.575-7.482,5.318-11.017,8.305\n\t\t\t\tc-0.397,0.348-0.393,1.015,0.017,1.488l7.383,8.443l0.893-0.76l-5.744-6.679l0.27-0.232l-0.423-0.504\n\t\t\t\tc-0.438-0.518-0.527-1.188-0.176-1.471l0.069-0.055c0.355-0.278,0.99-0.076,1.419,0.452l0.415,0.507l0.282-0.221l5.595,6.771\n\t\t\t\tl0.792-0.606l-5.542-6.823l0.28-0.217l-0.41-0.514c-0.424-0.533-0.48-1.19-0.128-1.465l0.071-0.056\n\t\t\t\tc0.353-0.276,0.974-0.062,1.391,0.479l0.403,0.52l0.279-0.218l5.423,6.941l0.784-0.604l-5.367-6.994l0.281-0.214l-0.393-0.523\n\t\t\t\tc-0.408-0.542-0.44-1.192-0.076-1.45l0.072-0.052c0.366-0.26,0.983-0.021,1.386,0.527l0.387,0.531l0.29-0.203l5.214,7.074\n\t\t\t\tl0.816-0.564l-5.159-7.125l0.287-0.203l-0.38-0.536c-0.393-0.557-0.417-1.218-0.053-1.474l0.071-0.05\n\t\t\t\tc0.363-0.258,0.969-0.009,1.354,0.553l0.374,0.542l0.287-0.201l5.034,7.233l0.949-0.658L121.044,103.783z"], ["fill", "#69C8C3", "d", "M121.343,102.837c0.204,0.312,0.16,0.701-0.102,0.868c-4.417,2.913-8.716,6.088-12.757,9.606\n\t\t\t\tc-0.235,0.205-0.628,0.143-0.874-0.141l-0.042-0.048c-0.246-0.282-0.251-0.681-0.01-0.89c4.089-3.553,8.428-6.773,12.9-9.712\n\t\t\t\tc0.264-0.169,0.644-0.052,0.848,0.261L121.343,102.837z"], ["fill", "#69C8C3", "d", "M115.042,94.58c-0.337-0.526-0.996-0.707-1.475-0.395c-4.146,2.747-8.11,5.791-11.998,8.979\n\t\t\t\tc-0.43,0.379-0.455,1.079-0.054,1.562l6.439,7.643l0.978-0.848l-4.839-5.838l0.302-0.247l-0.414-0.509\n\t\t\t\tc-0.429-0.527-0.465-1.203-0.083-1.508l0.075-0.061c0.383-0.305,1.033-0.118,1.453,0.417l0.409,0.516l0.303-0.24l4.709,5.913\n\t\t\t\tl0.865-0.681l-4.661-5.958l0.302-0.242l-0.399-0.521c-0.416-0.539-0.443-1.227-0.062-1.529l0.075-0.059\n\t\t\t\tc0.381-0.304,1.02-0.104,1.427,0.442l0.396,0.528l0.302-0.239l4.556,6.059l0.865-0.672l-4.484-6.074l0.314-0.226l-0.386-0.531\n\t\t\t\tc-0.399-0.553-0.402-1.229-0.007-1.514l0.077-0.057c0.396-0.284,1.03-0.062,1.421,0.497l0.38,0.538l0.312-0.228l4.377,6.172\n\t\t\t\tl0.894-0.633l-4.328-6.213l0.312-0.223l-0.372-0.543c-0.385-0.563-0.377-1.25,0.017-1.532l0.077-0.056\n\t\t\t\tc0.393-0.282,1.034-0.023,1.407,0.54l0.362,0.547l0.323-0.208l4.192,6.275l1.083-0.69L115.042,94.58z"], ["fill", "#69C8C3", "d", "M115.4,93.584c0.2,0.317,0.134,0.722-0.148,0.905c-4.839,3.123-9.447,6.641-13.882,10.418\n\t\t\t\tc-0.256,0.224-0.658,0.173-0.899-0.115l-0.042-0.048c-0.241-0.287-0.227-0.706,0.031-0.934\n\t\t\t\tc4.487-3.809,9.136-7.369,14.028-10.521c0.285-0.184,0.679-0.078,0.879,0.239L115.4,93.584z"], ["fill", "#69C8C3", "d", "M127.997,112.859c-0.384-0.563-1.061-0.806-1.496-0.521c-3.751,2.579-7.508,5.254-10.983,8.29\n\t\t\t\tc-0.401,0.345-0.357,1.035,0.101,1.542c3.25,3.621,6.537,7.2,9.863,10.734l0.773-0.816c-2.662-2.895-5.299-5.819-7.91-8.771\n\t\t\t\tl0.271-0.228l-0.477-0.538c-0.493-0.56-0.615-1.248-0.273-1.537l0.066-0.058c0.341-0.291,1.007-0.063,1.491,0.504l0.469,0.547\n\t\t\t\tl0.27-0.229c2.495,2.942,5.016,5.858,7.561,8.748l0.652-0.701c-2.499-2.89-4.94-5.775-7.375-8.702l0.28-0.213l-0.458-0.553\n\t\t\t\tc-0.475-0.571-0.569-1.256-0.216-1.527l0.071-0.055c0.354-0.271,1.018-0.021,1.483,0.561l0.45,0.562l0.279-0.215l7.023,8.653\n\t\t\t\tl0.688-0.665l-6.872-8.632l0.279-0.213l-0.443-0.565c-0.457-0.587-0.55-1.292-0.188-1.552l0.073-0.049\n\t\t\t\tc0.366-0.254,1.025,0.025,1.473,0.617l0.432,0.573l0.29-0.198l6.499,8.534l0.726-0.627l-6.353-8.506l0.289-0.198l-0.423-0.58\n\t\t\t\tc-0.44-0.603-0.5-1.294-0.136-1.545l0.071-0.051c0.365-0.253,1.007,0.038,1.437,0.646l0.416,0.586l0.288-0.197l6.025,8.436\n\t\t\t\tl0.843-0.746C132.835,119.901,130.399,116.394,127.997,112.859z"], ["fill", "#69C8C3", "d", "M131.418,117.836c-4.022,2.703-8.032,5.552-11.733,8.809l5.796,6.259c3.078-3.363,6.362-6.537,9.84-9.497\n\t\t\t\tL131.418,117.836z"], ["fill", "#62381B", "d", "M148.952,82.071c0.542,1.335,0.438,1.641-0.765,2.231c-0.282,0.14-0.284,0.135,0.004,0.011\n\t\t\tc1.23-0.529,1.52-0.407,2.119,0.902c0.142,0.308,0.136,0.311,0.009-0.003c-0.544-1.337-0.435-1.63,0.792-2.164\n\t\t\tc0.29-0.126,0.291-0.12-0.003-0.01c-1.254,0.471-1.548,0.333-2.148-0.973C148.819,81.758,148.824,81.756,148.952,82.071z"], ["fill", "#62381B", "d", "M123.29,96.888c0.837,1.185,0.778,1.471-0.258,2.313c-0.242,0.202-0.245,0.2,0.007,0.009\n\t\t\tc1.081-0.791,1.415-0.701,2.292,0.429c0.208,0.269,0.204,0.271,0.007-0.005c-0.833-1.177-0.795-1.488,0.271-2.298\n\t\t\tc0.252-0.188,0.253-0.187-0.006-0.01c-1.105,0.753-1.421,0.692-2.306-0.446C123.09,96.613,123.094,96.61,123.29,96.888z"], ["fill", "#E8D320", "d", "M127.104,74.512c1.25,2.292,1.081,2.875-1.228,4.295c-0.543,0.335-0.547,0.327,0.011,0.017\n\t\t\tc2.376-1.315,2.967-1.168,4.329,1.058c0.321,0.523,0.312,0.528,0.017-0.012c-1.253-2.285-1.089-2.876,1.232-4.286\n\t\t\tc0.56-0.307,0.563-0.3-0.009-0.017c-2.379,1.297-2.967,1.16-4.333-1.065C126.801,73.979,126.811,73.974,127.104,74.512z"], ["fill", "#54777B", "d", "M129.942,83.312c0.181,0.311,0.628,0.57,0.896,0.625l1.358-0.79l-2.345-4.051\n\t\t\tC130.783,81.102,129.154,81.944,129.942,83.312z"], ["fill", "#54777B", "d", "M133.455,81.27c0.181,0.311,0.162,0.817,0.097,1.087l-1.359,0.791l-2.344-4.05\n\t\t\tC131.089,80.948,132.661,79.904,133.455,81.27z"], ["fill", "#62381B", "points", "135.036,85.273 132.625,86.675 131.203,84.277 133.665,82.845 \t\t"], ["fill", "#E8D320", "d", "M145.096,89.116c-2.125-4.443-7.497-6.428-11.72-3.926c-4.288,2.391-5.217,8.078-2.43,12.126l1.998,2.979\n\t\t\tc4.396-2.957,9.014-5.571,13.74-7.963L145.096,89.116z"], ["fill", "#FFFFFF", "d", "M144.687,93.445l-1.679-3.243c-1.128-2.187-2.74-3.856-4.466-4.762c-1.739-0.929-3.528-1.008-4.958-0.167\n\t\t\tc-1.426,0.845-2.273,2.4-2.341,4.365c-0.077,1.953,0.566,4.188,1.896,6.259l1.934,3.021l-0.283,0.186l-1.942-3.017\n\t\t\tc-1.368-2.121-2.04-4.409-1.964-6.447c0.054-2.062,0.957-3.737,2.525-4.673c1.569-0.935,3.51-0.809,5.312,0.159\n\t\t\tc1.8,0.945,3.444,2.668,4.597,4.914l1.67,3.248l0,0L144.687,93.445z"], ["fill", "#FFFFFF", "d", "M142.572,94.543l-1.743-3.21c-1.762-3.268-4.111-5.633-5.87-6.097c-0.585-0.162-1.089-0.127-1.494,0.107\n\t\t\tc-0.402,0.234-0.685,0.656-0.833,1.248c-0.149,0.589-0.162,1.34-0.031,2.189c0.256,1.705,1.083,3.811,2.383,5.921l1.88,3.054\n\t\t\tl-0.261,0.169l-1.888-3.049c-1.994-3.215-2.915-6.438-2.419-8.381c0.164-0.648,0.491-1.166,0.993-1.458s1.111-0.321,1.754-0.141\n\t\t\tc0.645,0.179,1.332,0.565,2.029,1.122c1.409,1.137,2.851,2.957,4.042,5.167l1.735,3.214h0.001L142.572,94.543z"], ["fill", "#FFFFFF", "d", "M140.855,95.504l-1.794-3.179c-1.066-1.894-2.16-3.563-3.118-4.797c-0.95-1.234-1.799-2.034-2.243-2.176\n\t\t\tc-0.127-0.043-0.196-0.032-0.235-0.009c-0.038,0.021-0.082,0.075-0.107,0.208c-0.025,0.128-0.025,0.314,0.004,0.55\n\t\t\tc0.062,0.469,0.243,1.117,0.53,1.885c0.574,1.537,1.573,3.558,2.841,5.693l1.83,3.084l-0.27,0.156l-1.838-3.08\n\t\t\tc-1.122-1.88-2.037-3.669-2.644-5.136c-0.603-1.472-0.911-2.592-0.796-3.229c0.035-0.183,0.117-0.349,0.271-0.438\n\t\t\tc0.154-0.088,0.337-0.079,0.513-0.019c0.179,0.062,0.366,0.174,0.573,0.332c0.411,0.312,0.893,0.809,1.423,1.454\n\t\t\tc1.062,1.288,2.318,3.176,3.542,5.358l1.786,3.186v-0.001L140.855,95.504z"], ["fill", "#F15C27", "d", "M148.224,95.641c-4.531,2.296-8.959,4.803-13.176,7.638l-1.792-2.678c4.332-2.915,8.881-5.49,13.538-7.849\n\t\t\tL148.224,95.641z"], ["fill", "#FFFFFF", "d", "M137.793,102.078l-1.062,0.688l-1.109-1.71c-0.224-0.346-0.161-0.782,0.139-0.978\n\t\t\tc0.3-0.194,0.723-0.071,0.942,0.275L137.793,102.078z"], ["fill", "#FFFFFF", "d", "M140.791,100.246l-1.095,0.636l-1.057-1.743c-0.214-0.352-0.135-0.782,0.174-0.961\n\t\t\tc0.31-0.18,0.729-0.038,0.938,0.315L140.791,100.246z"], ["fill", "#FFFFFF", "d", "M143.826,98.477l-1.092,0.638l-1.005-1.775c-0.202-0.357-0.115-0.793,0.193-0.974s0.721-0.036,0.918,0.325\n\t\t\tL143.826,98.477z"], ["fill", "#FFFFFF", "d", "M146.945,96.854l-1.123,0.583l-0.95-1.805c-0.191-0.36-0.09-0.791,0.229-0.955\n\t\t\tc0.317-0.166,0.727-0.001,0.914,0.361L146.945,96.854z"], ["fill", "#54777B", "d", "M151.333,96.312c2.062-0.99,4.158-1.904,6.294-2.722l2.092,5.26c-2.032,0.776-4.024,1.646-5.985,2.588\n\t\t\tL151.333,96.312z"], ["fill", "#54777B", "d", "M150.02,86.745c0.063,0.151,0.242,0.295,0.353,0.337l0.596-0.274l-0.849-1.963\n\t\t\tC150.444,85.802,149.739,86.081,150.02,86.745z"], ["fill", "#54777B", "d", "M151.569,86.072c0.066,0.151,0.041,0.374,0.003,0.487l-0.606,0.248l-0.849-1.963\n\t\t\tC150.573,85.748,151.278,85.415,151.569,86.072z"], ["fill", "#62381B", "points", "152.103,87.953 151.024,88.423 150.513,87.256 151.604,86.782 \t\t"], ["fill", "#E8D320", "d", "M156.342,90.243c-0.829-2.119-3.045-3.219-4.947-2.447c-1.863,0.862-2.583,3.225-1.604,5.281l0.694,1.482\n\t\t\tc2.117-1.016,4.27-1.952,6.462-2.792L156.342,90.243z"], ["fill", "#FFFFFF", "d", "M156.019,92.173l-0.628-1.546c-0.424-1.04-1.073-1.875-1.785-2.375c-0.713-0.501-1.479-0.667-2.127-0.406\n\t\t\tc-0.633,0.293-1.039,0.965-1.162,1.827c-0.123,0.86,0.039,1.905,0.507,2.929l0.682,1.49l-0.136,0.062l-0.684-1.488\n\t\t\tc-0.48-1.046-0.65-2.12-0.522-3.017c0.126-0.897,0.556-1.627,1.252-1.948c0.712-0.288,1.537-0.1,2.275,0.423\n\t\t\tc0.742,0.522,1.405,1.381,1.839,2.45l0.627,1.545L156.019,92.173z"], ["fill", "#FFFFFF", "d", "M155.04,92.567l-0.645-1.539c-0.648-1.564-1.581-2.755-2.323-3.098c-0.245-0.114-0.466-0.141-0.646-0.062\n\t\t\tc-0.179,0.083-0.312,0.255-0.397,0.516c-0.085,0.256-0.118,0.595-0.098,0.988c0.042,0.787,0.302,1.792,0.763,2.824l0.668,1.494\n\t\t\tl-0.125,0.06l-0.671-1.496c-0.704-1.571-0.955-3.083-0.676-3.934c0.093-0.286,0.25-0.499,0.471-0.601\n\t\t\tc0.225-0.097,0.488-0.061,0.76,0.066c0.27,0.125,0.554,0.348,0.836,0.643c0.564,0.593,1.127,1.485,1.567,2.545l0.643,1.54\n\t\t\tL155.04,92.567z"], ["fill", "#FFFFFF", "d", "M154.23,92.892l-0.653-1.534c-0.391-0.914-0.8-1.73-1.166-2.343c-0.365-0.615-0.698-1.031-0.886-1.127\n\t\t\tl-0.099-0.019l-0.052,0.086c-0.017,0.058-0.023,0.142-0.02,0.25c0.009,0.215,0.062,0.519,0.156,0.882\n\t\t\tc0.186,0.729,0.531,1.699,0.987,2.739l0.657,1.499l-0.125,0.061l-0.659-1.5c-0.403-0.917-0.721-1.779-0.92-2.479\n\t\t\tc-0.199-0.7-0.288-1.224-0.218-1.506c0.021-0.081,0.062-0.149,0.129-0.182c0.067-0.033,0.147-0.013,0.22,0.026l0.233,0.188\n\t\t\tc0.166,0.17,0.354,0.424,0.56,0.748c0.411,0.646,0.884,1.569,1.332,2.623l0.651,1.532L154.23,92.892z"], ["fill", "#62381B", "d", "M157.525,93.329c-2.137,0.82-4.233,1.734-6.299,2.725l-0.624-1.334c2.091-1.004,4.214-1.928,6.379-2.759\n\t\t\tL157.525,93.329z"], ["fill", "#FFFFFF", "d", "M152.53,95.695l-0.519,0.239l-0.39-0.847c-0.078-0.17-0.025-0.362,0.12-0.43\n\t\t\tc0.145-0.067,0.325,0.019,0.402,0.188L152.53,95.695z"], ["fill", "#FFFFFF", "d", "M153.97,95.029l-0.518,0.24l-0.379-0.851c-0.076-0.172-0.021-0.364,0.125-0.432s0.323,0.018,0.398,0.189\n\t\t\tL153.97,95.029z"], ["fill", "#FFFFFF", "d", "M155.43,94.412l-0.53,0.212l-0.365-0.856c-0.074-0.173-0.014-0.361,0.135-0.421\n\t\t\tc0.147-0.06,0.327,0.032,0.398,0.207L155.43,94.412z"], ["fill", "#FFFFFF", "d", "M156.902,93.818l-0.528,0.214l-0.354-0.861c-0.071-0.174-0.009-0.363,0.14-0.422\n\t\t\tc0.146-0.061,0.324,0.033,0.395,0.206L156.902,93.818z"], ["fill", "#54777B", "d", "M134.375,106.078c-1.833,1.334-3.713,2.606-5.454,4.059l3.503,4.446c1.654-1.382,3.443-2.59,5.185-3.857\n\t\t\tL134.375,106.078z"], ["fill", "#54777B", "d", "M126.816,100.135c0.099,0.13,0.135,0.356,0.115,0.475l-0.533,0.381l-1.273-1.719\n\t\t\tC125.789,100.034,126.381,99.559,126.816,100.135z"], ["fill", "#54777B", "d", "M125.442,101.118c0.098,0.134,0.306,0.227,0.425,0.255l0.532-0.383l-1.271-1.718\n\t\t\tC125.682,100.122,125.019,100.536,125.442,101.118z"], ["fill", "#62381B", "points", "126.807,102.53 127.765,101.846 127.011,100.818 126.044,101.512 \t\t"], ["fill", "#E8D320", "d", "M126.668,107.347c-1.404-1.761-1.304-4.304,0.372-5.49c1.669-1.195,4.063-0.646,5.354,1.23l0.936,1.345\n\t\t\tc-1.898,1.379-3.843,2.698-5.646,4.2L126.668,107.347z"], ["fill", "#FFFFFF", "d", "M128.493,108.028l-1.021-1.319c-0.688-0.89-1.087-1.872-1.167-2.742c-0.086-0.879,0.164-1.612,0.736-2.014\n\t\t\tc0.565-0.407,1.348-0.425,2.152-0.101c0.805,0.32,1.626,0.982,2.275,1.899l0.947,1.336l0.122-0.088l-0.945-1.336\n\t\t\tc-0.666-0.94-1.507-1.625-2.344-1.961c-0.836-0.336-1.681-0.326-2.305,0.122c-0.631,0.438-0.887,1.241-0.795,2.154\n\t\t\tc0.083,0.906,0.497,1.914,1.203,2.824l1.023,1.317l0,0L128.493,108.028z"], ["fill", "#FFFFFF", "d", "M129.318,107.369l-1.009-1.327c-1.027-1.345-1.6-2.759-1.504-3.547c0.028-0.265,0.123-0.458,0.283-0.572\n\t\t\ts0.376-0.146,0.642-0.09c0.264,0.054,0.573,0.193,0.902,0.408c0.659,0.428,1.397,1.156,2.059,2.071l0.958,1.329l0.113-0.081\n\t\t\tl-0.957-1.329c-1.007-1.397-2.187-2.369-3.061-2.55c-0.292-0.062-0.555-0.032-0.751,0.111c-0.199,0.141-0.309,0.376-0.339,0.668\n\t\t\ts0.011,0.639,0.126,1.031c0.23,0.788,0.725,1.724,1.421,2.636l1.01,1.328L129.318,107.369z"], ["fill", "#FFFFFF", "d", "M130.016,106.847l-1-1.335c-0.595-0.797-1.094-1.558-1.438-2.18c-0.348-0.62-0.536-1.111-0.522-1.316\n\t\t\tl0.033-0.095l0.102-0.002l0.225,0.109c0.181,0.114,0.416,0.312,0.684,0.574c0.536,0.523,1.204,1.31,1.875,2.225l0.967,1.322\n\t\t\tl0.112-0.081l-0.966-1.321c-0.59-0.807-1.177-1.513-1.682-2.038c-0.506-0.521-0.912-0.859-1.19-0.939\n\t\t\tc-0.081-0.021-0.16-0.021-0.222,0.022s-0.086,0.119-0.09,0.201l0.043,0.291c0.062,0.226,0.186,0.513,0.36,0.853\n\t\t\tc0.351,0.674,0.912,1.543,1.597,2.458l1,1.333L130.016,106.847z"], ["fill", "#62381B", "d", "M128.745,109.918c1.757-1.465,3.653-2.749,5.503-4.093l-0.841-1.21c-1.874,1.362-3.794,2.663-5.573,4.146\n\t\t\tL128.745,109.918z"], ["fill", "#FFFFFF", "d", "M133.293,106.783l0.463-0.333l-0.537-0.761c-0.108-0.155-0.301-0.203-0.43-0.11\n\t\t\tc-0.129,0.094-0.146,0.294-0.038,0.446L133.293,106.783z"], ["fill", "#FFFFFF", "d", "M132.005,107.707l0.464-0.333l-0.548-0.752c-0.11-0.151-0.305-0.2-0.435-0.107\n\t\t\tc-0.13,0.094-0.144,0.292-0.034,0.441L132.005,107.707z"], ["fill", "#FFFFFF", "d", "M130.716,108.629l0.463-0.332l-0.558-0.747c-0.112-0.148-0.31-0.196-0.438-0.104\n\t\t\tc-0.129,0.092-0.143,0.288-0.029,0.44L130.716,108.629z"], ["fill", "#FFFFFF", "d", "M129.477,109.617l0.446-0.354l-0.568-0.737c-0.113-0.149-0.308-0.19-0.433-0.09\n\t\t\tc-0.125,0.099-0.131,0.299-0.018,0.446L129.477,109.617z"], ["fill", "#F15C27", "d", "M155.228,100.771c-6.66,3.003-13.02,6.671-18.947,10.933l-4.127-5.743\n\t\t\tc6.312-4.537,13.081-8.442,20.17-11.638L155.228,100.771z"], ["fill", "#E8D320", "d", "M144.869,99.332c-0.798-1.488-3.788-1.011-4.337-1.804l-0.003-0.002v0.001l0,0l0.001,0.001\n\t\t\tc0.409,0.864-1.473,3.257-0.601,4.656l3.075,5.021l4.686-2.706L144.869,99.332z"], ["fill", "#FFFFFF", "d", "M144.04,99.309c-0.456-0.293-1.241-0.433-1.86-0.537c-0.374-0.062-0.729-0.122-1.049-0.21\n\t\t\tc-0.081,0.321-0.206,0.661-0.338,1.019c-0.255,0.695-0.583,1.616-0.414,2.154C141.127,100.382,142.526,99.511,144.04,99.309z"], ["fill", "#62381B", "d", "M145.305,101.647c-0.591-1.073-1.886-1.464-2.896-0.875c-1.011,0.589-1.314,1.91-0.679,2.958l1.886,3.124\n\t\t\tl3.457-2.015L145.305,101.647z"], ["fill", "#E8D320", "d", "M149.687,99.901c-0.389-0.782-1.299-1.108-2.032-0.729c-0.731,0.383-0.99,1.315-0.576,2.084l1.492,2.793\n\t\t\tl2.537-1.318L149.687,99.901z"], ["fill", "#FFFFFF", "d", "M149.708,100.054c0.146-0.088,0.226-0.293,0.089-0.503c-0.121-0.219-0.356-0.227-0.462-0.087\n\t\t\tC149.5,99.622,149.585,99.815,149.708,100.054z"], ["fill", "#FFFFFF", "d", "M149.331,99.47c0.121-0.14,0.087-0.4-0.108-0.528c-0.187-0.132-0.384-0.023-0.416,0.162\n\t\t\tC148.998,99.19,149.187,99.302,149.331,99.47z"], ["fill", "#FFFFFF", "d", "M148.805,99.112c0.044-0.205-0.088-0.409-0.297-0.458c-0.205-0.019-0.339,0.146-0.301,0.347\n\t\t\tC148.408,99.004,148.611,99.031,148.805,99.112z"], ["fill", "#FFFFFF", "d", "M148.207,99.01c-0.03-0.207-0.219-0.355-0.416-0.317c-0.185,0.071-0.25,0.278-0.151,0.466\n\t\t\tC147.82,99.076,148.008,99.026,148.207,99.01z"], ["fill", "#FFFFFF", "d", "M147.644,99.167c-0.096-0.19-0.309-0.262-0.474-0.148c-0.14,0.144-0.132,0.372,0.02,0.521\n\t\t\tC147.318,99.385,147.472,99.263,147.644,99.167z"], ["fill", "#FFFFFF", "d", "M147.195,99.543c-0.144-0.148-0.363-0.139-0.462,0.047c-0.082,0.196,0.012,0.418,0.199,0.5\n\t\t\tC146.98,99.886,147.079,99.705,147.195,99.543z"], ["fill", "#FFFFFF", "d", "M146.939,100.095c-0.171-0.083-0.381,0.015-0.376,0.25c-0.009,0.229,0.188,0.404,0.364,0.388\n\t\t\tC146.875,100.517,146.895,100.296,146.939,100.095z"], ["fill", "#FFFFFF", "d", "M146.935,100.732c-0.181,0.006-0.307,0.206-0.197,0.432c0.093,0.228,0.301,0.282,0.456,0.218\n\t\t\tC147.071,101.141,146.966,100.955,146.935,100.732z"], ["fill", "#62381B", "d", "M149.321,100.092c-0.269-0.531-0.911-0.742-1.436-0.472c-0.523,0.271-0.722,0.921-0.441,1.448l0.082,0.155\n\t\t\tl1.874-0.977L149.321,100.092z"], ["fill", "#FFFFFF", "points", "147.617,101.395 148.93,103.872 150.755,102.924 149.488,100.422 \t\t"], ["fill", "#E8D320", "d", "M153.064,98.293c-0.362-0.796-1.267-1.161-2.018-0.816c-0.752,0.341-1.043,1.261-0.65,2.054l1.399,2.841\n\t\t\tl2.593-1.202L153.064,98.293z"], ["fill", "#FFFFFF", "d", "M153.081,98.445c0.148-0.08,0.236-0.281,0.106-0.494c-0.111-0.222-0.349-0.241-0.461-0.106\n\t\t\tC152.886,98.006,152.965,98.202,153.081,98.445z"], ["fill", "#FFFFFF", "d", "M152.722,97.848c0.126-0.133,0.103-0.394-0.09-0.529c-0.185-0.141-0.385-0.041-0.425,0.14\n\t\t\tC152.397,97.555,152.583,97.675,152.722,97.848z"], ["fill", "#FFFFFF", "d", "M152.206,97.467c0.052-0.199-0.074-0.408-0.283-0.468c-0.204-0.028-0.345,0.13-0.315,0.331\n\t\t\tC151.811,97.341,152.013,97.378,152.206,97.467z"], ["fill", "#FFFFFF", "d", "M151.609,97.338c-0.023-0.206-0.208-0.36-0.407-0.333c-0.187,0.063-0.262,0.266-0.167,0.458\n\t\t\tC151.215,97.387,151.408,97.345,151.609,97.338z"], ["fill", "#FFFFFF", "d", "M151.037,97.469c-0.091-0.196-0.303-0.275-0.472-0.173c-0.145,0.137-0.146,0.364,0,0.519\n\t\t\tC150.701,97.669,150.86,97.555,151.037,97.469z"], ["fill", "#FFFFFF", "d", "M150.571,97.822c-0.139-0.155-0.36-0.155-0.467,0.024c-0.088,0.188-0.003,0.417,0.184,0.506\n\t\t\tC150.342,98.151,150.448,97.977,150.571,97.822z"], ["fill", "#FFFFFF", "d", "M150.293,98.356c-0.171-0.095-0.38,0.005-0.38,0.245c-0.015,0.233,0.173,0.412,0.349,0.396\n\t\t\tC150.215,98.775,150.241,98.553,150.293,98.356z"], ["fill", "#FFFFFF", "d", "M150.269,98.995c-0.179,0.005-0.307,0.208-0.205,0.438c0.084,0.229,0.288,0.287,0.443,0.221\n\t\t\tC150.394,99.413,150.295,99.22,150.269,98.995z"], ["fill", "#62381B", "d", "M152.689,98.466c-0.25-0.542-0.89-0.781-1.426-0.534c-0.536,0.245-0.759,0.88-0.497,1.416l0.077,0.156\n\t\t\tl1.921-0.879L152.689,98.466z"], ["fill", "#FFFFFF", "points", "150.928,99.677 152.158,102.198 154.028,101.342 152.845,98.8 \t\t"], ["fill", "#E8D320", "d", "M137.63,106.914c-0.479-0.722-1.45-0.972-2.124-0.496c-0.668,0.484-0.801,1.454-0.295,2.167l1.826,2.586\n\t\t\tc0.771-0.559,1.537-1.127,2.35-1.624L137.63,106.914z"], ["fill", "#FFFFFF", "d", "M137.669,107.061c0.137-0.101,0.193-0.311,0.031-0.5c-0.146-0.202-0.385-0.188-0.476-0.039\n\t\t\tC137.41,106.657,137.517,106.838,137.669,107.061z"], ["fill", "#FFFFFF", "d", "M137.221,106.526c0.106-0.147,0.042-0.4-0.169-0.506c-0.204-0.11-0.39,0.015-0.401,0.199\n\t\t\tC136.853,106.285,137.056,106.376,137.221,106.526z"], ["fill", "#FFFFFF", "d", "M136.649,106.227c0.021-0.203-0.136-0.393-0.353-0.419c-0.208,0.002-0.324,0.177-0.263,0.372\n\t\t\tC136.236,106.161,136.444,106.167,136.649,106.227z"], ["fill", "#FFFFFF", "d", "M136.035,106.187c-0.056-0.2-0.262-0.326-0.457-0.271c-0.17,0.099-0.209,0.314-0.087,0.489\n\t\t\tC135.655,106.297,135.834,106.219,136.035,106.187z"], ["fill", "#FFFFFF", "d", "M135.496,106.412c-0.119-0.178-0.337-0.218-0.483-0.083c-0.12,0.163-0.083,0.392,0.085,0.519\n\t\t\tC135.205,106.675,135.34,106.533,135.496,106.412z"], ["fill", "#FFFFFF", "d", "M135.104,106.852c-0.161-0.13-0.375-0.088-0.446,0.109c-0.056,0.208,0.064,0.419,0.259,0.475\n\t\t\tC134.938,107.224,135.011,107.03,135.104,106.852z"], ["fill", "#FFFFFF", "d", "M134.925,107.438c-0.179-0.059-0.372,0.069-0.336,0.303c0.021,0.231,0.235,0.379,0.408,0.339\n\t\t\tC134.917,107.87,134.908,107.646,134.925,107.438z"], ["fill", "#FFFFFF", "d", "M135.004,108.079c-0.178,0.031-0.275,0.249-0.14,0.46c0.12,0.212,0.331,0.239,0.476,0.153\n\t\t\tC135.19,108.469,135.063,108.296,135.004,108.079z"], ["fill", "#62381B", "d", "M137.283,107.136c-0.326-0.487-1.016-0.655-1.491-0.304c-0.479,0.346-0.588,1.022-0.246,1.511l0.101,0.144\n\t\t\tc0.573-0.408,1.132-0.837,1.734-1.204L137.283,107.136z"], ["fill", "#FFFFFF", "d", "M135.758,108.645l1.609,2.296c0.558-0.396,1.102-0.814,1.688-1.172l-1.566-2.327\n\t\t\tC136.888,107.808,136.33,108.238,135.758,108.645z"], ["fill", "#E8D320", "d", "M140.769,104.879c-0.459-0.745-1.394-0.982-2.085-0.534c-0.691,0.449-0.863,1.405-0.381,2.135l1.74,2.646\n\t\t\tl2.396-1.556L140.769,104.879z"], ["fill", "#FFFFFF", "d", "M140.804,105.029c0.136-0.101,0.196-0.315,0.041-0.51c-0.138-0.206-0.374-0.192-0.465-0.043\n\t\t\tC140.558,104.617,140.66,104.802,140.804,105.029z"], ["fill", "#FFFFFF", "d", "M140.375,104.48c0.107-0.149,0.05-0.407-0.155-0.516c-0.199-0.113-0.384,0.014-0.399,0.201\n\t\t\tC140.019,104.234,140.216,104.328,140.375,104.48z"], ["fill", "#FFFFFF", "d", "M139.819,104.174c0.026-0.208-0.125-0.398-0.337-0.428c-0.204,0-0.321,0.177-0.267,0.375\n\t\t\tC139.416,104.104,139.619,104.112,139.819,104.174z"], ["fill", "#FFFFFF", "d", "M139.217,104.128c-0.05-0.203-0.25-0.332-0.442-0.275c-0.176,0.089-0.223,0.302-0.105,0.479\n\t\t\tC138.838,104.233,139.021,104.164,139.217,104.128z"], ["fill", "#FFFFFF", "d", "M138.672,104.339c-0.112-0.182-0.33-0.231-0.483-0.104c-0.126,0.155-0.098,0.383,0.066,0.517\n\t\t\tC138.369,104.587,138.51,104.452,138.672,104.339z"], ["fill", "#FFFFFF", "d", "M138.262,104.757c-0.157-0.135-0.375-0.104-0.456,0.091c-0.062,0.204,0.051,0.418,0.245,0.48\n\t\t\tC138.08,105.12,138.16,104.93,138.262,104.757z"], ["fill", "#FFFFFF", "d", "M138.058,105.33c-0.178-0.065-0.377,0.053-0.35,0.286c0.012,0.231,0.221,0.387,0.396,0.354\n\t\t\tC138.033,105.76,138.032,105.537,138.058,105.33z"], ["fill", "#FFFFFF", "d", "M138.112,105.969c-0.179,0.022-0.285,0.233-0.155,0.449c0.11,0.217,0.324,0.251,0.472,0.172\n\t\t\tC138.286,106.363,138.164,106.188,138.112,105.969z"], ["fill", "#62381B", "d", "M140.423,105.104c-0.315-0.506-0.974-0.655-1.468-0.335c-0.495,0.32-0.633,0.987-0.306,1.486l0.097,0.146\n\t\t\tl1.771-1.149L140.423,105.104z"], ["fill", "#FFFFFF", "points", "138.85,106.565 140.383,108.914 142.106,107.793 140.619,105.416 \t\t"], ["fill", "#E8D320", "d", "M162.99,106.831c-9.1,3.6-17.7,8.53-25.347,14.622l-5.038-6.375c8.267-6.582,17.557-11.911,27.39-15.798\n\t\t\tL162.99,106.831z"], ["fill", "#FFFFFF", "d", "M149.078,106.736c-0.792-1.473-2.485-2.048-3.779-1.284c-1.298,0.756-1.652,2.504-0.786,3.91l3.114,5.104\n\t\t\tc1.443-0.813,2.854-1.684,4.309-2.479L149.078,106.736z"], ["fill", "#E8D320", "d", "M149.46,108.612c-0.621-1.134-1.924-1.579-2.917-1.002c-0.992,0.579-1.254,1.938-0.583,3.044l2.136,3.544\n\t\t\tl3.362-1.962L149.46,108.612z"], ["fill", "#F15C27", "d", "M148.996,108.885c-0.438-0.788-1.379-1.088-2.102-0.666c-0.722,0.421-0.932,1.391-0.468,2.165l2.118,3.556\n\t\t\tl2.467-1.44L148.996,108.885z"], ["fill", "#FFFFFF", "d", "M149.903,112.118l-1.604-2.824c-0.136-0.238-0.54-0.359-0.877-0.163c-0.338,0.197-0.436,0.61-0.296,0.849\n\t\t\tl2.091,3.57l1.127-0.657L149.903,112.118z"], ["fill", "#FFFFFF", "d", "M139.279,114.899c-0.646-0.915-1.746-1.241-2.461-0.731c-0.712,0.514-0.748,1.643-0.063,2.541l2.614,3.458\n\t\t\tl2.422-1.732L139.279,114.899z"], ["fill", "#F15C27", "d", "M141.302,118.639l-1.585,1.13l-2.176-2.908c-0.439-0.583-0.421-1.325,0.039-1.654\n\t\t\tc0.46-0.328,1.179-0.112,1.604,0.481L141.302,118.639z"], ["fill", "#FFFFFF", "d", "M143.442,112.088c-0.602-0.944-1.687-1.32-2.424-0.846c-0.735,0.478-0.826,1.603-0.186,2.534l2.445,3.579\n\t\t\tl2.503-1.617L143.442,112.088z"], ["fill", "#F15C27", "d", "M145.283,115.92l-1.639,1.056l-2.034-3.011c-0.41-0.604-0.355-1.344,0.118-1.648\n\t\t\tc0.476-0.306,1.184-0.058,1.579,0.557L145.283,115.92z"], ["fill", "#FFFFFF", "d", "M154.832,105.734c-0.475-0.998-1.532-1.565-2.304-1.143c-0.776,0.408-0.99,1.541-0.476,2.536l1.984,3.854\n\t\t\tc0.885-0.451,1.748-0.949,2.665-1.335L154.832,105.734z"], ["fill", "#F15C27", "d", "M156.18,109.754c-0.599,0.255-1.156,0.595-1.738,0.885l-1.645-3.238c-0.333-0.652-0.196-1.395,0.305-1.655\n\t\t\tc0.495-0.273,1.178,0.083,1.495,0.739L156.18,109.754z"], ["fill", "#FFFFFF", "d", "M159.417,103.675c-0.425-1.019-1.455-1.635-2.246-1.251c-0.796,0.371-1.063,1.494-0.596,2.511l1.798,3.945\n\t\t\tc0.904-0.407,1.791-0.863,2.725-1.208L159.417,103.675z"], ["fill", "#F15C27", "d", "M160.571,107.755c-0.609,0.226-1.183,0.538-1.776,0.801l-1.489-3.314\n\t\t\tc-0.302-0.666-0.128-1.397,0.384-1.637c0.508-0.25,1.172,0.139,1.457,0.811L160.571,107.755z"], ["fill", "#62381B", "d", "M150.134,68.807c-0.116-3.428-0.138-6.822-0.099-10.273c2.195,2.66,4.32,5.349,6.374,8.062\n\t\t\tC154.317,67.332,152.213,68.038,150.134,68.807z"], ["fill", "#F15C27", "d", "M157.563,65.545c-2.983,0.987-5.975,1.977-8.891,3.148l0.749,1.918c2.874-1.156,5.821-2.13,8.761-3.102\n\t\t\tL157.563,65.545z"], ["fill", "#F15C27", "d", "M159.116,72.853c-2.333,0.816-4.686,1.589-6.991,2.478l11.946,31.14c1.732-0.671,3.505-1.235,5.251-1.866\n\t\t\tL159.116,72.853z"], ["fill", "#62381B", "d", "M157.467,67.725c-2.427,0.848-4.872,1.652-7.272,2.576l1.842,4.797c2.31-0.893,4.667-1.664,7.003-2.484\n\t\t\tL157.467,67.725z"], ["fill", "#F15C27", "points", "158.126,71.753 152.269,73.81 151.062,70.613 157.066,68.506 \t\t"], ["fill", "#FFFFFF", "points", "156.903,71.516 153.09,72.848 152.325,70.772 156.2,69.417 \t\t"], ["fill", "#FFFFFF", "points", "160.261,78.269 154.7,80.221 153.492,77.026 159.2,75.022 \t\t"], ["fill", "#62381B", "d", "M160.369,71.812c-3.29,1.031-6.566,2.134-9.761,3.438l0.758,1.916c3.144-1.285,6.37-2.372,9.61-3.387\n\t\t\tL160.369,71.812z"], ["fill", "#62381B", "d", "M156.071,79.267l-0.945,0.33l-0.579-1.555c-0.104-0.274,0.03-0.574,0.296-0.668\n\t\t\tc0.265-0.09,0.562,0.058,0.663,0.334L156.071,79.267z"], ["fill", "#62381B", "d", "M157.805,78.661l-0.946,0.331l-0.557-1.562c-0.1-0.278,0.037-0.577,0.303-0.67s0.56,0.058,0.655,0.336\n\t\t\tL157.805,78.661z"], ["fill", "#62381B", "d", "M159.539,78.056l-0.947,0.331l-0.534-1.57c-0.095-0.278,0.044-0.579,0.312-0.672\n\t\t\tc0.265-0.094,0.557,0.058,0.648,0.336L159.539,78.056z"], ["fill", "#62381B", "d", "M155.904,80.94c-0.058-0.154-0.238-0.234-0.402-0.177c-0.165,0.058-0.251,0.229-0.193,0.385l9.411,25.045\n\t\t\tl0.471-0.16L155.904,80.94z"], ["fill", "#62381B", "d", "M157.393,80.422c-0.055-0.156-0.234-0.236-0.398-0.178c-0.165,0.058-0.253,0.229-0.197,0.385l9.101,25.161\n\t\t\tl0.472-0.163L157.393,80.422z"], ["fill", "#62381B", "d", "M158.882,79.902c-0.054-0.157-0.23-0.238-0.396-0.18c-0.164,0.057-0.254,0.23-0.199,0.386l8.788,25.271\n\t\t\tl0.471-0.165L158.882,79.902z"], ["fill", "#62381B", "d", "M160.371,79.379c-0.053-0.156-0.229-0.236-0.393-0.179c-0.165,0.057-0.256,0.231-0.204,0.387l8.476,25.378\n\t\t\tl0.47-0.167L160.371,79.379z"], ["fill", "#F15C27", "d", "M184.239,86.84c-0.096-0.684,0.296-1.307,0.875-1.391c3.254-0.392,6.52-0.738,9.797-0.834\n\t\t\tc0.584-0.026,1.075,0.511,1.099,1.201l0.192,5.622c-3.74,0.137-7.479,0.428-11.187,0.974L184.239,86.84z"], ["fill", "#E8D320", "d", "M196.222,92.079l0.268,7.807c-3.444,0.128-6.893,0.393-10.31,0.897l-1.076-7.735\n\t\t\tC188.788,92.504,192.505,92.215,196.222,92.079z"], ["fill", "#E2324B", "d", "M194.133,81.516l1.784,2.255c0.147,0.188,0.09,0.353-0.127,0.362c-3.979,0.146-7.957,0.464-11.898,1.049\n\t\t\tc-0.214,0.03-0.3-0.118-0.187-0.332l1.361-2.56c0.117-0.214,0.392-0.417,0.613-0.449c2.59-0.212,5.171-0.59,7.771-0.65\n\t\t\tC193.675,81.181,193.98,81.326,194.133,81.516z"], ["fill", "#FFFFFF", "d", "M193.753,82.685c0.438-0.021,0.841,0.376,1.08,0.987l-2.053,0.093\n\t\t\tC192.957,83.135,193.316,82.703,193.753,82.685z"], ["fill", "#FFFFFF", "d", "M191.737,82.772c0.438-0.019,0.85,0.378,1.102,0.99c-0.687,0.018-1.37,0.062-2.051,0.143\n\t\t\tC190.951,83.265,191.301,82.812,191.737,82.772z"], ["fill", "#FFFFFF", "d", "M189.728,82.963c0.438-0.04,0.854,0.336,1.114,0.938l-2.045,0.196\n\t\t\tC188.949,83.457,189.292,83.007,189.728,82.963z"], ["fill", "#FFFFFF", "d", "M187.649,83.162c0.437-0.042,0.86,0.336,1.131,0.936l-2.045,0.19\n\t\t\tC186.877,83.65,187.214,83.203,187.649,83.162z"], ["fill", "#FFFFFF", "d", "M185.642,83.37c0.434-0.073,0.865,0.319,1.148,0.914c-0.685,0.046-1.359,0.17-2.038,0.264\n\t\t\tC184.882,83.9,185.209,83.433,185.642,83.37z"], ["fill", "#FFFFFF", "d", "M187.785,93.29c0.656-0.06,1.261,0.591,1.348,1.454l0.573,5.561l-1.155,0.105l-0.817-7.115L187.785,93.29z\n\t\t\t"], ["fill", "#FFFFFF", "d", "M187.336,93.331c-0.655,0.084-1.092,0.87-0.979,1.728l0.721,5.545l1.148-0.165l-0.84-7.111L187.336,93.331\n\t\t\tz"], ["fill", "#FFFFFF", "points", "192.939,90.333 195.292,90.229 195.119,86.112 192.675,86.221 \t\t"], ["x", "193.984", "y", "86.443", "transform", "matrix(0.999 -0.0448 0.0448 0.999 -3.6844 8.7999)", "fill", "#69C8C3", "width", "0.893", "height", "0.267"], ["x", "193.997", "y", "86.844", "transform", "matrix(0.9989 -0.0459 0.0459 0.9989 -3.7876 9.0173)", "fill", "#69C8C3", "width", "0.894", "height", "0.267"], ["x", "194.012", "y", "87.255", "transform", "matrix(0.9989 -0.0461 0.0461 0.9989 -3.8223 9.0583)", "fill", "#69C8C3", "width", "0.89", "height", "0.268"], ["x", "194.042", "y", "87.651", "transform", "matrix(0.999 -0.0452 0.0452 0.999 -3.7657 8.8721)", "fill", "#69C8C3", "width", "0.887", "height", "0.266"], ["x", "194.073", "y", "88.068", "transform", "matrix(0.9989 -0.0465 0.0465 0.9989 -3.892 9.1428)", "fill", "#69C8C3", "width", "0.882", "height", "0.267"], ["x", "194.096", "y", "88.46", "transform", "matrix(0.9989 -0.0467 0.0467 0.9989 -3.9225 9.175)", "fill", "#69C8C3", "width", "0.879", "height", "0.266"], ["x", "194.109", "y", "88.861", "transform", "matrix(0.999 -0.0445 0.0445 0.999 -3.7715 8.7552)", "fill", "#69C8C3", "width", "0.877", "height", "0.267"], ["x", "194.138", "y", "89.27", "transform", "matrix(0.999 -0.0437 0.0437 0.999 -3.7195 8.5844)", "fill", "#69C8C3", "width", "0.872", "height", "0.268"], ["x", "194.149", "y", "89.667", "transform", "matrix(0.999 -0.0449 0.0449 0.999 -3.8356 8.8271)", "fill", "#69C8C3", "width", "0.87", "height", "0.265"], ["fill", "#69C8C3", "points", "192.925,86.78 193.818,86.741 193.803,86.475 192.908,86.514 \t\t"], ["fill", "#69C8C3", "points", "192.949,87.182 193.839,87.143 193.826,86.876 192.932,86.916 \t\t"], ["fill", "#69C8C3", "points", "192.974,87.583 193.861,87.544 193.847,87.279 192.958,87.317 \t\t"], ["fill", "#69C8C3", "points", "192.999,87.985 193.884,87.947 193.869,87.681 192.982,87.719 \t\t"], ["fill", "#69C8C3", "points", "193.024,88.388 193.905,88.35 193.89,88.083 193.007,88.122 \t\t"], ["fill", "#69C8C3", "points", "193.048,88.791 193.926,88.752 193.913,88.487 193.031,88.524 \t\t"], ["fill", "#69C8C3", "points", "193.074,89.192 193.949,89.154 193.934,88.889 193.057,88.927 \t\t"], ["fill", "#69C8C3", "points", "193.099,89.595 193.97,89.556 193.956,89.29 193.082,89.328 \t\t"], ["fill", "#69C8C3", "points", "193.124,89.996 193.992,89.958 193.978,89.693 193.107,89.73 \t\t"], ["fill", "#FFFFFF", "points", "189.402,90.637 191.748,90.411 191.441,86.302 189.006,86.536 \t\t"], ["fill", "#69C8C3", "points", "190.333,86.982 191.224,86.895 191.204,86.63 190.31,86.716 \t\t"], ["fill", "#69C8C3", "points", "190.367,87.383 191.255,87.297 191.234,87.031 190.344,87.118 \t\t"], ["fill", "#69C8C3", "points", "190.402,87.785 191.287,87.699 191.265,87.432 190.378,87.519 \t\t"], ["fill", "#69C8C3", "points", "190.435,88.185 191.317,88.1 191.296,87.835 190.414,87.919 \t\t"], ["fill", "#69C8C3", "points", "190.47,88.588 191.348,88.502 191.328,88.234 190.447,88.32 \t\t"], ["fill", "#69C8C3", "points", "190.503,88.988 191.378,88.902 191.359,88.637 190.482,88.722 \t\t"], ["fill", "#69C8C3", "points", "190.538,89.389 191.41,89.306 191.39,89.039 190.515,89.124 \t\t"], ["fill", "#69C8C3", "points", "190.572,89.791 191.441,89.708 191.42,89.439 190.55,89.525 \t\t"], ["fill", "#69C8C3", "points", "190.607,90.192 191.472,90.108 191.452,89.842 190.583,89.927 \t\t"], ["x", "189.258", "y", "86.765", "transform", "matrix(0.9954 -0.0959 0.0959 0.9954 -7.462 18.6014)", "fill", "#69C8C3", "width", "0.896", "height", "0.266"], ["x", "189.298", "y", "87.175", "transform", "matrix(0.9957 -0.0931 0.0931 0.9957 -7.3047 18.045)", "fill", "#69C8C3", "width", "0.892", "height", "0.269"], ["x", "189.339", "y", "87.573", "transform", "matrix(0.9953 -0.0968 0.0968 0.9953 -7.5974 18.7791)", "fill", "#69C8C3", "width", "0.888", "height", "0.266"], ["x", "189.37", "y", "87.977", "transform", "matrix(0.9954 -0.0959 0.0959 0.9954 -7.575 18.6095)", "fill", "#69C8C3", "width", "0.886", "height", "0.266"], ["x", "189.402", "y", "88.38", "transform", "matrix(0.9956 -0.0941 0.0941 0.9956 -7.4888 18.2629)", "fill", "#69C8C3", "width", "0.882", "height", "0.267"], ["x", "189.459", "y", "88.777", "transform", "matrix(0.9956 -0.0932 0.0932 0.9956 -7.4626 18.093)", "fill", "#69C8C3", "width", "0.88", "height", "0.266"], ["x", "189.478", "y", "89.176", "transform", "matrix(0.9955 -0.0947 0.0947 0.9955 -7.6007 18.3768)", "fill", "#69C8C3", "width", "0.877", "height", "0.267"], ["x", "189.526", "y", "89.589", "transform", "matrix(0.9955 -0.095 0.095 0.9955 -7.6621 18.4457)", "fill", "#69C8C3", "width", "0.874", "height", "0.268"], ["x", "189.568", "y", "89.988", "transform", "matrix(0.9955 -0.0944 0.0944 0.9955 -7.658 18.3357)", "fill", "#69C8C3", "width", "0.869", "height", "0.268"], ["fill", "#FFFFFF", "d", "M185.874,91.024c0.774-0.132,1.557-0.211,2.34-0.275l-0.441-4.097c-0.812,0.067-1.623,0.15-2.428,0.284\n\t\t\tL185.874,91.024z"], ["fill", "#69C8C3", "points", "186.683,87.323 187.574,87.241 187.545,86.977 186.652,87.059 \t\t"], ["fill", "#69C8C3", "points", "186.73,87.724 187.618,87.643 187.589,87.378 186.7,87.459 \t\t"], ["fill", "#69C8C3", "points", "186.777,88.125 187.663,88.042 187.634,87.778 186.747,87.859 \t\t"], ["fill", "#69C8C3", "points", "186.825,88.524 187.707,88.442 187.678,88.179 186.793,88.26 \t\t"], ["fill", "#69C8C3", "points", "186.871,88.924 187.75,88.844 187.721,88.578 186.841,88.659 \t\t"], ["fill", "#69C8C3", "points", "186.919,89.323 187.795,89.245 187.766,88.979 186.888,89.059 \t\t"], ["fill", "#69C8C3", "points", "186.966,89.724 187.839,89.645 187.809,89.379 186.935,89.46 \t\t"], ["fill", "#69C8C3", "points", "187.014,90.124 187.883,90.046 187.854,89.781 186.982,89.859 \t\t"], ["fill", "#69C8C3", "points", "187.061,90.524 187.927,90.445 187.897,90.181 187.029,90.26 \t\t"], ["fill", "#69C8C3", "points", "185.627,87.47 186.512,87.34 186.481,87.075 185.594,87.206 \t\t"], ["fill", "#69C8C3", "points", "185.678,87.871 186.562,87.739 186.529,87.474 185.644,87.605 \t\t"], ["fill", "#69C8C3", "points", "185.729,88.27 186.608,88.138 186.577,87.875 185.695,88.004 \t\t"], ["fill", "#69C8C3", "points", "185.78,88.669 186.656,88.54 186.625,88.274 185.747,88.404 \t\t"], ["fill", "#69C8C3", "points", "185.831,89.069 186.704,88.939 186.673,88.674 185.797,88.803 \t\t"], ["fill", "#69C8C3", "points", "185.882,89.467 186.752,89.338 186.72,89.076 185.848,89.205 \t\t"], ["fill", "#69C8C3", "points", "185.934,89.867 186.8,89.74 186.768,89.475 185.899,89.604 \t\t"], ["fill", "#69C8C3", "points", "185.984,90.268 186.848,90.14 186.816,89.874 185.951,90.002 \t\t"], ["fill", "#69C8C3", "points", "186.035,90.667 186.896,90.539 186.864,90.276 186.001,90.402 \t\t"], ["fill", "#FFFFFF", "d", "M191.726,97.555c0.729-0.089,1.461-0.129,2.195-0.149l-0.241-4.113c-0.763,0.021-1.525,0.064-2.285,0.155\n\t\t\tL191.726,97.555z"], ["fill", "#54777B", "points", "192.906,97.146 193.627,97.117 193.416,93.684 192.671,93.715 \t\t"], ["fill", "#54777B", "points", "191.923,97.233 192.642,97.16 192.398,93.73 191.656,93.803 \t\t"], ["fill", "#69C8C3", "points", "191.052,98.12 191.717,97.554 191.39,93.495 190.593,92.854 \t\t"], ["fill", "#69C8C3", "points", "194.669,97.87 193.935,97.402 193.697,93.337 194.398,92.592 \t\t"], ["fill", "#54777B", "d", "M169.495,79.902c4.008-1.021,8.066-1.86,12.161-2.446l0.816,5.453c-3.912,0.562-7.791,1.362-11.621,2.337\n\t\t\tL169.495,79.902z"], ["fill", "#E2324B", "d", "M179.223,73.067l2.211,4.015c-4.039,0.59-8.047,1.413-12.002,2.422l0.486-4.533\n\t\t\tC172.98,74.157,176.112,73.645,179.223,73.067z"], ["fill", "#FFFFFF", "d", "M179.37,79.81c-0.065-0.383,0.156-0.756,0.505-0.799c0.346-0.05,0.677,0.221,0.738,0.604l0.413,2.566\n\t\t\tl-1.217,0.187L179.37,79.81z"], ["fill", "#E8D320", "d", "M177.304,80.212c-0.073-0.382,0.146-0.746,0.489-0.812c0.344-0.067,0.678,0.188,0.746,0.572l0.458,2.558\n\t\t\tl-1.209,0.236L177.304,80.212z"], ["fill", "#FFFFFF", "d", "M175.237,80.612c-0.08-0.38,0.136-0.743,0.479-0.809c0.344-0.066,0.683,0.188,0.758,0.57l0.502,2.549\n\t\t\tl-1.21,0.235L175.237,80.612z"], ["fill", "#FFFFFF", "d", "M173.178,81.047c-0.086-0.38,0.121-0.754,0.46-0.837c0.343-0.075,0.688,0.186,0.769,0.563l0.547,2.542\n\t\t\tl-1.203,0.268L173.178,81.047z"], ["fill", "#62381B", "d", "M171.133,81.549c-0.092-0.376,0.108-0.75,0.449-0.834c0.34-0.083,0.687,0.155,0.773,0.535l0.59,2.532\n\t\t\tl-1.196,0.293L171.133,81.549z"], ["fill", "#54777B", "d", "M170.99,85.789c3.812-0.97,7.673-1.769,11.565-2.324l0.816,5.451c-3.709,0.53-7.39,1.291-11.023,2.219\n\t\t\tL170.99,85.789z"], ["fill", "#FFFFFF", "d", "M180.397,85.793c-0.065-0.38,0.145-0.752,0.475-0.793c0.329-0.045,0.646,0.229,0.708,0.613l0.414,2.566\n\t\t\tl-1.155,0.179L180.397,85.793z"], ["fill", "#FFFFFF", "d", "M178.435,86.179c-0.073-0.382,0.133-0.744,0.458-0.808c0.327-0.062,0.646,0.196,0.716,0.579l0.457,2.561\n\t\t\tl-1.146,0.224L178.435,86.179z"], ["fill", "#E8D320", "d", "M176.471,86.559c-0.08-0.38,0.121-0.74,0.447-0.805c0.327-0.062,0.651,0.196,0.727,0.578l0.503,2.55\n\t\t\tL177,89.106L176.471,86.559z"], ["fill", "#FFFFFF", "d", "M174.515,86.972c-0.086-0.379,0.107-0.753,0.429-0.833c0.325-0.07,0.658,0.192,0.738,0.57l0.547,2.543\n\t\t\tl-1.141,0.254L174.515,86.972z"], ["fill", "#FFFFFF", "d", "M172.572,87.45c-0.092-0.378,0.095-0.75,0.418-0.828c0.323-0.08,0.656,0.165,0.744,0.542l0.591,2.533\n\t\t\tl-1.137,0.279L172.572,87.45z"], ["fill", "#54777B", "d", "M172.486,91.675c3.616-0.92,7.277-1.678,10.97-2.204l0.814,5.451c-3.509,0.499-6.989,1.221-10.427,2.098\n\t\t\tL172.486,91.675z"], ["fill", "#E8D320", "d", "M181.425,91.782c-0.065-0.382,0.129-0.75,0.443-0.789c0.312-0.044,0.614,0.232,0.676,0.615l0.414,2.566\n\t\t\tl-1.092,0.169L181.425,91.782z"], ["fill", "#FFFFFF", "d", "M179.566,92.147c-0.071-0.382,0.119-0.741,0.429-0.801c0.311-0.062,0.616,0.2,0.684,0.583l0.458,2.56\n\t\t\tl-1.085,0.214L179.566,92.147z"], ["fill", "#FFFFFF", "d", "M177.706,92.507c-0.08-0.381,0.106-0.737,0.417-0.797c0.309-0.061,0.621,0.201,0.694,0.582l0.501,2.553\n\t\t\tl-1.086,0.21L177.706,92.507z"], ["fill", "#62381B", "d", "M175.852,92.897c-0.086-0.38,0.093-0.749,0.398-0.825c0.309-0.067,0.627,0.2,0.708,0.577l0.546,2.542\n\t\t\tl-1.08,0.241L175.852,92.897z"], ["fill", "#FFFFFF", "d", "M174.011,93.351c-0.092-0.378,0.082-0.745,0.388-0.819c0.308-0.077,0.625,0.17,0.713,0.549l0.591,2.532\n\t\t\tl-1.075,0.265L174.011,93.351z"], ["fill", "#54777B", "d", "M173.981,97.563c3.42-0.872,6.882-1.589,10.372-2.084l0.815,5.451c-3.308,0.469-6.588,1.149-9.829,1.976\n\t\t\tL173.981,97.563z"], ["fill", "#FFFFFF", "d", "M182.454,97.767c-0.066-0.381,0.115-0.748,0.412-0.783c0.294-0.04,0.582,0.238,0.646,0.622l0.413,2.566\n\t\t\tl-1.031,0.158L182.454,97.767z"], ["fill", "#FFFFFF", "d", "M180.697,98.115c-0.071-0.383,0.105-0.738,0.398-0.794c0.292-0.058,0.584,0.205,0.653,0.589l0.458,2.559\n\t\t\tl-1.023,0.203L180.697,98.115z"], ["fill", "#FFFFFF", "d", "M178.939,98.455c-0.08-0.382,0.095-0.735,0.388-0.791c0.292-0.057,0.59,0.207,0.664,0.588l0.503,2.553\n\t\t\tL179.468,101L178.939,98.455z"], ["fill", "#FFFFFF", "d", "M177.188,98.822c-0.086-0.38,0.079-0.745,0.368-0.817c0.292-0.063,0.596,0.205,0.677,0.583l0.546,2.542\n\t\t\tl-1.018,0.229L177.188,98.822z"], ["fill", "#E8D320", "d", "M175.45,99.253c-0.093-0.379,0.067-0.742,0.355-0.812c0.29-0.071,0.595,0.177,0.684,0.557l0.591,2.532\n\t\t\tl-1.015,0.251L175.45,99.253z"], ["fill", "#FFFFFF", "d", "M179.046,76.01c0.427-0.062,0.863,0.263,1.162,0.798c-0.671,0.086-1.337,0.195-1.998,0.336\n\t\t\tC178.316,76.542,178.623,76.091,179.046,76.01z"], ["fill", "#FFFFFF", "d", "M177.095,76.391c0.424-0.082,0.862,0.221,1.168,0.744l-1.99,0.388\n\t\t\tC176.372,76.92,176.671,76.473,177.095,76.391z"], ["fill", "#FFFFFF", "d", "M175.144,76.77c0.422-0.082,0.867,0.22,1.184,0.743l-1.989,0.385\n\t\t\tC174.426,77.296,174.72,76.852,175.144,76.77z"], ["fill", "#FFFFFF", "d", "M173.124,77.16c0.422-0.081,0.874,0.219,1.198,0.74c-0.666,0.119-1.326,0.258-1.979,0.433\n\t\t\tC172.421,77.725,172.703,77.257,173.124,77.16z"], ["fill", "#FFFFFF", "d", "M171.191,77.631c0.419-0.103,0.873,0.181,1.204,0.688l-1.97,0.483\n\t\t\tC170.495,78.196,170.773,77.733,171.191,77.631z"], ["fill", "#FFFFFF", "d", "M177.833,74.558c0.429-0.082,0.868,0.214,1.174,0.748l-2.018,0.388\n\t\t\tC177.096,75.089,177.403,74.641,177.833,74.558z"], ["fill", "#FFFFFF", "d", "M175.854,74.941c0.431-0.083,0.876,0.219,1.189,0.742l-2.018,0.392\n\t\t\tC175.125,75.472,175.426,75.025,175.854,74.941z"], ["fill", "#FFFFFF", "d", "M173.877,75.326c0.429-0.083,0.882,0.217,1.205,0.738l-2.018,0.392\n\t\t\tC173.152,75.854,173.448,75.408,173.877,75.326z"], ["fill", "#FFFFFF", "d", "M171.841,75.765c0.425-0.102,0.878,0.169,1.21,0.691l-1.997,0.482\n\t\t\tC171.13,76.333,171.417,75.869,171.841,75.765z"], ["fill", "#62381B", "d", "M169.085,92.838c0.099,0.01,0.208-0.021,0.298-0.072l3.088,10.816l-0.263,0.078L169.085,92.838z"], ["fill", "#62381B", "d", "M168.395,95.118l0.05,0.199c0.144,0.48,0.471,1.014,0.857,1.129c0.092,0.029,0.17,0.029,0.238,0.008\n\t\t\tc0.252-0.066,0.407-0.471,0.328-0.864c-0.021-0.101,0.028-0.192,0.11-0.207c0.081-0.013,0.164,0.059,0.184,0.16\n\t\t\tc0.106,0.553-0.084,1.134-0.518,1.271l0,0c-0.115,0.034-0.245,0.033-0.383-0.011c-0.565-0.188-0.934-0.848-1.104-1.401\n\t\t\tl-0.054-0.204L168.395,95.118z"], ["fill", "#62381B", "d", "M169.973,95.386c0.076-0.034,0.167,0.017,0.203,0.111c0.14,0.375,0.485,0.63,0.733,0.548\n\t\t\tc0.067-0.021,0.134-0.062,0.195-0.139c0.267-0.308,0.258-0.938,0.125-1.421l-0.08-0.241l-0.008-0.021h0.002\n\t\t\tc0.092-0.005,0.206-0.019,0.293-0.067l0.08,0.248c0.148,0.557,0.186,1.314-0.191,1.783c-0.093,0.111-0.201,0.187-0.316,0.22\n\t\t\th-0.001c-0.437,0.124-0.903-0.259-1.106-0.785C169.866,95.525,169.896,95.42,169.973,95.386z"], ["fill", "#E8D320", "points", "167.888,93.281 168.303,95.023 168.098,95.084 167.48,93.401 \t\t"], ["fill", "#E8D320", "points", "167.378,93.432 167.999,95.114 167.811,95.17 167.139,93.502 \t\t"], ["fill", "#E8D320", "points", "168.288,93.164 168.652,94.921 168.408,94.993 167.997,93.249 \t\t"], ["fill", "#62381B", "points", "168.149,92.719 168.503,93.113 166.931,93.579 167.007,93.058 \t\t"], ["x", "167.599", "y", "94.958", "transform", "matrix(0.9589 -0.2837 0.2837 0.9589 -20.06 51.6432)", "fill", "#62381B", "width", "1.27", "height", "0.215"], ["fill", "#E8D320", "points", "171.009,92.355 171.374,94.108 171.168,94.169 170.601,92.473 \t\t"], ["fill", "#E8D320", "points", "170.499,92.503 171.07,94.2 170.881,94.257 170.259,92.575 \t\t"], ["fill", "#E8D320", "points", "171.415,92.258 171.728,94.022 171.48,94.083 171.12,92.33 \t\t"], ["fill", "#62381B", "d", "M171.29,91.811l0.342,0.41c-0.533,0.117-1.059,0.268-1.58,0.431l0.088-0.527L171.29,91.811z"], ["x", "170.679", "y", "94.064", "transform", "matrix(0.9646 -0.2638 0.2638 0.9646 -18.7758 48.5349)", "fill", "#62381B", "width", "1.27", "height", "0.217"], ["fill", "#E8D320", "points", "168.934,90.984 169.323,92.734 169.113,92.797 168.52,91.107 \t\t"], ["fill", "#E8D320", "points", "168.417,91.137 169.014,92.828 168.822,92.883 168.173,91.211 \t\t"], ["fill", "#E8D320", "points", "169.34,90.862 169.678,92.629 169.43,92.703 169.046,90.951 \t\t"], ["fill", "#62381B", "points", "169.209,90.417 169.56,90.812 167.962,91.289 168.048,90.764 \t\t"], ["x", "168.601", "y", "92.668", "transform", "matrix(0.9585 -0.2852 0.2852 0.9585 -19.4302 52.1213)", "fill", "#62381B", "width", "1.291", "height", "0.215"], ["fill", "#62381B", "d", "M171.314,101.997c-0.109-0.374,0.03-0.744,0.312-0.829c0.281-0.083,0.595,0.152,0.7,0.526l0.525,1.87\n\t\t\tl-0.992,0.297L171.314,101.997z"], ["fill", "#E8D320", "d", "M87.329,165.424c0.041,0.01-1.955-1.37-1.021-6.473c0.678-3.402-0.723-3.957-1.083-6.165\n\t\t\tc-0.372-2.236,2.139-0.417,2.139-0.419l3.359,3.428c0.168,3.54,0.332,6.962,0.774,10.361L87.329,165.424z"], ["fill", "#E8D320", "d", "M85.931,144.824c-0.858,1.66-1.335,3.583-1.241,5.313c0.105,1.853,0.622,3.27,1.372,4.96\n\t\t\tc1.392,2.261,1.188,4.596,1.626,6.928c0.189,0.755,0.58,1.353,1.104,1.834c2.938-2.25,6.255-7.221,9.157-13.234\n\t\t\tc4.136-8.604,5.977-16.876,3.008-19.05C97.986,129.39,90.667,135.018,85.931,144.824z"], ["fill", "#62381B", "d", "M102.019,138.396c2.656,1.749,1.299,8.33-1.889,15.332c-3.231,6.979-7.444,12.291-10.49,11.391\n\t\t\tc-2.989-0.864-3.463-8.329,0.156-16.169C93.389,141.096,99.431,136.677,102.019,138.396z"], ["fill", "#E8D320", "d", "M101.628,140.482c2.565,1.625,1.646,7.927-1.332,14.452c-2.989,6.529-6.999,11.468-9.977,10.588\n\t\t\tc-2.914-0.842-3.491-7.836-0.156-15.157C93.507,143.054,99.014,138.818,101.628,140.482z"], ["fill", "#62381B", "d", "M102.963,143.604c2.265,1.371,1.471,6.816-1.079,12.535c-2.589,5.701-6.09,9.982-8.615,9.205\n\t\t\tc-2.48-0.75-2.893-6.768-0.042-13.065C96.048,145.963,100.753,142.26,102.963,143.604z"], ["fill", "#E8D320", "d", "M102.449,146.106c1.987,1.138,1.402,5.951-0.771,11.021c-2.228,5.043-5.362,8.782-7.57,8.09\n\t\t\tc-2.197-0.678-2.519-5.914-0.092-11.425C96.396,148.26,100.436,144.948,102.449,146.106z"], ["fill", "#F15C27", "d", "M108.539,157.399c-0.345-2.246,1.057-2.241-1.74-3.623c-2.408-1.193-0.054-2.818,0.801-5.087\n\t\t\tc0.823-2.591,0.479-6.468-2.197-9.057c-1.476-1.408-2.686,4.764-6.002,11.609c-3.965,8.011-8.564,14.359-12.116,14.185\n\t\t\tc-0.001,0.002,14.696,4.594,14.886,4.647c3.062,0.893,6.963-3.17,10.246-8.843C110.478,160.18,108.797,158.894,108.539,157.399z"], ["fill", "#FFFFFF", "d", "M86.488,149.198c-0.354-0.139-0.732,0.005-0.846,0.322c-0.111,0.318,0.093,0.68,0.452,0.808l2.291,0.837\n\t\t\tl0.374-1.064L86.488,149.198z"], ["fill", "#FFFFFF", "d", "M87.943,145.877c-0.34-0.169-0.746-0.063-0.892,0.24c-0.147,0.304,0.015,0.678,0.363,0.835l2.215,1.024\n\t\t\tl0.501-1.008L87.943,145.877z"], ["fill", "#FFFFFF", "d", "M89.708,142.702c-0.324-0.205-0.731-0.135-0.902,0.158c-0.171,0.292-0.045,0.682,0.289,0.873l2.111,1.226\n\t\t\tl0.574-0.955L89.708,142.702z"], ["fill", "#FFFFFF", "d", "M91.935,139.794c-0.293-0.241-0.712-0.227-0.937,0.036c-0.229,0.262-0.148,0.667,0.156,0.893l1.947,1.456\n\t\t\tl0.713-0.835L91.935,139.794z"], ["fill", "#FFFFFF", "d", "M94.646,137.281c-0.235-0.29-0.666-0.354-0.96-0.144c-0.291,0.216-0.27,0.638-0.01,0.905l1.689,1.749\n\t\t\tl0.819-0.665L94.646,137.281z"], ["fill", "#FFFFFF", "d", "M98.134,135.625c-0.128-0.34-0.533-0.528-0.907-0.413c-0.377,0.109-0.499,0.518-0.325,0.831l1.128,2.062\n\t\t\tc0.312-0.144,0.638-0.217,0.953-0.319L98.134,135.625z"], ["fill", "#FFFFFF", "d", "M89.186,157.786c-0.276-0.066-0.539,0.081-0.584,0.329c-0.045,0.249,0.147,0.499,0.425,0.56l1.781,0.4\n\t\t\tl0.151-0.852L89.186,157.786z"], ["fill", "#FFFFFF", "d", "M89.796,155.12c-0.274-0.086-0.554,0.043-0.626,0.283c-0.074,0.24,0.117,0.508,0.386,0.583l1.751,0.509\n\t\t\tl0.239-0.827L89.796,155.12z"], ["fill", "#FFFFFF", "d", "M90.651,152.521c-0.268-0.104-0.552,0.01-0.638,0.249c-0.086,0.237,0.068,0.509,0.337,0.604l1.722,0.623\n\t\t\tl0.288-0.812L90.651,152.521z"], ["fill", "#FFFFFF", "d", "M91.67,149.973c-0.261-0.124-0.556-0.034-0.654,0.2c-0.104,0.232,0.035,0.52,0.295,0.633l1.673,0.744\n\t\t\tl0.342-0.788L91.67,149.973z"], ["fill", "#FFFFFF", "d", "M93.014,147.57c-0.246-0.144-0.554-0.084-0.688,0.134c-0.135,0.22-0.027,0.512,0.223,0.648l1.602,0.88\n\t\t\tl0.441-0.729L93.014,147.57z"], ["fill", "#FFFFFF", "d", "M94.604,145.312c-0.227-0.173-0.545-0.15-0.705,0.053c-0.152,0.208-0.086,0.51,0.149,0.672l1.502,1.043\n\t\t\tl0.514-0.662L94.604,145.312z"], ["fill", "#FFFFFF", "d", "M96.631,143.363c-0.192-0.203-0.524-0.237-0.733-0.068c-0.198,0.178-0.19,0.478,0.016,0.669l1.317,1.229\n\t\t\tl0.643-0.528L96.631,143.363z"], ["fill", "#FFFFFF", "d", "M99.114,141.901c-0.136-0.239-0.455-0.344-0.717-0.23c-0.261,0.111-0.313,0.418-0.155,0.641l1.022,1.448\n\t\t\tl0.734-0.34L99.114,141.901z"], ["fill", "#62381B", "d", "M92.841,164.849c-0.502-0.162-1.011,0.026-1.134,0.421c-0.125,0.394,0.182,0.846,0.685,1.01l3.209,1.065\n\t\t\tl0.459-1.441L92.841,164.849z"], ["fill", "#62381B", "d", "M95.657,162.166c-0.498-0.177-1.016-0.011-1.155,0.37c-0.139,0.383,0.15,0.837,0.646,1.018l3.176,1.159\n\t\t\tl0.517-1.395L95.657,162.166z"], ["fill", "#62381B", "d", "M97.684,159.059c-0.491-0.193-1.001-0.042-1.138,0.338c-0.136,0.381,0.149,0.847,0.641,1.041l3.14,1.264\n\t\t\tl0.504-1.389L97.684,159.059z"], ["fill", "#62381B", "d", "M99.467,155.833c-0.485-0.21-1.004-0.078-1.16,0.292s0.11,0.844,0.593,1.053l3.095,1.363l0.575-1.351\n\t\t\tL99.467,155.833z"], ["fill", "#62381B", "d", "M101.074,152.523c-0.479-0.228-1.008-0.117-1.184,0.245c-0.175,0.36,0.069,0.837,0.545,1.064l3.046,1.465\n\t\t\tl0.647-1.314L101.074,152.523z"], ["fill", "#62381B", "d", "M102.575,149.163c-0.471-0.241-0.991-0.143-1.165,0.22c-0.174,0.363,0.066,0.854,0.534,1.096l2.998,1.568\n\t\t\tl0.639-1.321L102.575,149.163z"], ["fill", "#62381B", "d", "M104.105,145.836c-0.461-0.256-0.992-0.178-1.184,0.175c-0.193,0.353,0.022,0.849,0.482,1.107l2.943,1.667\n\t\t\tl0.709-1.287L104.105,145.836z"], ["fill", "#62381B", "d", "M99.553,165.806c-0.611-0.204-1.222-0.001-1.365,0.454c-0.142,0.458,0.239,0.992,0.852,1.195l3.915,1.331\n\t\t\tl0.52-1.646L99.553,165.806z"], ["fill", "#62381B", "d", "M102.963,162.819c-0.604-0.229-1.224-0.056-1.382,0.384c-0.158,0.44,0.202,0.98,0.806,1.208l3.861,1.475\n\t\t\tl0.583-1.588L102.963,162.819z"], ["fill", "#62381B", "d", "M105.461,159.365c-0.595-0.251-1.224-0.111-1.403,0.315c-0.179,0.426,0.155,0.974,0.75,1.225l3.8,1.621\n\t\t\tl0.659-1.531L105.461,159.365z"], ["fill", "#62381B", "d", "M107.58,155.736c-0.583-0.276-1.221-0.165-1.42,0.248c-0.205,0.412,0.111,0.973,0.701,1.251l3.734,1.772\n\t\t\tl0.722-1.489L107.58,155.736z"], ["fill", "#62381B", "d", "M109.54,152.03c-0.566-0.296-1.234-0.228-1.421,0.191c-0.196,0.417,0.106,0.994,0.68,1.293l3.658,1.926\n\t\t\tc0.246-0.494,0.46-1.005,0.744-1.479L109.54,152.03z"], ["fill", "#62381B", "d", "M111.436,148.293c-0.56-0.322-1.188-0.258-1.408,0.146c-0.219,0.404,0.058,0.992,0.617,1.313l3.576,2.073\n\t\t\tl0.792-1.452L111.436,148.293z"], ["fill", "#62381B", "d", "M113.337,144.571c-0.545-0.344-1.184-0.304-1.422,0.087c-0.24,0.394,0.008,0.991,0.553,1.335l3.488,2.218\n\t\t\tl0.871-1.412L113.337,144.571z"], ["fill", "#62381B", "d", "M100.665,131.367c1.212,1.364,0.522,4.153,0.421,7.864c-0.082,1.827,1.06,3.467,2.637,4.837\n\t\t\tc2.79,2.426,1.43,2.09,0.484,4.729c-0.815,2.388,0.197,3.799,2.592,4.979c2.797,1.382,1.396,1.377,1.74,3.623\n\t\t\tc0.258,1.495,1.938,2.781,3.877,3.832c0.496-0.954,1.033-1.929,1.553-2.943c3.491-7.247,4.877-14.314,1.909-16.486\n\t\t\tC115.718,141.686,100.667,131.365,100.665,131.367z"], ["fill", "#E8D320", "d", "M104.333,140.488c-0.45-0.277-0.989-0.217-1.205,0.134c-0.214,0.351-0.025,0.86,0.424,1.136l2.867,1.793\n\t\t\tl0.792-1.277L104.333,140.488z"], ["fill", "#E8D320", "d", "M105.208,136.241c-0.44-0.293-0.989-0.253-1.225,0.091c-0.244,0.338-0.055,0.873,0.381,1.166l2.804,1.897\n\t\t\tc0.254-0.442,0.568-0.844,0.851-1.269L105.208,136.241z"], ["fill", "#E8D320", "d", "M110.574,150.152c-0.565-0.312-1.202-0.236-1.423,0.166c-0.22,0.403,0.061,0.979,0.625,1.29l3.616,2.001\n\t\t\tl0.8-1.445L110.574,150.152z"], ["fill", "#E8D320", "d", "M111.728,145.743c-0.552-0.335-1.195-0.287-1.439,0.107c-0.243,0.394,0.006,0.983,0.559,1.319l3.524,2.154\n\t\t\tl0.886-1.418L111.728,145.743z"], ["fill", "#E8D320", "d", "M112.228,140.982c-0.539-0.357-1.191-0.331-1.46,0.057c-0.266,0.394-0.014,1.021,0.521,1.375l3.435,2.301\n\t\t\tc0.285-0.494,0.614-0.959,0.942-1.425L112.228,140.982z"], ["fill", "#62381B", "d", "M283.931,118.51c0.291-0.284,0.332-0.721,0.088-0.974c-3.11-3.241-6.492-6.204-9.931-9.089\n\t\t\tc-0.277-0.216-0.711-0.129-0.965,0.19l-6.271,7.822c3.441,2.833,6.808,5.776,9.872,9.023L283.931,118.51z"], ["fill", "#62381B", "d", "M286.081,114.767c0.246-0.241,0.271-0.615,0.059-0.836c-2.772-2.765-5.668-5.406-8.682-7.903\n\t\t\tc-0.234-0.2-0.601-0.146-0.816,0.12l-2.802,3.426c3.15,2.632,6.218,5.368,9.093,8.304L286.081,114.767z"], ["fill", "#2D948D", "d", "M278.819,104.171c-0.752,0.168-1.483,0.321-2.243,0.521c3.813,3.151,7.538,6.424,10.952,10.013\n\t\t\tl0.373-2.256C285.009,109.544,281.974,106.789,278.819,104.171z"], ["fill", "#2D948D", "d", "M287.989,103.179c-2.547-2.313-6.473-1.986-8.87,0.498c3.192,2.651,6.272,5.439,9.198,8.386\n\t\t\tC290.62,109.385,290.505,105.528,287.989,103.179z"], ["fill", "#2D948D", "points", "297.526,92.737 289.062,100.857 290.187,101.913 \t\t"], ["fill", "#2D948D", "points", "288.077,105.292 285.897,103.267 288.853,99.945 291.108,102.04 \t\t"], ["fill", "#FFFFFF", "d", "M276.132,109.744l-0.295-0.252c-0.128-0.109-0.134-0.315-0.012-0.462l1.473-1.764\n\t\t\tc0.125-0.148,0.328-0.177,0.461-0.063l0.303,0.259c0.131,0.111,0.137,0.32,0.015,0.467l-1.486,1.751\n\t\t\tC276.464,109.825,276.261,109.853,276.132,109.744z"], ["fill", "#FFFFFF", "d", "M277.862,111.215l-0.297-0.251c-0.127-0.108-0.129-0.313-0.004-0.459l1.506-1.733\n\t\t\tc0.125-0.145,0.332-0.17,0.466-0.059l0.303,0.259c0.131,0.11,0.137,0.317,0.01,0.461l-1.521,1.723\n\t\t\tC278.196,111.298,277.991,111.324,277.862,111.215z"], ["fill", "#FFFFFF", "d", "M279.554,112.733l-0.283-0.269c-0.125-0.114-0.119-0.323,0.01-0.465l1.539-1.705\n\t\t\tc0.13-0.142,0.332-0.162,0.459-0.042l0.289,0.274c0.127,0.117,0.125,0.329-0.006,0.469l-1.555,1.691\n\t\t\tC279.88,112.829,279.675,112.848,279.554,112.733z"], ["fill", "#FFFFFF", "d", "M281.208,114.29l-0.285-0.266c-0.121-0.116-0.117-0.321,0.014-0.461l1.574-1.677\n\t\t\tc0.131-0.14,0.338-0.155,0.465-0.037l0.289,0.272c0.127,0.117,0.121,0.325-0.01,0.463l-1.588,1.663\n\t\t\tC281.534,114.387,281.329,114.404,281.208,114.29z"], ["fill", "#FFFFFF", "d", "M282.864,115.844l-0.284-0.268c-0.121-0.115-0.113-0.318,0.02-0.454l1.605-1.645\n\t\t\tc0.133-0.138,0.344-0.153,0.469-0.035l0.293,0.273c0.119,0.124,0.104,0.334-0.027,0.471l-1.621,1.631\n\t\t\tC283.185,115.955,282.981,115.965,282.864,115.844z"], ["fill", "#FFFFFF", "points", "269.318,116.844 268.594,116.222 273.729,109.962 274.508,110.628 \t\t"], ["fill", "#FFFFFF", "points", "270.865,118.163 270.139,117.544 275.393,111.382 276.173,112.045 \t\t"], ["fill", "#FFFFFF", "points", "272.404,119.492 271.689,118.86 277.06,112.798 277.825,113.478 \t\t"], ["fill", "#FFFFFF", "points", "273.883,120.889 273.188,120.235 278.671,114.274 279.417,114.978 \t\t"], ["fill", "#FFFFFF", "points", "275.367,122.28 274.67,121.628 280.263,115.772 281.013,116.475 \t\t"], ["fill", "#FFFFFF", "points", "276.806,123.716 276.146,123.028 281.849,117.281 282.56,118.019 \t\t"], ["fill", "#62381B", "d", "M285.558,74.606c-1.596,0.349-3.135,0.659-4.717,1.084c1.801,1.157,3.535,2.418,5.301,3.628\n\t\t\tL285.558,74.606z"], ["fill", "#62381B", "points", "291.069,66.427 283.737,75.603 285.163,76.589 \t\t"], ["fill", "#2D948D", "d", "M280.524,75.962l-5.909,9.106c1.729,1.101,3.383,2.316,5.073,3.472l6.316-8.831\n\t\t\tC284.179,78.458,282.392,77.152,280.524,75.962z"], ["fill", "#2D948D", "d", "M259.082,119.146c-1.836-1.196-3.547-2.577-5.447-3.671l17.441-27.5c2.508,1.478,4.812,3.266,7.229,4.885\n\t\t\tL259.082,119.146z"], ["fill", "#FFFFFF", "d", "M255.939,115.542l-0.483-0.319c-0.078-0.049-0.076-0.187,0.004-0.309l15.518-23.812\n\t\t\tc0.08-0.123,0.228-0.172,0.324-0.109l0.625,0.412c0.098,0.067,0.109,0.22,0.027,0.342l-15.732,23.67\n\t\t\tC256.139,115.54,256.014,115.596,255.939,115.542z"], ["fill", "#FFFFFF", "d", "M257.311,116.502l-0.477-0.333c-0.074-0.05-0.068-0.191,0.012-0.312l15.912-23.55\n\t\t\tc0.082-0.121,0.229-0.166,0.324-0.1l0.614,0.425c0.097,0.069,0.107,0.221,0.023,0.341l-16.125,23.405\n\t\t\tC257.512,116.499,257.385,116.553,257.311,116.502z"], ["fill", "#FFFFFF", "d", "M258.686,117.454l-0.479-0.33c-0.074-0.052-0.068-0.19,0.016-0.309l16.303-23.282\n\t\t\tc0.084-0.122,0.23-0.163,0.328-0.096l0.613,0.427c0.098,0.067,0.107,0.217,0.021,0.337l-16.514,23.132\n\t\t\tC258.891,117.452,258.762,117.506,258.686,117.454z"], ["fill", "#2D948D", "d", "M279.286,91.76c-2.513-1.705-4.93-3.556-7.546-5.102l5.996-9.478c2.832,1.683,5.462,3.678,8.181,5.534\n\t\t\tL279.286,91.76z"], ["fill", "#FFFFFF", "d", "M277.405,79.762l-0.266-0.167c-0.117-0.071-0.162-0.206-0.102-0.302l0.729-1.139\n\t\t\tc0.062-0.096,0.203-0.114,0.32-0.041l0.271,0.169c0.115,0.072,0.162,0.208,0.101,0.302l-0.734,1.138\n\t\t\tC277.665,79.817,277.521,79.835,277.405,79.762z"], ["fill", "#FFFFFF", "d", "M278.515,80.456l-0.266-0.166c-0.115-0.073-0.16-0.208-0.099-0.301l0.738-1.135\n\t\t\tc0.062-0.093,0.203-0.111,0.32-0.038l0.27,0.169c0.119,0.071,0.158,0.215,0.099,0.307l-0.746,1.13\n\t\t\tC278.769,80.518,278.632,80.525,278.515,80.456z"], ["fill", "#FFFFFF", "d", "M279.595,81.196l-0.26-0.178c-0.111-0.079-0.152-0.216-0.092-0.31l0.75-1.128\n\t\t\tc0.062-0.093,0.204-0.104,0.317-0.025l0.262,0.181c0.113,0.078,0.154,0.217,0.093,0.31l-0.754,1.123\n\t\t\tC279.847,81.262,279.706,81.275,279.595,81.196z"], ["fill", "#FFFFFF", "d", "M280.671,81.941l-0.258-0.179c-0.113-0.077-0.152-0.215-0.091-0.309l0.761-1.12\n\t\t\tc0.062-0.092,0.205-0.104,0.317-0.025l0.263,0.182c0.11,0.078,0.153,0.217,0.09,0.309l-0.767,1.116\n\t\t\tC280.925,82.007,280.782,82.019,280.671,81.941z"], ["fill", "#FFFFFF", "d", "M281.747,82.687l-0.261-0.18c-0.11-0.077-0.149-0.214-0.088-0.307l0.771-1.112\n\t\t\tc0.062-0.092,0.205-0.104,0.317-0.024l0.263,0.182c0.112,0.078,0.151,0.216,0.088,0.31l-0.773,1.108\n\t\t\tC282.001,82.754,281.856,82.764,281.747,82.687z"], ["fill", "#FFFFFF", "d", "M282.821,83.434l-0.26-0.18c-0.11-0.076-0.147-0.214-0.084-0.306l0.777-1.105\n\t\t\tc0.065-0.093,0.209-0.103,0.324-0.024l0.26,0.182c0.113,0.079,0.152,0.218,0.088,0.31l-0.787,1.101\n\t\t\tC283.075,83.5,282.931,83.512,282.821,83.434z"], ["fill", "#FFFFFF", "d", "M283.896,84.183l-0.26-0.182c-0.111-0.077-0.148-0.214-0.082-0.304l0.787-1.099\n\t\t\tc0.068-0.093,0.211-0.102,0.324-0.021l0.262,0.183c0.113,0.077,0.152,0.214,0.084,0.305l-0.795,1.095\n\t\t\tC284.151,84.25,284.007,84.26,283.896,84.183z"], ["fill", "#62381B", "d", "M278.052,94.946c-2.88-2.078-5.767-4.161-8.819-5.988c-0.215-0.136-0.276-0.428-0.137-0.652l5.576-9.021\n\t\t\tc0.141-0.226,0.442-0.291,0.68-0.143c3.319,1.994,6.47,4.255,9.604,6.521c0.221,0.169,0.27,0.48,0.108,0.692l-6.356,8.49\n\t\t\tC278.548,95.057,278.255,95.102,278.052,94.946z"], ["fill", "#FFFFFF", "d", "M278.089,92.934c-2.271-1.53-4.45-3.199-6.8-4.61c-0.207-0.13-0.269-0.409-0.134-0.622l4.314-6.812\n\t\t\tc0.137-0.213,0.425-0.274,0.649-0.137c2.506,1.513,4.842,3.287,7.264,4.928c0.215,0.146,0.258,0.45,0.109,0.652l-4.775,6.497\n\t\t\tC278.565,93.036,278.292,93.071,278.089,92.934z"], ["fill", "#2D948D", "d", "M280.562,89.232c-1.365,1.853-3.955,2.326-5.786,1.057c-1.807-1.303-2.373-3.794-1.143-5.749\n\t\t\tc1.221-1.939,3.89-2.534,5.839-1.14C281.438,84.767,281.925,87.378,280.562,89.232z"], ["fill", "#FFFFFF", "d", "M279.394,88.42c-0.887,1.234-2.596,1.546-3.818,0.697c-1.218-0.854-1.55-2.562-0.734-3.824\n\t\t\tc0.836-1.29,2.554-1.616,3.833-0.722C279.956,85.463,280.278,87.186,279.394,88.42z"], ["fill", "#2D948D", "d", "M277.571,87.243c-0.18,0.264-0.538,0.33-0.801,0.148c-0.264-0.183-0.33-0.543-0.151-0.81\n\t\t\tc0.178-0.264,0.536-0.331,0.803-0.146C277.685,86.617,277.753,86.981,277.571,87.243z"], ["fill", "#2D948D", "points", "277.161,86.991 276.858,86.782 278.202,84.803 278.511,85.017 \t\t"], ["x", "277.22", "y", "86.777", "transform", "matrix(0.9294 -0.3691 0.3691 0.9294 -12.8831 108.6015)", "fill", "#2D948D", "width", "0.368", "height", "2.391"], ["fill", "#69C8C3", "d", "M265.844,113.257c-0.314-0.241-0.807-0.115-1.104,0.279l-4.549,6.069l1.076,0.831\n\t\t\tc1.555-1.818,4.504-2.064,6.51-0.279c2.08,1.697,2.318,4.639,0.771,6.472l0.604,0.565c1.763-1.671,4.675-1.562,6.506,0.403\n\t\t\tc1.915,1.886,1.801,4.887,0.099,6.521l0.546,0.622c0.705-0.533,1.537-0.823,2.396-0.875l4.683-3.919\n\t\t\tC278.159,123.76,272.271,118.151,265.844,113.257z"], ["fill", "#2D948D", "points", "256.67,92.767 254.25,97.355 259.162,100.097 261.803,95.632 \t\t"], ["fill", "#2D948D", "points", "253.797,98.21 251.377,102.799 256.027,105.396 258.668,100.931 \t\t"], ["fill", "#62381B", "points", "251.123,103.279 248.701,107.868 253.109,110.327 255.752,105.863 \t\t"], ["fill", "#2D948D", "points", "261.326,90.539 257.902,93.48 260.555,94.953 \t\t"], ["fill", "#2D948D", "points", "258.34,91.165 256.66,92.792 257.877,93.471 \t\t"], ["fill", "#2D948D", "points", "262.328,93.379 260.576,94.969 261.787,95.655 \t\t"], ["fill", "#FFFFFF", "d", "M258.586,96.507c0.174-0.309,0.098-0.679-0.176-0.828c-0.271-0.151-0.63-0.022-0.8,0.286l-0.819,1.483\n\t\t\tl0.961,0.534L258.586,96.507z"], ["fill", "#FFFFFF", "d", "M255.639,101.719c0.174-0.309,0.107-0.674-0.15-0.816c-0.256-0.143-0.604-0.007-0.776,0.304l-0.818,1.482\n\t\t\tl0.912,0.506L255.639,101.719z"], ["fill", "#FFFFFF", "d", "M252.912,106.54c0.176-0.309,0.116-0.667-0.127-0.804c-0.246-0.136-0.582,0.005-0.755,0.316l-0.817,1.479\n\t\t\tl0.867,0.481L252.912,106.54z"], ["fill", "#62381B", "d", "M248.078,107.288l-1.982,3.828c1.893,1.051,3.822,2.044,5.658,3.188l2.229-3.692\n\t\t\tC252.064,109.419,250.053,108.382,248.078,107.288z"], ["fill", "#2D948D", "d", "M200.871,73.372l-0.042,5.188c1.962-0.034,3.921,0.072,5.878,0.189L207,73.571\n\t\t\tC204.959,73.45,202.918,73.338,200.871,73.372z"], ["fill", "#62381B", "d", "M200.826,79.102l-0.041,5.188c1.867-0.034,3.732,0.071,5.596,0.183l0.295-5.181\n\t\t\tC204.729,79.177,202.777,79.067,200.826,79.102z"], ["fill", "#2D948D", "d", "M200.781,84.833l-0.042,5.188c1.777-0.035,3.547,0.066,5.318,0.172l0.293-5.18\n\t\t\tC204.496,84.902,202.641,84.798,200.781,84.833z"], ["fill", "#62381B", "d", "M200.736,90.564l-0.042,5.188c1.682-0.037,3.361,0.063,5.039,0.164l0.293-5.181\n\t\t\tC204.264,90.629,202.502,90.527,200.736,90.564z"], ["fill", "#62381B", "d", "M199.957,95.416l-0.004,4.312c2.167-0.044,4.328,0.082,6.49,0.208l0.285-4.304\n\t\t\tC204.473,95.501,202.217,95.371,199.957,95.416z"], ["fill", "#2D948D", "d", "M204.111,69.201c-0.602,1.37-1.188,2.794-1.758,4.202c1.058-0.021,2.111,0.061,3.162,0.114L204.111,69.201\n\t\t\tz"], ["fill", "#2D948D", "points", "204.146,67.22 203.66,71.018 204.367,71.054 \t\t"], ["fill", "#2D948D", "points", "201.648,71.162 200.873,73.399 202.328,73.404 \t\t"], ["fill", "#2D948D", "points", "206.402,71.323 205.545,73.521 206.996,73.598 \t\t"], ["fill", "#FFFFFF", "d", "M204.443,75.775c0.015-0.355-0.235-0.655-0.561-0.673c-0.324-0.02-0.592,0.256-0.603,0.613l-0.047,1.694\n\t\t\tl1.148,0.057L204.443,75.775z"], ["fill", "#FFFFFF", "d", "M204.238,81.31c0.017-0.354-0.225-0.654-0.532-0.671c-0.31-0.02-0.568,0.256-0.578,0.613l-0.047,1.694\n\t\t\tl1.098,0.056L204.238,81.31z"], ["fill", "#FFFFFF", "d", "M204.025,87.059c0.015-0.354-0.213-0.651-0.508-0.669c-0.295-0.019-0.539,0.258-0.549,0.615l-0.047,1.693\n\t\t\tl1.041,0.055L204.025,87.059z"], ["fill", "#FFFFFF", "d", "M203.82,92.595c0.015-0.354-0.2-0.652-0.479-0.669c-0.279-0.019-0.514,0.259-0.523,0.615l-0.047,1.693\n\t\t\tl0.988,0.053L203.82,92.595z"], ["fill", "#2D948D", "d", "M225.625,76.036l-1.062,5.078c1.933,0.359,3.838,0.823,5.73,1.344l1.305-5.021\n\t\t\tC229.625,76.895,227.639,76.412,225.625,76.036z"], ["fill", "#62381B", "d", "M224.455,81.645l-1.062,5.08c1.84,0.34,3.658,0.781,5.461,1.279l1.306-5.021\n\t\t\tC228.273,82.463,226.377,82.002,224.455,81.645z"], ["fill", "#2D948D", "d", "M223.283,87.254l-1.062,5.079c1.75,0.321,3.477,0.744,5.193,1.219l1.305-5.021\n\t\t\tC226.922,88.033,225.113,87.592,223.283,87.254z"], ["fill", "#62381B", "d", "M222.111,92.863l-1.061,5.08c1.656,0.302,3.293,0.704,4.922,1.153l1.303-5.021\n\t\t\tC225.568,93.604,223.85,93.184,222.111,92.863z"], ["fill", "#2D948D", "d", "M229.627,72.574l-2.553,3.786c1.038,0.192,2.062,0.45,3.081,0.727L229.627,72.574z"], ["fill", "#2D948D", "points", "230.049,70.639 228.826,74.273 229.512,74.442 \t\t"], ["fill", "#2D948D", "points", "226.824,74.023 225.623,76.062 227.047,76.356 \t\t"], ["fill", "#2D948D", "points", "231.455,75.111 230.182,77.096 231.59,77.46 \t\t"], ["fill", "#FFFFFF", "d", "M228.66,79.086c0.082-0.345-0.104-0.688-0.418-0.771c-0.312-0.083-0.638,0.155-0.716,0.498l-0.379,1.65\n\t\t\tl1.117,0.27L228.66,79.086z"], ["fill", "#FFFFFF", "d", "M227.373,84.472c0.082-0.343-0.095-0.686-0.396-0.764c-0.299-0.08-0.61,0.162-0.688,0.503l-0.379,1.651\n\t\t\tl1.067,0.259L227.373,84.472z"], ["fill", "#FFFFFF", "d", "M226.033,90.071c0.081-0.346-0.08-0.686-0.367-0.76c-0.285-0.076-0.586,0.169-0.662,0.51l-0.381,1.65\n\t\t\tl1.018,0.245L226.033,90.071z"], ["fill", "#FFFFFF", "d", "M224.744,95.457c0.082-0.344-0.07-0.681-0.343-0.753c-0.271-0.074-0.561,0.174-0.639,0.516l-0.379,1.65\n\t\t\tl0.965,0.233L224.744,95.457z"], ["fill", "#62381B", "d", "M220.289,97.555l-0.851,4.227c2.135,0.393,4.244,0.907,6.34,1.485l1.121-4.164\n\t\t\tC224.713,98.502,222.514,97.966,220.289,97.555z"], ["fill", "#62381B", "d", "M222.227,94.549c-5.447-1.216-10.996-1.904-16.555-2.202l0.057-1.075\n\t\t\tc5.617,0.302,11.222,0.998,16.724,2.226L222.227,94.549z"], ["fill", "#62381B", "d", "M224.729,82.824c-6.055-1.346-12.223-2.118-18.406-2.45l0.06-1.074c6.24,0.336,12.465,1.115,18.572,2.474\n\t\t\tL224.729,82.824z"], ["fill", "#2D948D", "d", "M226.566,96.067l3.383-13.113l0.255,1.218c0.854,4.009,2.961,8.074,6.114,11.022l-0.192,0.263\n\t\t\tl-0.191,0.264c-2.945-2.735-4.994-6.473-6.041-10.227l-2.646,10.06c7.899,2.077,15.596,5.036,22.825,8.783l2.824-5.405\n\t\t\tc-3.688,1.937-7.746,1.964-11.521,0.426c-1.885-0.814-3.76-1.915-5.441-3.637l0.191-0.264l0.192-0.263\n\t\t\tc1.644,1.677,3.478,2.748,5.312,3.545c3.953,1.611,8.199,1.439,11.858-0.825l0.851-0.51l-4.117,7.784\n\t\t\tC242.766,101.224,234.76,98.199,226.566,96.067z"], ["fill", "#2D948D", "points", "228.467,96.098 230.76,87.796 231.324,87.94 228.99,96.23 \t\t"], ["fill", "#2D948D", "points", "230.49,96.677 232.229,90.816 232.773,90.99 231.004,96.84 \t\t"], ["fill", "#2D948D", "points", "232.498,97.31 233.818,93.156 234.354,93.323 233.014,97.472 \t\t"], ["fill", "#2D948D", "points", "234.508,97.937 235.508,94.993 236.033,95.17 235.02,98.109 \t\t"], ["fill", "#2D948D", "points", "236.486,98.658 237.314,96.364 237.832,96.556 236.992,98.846 \t\t"], ["fill", "#2D948D", "points", "238.461,99.391 239.006,97.966 239.52,98.155 238.969,99.578 \t\t"], ["fill", "#2D948D", "points", "240.428,100.139 241,98.725 241.502,98.942 240.924,100.355 \t\t"], ["fill", "#2D948D", "points", "242.357,100.974 242.973,99.534 243.475,99.75 242.854,101.186 \t\t"], ["fill", "#2D948D", "points", "244.289,101.8 245.104,99.992 245.609,100.207 244.785,102.012 \t\t"], ["fill", "#2D948D", "points", "246.193,102.688 247.508,99.917 248.002,100.16 246.676,102.925 \t\t"], ["fill", "#2D948D", "points", "248.078,103.614 250.094,99.562 250.598,99.809 248.561,103.851 \t\t"], ["fill", "#E2324B", "d", "M297.735,159.149l1.947-0.815c1.814-0.748,2.83-2.59,2.123-4.047l-0.529-1.146l-8.881,4.991\n\t\t\tc0.424,0.905,0.855,1.809,1.205,2.748l2.146-0.896c-0.168-0.421,0.141-0.953,0.688-1.188\n\t\t\tC296.979,158.561,297.562,158.719,297.735,159.149z"], ["fill", "#FFFFFF", "d", "M296.433,158.795c0.547-0.233,1.129-0.076,1.303,0.354l-1.989,0.833\n\t\t\tC295.577,159.561,295.886,159.029,296.433,158.795z"], ["fill", "#62381B", "d", "M291.202,154.012c1.02-0.518,2.221-0.319,2.588,0.486c0.369,0.81-0.181,1.854-1.229,2.34\n\t\t\tc-1.047,0.484-2.182,0.256-2.531-0.516C289.681,155.555,290.163,154.539,291.202,154.012z"], ["fill", "#E2324B", "d", "M307.587,151.399c1.795-0.802,2.651-2.75,1.916-4.354c-4.027-8.381-9.082-16.254-14.892-23.502\n\t\t\tc-1.073-1.398-3.229-1.433-4.729-0.147l-12.662,10.757c1.193,1.341,2.242,2.806,3.389,4.191l0.515-0.464\n\t\t\tc1.467-1.128,3.332-1.104,4.151,0.062c0.83,1.16,0.281,2.933-1.229,3.964l-0.603,0.349c2.433,3.65,4.796,7.364,6.742,11.307\n\t\t\tl0.59-0.367c1.613-0.84,3.498-0.515,4.119,0.77c0.59,1.299-0.278,2.958-1.949,3.709l-0.649,0.237l0.147,0.326L307.587,151.399z"], ["fill", "#62381B", "d", "M281.681,138.615c0.924-0.695,2.086-0.672,2.604,0.049c0.516,0.721,0.17,1.838-0.777,2.499\n\t\t\tc-0.945,0.66-2.115,0.643-2.607-0.045C280.409,140.432,280.761,139.309,281.681,138.615z"], ["fill", "#FFFFFF", "d", "M302.581,146.335c0.606,1.203,1.309,2.36,1.848,3.598c0.133,0.291,0.518,0.396,0.857,0.235l2.387-1.131\n\t\t\tc0.34-0.159,0.504-0.534,0.364-0.835c-0.469-1.094-1.065-2.127-1.602-3.188c-0.154-0.294-0.547-0.392-0.881-0.216L302.581,146.335\n\t\t\tz"], ["fill", "#FFFFFF", "d", "M299.653,141.063c0.673,1.167,1.396,2.307,2.037,3.493c0.146,0.283,0.535,0.372,0.867,0.192l2.324-1.251\n\t\t\tc0.33-0.178,0.477-0.562,0.324-0.855c-0.55-1.056-1.187-2.062-1.773-3.097c-0.166-0.285-0.562-0.363-0.887-0.172L299.653,141.063z\n\t\t\t"], ["fill", "#FFFFFF", "d", "M296.46,135.95l2.221,3.379c0.158,0.277,0.551,0.344,0.873,0.148l2.256-1.37\n\t\t\tc0.322-0.194,0.449-0.585,0.283-0.872l-1.939-2.997c-0.182-0.278-0.579-0.333-0.893-0.126L296.46,135.95z"], ["fill", "#FFFFFF", "d", "M293.007,131.01l2.381,3.267c0.191,0.256,0.584,0.302,0.896,0.091l2.184-1.482\n\t\t\tc0.312-0.214,0.42-0.61,0.223-0.875l-2.082-2.896c-0.192-0.27-0.596-0.306-0.897-0.083L293.007,131.01z"], ["fill", "#FFFFFF", "d", "M289.306,126.253l2.531,3.149c0.201,0.249,0.604,0.268,0.906,0.04l2.104-1.595\n\t\t\tc0.299-0.228,0.377-0.622,0.17-0.881l-2.219-2.795c-0.205-0.259-0.607-0.275-0.898-0.035L289.306,126.253z"], ["fill", "#FFFFFF", "d", "M296.007,149.77c0.568,1.125,1.229,2.207,1.729,3.367c0.125,0.271,0.502,0.363,0.845,0.201l2.387-1.129\n\t\t\tc0.34-0.161,0.512-0.521,0.383-0.803c-0.438-1.028-1.002-1.995-1.506-2.992c-0.143-0.274-0.529-0.357-0.865-0.184L296.007,149.77z\n\t\t\t"], ["fill", "#FFFFFF", "d", "M293.267,144.833c0.629,1.096,1.31,2.159,1.908,3.271c0.137,0.266,0.518,0.337,0.85,0.159l2.326-1.251\n\t\t\tc0.33-0.179,0.484-0.548,0.342-0.823c-0.516-0.991-1.114-1.935-1.666-2.906c-0.155-0.268-0.545-0.331-0.871-0.139L293.267,144.833\n\t\t\tz"], ["fill", "#FFFFFF", "d", "M290.276,140.046l2.08,3.164c0.148,0.26,0.531,0.31,0.855,0.115l2.256-1.369\n\t\t\tc0.322-0.195,0.459-0.571,0.303-0.841l-1.821-2.81c-0.169-0.264-0.562-0.307-0.873-0.099L290.276,140.046z"], ["fill", "#FFFFFF", "d", "M287.044,135.418l2.229,3.058c0.181,0.239,0.564,0.271,0.875,0.062l2.183-1.482\n\t\t\tc0.313-0.214,0.43-0.597,0.244-0.847l-1.957-2.718c-0.181-0.251-0.572-0.276-0.875-0.051L287.044,135.418z"], ["fill", "#62381B", "points", "286.702,128.504 288.526,130.809 279.954,137.489 278.306,135.406 \t\t"], ["fill", "#FFFFFF", "d", "M287.86,127.386c5.896,7.276,11.074,15.188,15.045,23.693l0.478-0.227\n\t\t\tc-3.988-8.545-9.187-16.493-15.111-23.804L287.86,127.386z"], ["fill", "#62381B", "d", "M237.074,99.483l2.895-7.84l-0.682-0.253l1.571-4.338c0.072-0.199,0.271-0.308,0.447-0.243\n\t\t\tc0.176,0.065,0.26,0.277,0.187,0.478l-1.33,3.609l0.688,0.255l-3.209,8.541c-0.074,0.199-0.262,0.313-0.418,0.255\n\t\t\tC237.066,99.89,237.002,99.681,237.074,99.483z"], ["fill", "#E2324B", "d", "M243.777,99.071c0.355-0.819,0.099-1.717-0.573-2.007c-1.103-0.5-2.224-0.954-3.367-1.351\n\t\t\tc-0.688-0.254-1.496,0.219-1.806,1.057l-2.872,7.793c-0.31,0.838-0.06,1.703,0.559,1.929c1.031,0.354,2.035,0.761,3.022,1.211\n\t\t\tc0.601,0.26,1.378-0.192,1.732-1.012L243.777,99.071z"], ["fill", "#69C8C3", "d", "M240.725,92.645l-0.428,1.128c-0.314,0.837-0.014,1.719,0.676,1.973l1.389,0.559\n\t\t\tc0.673,0.292,1.498-0.141,1.849-0.964l0.469-1.11C243.385,93.644,242.068,93.111,240.725,92.645z"], ["fill", "#62381B", "d", "M247.867,86.675c0.35-0.821,0.022-1.751-0.729-2.073l-1.543-0.62c-0.768-0.285-1.646,0.163-1.961,0.998\n\t\t\tl-2.783,7.334c1.349,0.469,2.668,1.003,3.965,1.59L247.867,86.675z"], ["fill", "#FFFFFF", "d", "M241.369,97.605c-0.08,0.197-0.271,0.301-0.429,0.232c-0.16-0.062-0.229-0.268-0.149-0.466\n\t\t\tc0.078-0.195,0.274-0.312,0.436-0.248C241.385,97.194,241.449,97.41,241.369,97.605z"], ["fill", "#FFFFFF", "d", "M240.803,99.01c-0.08,0.196-0.271,0.302-0.426,0.234c-0.158-0.062-0.226-0.267-0.146-0.466\n\t\t\tc0.078-0.196,0.271-0.312,0.431-0.249C240.818,98.599,240.881,98.813,240.803,99.01z"], ["fill", "#FFFFFF", "d", "M240.234,100.414c-0.078,0.199-0.268,0.306-0.422,0.237c-0.153-0.062-0.219-0.265-0.141-0.464\n\t\t\tc0.078-0.196,0.271-0.312,0.428-0.249C240.252,100.005,240.314,100.219,240.234,100.414z"], ["fill", "#FFFFFF", "d", "M239.668,101.82c-0.08,0.197-0.269,0.303-0.418,0.237c-0.152-0.062-0.217-0.264-0.138-0.462\n\t\t\tc0.078-0.197,0.269-0.314,0.423-0.254C239.688,101.41,239.746,101.623,239.668,101.82z"], ["fill", "#FFFFFF", "d", "M239.1,103.225c-0.08,0.196-0.264,0.304-0.414,0.238c-0.149-0.061-0.211-0.262-0.133-0.461\n\t\t\tc0.078-0.194,0.268-0.313,0.42-0.252C239.123,102.816,239.18,103.028,239.1,103.225z"], ["fill", "#FFFFFF", "d", "M238.533,104.63c-0.08,0.197-0.265,0.305-0.41,0.24c-0.148-0.06-0.209-0.26-0.129-0.459\n\t\t\tc0.077-0.197,0.266-0.313,0.416-0.255C238.557,104.22,238.613,104.432,238.533,104.63z"], ["fill", "#FFFFFF", "d", "M237.967,106.034c-0.082,0.198-0.262,0.305-0.406,0.242c-0.146-0.061-0.205-0.259-0.127-0.458\n\t\t\tc0.08-0.195,0.267-0.314,0.412-0.255C237.992,105.625,238.045,105.836,237.967,106.034z"], ["fill", "#E2324B", "d", "M328.022,199.462l-0.279-0.241l-0.395-0.334l-0.016,3.687l0.307-0.256l0.283-0.236l0.27,0.258l1.445,1.406\n\t\t\tc1.498-0.906,2.985-1.846,4.481-2.82c-1.522-1.004-3.049-1.974-4.575-2.909l-1.248,1.19L328.022,199.462z"], ["fill", "#62381B", "points", "327.349,198.886 327.308,198.851 327.294,202.606 327.332,202.573 \t\t"], ["fill", "#62381B", "d", "M300.239,205.969l-0.387,0.463l0.158-2.922l0.66,0.043c3.26,0.131,5.305-1.117,5.287-2.755\n\t\t\tc0.004-1.638-1.988-2.917-5.228-2.835l-0.662,0.032l-0.139-2.923c8.17,0.313,16.352,0.801,24.537,1.466\n\t\t\tc0.987,0.754,1.905,1.526,2.84,2.313l-0.015,3.755c-1.125,0.951-2.346,1.873-3.53,2.771c-6.08,0.42-12.154,0.738-18.223,0.955\n\t\t\tc-0.457-0.748-1.236-1.301-2.142-1.342C302.253,204.938,300.731,205.202,300.239,205.969z M324.94,202.237\n\t\t\tc0.781,0.016,1.416-0.561,1.418-1.285c0.002-0.724-0.627-1.309-1.408-1.305c-0.778,0.004-1.416,0.578-1.418,1.283\n\t\t\tS324.16,202.222,324.94,202.237z"], ["id", "windmill"], ["fill", "#62381B", "d", "M342.354,213.683l0.406-0.349c-3.592-4.551-7.33-8.772-11.354-12.639l-0.369,0.35\n\t\t\t\tC335.033,204.913,338.798,209.136,342.354,213.683z"], ["fill", "#E8D320", "d", "M333.246,204.233c0.527-0.461,1.005-0.93,1.5-1.404c3.168,3.004,6.275,6.23,9.248,9.654l-2.549,2.195\n\t\t\t\tC338.903,210.997,336.048,207.507,333.246,204.233z"], ["fill", "#62381B", "d", "M319.487,190.436l-0.336,0.35c4.137,3.119,8.25,6.587,12.096,10.396l0.369-0.351\n\t\t\t\tC327.765,197.021,323.642,193.552,319.487,190.436z"], ["fill", "#E8D320", "d", "M329.489,197.536l-1.477,1.406c-3.234-2.766-6.695-5.312-10.066-7.646l2.109-2.202\n\t\t\t\tC323.358,191.683,326.36,194.505,329.489,197.536z"], ["fill", "#62381B", "d", "M318.69,210.899l0.332,0.354c4.23-3.043,8.381-6.444,12.289-10.188l-0.365-0.357\n\t\t\t\tC327.063,204.45,322.89,207.853,318.69,210.899z"], ["fill", "#E8D320", "d", "M327.908,202.601c0.48,0.469,0.992,0.942,1.449,1.422c-3.15,2.99-6.213,5.771-9.533,8.317l-2.092-2.229\n\t\t\t\tC321.187,207.829,324.58,205.321,327.908,202.601z"], ["fill", "#62381B", "d", "M342.728,188.82l-0.4-0.354c-3.602,4.409-7.317,8.497-11.307,12.24l0.367,0.355\n\t\t\t\tC335.378,197.318,339.108,193.232,342.728,188.82z"], ["fill", "#E8D320", "d", "M334.851,198.974l-1.465-1.427c2.826-3.232,5.762-6.692,8.34-10.341l2.529,2.232\n\t\t\t\tC341.164,192.829,338.138,196.006,334.851,198.974z"], ["fill", "#62381B", "d", "M324.942,201.685c-0.449-0.006-0.811-0.345-0.807-0.748c0-0.408,0.364-0.738,0.812-0.738\n\t\t\tc0.449,0,0.81,0.336,0.81,0.75C325.755,201.36,325.392,201.692,324.942,201.685z"], ["fill", "#E2324B", "d", "M314.328,164.747c-1.006-3.182-2.063-6.356-3.36-9.436l0.668-0.27c1.305,3.098,2.369,6.291,3.383,9.491\n\t\t\tL314.328,164.747z"], ["fill", "#E2324B", "d", "M314.091,163.798c1.155-1.294,2.217-2.59,3.312-3.931l2.262-0.773l-0.967-2.771l-2.244,0.826\n\t\t\tc-1.655-0.365-3.393-0.665-5.084-0.947C312.414,158.683,313.21,161.26,314.091,163.798z"], ["fill", "#EE7D8F", "d", "M313.642,163.831c-0.867-2.433-1.648-4.902-2.654-7.283c1.781,0.292,3.574,0.616,5.316,1l0.141,0.029\n\t\t\tl0.144-0.053l1.807-0.658l0.697,1.994l-1.818,0.629l-0.145,0.05l-0.091,0.113C315.912,161.08,314.817,162.462,313.642,163.831z"], ["fill", "#EE7D8F", "d", "M295.681,170.51c-0.846-2.663-1.723-5.326-2.818-7.903l18.396-7.412c1.299,3.086,2.36,6.27,3.369,9.46\n\t\t\tL295.681,170.51z"], ["fill", "#FFFFFF", "points", "310.462,162.079 309.673,159.814 313.56,158.389 314.378,160.732 \t\t"], ["fill", "#62381B", "points", "310.757,161.686 310.144,159.935 313.285,158.79 313.912,160.591 \t\t"], ["fill", "#FFFFFF", "points", "310.269,161.012 310.185,160.767 313.731,159.501 313.821,159.755 \t\t"], ["x", "311.571", "y", "159.894", "transform", "matrix(-0.3292 -0.9443 0.9443 -0.3292 264.4806 507.955)", "fill", "#FFFFFF", "width", "2.183", "height", "0.283"], ["x", "310.533", "y", "160.266", "transform", "matrix(-0.3297 -0.9441 0.9441 -0.3297 262.9308 507.4868)", "fill", "#FFFFFF", "width", "2.162", "height", "0.284"], ["fill", "#FFFFFF", "points", "304.632,160.724 304.03,159.245 306.714,158.192 307.326,159.711 \t\t"], ["fill", "#62381B", "points", "304.831,160.454 304.364,159.311 306.53,158.465 307.005,159.632 \t\t"], ["fill", "#FFFFFF", "points", "304.476,160.022 304.409,159.861 306.856,158.92 306.923,159.084 \t\t"], ["fill", "#FFFFFF", "points", "305.573,163.44 305.048,161.933 307.757,160.95 308.296,162.495 \t\t"], ["fill", "#62381B", "points", "305.78,163.174 305.374,162.01 307.562,161.219 307.976,162.408 \t\t"], ["x", "306.565", "y", "160.892", "transform", "matrix(-0.3381 -0.9411 0.9411 -0.3381 257.6869 505.6384)", "fill", "#FFFFFF", "width", "0.173", "height", "2.623"], ["fill", "#FFFFFF", "d", "M306.507,166.158c-0.138-0.514-0.343-1.008-0.51-1.512l2.729-0.914c0.174,0.517,0.383,1.022,0.523,1.551\n\t\t\tL306.507,166.158z"], ["fill", "#62381B", "points", "306.724,165.896 306.324,164.729 308.531,163.995 308.938,165.187 \t\t"], ["fill", "#FFFFFF", "points", "306.405,165.444 306.347,165.279 308.837,164.464 308.896,164.632 \t\t"], ["fill", "#FFFFFF", "points", "300.192,162.392 299.618,160.976 302.3,159.923 302.892,161.378 \t\t"], ["fill", "#62381B", "points", "300.396,162.129 299.948,161.035 302.114,160.188 302.569,161.308 \t\t"], ["fill", "#FFFFFF", "points", "300.048,161.717 299.985,161.565 302.431,160.623 302.495,160.781 \t\t"], ["fill", "#FFFFFF", "points", "301.095,164.993 300.593,163.55 303.3,162.567 303.815,164.049 \t\t"], ["fill", "#62381B", "points", "301.304,164.735 300.915,163.619 303.104,162.829 303.501,163.969 \t\t"], ["x", "302.121", "y", "162.477", "transform", "matrix(-0.3322 -0.9432 0.9432 -0.3322 248.1099 503.2378)", "fill", "#FFFFFF", "width", "0.165", "height", "2.619"], ["fill", "#FFFFFF", "d", "M301.989,167.597c-0.129-0.492-0.327-0.966-0.487-1.448l2.731-0.914c0.164,0.495,0.367,0.979,0.5,1.487\n\t\t\tL301.989,167.597z"], ["fill", "#62381B", "points", "302.21,167.344 301.829,166.225 304.034,165.489 304.425,166.633 \t\t"], ["fill", "#FFFFFF", "points", "301.896,166.911 301.841,166.754 304.331,165.939 304.388,166.1 \t\t"], ["fill", "#FFFFFF", "points", "295.757,164.063 295.206,162.708 298.124,161.564 298.69,162.96 \t\t"], ["fill", "#62381B", "points", "295.96,163.807 295.532,162.76 297.122,162.139 297.556,163.203 \t\t"], ["fill", "#62381B", "d", "M298.269,162.315c-0.117-0.284-0.545-0.388-0.99-0.262l0.453,1.108\n\t\t\tC298.147,162.959,298.386,162.599,298.269,162.315z"], ["fill", "#FFFFFF", "points", "295.622,163.417 295.562,163.27 298.347,162.197 298.409,162.349 \t\t"], ["fill", "#FFFFFF", "points", "296.616,166.552 296.136,165.17 299.085,164.101 299.577,165.522 \t\t"], ["fill", "#62381B", "points", "296.829,166.299 296.458,165.232 298.063,164.652 298.44,165.737 \t\t"], ["fill", "#62381B", "d", "M299.19,164.861c-0.102-0.289-0.52-0.408-0.969-0.29l0.393,1.129\n\t\t\tC299.038,165.507,299.29,165.151,299.19,164.861z"], ["x", "297.819", "y", "163.844", "transform", "matrix(-0.3162 -0.9487 0.9487 -0.3162 235.2531 500.2312)", "fill", "#FFFFFF", "width", "0.161", "height", "2.983"], ["fill", "#FFFFFF", "d", "M297.472,169.04c-0.121-0.473-0.312-0.922-0.467-1.385l2.973-0.993c0.16,0.476,0.355,0.939,0.482,1.426\n\t\t\tL297.472,169.04z"], ["fill", "#62381B", "points", "297.696,168.792 297.329,167.723 298.95,167.185 299.321,168.272 \t\t"], ["fill", "#62381B", "d", "M300.087,167.417c-0.103-0.29-0.523-0.414-0.979-0.309l0.388,1.132\n\t\t\tC299.925,168.057,300.196,167.706,300.087,167.417z"], ["fill", "#FFFFFF", "points", "297.388,168.381 297.335,168.232 300.171,167.303 300.228,167.458 \t\t"], ["fill", "#E8D320", "d", "M324.662,182.656l0.179-0.068c1.116-0.468,1.813-1.754,1.612-3.145c-0.219-1.498-1.5-2.526-2.809-2.472\n\t\t\tc-0.631-0.05-2.057-0.326-2.09-1.986l-1.906,0.394c-0.061,0.034,0.299,1.304,0.564,2.205l-0.06,0.011\n\t\t\tc0.402,1.853,0.644,3.731,0.914,5.606l0.062-0.009c0.047,0.937,0.125,2.263,0.192,2.272l1.933-0.232\n\t\t\tC322.714,183.572,324.132,182.863,324.662,182.656z"], ["fill", "#E2324B", "d", "M321.789,184.915l0.812-0.101c-0.199-1.683,1.367-2.43,1.854-2.623l0.021-0.008l0.014-0.004l0.131-0.049\n\t\t\th-0.002c0.91-0.386,1.453-1.48,1.291-2.598c-0.164-1.221-1.203-2.096-2.256-2.056h-0.033l-0.034-0.001\n\t\t\tc-1.339-0.105-2.271-0.802-2.515-1.885l-1.711,0.348c0.644,3.007,1.084,6.047,1.506,9.092L321.789,184.915z"], ["fill", "#E2324B", "d", "M321.265,185.472c-0.465-3.375-0.959-6.746-1.672-10.08l0.881-0.182c0.719,3.358,1.217,6.752,1.686,10.152\n\t\t\tL321.265,185.472z"], ["fill", "#E2324B", "d", "M299.456,188.101c-0.39-2.766-0.785-5.528-1.375-8.263l21.745-4.493c0.711,3.341,1.211,6.716,1.677,10.099\n\t\t\tL299.456,188.101z"], ["fill", "#FFFFFF", "points", "315.041,179.227 314.685,177.395 318.158,176.707 318.526,178.594 \t\t"], ["fill", "#69C8C3", "points", "315.343,178.954 315.067,177.538 317.873,176.985 318.156,178.438 \t\t"], ["fill", "#FFFFFF", "points", "315.024,178.383 314.985,178.184 318.151,177.58 318.192,177.785 \t\t"], ["x", "316.338", "y", "177.751", "transform", "matrix(-0.1915 -0.9815 0.9815 -0.1915 203.3279 523.2456)", "fill", "#FFFFFF", "width", "1.693", "height", "0.246"], ["x", "315.401", "y", "177.92", "transform", "matrix(-0.1919 -0.9814 0.9814 -0.1919 202.1822 522.5669)", "fill", "#FFFFFF", "width", "1.68", "height", "0.243"], ["fill", "#FFFFFF", "points", "315.541,182.225 315.269,180.38 318.761,179.783 319.044,181.684 \t\t"], ["fill", "#69C8C3", "points", "315.856,181.96 315.653,180.532 318.472,180.054 318.683,181.518 \t\t"], ["fill", "#FFFFFF", "points", "315.567,181.38 315.539,181.179 318.72,180.657 318.751,180.863 \t\t"], ["fill", "#FFFFFF", "points", "317.746,181.784 317.503,180.108 317.74,180.067 317.987,181.746 \t\t"], ["fill", "#FFFFFF", "points", "316.789,181.933 316.548,180.271 316.785,180.23 317.03,181.896 \t\t"], ["fill", "#FFFFFF", "points", "315.978,185.235 315.71,183.39 319.216,182.883 319.49,184.786 \t\t"], ["fill", "#69C8C3", "points", "316.291,184.979 316.085,183.552 318.916,183.147 319.13,184.612 \t\t"], ["x", "317.485", "y", "182.47", "transform", "matrix(-0.1347 -0.9909 0.9909 -0.1347 177.9563 523.566)", "fill", "#FFFFFF", "width", "0.203", "height", "3.221"], ["x", "317.348", "y", "183.869", "transform", "matrix(-0.143 -0.9897 0.9897 -0.143 181.5811 525.2192)", "fill", "#FFFFFF", "width", "1.694", "height", "0.243"], ["x", "316.397", "y", "184.013", "transform", "matrix(-0.1438 -0.9896 0.9896 -0.1438 180.6289 524.5483)", "fill", "#FFFFFF", "width", "1.678", "height", "0.242"], ["fill", "#FFFFFF", "points", "308.606,180.394 308.269,178.667 311.742,177.978 312.093,179.763 \t\t"], ["fill", "#69C8C3", "points", "308.908,180.135 308.649,178.797 311.455,178.247 311.722,179.618 \t\t"], ["x", "310.078", "y", "177.608", "transform", "matrix(-0.1951 -0.9808 0.9808 -0.1951 194.9222 518.4012)", "fill", "#FFFFFF", "width", "0.19", "height", "3.223"], ["x", "309.968", "y", "178.977", "transform", "matrix(-0.1905 -0.9817 0.9817 -0.1905 194.1427 518.2908)", "fill", "#FFFFFF", "width", "1.6", "height", "0.243"], ["x", "309.026", "y", "179.156", "transform", "matrix(-0.1921 -0.9814 0.9814 -0.1921 193.3924 517.7649)", "fill", "#FFFFFF", "width", "1.586", "height", "0.244"], ["fill", "#FFFFFF", "points", "309.078,183.226 308.821,181.483 312.313,180.887 312.578,182.683 \t\t"], ["fill", "#69C8C3", "points", "309.394,182.971 309.203,181.624 312.024,181.146 312.22,182.529 \t\t"], ["fill", "#FFFFFF", "points", "309.112,182.427 309.085,182.236 312.267,181.715 312.294,181.91 \t\t"], ["fill", "#FFFFFF", "points", "311.283,182.79 311.056,181.205 311.294,181.165 311.524,182.752 \t\t"], ["fill", "#FFFFFF", "points", "310.326,182.938 310.099,181.368 310.339,181.328 310.567,182.9 \t\t"], ["fill", "#FFFFFF", "points", "309.49,186.066 309.235,184.324 312.742,183.818 313.005,185.617 \t\t"], ["fill", "#69C8C3", "points", "309.808,185.823 309.61,184.475 312.442,184.071 312.642,185.454 \t\t"], ["x", "311.001", "y", "183.323", "transform", "matrix(-0.1436 -0.9896 0.9896 -0.1436 172.7431 519.359)", "fill", "#FFFFFF", "width", "0.19", "height", "3.222"], ["fill", "#FFFFFF", "points", "311.703,185.688 311.472,184.104 311.714,184.07 311.944,185.659 \t\t"], ["x", "309.952", "y", "184.886", "transform", "matrix(-0.1446 -0.9895 0.9895 -0.1446 172.6188 519.2413)", "fill", "#FFFFFF", "width", "1.587", "height", "0.245"], ["fill", "#FFFFFF", "points", "301.546,181.678 301.231,180.06 304.706,179.371 305.032,181.044 \t\t"], ["fill", "#E8D320", "points", "301.853,181.429 301.608,180.178 304.415,179.628 304.665,180.913 \t\t"], ["fill", "#FFFFFF", "points", "301.548,180.928 301.513,180.753 304.679,180.149 304.714,180.331 \t\t"], ["x", "302.97", "y", "180.327", "transform", "matrix(-0.1917 -0.9814 0.9814 -0.1917 184.8485 513.1296)", "fill", "#FFFFFF", "width", "1.498", "height", "0.243"], ["x", "302.034", "y", "180.491", "transform", "matrix(-0.1908 -0.9816 0.9816 -0.1908 183.2516 512.2876)", "fill", "#FFFFFF", "width", "1.484", "height", "0.243"], ["fill", "#FFFFFF", "points", "301.989,184.323 301.749,182.694 305.239,182.096 305.489,183.781 \t\t"], ["fill", "#E8D320", "points", "302.308,184.083 302.13,182.821 304.95,182.344 305.132,183.64 \t\t"], ["fill", "#FFFFFF", "points", "302.028,183.573 302.003,183.396 305.187,182.875 305.21,183.058 \t\t"], ["fill", "#FFFFFF", "points", "304.194,183.892 303.981,182.41 304.222,182.37 304.435,183.854 \t\t"], ["fill", "#FFFFFF", "points", "303.237,184.042 303.026,182.572 303.265,182.531 303.476,184.004 \t\t"], ["fill", "#FFFFFF", "points", "302.374,186.979 302.136,185.351 305.642,184.844 305.888,186.529 \t\t"], ["fill", "#E8D320", "points", "302.692,186.747 302.507,185.488 305.339,185.083 305.528,186.379 \t\t"], ["x", "303.896", "y", "184.303", "transform", "matrix(-0.1314 -0.9913 0.9913 -0.1314 159.6426 511.6995)", "fill", "#FFFFFF", "width", "0.178", "height", "3.221"], ["fill", "#FFFFFF", "points", "304.587,186.607 304.37,185.125 304.612,185.09 304.829,186.576 \t\t"], ["x", "302.895", "y", "185.866", "transform", "matrix(-0.1447 -0.9895 0.9895 -0.1447 163.5552 513.3475)", "fill", "#FFFFFF", "width", "1.484", "height", "0.244"], ["fill", "#FFFFFF", "points", "320.896,181.397 320.63,179.575 323.646,179.062 323.919,180.93 \t\t"], ["fill", "#E8D320", "points", "321.164,181.142 320.962,179.733 323.397,179.323 323.603,180.761 \t\t"], ["fill", "#FFFFFF", "points", "320.903,180.565 320.876,180.368 323.621,179.919 323.651,180.121 \t\t"], ["fill", "#E8D320", "d", "M299.942,178.809c-0.639-2.778-1.285-5.559-2.147-8.279l20.352-6.152c1.037,3.287,1.834,6.641,2.594,9.998\n\t\t\tL299.942,178.809z"], ["fill", "#E8D320", "d", "M319.888,173.483c1.158-1.182,2.307-2.396,3.447-3.64l1.622-0.397l-0.709-2.898l-1.612,0.437\n\t\t\tc-1.619-0.532-3.236-1.032-4.84-1.503C318.642,168.108,319.21,170.811,319.888,173.483z"], ["fill", "#62381B", "d", "M319.449,173.473c-0.67-2.566-1.221-5.162-2.051-7.683c1.674,0.495,3.396,1.014,5.059,1.582l0.134,0.047\n\t\t\tl0.143-0.038l1.183-0.313l0.51,2.086l-1.188,0.295l-0.141,0.034l-0.098,0.104C321.824,170.916,320.644,172.211,319.449,173.473z"], ["fill", "#62381B", "d", "M297.897,179.244c-0.625-2.719-1.258-5.441-2.104-8.108l21.979-6.645c1.031,3.277,1.826,6.62,2.584,9.965\n\t\t\tL297.897,179.244z"], ["fill", "#FFFFFF", "points", "313.037,169.08 312.528,167.37 315.737,166.437 316.261,168.196 \t\t"], ["fill", "#62381B", "points", "313.271,168.803 312.878,167.482 314.626,166.978 315.024,168.319 \t\t"], ["fill", "#62381B", "d", "M315.845,167.36c-0.105-0.359-0.558-0.546-1.047-0.461l0.416,1.396\n\t\t\tC315.673,168.114,315.951,167.719,315.845,167.36z"], ["fill", "#FFFFFF", "points", "312.933,168.284 312.878,168.099 315.937,167.23 315.994,167.421 \t\t"], ["fill", "#FFFFFF", "points", "313.737,171.861 313.315,170.129 316.546,169.275 316.981,171.056 \t\t"], ["fill", "#62381B", "points", "313.981,171.59 313.655,170.25 315.414,169.788 315.746,171.148 \t\t"], ["fill", "#62381B", "d", "M316.608,170.204c-0.088-0.362-0.527-0.562-1.018-0.49l0.346,1.415\n\t\t\tC316.403,170.958,316.696,170.568,316.608,170.204z"], ["x", "315.088", "y", "168.97", "transform", "matrix(-0.2402 -0.9707 0.9707 -0.2402 225.3193 517.4843)", "fill", "#FFFFFF", "width", "0.195", "height", "3.179"], ["fill", "#FFFFFF", "points", "314.423,174.646 313.996,172.916 317.244,172.14 317.685,173.92 \t\t"], ["fill", "#62381B", "points", "314.669,174.382 314.339,173.044 316.11,172.625 316.444,173.984 \t\t"], ["fill", "#62381B", "d", "M317.31,173.067c-0.09-0.364-0.531-0.574-1.023-0.513l0.349,1.416\n\t\t\tC317.103,173.811,317.399,173.429,317.31,173.067z"], ["fill", "#FFFFFF", "points", "314.356,173.847 314.31,173.658 317.406,172.942 317.453,173.135 \t\t"], ["fill", "#FFFFFF", "points", "307.108,170.707 306.621,169.087 309.832,168.155 310.328,169.822 \t\t"], ["fill", "#62381B", "points", "307.343,170.442 306.97,169.19 308.718,168.683 309.099,169.957 \t\t"], ["fill", "#62381B", "d", "M309.927,169.032c-0.103-0.34-0.549-0.513-1.037-0.424l0.396,1.324\n\t\t\tC309.746,169.751,310.028,169.373,309.927,169.032z"], ["fill", "#FFFFFF", "points", "307.015,169.952 306.96,169.776 310.021,168.908 310.073,169.088 \t\t"], ["fill", "#FFFFFF", "points", "307.769,173.344 307.369,171.702 310.601,170.847 311.013,172.538 \t\t"], ["fill", "#62381B", "points", "308.017,173.083 307.707,171.812 309.47,171.351 309.781,172.64 \t\t"], ["fill", "#62381B", "d", "M310.651,171.731c-0.084-0.345-0.52-0.53-1.008-0.453l0.326,1.343\n\t\t\tC310.437,172.453,310.735,172.077,310.651,171.731z"], ["fill", "#FFFFFF", "points", "307.714,172.58 307.671,172.403 310.751,171.609 310.794,171.792 \t\t"], ["fill", "#FFFFFF", "points", "308.421,175.982 308.015,174.344 311.265,173.567 311.683,175.256 \t\t"], ["fill", "#62381B", "points", "308.669,175.729 308.354,174.461 310.126,174.042 310.444,175.331 \t\t"], ["fill", "#62381B", "d", "M311.317,174.449c-0.084-0.345-0.522-0.541-1.016-0.476l0.33,1.343\n\t\t\tC311.103,175.159,311.403,174.792,311.317,174.449z"], ["x", "309.8", "y", "173.198", "transform", "matrix(-0.2326 -0.9726 0.9726 -0.2326 211.9697 516.8352)", "fill", "#FFFFFF", "width", "0.185", "height", "3.181"], ["fill", "#FFFFFF", "d", "M299.429,173.81c-0.178-0.827-0.473-1.624-0.697-2.438l5.193-1.509c0.238,0.855,0.543,1.693,0.731,2.562\n\t\t\tL299.429,173.81z"], ["fill", "#E2324B", "d", "M299.833,173.4c-0.156-0.634-0.371-1.253-0.551-1.883l2.829-0.815c0.187,0.647,0.404,1.285,0.566,1.938\n\t\t\tL299.833,173.4z"], ["fill", "#E2324B", "d", "M304.058,171.21c-0.156-0.521-0.875-0.779-1.662-0.63c0.191,0.673,0.422,1.338,0.586,2.021\n\t\t\tC303.741,172.319,304.222,171.729,304.058,171.21z"], ["fill", "#FFFFFF", "points", "299.331,172.665 299.251,172.401 304.212,171.017 304.296,171.293 \t\t"], ["fill", "#FFFFFF", "points", "300.399,177.768 299.79,175.309 305.04,174.004 305.679,176.594 \t\t"], ["fill", "#E2324B", "points", "300.804,177.38 300.333,175.475 303.194,174.772 303.679,176.732 \t\t"], ["fill", "#E2324B", "d", "M305.106,175.359c-0.129-0.528-0.832-0.815-1.627-0.699l0.506,2.044\n\t\t\tC304.745,176.455,305.237,175.887,305.106,175.359z"], ["fill", "#FFFFFF", "points", "300.323,176.626 300.259,176.359 305.271,175.171 305.341,175.452 \t\t"], ["fill", "#FFFFFF", "d", "M320.953,169.015c-0.231-0.949-1.34-1.478-2.586-1.276c0.33,1.21,0.603,2.433,0.908,3.648\n\t\t\tC320.448,170.966,321.187,169.964,320.953,169.015z"], ["fill", "#62381B", "d", "M319.526,170.903l-0.705-2.887c0.814,0.072,1.457,0.5,1.609,1.122\n\t\t\tC320.582,169.757,320.21,170.443,319.526,170.903z"], ["fill", "#E8D320", "points", "299.991,189.862 300.005,189.986 304.778,189.503 304.767,189.374 \t\t"], ["fill", "#E2324B", "d", "M305.69,189.814c0.535-0.051,0.977-0.289,1.164-0.591c-0.24-0.259-0.717-0.4-1.252-0.346\n\t\t\tc-0.535,0.059-0.977,0.297-1.162,0.593C304.677,189.719,305.155,189.867,305.69,189.814z"], ["fill", "#E2324B", "d", "M305.388,190.163c0.512,0.11,1.026,0.021,1.34-0.205c-0.094-0.314-0.457-0.599-0.967-0.705\n\t\t\tc-0.51-0.104-1.025-0.01-1.338,0.218C304.515,189.776,304.876,190.053,305.388,190.163z"], ["fill", "#E2324B", "d", "M305.241,188.597c0.479-0.211,1.003-0.228,1.352-0.067c-0.031,0.327-0.336,0.679-0.816,0.886\n\t\t\tc-0.481,0.206-1.004,0.215-1.352,0.058C304.458,189.153,304.761,188.808,305.241,188.597z"], ["fill", "#E8D320", "d", "M302.89,189.432c0.58-0.242,0.91-0.521,1.176-0.756c-0.422,0.041-0.858,0.109-1.438,0.355\n\t\t\tc-0.578,0.244-1.023,0.531-1.176,0.743C301.757,189.797,302.31,189.675,302.89,189.432z"], ["fill", "#E8D320", "d", "M302.206,190.188c0.455,0.101,1.172,0.176,1.43,0.134c-0.172-0.148-0.824-0.364-1.279-0.464\n\t\t\tc-0.455-0.102-0.877-0.118-1.102-0.062C301.392,189.932,301.751,190.084,302.206,190.188z"], ["fill", "#FFFFFF", "d", "M305.784,189.342c0.444,0.095,0.778,0.316,0.93,0.577c-0.109-0.299-0.466-0.562-0.953-0.667\n\t\t\tc-0.51-0.104-1.025-0.01-1.338,0.218l0.024,0.066C304.771,189.324,305.278,189.238,305.784,189.342z"], ["fill", "#E8D320", "points", "300.21,192.135 300.224,192.255 305.009,191.883 304.995,191.754 \t\t"], ["fill", "#F15C27", "d", "M305.923,192.213c0.537-0.039,0.979-0.265,1.164-0.562c-0.24-0.263-0.72-0.417-1.256-0.372\n\t\t\tc-0.537,0.045-0.979,0.273-1.162,0.562C304.907,192.098,305.386,192.254,305.923,192.213z"], ["fill", "#F15C27", "d", "M305.622,192.555c0.512,0.121,1.028,0.044,1.34-0.177c-0.095-0.314-0.459-0.604-0.971-0.725\n\t\t\tc-0.513-0.117-1.027-0.03-1.341,0.187C304.745,192.15,305.11,192.434,305.622,192.555z"], ["fill", "#F15C27", "d", "M305.468,190.991c0.479-0.199,1.004-0.205,1.354-0.037c-0.033,0.327-0.336,0.67-0.815,0.866\n\t\t\tc-0.48,0.194-1.004,0.191-1.355,0.025C304.683,191.527,304.987,191.191,305.468,190.991z"], ["fill", "#E8D320", "d", "M303.112,191.77c0.58-0.229,0.912-0.497,1.177-0.728c-0.422,0.031-0.859,0.09-1.441,0.321\n\t\t\tc-0.58,0.231-1.023,0.508-1.174,0.716C301.981,192.109,302.534,191.999,303.112,191.77z"], ["fill", "#E8D320", "d", "M302.431,192.508c0.459,0.11,1.178,0.2,1.438,0.166c-0.177-0.151-0.83-0.382-1.287-0.491\n\t\t\ts-0.879-0.138-1.104-0.084C301.612,192.237,301.976,192.396,302.431,192.508z"], ["fill", "#FFFFFF", "d", "M306.015,191.747c0.445,0.104,0.783,0.332,0.936,0.597c-0.11-0.303-0.467-0.572-0.958-0.688\n\t\t\tc-0.513-0.117-1.027-0.03-1.341,0.187l0.025,0.067C304.999,191.706,305.509,191.629,306.015,191.747z"], ["fill", "#E8D320", "points", "300.356,194.41 300.36,194.533 305.153,194.269 305.147,194.14 \t\t"], ["fill", "#E2324B", "d", "M306.048,194.622c0.539-0.026,0.989-0.244,1.19-0.536c-0.225-0.269-0.692-0.435-1.231-0.401\n\t\t\tc-0.535,0.033-0.99,0.251-1.191,0.537C305.04,194.482,305.511,194.65,306.048,194.622z"], ["fill", "#E2324B", "d", "M305.728,194.955c0.506,0.135,1.025,0.069,1.35-0.144c-0.077-0.318-0.428-0.616-0.93-0.746\n\t\t\tc-0.504-0.131-1.022-0.058-1.348,0.153C304.876,194.53,305.224,194.823,305.728,194.955z"], ["fill", "#E2324B", "d", "M305.661,193.386c0.489-0.188,1.012-0.184,1.354-0.008c-0.051,0.327-0.371,0.664-0.861,0.85\n\t\t\tc-0.489,0.185-1.014,0.169-1.354-0.004C304.849,193.907,305.171,193.576,305.661,193.386z"], ["fill", "#E8D320", "d", "M303.271,194.113c0.59-0.216,0.937-0.478,1.211-0.701c-0.422,0.021-0.86,0.071-1.453,0.29\n\t\t\tc-0.592,0.216-1.049,0.484-1.213,0.688C302.122,194.425,302.679,194.329,303.271,194.113z"], ["fill", "#E8D320", "d", "M302.552,194.834c0.447,0.123,1.16,0.229,1.42,0.199c-0.166-0.154-0.807-0.398-1.254-0.521\n\t\t\tc-0.451-0.121-0.871-0.156-1.098-0.109C301.749,194.543,302.101,194.713,302.552,194.834z"], ["fill", "#FFFFFF", "d", "M306.164,194.155c0.438,0.113,0.765,0.351,0.898,0.619c-0.092-0.304-0.434-0.585-0.916-0.709\n\t\t\tc-0.504-0.131-1.022-0.058-1.348,0.153l0.021,0.066C305.153,194.091,305.667,194.027,306.164,194.155z"], ["fill", "#E8D320", "points", "300.46,196.687 300.468,196.811 305.263,196.658 305.257,196.528 \t\t"], ["fill", "#EE7D8F", "d", "M306.16,197.03c0.539-0.015,0.99-0.222,1.189-0.51c-0.228-0.272-0.697-0.448-1.234-0.428\n\t\t\tc-0.538,0.021-0.991,0.228-1.19,0.508C305.151,196.867,305.624,197.044,306.16,197.03z"], ["fill", "#EE7D8F", "d", "M305.845,197.356c0.504,0.146,1.024,0.092,1.348-0.113c-0.08-0.319-0.43-0.626-0.936-0.768\n\t\t\ts-1.025-0.078-1.348,0.123C304.987,196.911,305.339,197.211,305.845,197.356z"], ["fill", "#EE7D8F", "d", "M305.767,195.787c0.49-0.177,1.014-0.156,1.354,0.024c-0.049,0.326-0.366,0.653-0.856,0.827\n\t\t\tc-0.49,0.175-1.014,0.146-1.354-0.034C304.958,196.288,305.276,195.965,305.767,195.787z"], ["fill", "#E8D320", "d", "M303.378,196.458c0.59-0.202,0.934-0.455,1.209-0.672c-0.424,0.012-0.865,0.05-1.455,0.256\n\t\t\tc-0.59,0.204-1.049,0.461-1.209,0.659C302.229,196.744,302.786,196.659,303.378,196.458z"], ["fill", "#E8D320", "d", "M302.659,197.164c0.45,0.132,1.166,0.255,1.426,0.23c-0.166-0.16-0.81-0.417-1.26-0.548\n\t\t\tc-0.449-0.134-0.871-0.179-1.099-0.138C301.856,196.856,302.21,197.03,302.659,197.164z"], ["fill", "#FFFFFF", "d", "M306.274,196.567c0.441,0.121,0.768,0.368,0.904,0.639c-0.094-0.308-0.437-0.595-0.922-0.729\n\t\t\tc-0.506-0.142-1.025-0.078-1.348,0.123l0.021,0.068C305.263,196.479,305.774,196.427,306.274,196.567z"], ["fill", "#A0BF3B", "d", "M301.708,195.811c-0.088-1.482-0.761-2.76-1.916-3.458c0.129,2.35,0.315,4.705,0.278,7.062\n\t\t\tC301.146,198.623,301.806,197.293,301.708,195.811z"], ["fill", "#E8D320", "d", "M302.089,191.809c-0.164-1.633-1.213-2.981-2.693-3.646c0.224,2.559,0.533,5.109,0.586,7.677\n\t\t\tC301.323,194.949,302.282,193.442,302.089,191.809z"], ["fill", "#E2324B", "d", "M302.573,209.591c1.734,0.171,3.349-0.795,3.402-2.176c0.066-1.379-1.303-2.557-3.063-2.633\n\t\t\tc-1.765-0.074-3.254,0.902-3.314,2.184C299.55,208.247,300.794,209.415,302.573,209.591z M302.606,209.278\n\t\t\tc-1.549-0.15-2.617-1.164-2.594-2.285c0.057-1.117,1.35-1.965,2.881-1.896c1.533,0.073,2.721,1.096,2.664,2.289\n\t\t\tC305.522,208.581,304.114,209.419,302.606,209.278z"], ["fill", "#E2324B", "d", "M301.56,217.319c1.738,0.305,3.312-0.553,3.527-1.918c0.225-1.363-1.043-2.644-2.816-2.854\n\t\t\tc-1.731-0.207-3.297,0.652-3.51,1.918C298.563,215.735,299.819,217.013,301.56,217.319z M301.606,217.01\n\t\t\tc-1.512-0.265-2.602-1.373-2.432-2.482c0.174-1.107,1.563-1.85,3.065-1.664c1.546,0.191,2.609,1.295,2.433,2.477\n\t\t\tC304.487,216.522,303.118,217.267,301.606,217.01z"], ["fill", "#E2324B", "d", "M305.456,208.142c1.374,0.631,2.825,1.344,3.085,1.504c0.104,0.063,0.14,0.156,0.128,0.305\n\t\t\tc-0.025,0.266-0.261,0.617-0.375,0.766l-0.062,0.078l0.269,0.15c0.004-0.008,0.432-0.498,0.487-0.965\n\t\t\tc0.021-0.188-0.033-0.4-0.256-0.537c-0.307-0.182-1.717-0.879-3.129-1.516c-1.406-0.638-2.742-1.203-2.742-1.203l-0.146,0.209\n\t\t\tC302.718,206.935,304.05,207.501,305.456,208.142z"], ["fill", "#E2324B", "d", "M301.786,212.245l-0.013,0.535c-0.01,1.715-0.053,2.271-0.047,2.273l-0.01,0.211\n\t\t\tc1.518-0.531,3.043-1.095,4.569-1.687l-0.161-0.229c-1.342,0.534-2.722,1.037-4.072,1.52c0.004-0.295,0.043-0.928,0.037-2.074\n\t\t\tl0.014-0.512c0.078-0.752,0.39-1.191,0.82-1.494c0.432-0.305,1-0.473,1.602-0.633c1.396-0.371,2.377-1.502,2.389-1.51\n\t\t\tl-0.266-0.146c0,0.002-0.057,0.068-0.168,0.174c-0.106,0.107-0.271,0.257-0.473,0.412c-0.402,0.316-0.967,0.67-1.6,0.838\n\t\t\tc-0.604,0.164-1.222,0.341-1.707,0.683c-0.49,0.342-0.836,0.846-0.914,1.631L301.786,212.245z"], ["fill", "#E2324B", "points", "306.444,213.737 306.601,213.524 302.103,211.397 301.952,211.603 \t\t"], ["fill", "#E2324B", "d", "M303.659,212.171c-0.003-0.02,0.045-0.116,0.145-0.233c0.098-0.115,0.24-0.26,0.42-0.414\n\t\t\tc0.357-0.31,0.855-0.666,1.424-0.963c1.205-0.633,1.688-1.715,1.693-1.726l-0.3-0.09c-0.002,0-0.028,0.062-0.092,0.164\n\t\t\tc-0.059,0.107-0.151,0.254-0.28,0.418c-0.257,0.33-0.654,0.736-1.209,1.023c-0.89,0.467-1.604,1.057-1.931,1.444\n\t\t\tc-0.104,0.132-0.176,0.23-0.188,0.338L303.659,212.171z"], ["fill", "#E2324B", "d", "M307.005,212.907c0.098,0.662,0.135,1.32,0.176,1.98l-0.883-0.183c0.125-0.713,0.223-1.43,0.278-2.149\n\t\t\tL307.005,212.907z"], ["fill", "#E2324B", "points", "308.476,211.28 309.03,210.286 308.544,210.101 307.987,211.091 \t\t"], ["fill", "#E2324B", "d", "M310.621,253.331l-5.128-2.461c0.153,0.23,0.225,0.457,0.045,0.601c-0.22,0.17-0.771-0.082-1.017-0.177\n\t\t\tc0.474,0.365,1.013,1.021,0.513,1.482c-0.324,0.299-0.861,0.137-1.293,0.045c0.987,0.82,0.59,1.877-0.646,1.617\n\t\t\tc0.623,0.387,0.67,0.916,0.223,1.035l4.902,2.621C309.108,256.554,309.812,254.915,310.621,253.331z"], ["fill", "#2D948D", "d", "M303.097,254.438c1.234,0.26,1.633-0.797,0.646-1.617c0.432,0.092,0.969,0.254,1.293-0.045\n\t\t\tc0.5-0.463-0.039-1.117-0.513-1.482c0.246,0.095,0.797,0.347,1.017,0.177c0.18-0.144,0.108-0.369-0.045-0.601l-1.285-0.617\n\t\t\tc-0.765,1.49-1.424,3.039-2.263,4.486l1.373,0.734C303.767,255.354,303.72,254.825,303.097,254.438z"], ["fill", "#E8D320", "d", "M314.464,253.751c0.336,0.482,0.676,0.9,1.018,1.236l0.646-0.494c-0.304-0.393-0.584-0.844-0.869-1.332\n\t\t\tL314.464,253.751z"], ["fill", "#E8D320", "d", "M313.119,254.249l0.716-0.658l-0.544-0.823l-0.125-0.215c-0.297,0.288-0.557,0.577-0.782,0.854\n\t\t\tL313.119,254.249z"], ["fill", "#2D948D", "points", "313.696,252.565 314.169,253.313 314.974,252.665 314.593,251.976 314.267,251.476\n\t\t\t313.485,252.233 \t\t"], ["fill", "#E8D320", "d", "M320.013,253.731l-0.06,0.113l-0.157,0.248c0.604,0.038,1.272,0.172,2.02,0.44l0.107,0.047l-0.045-0.026\n\t\t\tl0.049,0.02l-0.084-0.039c-0.67-0.377-1.199-0.779-1.627-1.197l-0.195,0.388L320.013,253.731z"], ["fill", "#E8D320", "d", "M312.573,250.411l-0.205,0.283c0.263,0.326,0.531,0.684,0.802,1.07l0.752-0.75l0.008-0.009l0.004-0.004\n\t\t\tc-0.31-0.414-0.627-0.784-0.945-1.112l-0.408,0.516L312.573,250.411z"], ["fill", "#2D948D", "d", "M317.337,253.427l-0.666-1.188l-0.009-0.014l-0.116-0.207l-0.104,0.108l-0.008,0.006l-0.551,0.531\n\t\t\tl-0.289,0.23c0.281,0.518,0.539,0.985,0.799,1.391l0.736-0.633L317.337,253.427z"], ["fill", "#E8D320", "points", "317.556,254.044 316.974,254.538 317.869,254.274 317.647,253.942 \t\t"], ["fill", "#2D948D", "d", "M318.397,252.997l-0.008,0.008l-0.506,0.673l0.305,0.524l0.926-0.117l0.336-0.526l0.035-0.064l0.006-0.008\n\t\t\tl0.312-0.588l-0.099-0.117c-0.209-0.139-0.485-0.35-0.805-0.643L318.397,252.997z"], ["fill", "#2D948D", "d", "M313.435,254.567c0.334,0.32,0.658,0.592,0.971,0.783l0.015,0.006l0.821-0.201\n\t\t\tc-0.375-0.305-0.748-0.703-1.104-1.156L313.435,254.567z"], ["fill", "#E8D320", "d", "M314.028,255.401c-0.281-0.154-0.565-0.359-0.854-0.6l-0.451,0.454\n\t\t\tC313.185,255.394,313.61,255.431,314.028,255.401z"], ["fill", "#E8D320", "d", "M317.294,252.519l0.303,0.604l0.271-0.352l0.006-0.006c0.24-0.326,0.451-0.662,0.632-1\n\t\t\tc-0.293-0.295-0.599-0.656-0.927-1.037c-0.215,0.315-0.454,0.637-0.725,0.947l0.432,0.825L317.294,252.519z"], ["fill", "#2D948D", "points", "316.319,249.37 315.712,250.052 316.341,250.815 316.565,251.175 317.251,250.349 \t\t"], ["fill", "#E8D320", "points", "315.412,250.364 314.587,251.177 314.712,251.356 314.722,251.37 314.987,251.772\n\t\t\t315.315,252.386 315.483,252.251 315.878,251.886 315.886,251.878 316.253,251.513 315.964,251.052 \t\t"], ["fill", "#E8D320", "d", "M314.681,248.235l-0.621,0.514c0.436,0.248,0.873,0.562,1.283,0.941l0.643-0.619\n\t\t\tC315.558,248.716,315.115,248.442,314.681,248.235z"], ["fill", "#2D948D", "d", "M314.239,250.722l0.806-0.744c-0.402-0.392-0.822-0.722-1.244-0.99l-0.601,0.645\n\t\t\tC313.554,249.944,313.905,250.312,314.239,250.722z"], ["fill", "#E8D320", "d", "M311.71,250.349l-0.548,1.246l0.062,0.114c0.176-0.375,0.356-0.785,0.611-1.186L311.71,250.349z"], ["fill", "#2D948D", "points", "312.062,250.175 312.571,249.487 312.21,249.181 311.835,250.054 311.865,250.087 311.88,250.104\n\t\t\t312.007,250.253 312.056,250.181 \t\t"], ["fill", "#2D948D", "d", "M312.101,253.056c0.221-0.32,0.488-0.64,0.779-0.963c-0.25-0.39-0.492-0.757-0.724-1.097\n\t\t\tc-0.268,0.4-0.496,0.787-0.688,1.142c0.174,0.295,0.379,0.592,0.61,0.891L312.101,253.056z"], ["fill", "#E8D320", "d", "M312.558,248.372l-0.248,0.582l0.449,0.312l0.547-0.564C313.05,248.565,312.8,248.456,312.558,248.372z"], ["fill", "#E8D320", "points", "319.416,252.397 319.056,251.821 319.005,251.935 \t\t"], ["fill", "#2D948D", "d", "M310.912,252.706l0.121-0.496l-0.088-0.174l-0.537,1.092c0.146,0.326,0.427,0.777,0.781,1.177\n\t\t\tC311.158,254.229,310.726,253.655,310.912,252.706z"], ["fill", "#E8D320", "d", "M311.853,253.442l-0.146-0.176l-0.45-0.662l-0.068,0.178c-0.307,0.848-0.008,1.453,0.002,1.521\n\t\t\tl0.207,0.213l0.068-0.226C311.55,254.019,311.683,253.733,311.853,253.442z"], ["fill", "#2D948D", "d", "M312.364,255.135l0.492-0.611l-0.74-0.764c-0.153,0.219-0.285,0.436-0.385,0.646l-0.131,0.293\n\t\t\tc0.156,0.127,0.32,0.238,0.49,0.316L312.364,255.135z"], ["fill", "#2D948D", "d", "M316.294,248.769l0.506-0.506l-0.373-0.216l-0.865-0.407l-0.541,0.35\n\t\t\tC315.451,248.187,315.888,248.442,316.294,248.769z"], ["fill", "#E8D320", "d", "M317.498,250.003l0.453-0.707l-0.139-0.295l-0.736-0.559l-0.475,0.592\n\t\t\tC316.946,249.354,317.239,249.683,317.498,250.003z"], ["fill", "#2D948D", "d", "M318.642,251.507l0.121-0.26c-0.236-0.508-0.42-1.004-0.611-1.479l-0.35,0.621\n\t\t\tC318.11,250.792,318.38,251.177,318.642,251.507z"], ["fill", "#2D948D", "d", "M315.94,247.085l-0.234-0.106c-0.698-0.297-1.731-0.246-2.35-0.066c0.535-0.006,1.312,0.045,2.197,0.334\n\t\t\tL315.94,247.085z"], ["fill", "#E8D320", "d", "M315.093,247.462c-0.797-0.27-1.498-0.389-1.953-0.44l-0.183,0.422c0.453,0.031,0.994,0.139,1.562,0.34\n\t\t\tL315.093,247.462z"], ["fill", "#2D948D", "d", "M314.164,248.011c-0.463-0.177-0.907-0.287-1.301-0.355l-0.213,0.5c0.287,0.074,0.588,0.187,0.898,0.33\n\t\t\tL314.164,248.011z"], ["fill", "#E8D320", "d", "M316.617,247.696l0.461,0.283l0.033-0.035c-0.233-0.256-0.516-0.49-0.863-0.695l-0.276,0.148\n\t\t\tL316.617,247.696z"], ["fill", "#2D948D", "d", "M314.522,263.388c-0.189,0.342-0.586,0.521-1.113,0.521c0.213,0.566,0.188,1.146-0.08,1.631\n\t\t\tc-0.303,0.535-0.844,0.877-1.536,0.931c0.262,0.62,0.235,1.271-0.089,1.791c-0.291,0.469-0.778,0.768-1.371,0.856\n\t\t\tc0.255,0.453,0.289,0.881,0.091,1.199c-0.158,0.254-0.438,0.397-0.797,0.436l3.448,1.826c1.672-2.615,3.275-5.266,4.732-8.006\n\t\t\tl-3.31-2.176C314.66,262.755,314.683,263.103,314.522,263.388z"], ["fill", "#E2324B", "d", "M312.179,264.854c0.231-0.418-0.074-1.053-0.668-1.387l-0.045-0.027l-0.843,1.52l0.046,0.025\n\t\t\tC311.259,265.331,311.949,265.271,312.179,264.854z"], ["fill", "#E2324B", "d", "M313.351,262.743c0.143-0.254-0.244-0.744-0.842-1.072l-0.049-0.022l-0.515,0.926l0.045,0.025\n\t\t\tC312.587,262.931,313.21,262.997,313.351,262.743z"], ["fill", "#E2324B", "d", "M309.272,269.638c0.152-0.248-0.205-0.763-0.781-1.125l-0.047-0.027l-0.559,0.898l0.045,0.028\n\t\t\tC308.505,269.78,309.117,269.886,309.272,269.638z"], ["fill", "#E2324B", "d", "M310.574,267.546c0.25-0.403-0.03-1.041-0.617-1.391l-0.045-0.029l-0.916,1.474l0.043,0.026\n\t\t\tC309.621,267.987,310.323,267.95,310.574,267.546z"], ["fill", "#E2324B", "d", "M310.271,263.51c0.26-0.468-0.025-1.146-0.619-1.48l-0.047-0.025l-0.945,1.705l0.045,0.025\n\t\t\tC309.294,264.079,310.013,263.976,310.271,263.51z"], ["fill", "#E2324B", "d", "M311.585,261.142c0.157-0.287-0.218-0.802-0.816-1.125l-0.047-0.025l-0.578,1.039l0.047,0.027\n\t\t\tC310.785,261.386,311.427,261.427,311.585,261.142z"], ["fill", "#E2324B", "d", "M307.009,268.878c0.174-0.274-0.17-0.817-0.746-1.184l-0.045-0.029l-0.627,1.008l0.045,0.031\n\t\t\tC306.205,269.077,306.837,269.157,307.009,268.878z"], ["fill", "#E2324B", "d", "M308.47,266.53c0.283-0.453,0.026-1.135-0.56-1.484l-0.047-0.026l-1.028,1.653l0.045,0.029\n\t\t\tC307.46,267.063,308.188,266.983,308.47,266.53z"], ["fill", "#E2324B", "d", "M310.444,259.651l0.4,0.178c0.797,0.428,1.262,1.105,1.035,1.512c-0.191,0.345-0.81,0.382-1.472,0.121\n\t\t\tc0.188,0.16,0.347,0.336,0.472,0.529c0.696,0.146,1.28,0.027,1.496-0.359c0.325-0.59-0.339-1.562-1.486-2.174l-0.57-0.254\n\t\t\tl-0.942,1.701l0.311,0.111L310.444,259.651z"], ["fill", "#E2324B", "d", "M308.259,264.181l-0.574-0.259l1.521-2.713l0.523,0.34c0.391,0.22,0.787,0.365,1.15,0.441\n\t\t\tc0.424,0.635,0.512,1.414,0.159,2.049c-0.375,0.672-1.127,1.002-1.952,0.9C308.882,264.647,308.603,264.385,308.259,264.181z\n\t\t\t M308.462,264.116c0.784,0.465,1.717,0.289,2.092-0.385c0.373-0.674,0.035-1.576-0.756-2.019l-0.404-0.172l-1.279,2.312\n\t\t\tL308.462,264.116z"], ["fill", "#E2324B", "d", "M310.88,261.991c-0.125-0.193-0.283-0.369-0.472-0.529l-0.375-0.176l-0.364-0.235l0.018-0.033\n\t\t\tl-0.311-0.111l-0.171,0.305l0.523,0.341C310.119,261.769,310.517,261.915,310.88,261.991z"], ["fill", "#E2324B", "points", "309.687,261.017 309.669,261.05 310.033,261.286 310.408,261.462 309.953,261.144 \t\t"], ["fill", "#E2324B", "d", "M306.421,267.132l-0.551-0.297l1.645-2.641l0.5,0.379c0.342,0.203,0.709,0.324,1.072,0.367\n\t\t\tc0.463,0.66,0.543,1.488,0.137,2.141c-0.383,0.613-1.101,0.914-1.855,0.853C307.121,267.647,306.802,267.37,306.421,267.132z\n\t\t\t M306.621,267.071c0.767,0.48,1.718,0.344,2.125-0.314c0.408-0.651,0.107-1.559-0.672-2.02l-0.399-0.182l-1.396,2.239\n\t\t\tL306.621,267.071z"], ["fill", "#E2324B", "d", "M309.087,264.94c-0.205-0.293-0.484-0.558-0.828-0.76l-0.574-0.259l-0.17,0.271l0.5,0.379\n\t\t\tC308.356,264.776,308.724,264.897,309.087,264.94z"], ["fill", "#E2324B", "d", "M307.791,269.382c0.224-0.36,0.039-0.918-0.424-1.448l-0.58-0.119c0.486,0.438,0.718,0.94,0.527,1.246\n\t\t\tc-0.238,0.383-1.047,0.291-1.805-0.203l-0.35-0.262l0.772-1.246l-0.248-0.222l-0.983,1.586l0.5,0.377\n\t\t\tC306.289,269.804,307.448,269.933,307.791,269.382z"], ["fill", "#E2324B", "d", "M305.978,267.28l0.383,0.211l0.428,0.322l0.58,0.119c-0.246-0.285-0.565-0.562-0.946-0.802l-0.551-0.297\n\t\t\tl-0.185,0.293l0.248,0.222L305.978,267.28z"], ["fill", "#E2324B", "d", "M312.224,261.288l0.395,0.185c0.797,0.432,1.275,1.075,1.074,1.442c-0.17,0.306-0.768,0.31-1.422,0.039\n\t\t\tc0.188,0.154,0.35,0.324,0.48,0.506c0.684,0.168,1.245,0.088,1.438-0.256c0.293-0.526-0.398-1.453-1.541-2.067l-0.568-0.263\n\t\t\tl-0.514,0.951l-0.959-0.102c0.064,0.02,0.25,0.653,0.496,0.877c0.154,0.137,0.406-0.107,0.443-0.093L312.224,261.288z"], ["fill", "#E2324B", "d", "M310.3,265.349c-0.188-0.111-0.843-0.412-1.035-0.479l1.035-0.733l0.789-1.474l0.524,0.336\n\t\t\tc0.387,0.22,0.777,0.377,1.137,0.461c0.443,0.604,0.562,1.324,0.248,1.892c-0.334,0.6-1.053,0.867-1.856,0.733\n\t\t\tC310.927,265.806,310.642,265.548,310.3,265.349z M310.492,265.296c0.785,0.466,1.683,0.349,2.019-0.252\n\t\t\tc0.334-0.602-0.035-1.446-0.826-1.891l-0.4-0.174l-1.141,2.059L310.492,265.296z"], ["fill", "#E2324B", "d", "M312.751,263.46c-0.132-0.182-0.294-0.352-0.48-0.506l-0.375-0.182l-0.365-0.234l0.017-0.029l-0.31-0.116\n\t\t\tl-0.147,0.271l0.524,0.336C312.001,263.219,312.392,263.376,312.751,263.46z"], ["fill", "#E2324B", "points", "311.546,262.51 311.53,262.538 311.896,262.772 312.271,262.954 311.813,262.64 \t\t"], ["fill", "#E2324B", "d", "M308.658,267.981l-0.547-0.299c-0.002,0.002,1.224-1.347,1.086-2.533c-0.008-0.08,0.697,0.436,0.883,0.547\n\t\t\tc0.345,0.203,0.705,0.334,1.062,0.389c0.481,0.631,0.6,1.396,0.238,1.979c-0.343,0.547-1.023,0.791-1.761,0.697\n\t\t\tC309.369,268.489,309.041,268.22,308.658,267.981z M308.853,267.933c0.768,0.479,1.684,0.395,2.047-0.189s0.029-1.432-0.752-1.893\n\t\t\tl-0.396-0.185l-1.244,1.998L308.853,267.933z"], ["fill", "#E2324B", "d", "M311.142,266.085c-0.215-0.278-0.5-0.537-0.842-0.735c-0.187-0.111-1.166-0.765-1.359-0.83l0.127,0.744\n\t\t\tc0.15,0.137,0.828,0.323,1.014,0.434C310.425,265.899,310.785,266.03,311.142,266.085z"], ["fill", "#E2324B", "d", "M310.103,270.112c0.197-0.318-0.008-0.84-0.482-1.352l-0.569-0.136c0.494,0.424,0.739,0.896,0.574,1.17\n\t\t\tc-0.214,0.341-1.003,0.224-1.765-0.271l-0.352-0.258l0.918-1.476c-0.088-0.067-0.662,0.082-1.342-0.295\n\t\t\tc0.002-0.002,0.911,1.156-0.017,1.859c-0.076,0.059,0.322,0.254,0.504,0.371C308.664,270.433,309.794,270.606,310.103,270.112z"], ["fill", "#E2324B", "d", "M308.235,268.097l0.383,0.209l0.433,0.319l0.569,0.136c-0.25-0.271-0.578-0.541-0.961-0.779l-0.547-0.299\n\t\t\tl-0.164,0.262l0.25,0.215L308.235,268.097z"], ["fill", "#E2324B", "d", "M304.964,268.747c1.854-2.928,3.674-5.879,5.299-8.946l-22.312-12.052\n\t\t\tc-1.291,2.447-2.746,4.795-4.218,7.133L304.964,268.747z"], ["fill", "#E2324B", "d", "M295.155,245.208c0.931-1.699,1.662-3.498,2.523-5.237l2.75,1.12c0.357-0.786,0.596-1.622,0.9-2.432\n\t\t\tl-7.859-2.988c-0.863,2.445-1.965,4.787-3.018,7.144L295.155,245.208z"], ["fill", "#E8D320", "d", "M321.49,255.282c-0.397-0.182-0.584-0.643-0.416-1.029c0.166-0.391,0.625-0.563,1.025-0.389\n\t\t\tc0.397,0.174,0.584,0.637,0.414,1.031C322.347,255.288,321.886,255.462,321.49,255.282z"], ["fill", "#E8D320", "points", "327.53,257.284 322.214,254.497 321.876,254.872 \t\t"], ["fill", "#E8D320", "d", "M307.651,276.597c-0.354-0.257-0.447-0.738-0.207-1.082c0.238-0.347,0.719-0.425,1.078-0.177\n\t\t\ts0.455,0.732,0.211,1.08C308.49,276.771,308.005,276.847,307.651,276.597z"], ["fill", "#E8D320", "points", "313.199,279.722 308.515,275.974 308.11,276.271 \t\t"], ["fill", "#E2324B", "d", "M318.044,260.46c-0.199-0.102-0.285-0.338-0.188-0.53c0.092-0.195,0.332-0.269,0.531-0.168\n\t\t\tc0.199,0.098,0.281,0.336,0.186,0.53C318.478,260.487,318.24,260.562,318.044,260.46z"], ["fill", "#E2324B", "points", "321.069,261.635 318.431,260.083 318.246,260.263 \t\t"], ["fill", "#E2324B", "d", "M305.642,242.149c-0.205-0.082-0.32-0.291-0.258-0.465c0.063-0.174,0.285-0.248,0.49-0.168\n\t\t\tc0.206,0.082,0.325,0.289,0.26,0.465S305.849,242.231,305.642,242.149z"], ["fill", "#E2324B", "points", "308.746,243.073 305.962,241.8 305.813,241.969 \t\t"], ["fill", "#2D948D", "d", "M317.819,259.913c-2.309-1.43-2.551-3.08-3.09-4.459c-0.891,0.24-2.727,0.354-4.092-1.477l-0.881,1.852\n\t\t\tL317.819,259.913z"], ["fill", "#2D948D", "d", "M309.785,259.88c-0.61-0.321-1.116-1.127-1.299-1.6c0.467-0.797,0.873-1.625,1.273-2.457l8.062,4.08\n\t\t\tC313.914,258.237,312.511,261.312,309.785,259.88z"], ["fill", "#F15C27", "d", "M307.63,275.54c-0.67-0.641-1.064-1.274-1.314-1.891l-0.086-0.229c-0.512-0.477-1.321-1.186-2.291-1.891\n\t\t\tc-0.981-0.742-1.938-1.283-2.557-1.604l-0.572,0.825c0.734,0.438,2.039,1.234,3.465,2.23\n\t\t\tC305.755,274.019,306.987,275.005,307.63,275.54z"], ["fill", "#A0BF3B", "d", "M304.206,271.175c-1.025-0.762-2.056-1.17-2.729-1.385l0.566-0.815c0.662,0.184,1.639,0.53,2.565,1.223\n\t\t\tc0.427,0.307,0.795,0.639,1.107,0.965l0.195,1.033l0.028,0.154l0.137,0.596C305.647,272.417,305.024,271.767,304.206,271.175z\n\t\t\t M302.634,273.595c-1.082-0.699-1.953-1.449-2.465-1.918l0.569-0.822c0.66,0.543,1.855,1.498,3.277,2.498\n\t\t\tc1.379,0.973,2.647,1.752,3.396,2.192c-0.776-0.379-1.462-0.518-2.09-0.539h-0.301\n\t\t\tC304.401,274.683,303.54,274.202,302.634,273.595z M300.253,274.745c-0.351-0.254-0.631-0.692-0.812-1.1\n\t\t\tc-0.104-0.23-0.176-0.453-0.217-0.627l0.209-0.279c0.293,0.639,0.84,1.576,1.947,2.338l0.459,0.273l-0.107-0.013\n\t\t\tC301.253,275.282,300.767,275.114,300.253,274.745z"], ["fill", "#F15C27", "d", "M304.88,269.841c-1.01-0.723-2.019-0.954-2.721-1.032l0.155-0.226c0.17-0.032,0.398-0.039,0.648-0.021\n\t\t\tc0.459,0.041,0.99,0.172,1.352,0.42c0.529,0.361,0.854,0.76,1.068,1.188l0.066,0.146L304.88,269.841z M301.638,274.712\n\t\t\tc-1.041-0.688-1.713-1.549-2.104-2.114l0.551-0.795c0.387,0.508,1.039,1.258,1.975,1.938l0.004,0.004l0.336,0.229\n\t\t\tc0.742,0.5,1.474,0.844,2.084,1.071l-0.514,0.072l-0.16,0.027l-1.084,0.186C302.37,275.163,302.003,274.96,301.638,274.712z"], ["fill", "#E8D320", "d", "M330.354,275.181c-0.254-0.152-0.686-0.136-0.91-0.052l-0.715,1.25l3.328,1.968\n\t\t\tC330.606,277.28,331.468,275.849,330.354,275.181z"], ["fill", "#E8D320", "d", "M328.455,278.374c-0.256-0.147-0.432-0.537-0.481-0.772l0.756-1.226l3.328,1.97\n\t\t\tC330.408,277.522,329.585,279.032,328.455,278.374z"], ["fill", "#2D948D", "d", "M325.729,276.103c0.451-0.729,0.912-1.447,1.316-2.205l1.993,1.156c-0.411,0.768-0.881,1.5-1.34,2.239\n\t\t\tL325.729,276.103z"], ["fill", "#E2324B", "d", "M298.263,272.495l3.225-4.615c0.056-0.077,0.171-0.094,0.257-0.036l0.434,0.288\n\t\t\tc0.088,0.06,0.115,0.169,0.061,0.248l-3.25,4.648c-0.059,0.078-0.174,0.088-0.26,0.023l-0.418-0.31\n\t\t\tC298.226,272.681,298.204,272.569,298.263,272.495z"], ["fill", "#E2324B", "d", "M309.251,253.032c1.125-2.154,2.004-4.424,2.983-6.646l0.883,0.364c-0.987,2.24-1.873,4.525-3.008,6.699\n\t\t\tL309.251,253.032z"], ["fill", "#E2324B", "d", "M289.788,267.989c1.647-2.08,3.084-4.313,4.582-6.502c0.092-0.148,0.309-0.176,0.487-0.062l0.84,0.544\n\t\t\tc0.181,0.114,0.248,0.329,0.154,0.481c-1.52,2.221-2.981,4.492-4.654,6.604c-0.106,0.143-0.331,0.151-0.502,0.022l-0.797-0.606\n\t\t\tC289.729,268.344,289.683,268.128,289.788,267.989z"], ["fill", "#E2324B", "d", "M313.026,273.204c1.916-2.985,3.734-6.022,5.4-9.153l0.844,0.454c-1.678,3.15-3.51,6.216-5.438,9.218\n\t\t\tL313.026,273.204z"], ["fill", "#E2324B", "d", "M303.646,248.716c0.679-1.383,1.229-2.823,1.855-4.229l6.157,2.586c-0.662,1.488-1.248,3.012-1.963,4.475\n\t\t\tL303.646,248.716z"], ["fill", "#E2324B", "d", "M302.841,249.681c1.01-1.916,1.772-3.951,2.656-5.933l-13.078-5.399c-0.783,1.731-1.439,3.524-2.332,5.2\n\t\t\tL302.841,249.681z"], ["fill", "#E2324B", "d", "M300.579,256.272c1.328-2.267,2.455-4.646,3.612-7.004l-13.733-6.465\n\t\t\tc-1.013,2.049-1.982,4.116-3.142,6.082L300.579,256.272z"], ["fill", "#E2324B", "d", "M289.642,267.614c1.549-1.967,2.902-4.082,4.328-6.139l-10.201-6.652\n\t\t\tc-1.276,1.826-2.475,3.715-3.856,5.467L289.642,267.614z"], ["fill", "#E2324B", "d", "M292.03,269.458l-0.418-0.354c1.584-2.015,2.972-4.176,4.431-6.281l0.473,0.273\n\t\t\tc0.951,0.616,1.545,1.459,1.271,1.838c-0.177,0.25-0.662,0.246-1.24,0.037c0.356,0.528,0.436,1.116,0.145,1.532\n\t\t\tc-0.303,0.438-0.932,0.566-1.598,0.384c0.4,0.563,0.502,1.202,0.195,1.641c-0.287,0.412-0.853,0.549-1.478,0.391\n\t\t\tc0.392,0.461,0.551,0.902,0.371,1.136C293.903,270.411,292.938,270.144,292.03,269.458z M295.548,264.077l0.223,0.133l0.381,0.306\n\t\t\tc0.554,0.291,1.062,0.354,1.22,0.131c0.188-0.262-0.216-0.842-0.879-1.277l-0.33-0.19L295.548,264.077z M294.554,266.177\n\t\t\tc0.648,0.457,1.424,0.467,1.73,0.026c0.305-0.438,0.02-1.156-0.642-1.6l-0.336-0.185l-1.049,1.509L294.554,266.177z\n\t\t\t M293.175,268.169c0.641,0.472,1.406,0.492,1.713,0.054c0.303-0.443,0.025-1.17-0.625-1.627l-0.334-0.189l-1.041,1.51\n\t\t\tL293.175,268.169z M292.284,269.331c0.635,0.478,1.305,0.662,1.497,0.414c0.15-0.197-0.049-0.606-0.452-0.998l-0.361-0.303\n\t\t\tl-0.318-0.209l-0.657,0.85L292.284,269.331z"], ["fill", "#E8D320", "d", "M302.069,255.026l-0.42-0.246c0.902-1.535,1.595-3.182,2.406-4.762l0.449,0.188\n\t\t\tc0.916,0.439,1.547,1.029,1.401,1.322c-0.094,0.191-0.493,0.203-1.016,0.059c0.402,0.384,0.588,0.816,0.432,1.132\n\t\t\tc-0.161,0.332-0.653,0.44-1.245,0.323c0.448,0.408,0.659,0.875,0.495,1.207c-0.151,0.312-0.598,0.427-1.149,0.324\n\t\t\tc0.418,0.33,0.645,0.652,0.545,0.828C303.813,255.677,302.964,255.507,302.069,255.026z M303.884,250.95l0.211,0.096l0.377,0.213\n\t\t\tc0.516,0.201,0.951,0.238,1.037,0.068c0.098-0.201-0.34-0.617-0.98-0.922l-0.312-0.133L303.884,250.95z M303.485,252.53\n\t\t\tc0.636,0.32,1.279,0.311,1.441-0.023c0.164-0.329-0.221-0.854-0.857-1.166l-0.313-0.129l-0.562,1.146L303.485,252.53z\n\t\t\t M302.745,254.04c0.633,0.332,1.272,0.326,1.438-0.006c0.16-0.334-0.219-0.865-0.854-1.186l-0.312-0.134l-0.561,1.144\n\t\t\tL302.745,254.04z M302.249,254.925c0.627,0.335,1.221,0.453,1.326,0.265c0.084-0.15-0.169-0.449-0.589-0.729l-0.358-0.215\n\t\t\tl-0.308-0.145l-0.362,0.651L302.249,254.925z"], ["fill", "#F15C27", "d", "M298.778,263.356l2.435-3.937l-7.117-4.159l-0.211,0.366l0.375,0.218c2.783,1.639,4.828,3.303,4.568,3.721\n\t\t\tc-0.263,0.418-2.705-0.613-5.459-2.301l-0.367-0.229l-0.144,0.229l0.371,0.227c2.752,1.684,4.775,3.391,4.515,3.809\n\t\t\tc-0.259,0.416-2.677-0.651-5.398-2.391l-0.365-0.231l-0.147,0.239L298.778,263.356z"], ["fill", "#E8D320", "d", "M300.735,250.794c0.521,0.261,1.105,0.14,1.306-0.27c0.2-0.41-0.06-0.947-0.584-1.201l-5.461-2.643\n\t\t\tl-0.685,1.391L300.735,250.794z"], ["fill", "#E8D320", "d", "M299.692,252.874c0.511,0.271,1.127,0.181,1.314-0.235c0.201-0.41-0.058-0.957-0.576-1.222l-5.406-2.756\n\t\t\tc-0.231,0.461-0.434,0.939-0.698,1.381L299.692,252.874z"], ["fill", "#FFFFFF", "d", "M309.151,248.333c0.312,0.14,0.654,0.041,0.766-0.221c0.111-0.258-0.053-0.576-0.366-0.711l-3.271-1.41\n\t\t\tl-0.389,0.906L309.151,248.333z"], ["fill", "#FFFFFF", "d", "M308.58,249.663c0.312,0.144,0.65,0.047,0.765-0.211c0.108-0.262-0.054-0.582-0.363-0.721l-3.254-1.449\n\t\t\tl-0.387,0.906L308.58,249.663z"], ["fill", "#E8D320", "d", "M288.942,261.856c0.584,0.408,1.373,0.281,1.767-0.277c0.391-0.563,0.227-1.332-0.371-1.727l-6.881-4.543\n\t\t\tl-0.31,0.44l6.855,4.582c0.27,0.179,0.324,0.568,0.127,0.853c-0.199,0.287-0.588,0.375-0.854,0.19l-6.803-4.664l-0.309,0.443\n\t\t\tL288.942,261.856z"], ["fill", "#E8D320", "d", "M286.868,264.774c0.562,0.422,1.387,0.346,1.774-0.219c0.39-0.562,0.232-1.349-0.35-1.763l-6.728-4.771\n\t\t\tl-0.307,0.445l6.699,4.809c0.264,0.188,0.315,0.584,0.119,0.869c-0.189,0.291-0.595,0.356-0.854,0.166l-6.641-4.888l-0.334,0.427\n\t\t\tL286.868,264.774z"], ["fill", "#E2324B", "d", "M297.005,266.72c-0.273,0.389-0.746,0.6-1.308,0.592c0.199,0.526,0.169,1.049-0.102,1.438\n\t\t\tc-0.221,0.32-0.576,0.517-1,0.57l3.777,2.762l2.731-3.94l-3.94-2.652C297.292,265.942,297.241,266.378,297.005,266.72z"], ["fill", "#E8D320", "d", "M304.274,264.011l0.008,0.014c0.242,0.361,0.479,0.672,0.757,0.893l0.032,0.025\n\t\t\tc0.47,0.066,0.982,0.221,1.551,0.514l0.068,0.041l-0.027-0.021l0.031,0.016l-0.055-0.033c-1.092-0.821-1.51-1.678-1.75-2.487\n\t\t\tl-0.023-0.017c-0.559-0.373-1.182-1.117-1.961-1.686c-0.661-0.496-1.35-0.722-1.928-0.814l-0.238,0.379\n\t\t\tc0.769,0.201,1.668,0.695,2.367,1.488C303.593,262.915,303.938,263.511,304.274,264.011z"], ["fill", "#FFFFFF", "d", "M303.089,261.024c0.777,0.576,1.264,1.229,1.725,1.668c-0.121-0.473-0.188-0.918-0.342-1.353\n\t\t\tc-0.367-0.319-0.893-0.682-1.539-0.948c-0.611-0.261-1.184-0.367-1.654-0.42l-0.182,0.293\n\t\t\tC301.702,260.331,302.431,260.556,303.089,261.024z"], ["fill", "#E8D320", "d", "M304.323,260.97c-0.209-0.466-0.526-0.877-1.098-1.22c-0.496-0.297-1.305-0.323-1.705-0.203l-0.143,0.259\n\t\t\tc0.453-0.002,1.021,0.065,1.646,0.323C303.571,260.358,304.001,260.665,304.323,260.97z"], ["fill", "#E8D320", "d", "M301.388,265.435c-0.389-0.25-0.793-0.586-1.176-0.979c-0.422-0.438-0.713-0.897-0.91-1.313l-0.275,0.444\n\t\t\tc0.121,0.414,0.49,1.129,0.979,1.438C300.497,265.333,300.948,265.437,301.388,265.435z"], ["fill", "#FFFFFF", "d", "M301.767,265.407l0.729-0.145c-0.438-0.328-0.884-0.791-1.287-1.316c-0.5-0.648-0.978-1.229-1.361-1.682\n\t\t\tl-0.406,0.653c0.236,0.418,0.558,0.886,0.992,1.33C300.888,264.719,301.349,265.128,301.767,265.407z"], ["fill", "#FFFFFF", "d", "M303.663,264.985c0.346-0.062,0.711-0.098,1.108-0.07c-0.369-0.297-0.699-0.744-1.045-1.229l-0.008-0.017\n\t\t\tl-0.848-1.153c-0.681-0.771-1.515-1.281-2.238-1.515l-0.26,0.418c0.412,0.23,0.858,0.564,1.287,0.99l0.02,0.021l0.582,0.664\n\t\t\tC302.774,263.844,303.208,264.522,303.663,264.985z"], ["fill", "#E8D320", "d", "M302.757,265.194l0.658-0.162c-0.482-0.445-0.951-1.098-1.4-1.756c-0.562-0.734-1.184-1.322-1.738-1.701\n\t\t\tl-0.33,0.529c0.445,0.42,0.986,0.985,1.507,1.66C301.894,264.339,302.335,264.841,302.757,265.194z"], ["fill", "#2D948D", "d", "M301.421,239.179l0.062-0.175c0.283,0,0.646,0.023,1.045,0.127c0.418,0.107,0.777,0.271,1.039,0.421\n\t\t\tl0.394,0.713c-0.336-0.209-0.717-0.533-1.258-0.8C302.247,239.251,301.784,239.175,301.421,239.179z M302.548,238.987\n\t\t\tc-0.406-0.102-0.756-0.107-1.027-0.078l0.056-0.146c0.229-0.089,0.715-0.121,1.049,0.01c0.383,0.149,0.627,0.354,0.811,0.59\n\t\t\tC303.202,239.219,302.905,239.077,302.548,238.987z M302.907,240.171c-0.529-0.387-1.132-0.6-1.609-0.657l0.082-0.224\n\t\t\tc0.354,0.013,0.789,0.092,1.25,0.318c0.541,0.262,1.02,0.627,1.402,0.795l0.016,0.008c0.262,0.424,0.633,0.857,1.399,1.234\n\t\t\tl0.035,0.012l-0.022-0.006l0.021,0.01l-0.043-0.016c-0.379-0.123-0.701-0.174-0.985-0.179l-0.023-0.012\n\t\t\tc-0.197-0.104-0.383-0.258-0.58-0.438l-0.008-0.009C303.571,240.765,303.278,240.462,302.907,240.171z M302.151,241.067\n\t\t\tc-0.401-0.33-0.807-0.603-1.131-0.803l0.115-0.312c0.385,0.168,0.836,0.449,1.271,0.81c0.363,0.33,0.74,0.651,1.087,0.856\n\t\t\tl-0.378,0.127C302.819,241.587,302.489,241.345,302.151,241.067z M302.53,240.649l-0.442-0.324l-0.017-0.008\n\t\t\tc-0.313-0.205-0.627-0.359-0.899-0.457l0.09-0.246c0.459,0.08,1.025,0.305,1.535,0.678l0.672,0.572l0.006,0.008\n\t\t\tc0.277,0.24,0.537,0.461,0.797,0.601c-0.235,0.008-0.444,0.053-0.637,0.106C303.3,241.36,302.942,241.021,302.53,240.649z\n\t\t\t M301.599,241.39c-0.318-0.209-0.57-0.438-0.764-0.648l0.153-0.383c0.291,0.223,0.66,0.508,1.039,0.82\n\t\t\tc0.312,0.256,0.636,0.475,0.939,0.621l-0.418,0.122C302.261,241.8,301.933,241.612,301.599,241.39z M301.438,241.829\n\t\t\tc-0.332-0.131-0.645-0.49-0.771-0.705l0.11-0.254c0.173,0.209,0.406,0.437,0.716,0.646c0.28,0.184,0.565,0.34,0.832,0.444\n\t\t\tC302.06,241.989,301.774,241.964,301.438,241.829z"], ["fill", "#E2324B", "d", "M319.384,265.608l0.373,0.174c0.748,0.408,1.192,1.031,0.993,1.394c-0.168,0.305-0.737,0.319-1.354,0.067\n\t\t\tc0.176,0.146,0.322,0.312,0.445,0.486c0.647,0.147,1.186,0.062,1.377-0.279c0.287-0.52-0.351-1.416-1.427-1.998l-0.532-0.246\n\t\t\tl-0.836,1.506l0.289,0.107L319.384,265.608z"], ["fill", "#E2324B", "d", "M317.457,269.626l-0.536-0.241l1.354-2.404l0.492,0.322c0.365,0.207,0.734,0.348,1.074,0.428\n\t\t\tc0.403,0.582,0.508,1.285,0.194,1.844c-0.33,0.596-1.024,0.869-1.789,0.76C318.048,270.06,317.781,269.817,317.457,269.626z\n\t\t\t M317.646,269.573c0.742,0.439,1.6,0.305,1.934-0.289c0.328-0.596-0.004-1.414-0.748-1.836l-0.377-0.162l-1.139,2.041\n\t\t\tL317.646,269.573z"], ["fill", "#E2324B", "d", "M319.841,267.729c-0.123-0.176-0.271-0.34-0.445-0.486l-0.355-0.172l-0.342-0.223l0.015-0.029\n\t\t\tl-0.289-0.107l-0.148,0.269l0.492,0.322C319.132,267.51,319.501,267.649,319.841,267.729z"], ["fill", "#E2324B", "points", "318.712,266.819 318.698,266.849 319.039,267.071 319.396,267.243 318.964,266.942 \t\t"], ["fill", "#E2324B", "d", "M315.832,272.241l-0.518-0.279l1.457-2.342l0.471,0.355c0.322,0.192,0.666,0.311,1.004,0.356\n\t\t\tc0.445,0.604,0.541,1.353,0.185,1.929c-0.34,0.543-0.994,0.795-1.697,0.723C316.496,272.72,316.192,272.464,315.832,272.241z\n\t\t\t M316.017,272.19c0.725,0.449,1.604,0.346,1.965-0.232c0.357-0.578,0.055-1.397-0.68-1.834l-0.373-0.174l-1.236,1.988\n\t\t\tL316.017,272.19z"], ["fill", "#E2324B", "d", "M318.246,270.333c-0.198-0.272-0.465-0.516-0.789-0.707l-0.536-0.241l-0.148,0.235l0.471,0.355\n\t\t\tC317.565,270.169,317.908,270.286,318.246,270.333z"], ["fill", "#E2324B", "d", "M317.164,274.292c0.199-0.317,0.013-0.821-0.432-1.309l-0.541-0.119c0.463,0.4,0.689,0.857,0.523,1.125\n\t\t\tc-0.211,0.338-0.963,0.24-1.683-0.221l-0.332-0.242l0.687-1.1l-0.234-0.203l-0.873,1.401l0.476,0.349\n\t\t\tC315.781,274.636,316.862,274.78,317.164,274.292z"], ["fill", "#E2324B", "d", "M315.425,272.366l0.36,0.195l0.406,0.303l0.541,0.119c-0.236-0.264-0.541-0.521-0.9-0.742l-0.518-0.279\n\t\t\tl-0.162,0.263l0.234,0.203L315.425,272.366z"], ["fill", "#E2324B", "d", "M319.248,269.095c0.224-0.398-0.055-1.002-0.602-1.312l-0.025-0.014l-0.811,1.461l0.021,0.014\n\t\t\tC318.38,269.562,319.024,269.495,319.248,269.095z"], ["fill", "#E2324B", "d", "M317.655,271.761c0.242-0.388-0.012-0.99-0.553-1.314l-0.023-0.014l-0.883,1.42l0.021,0.014\n\t\t\tC316.755,272.198,317.412,272.149,317.655,271.761z"], ["fill", "#E2324B", "d", "M316.376,273.817c0.092-0.15-0.281-0.562-0.812-0.896l-0.023-0.014l-0.342,0.547l0.021,0.019\n\t\t\tC315.753,273.81,316.281,273.966,316.376,273.817z"], ["fill", "#E2324B", "d", "M320.388,267.04c0.088-0.153-0.308-0.543-0.859-0.848l-0.022-0.012l-0.312,0.563l0.023,0.012\n\t\t\tC319.767,267.065,320.304,267.194,320.388,267.04z"], ["fill", "#E2324B", "d", "M320.49,268.183c0.172,0.545,0.136,1.114-0.127,1.582c-0.295,0.526-0.817,0.875-1.473,0.948\n\t\t\tc0.225,0.599,0.182,1.229-0.137,1.744c-0.285,0.459-0.75,0.765-1.304,0.875c0.146,0.289,0.201,0.566,0.16,0.816\n\t\t\tc2.586,0.643,5.193,1.244,7.826,1.809c0.471-0.76,0.947-1.514,1.367-2.299c-1.746-2.018-3.519-3.996-5.312-5.934\n\t\t\tC321.289,268.007,320.938,268.165,320.49,268.183z"], ["fill", "#F15C27", "points", "309.83,223.392 310.19,221.651 313.115,222.231 312.748,224.017 \t\t"], ["fill", "#E8D320", "d", "M295.38,232.085c1.473-4.487,2.684-9.043,3.561-13.655l11.287,2.118c0.484,2.769,1.002,5.613,1.262,8.48\n\t\t\tc-1.608,2.346-3.475,4.551-5.221,6.715L295.38,232.085z"], ["fill", "#F15C27", "points", "312.835,224.347 313.323,221.978 314.46,222.2 313.964,224.591 \t\t"], ["fill", "#62381B", "d", "M308.052,233.142c1.004-3.185,1.844-6.418,2.518-9.683l-0.254-0.604\n\t\t\tc-0.729,3.631-1.649,7.229-2.801,10.758L308.052,233.142z"], ["fill", "#F15C27", "d", "M307.515,233.614c1.149-3.527,2.072-7.127,2.801-10.758l-1.113-2.592l-0.491-0.091\n\t\t\tc-0.974,5.142-2.324,10.209-3.963,15.199l0.537,0.181L307.515,233.614z"], ["fill", "#F15C27", "d", "M312.001,227.094c-0.294-0.896-0.64-1.794-1.007-2.685l-0.477-0.104c-0.615,2.748-1.312,5.483-2.133,8.184\n\t\t\tc0.916-0.582,1.83-1.18,2.686-1.809L312.001,227.094z"], ["fill", "#62381B", "d", "M297.187,232.823c1.523-4.637,2.779-9.344,3.683-14.115l-0.363-0.067\n\t\t\tc-0.898,4.754-2.15,9.444-3.668,14.065L297.187,232.823z"], ["fill", "#F15C27", "d", "M300.505,218.64l-2.084-0.39c-0.881,4.654-2.107,9.248-3.592,13.777l2.008,0.678\n\t\t\tC298.354,228.085,299.606,223.394,300.505,218.64z"], ["fill", "#62381B", "d", "M295.753,233.228c-0.666-0.232-1.051-0.836-0.902-1.361c0.162-0.522,0.842-0.771,1.519-0.553\n\t\t\tc0.676,0.218,1.09,0.832,0.922,1.369C297.136,233.226,296.429,233.462,295.753,233.228z"], ["fill", "#F15C27", "d", "M296.294,231.552c-0.506-0.164-1.017,0.021-1.137,0.413c-0.119,0.396,0.188,0.855,0.684,1.025\n\t\t\tc0.512,0.178,1.021-0.008,1.145-0.412C297.11,232.179,296.8,231.719,296.294,231.552z M296.261,231.663\n\t\t\tc0.428,0.142,0.691,0.531,0.586,0.871c-0.104,0.342-0.535,0.498-0.963,0.351c-0.428-0.146-0.689-0.533-0.588-0.871\n\t\t\tC295.401,231.679,295.831,231.522,296.261,231.663z"], ["fill", "#F15C27", "d", "M296.208,231.831c-0.312-0.104-0.623,0.013-0.697,0.254c-0.076,0.242,0.115,0.525,0.424,0.631\n\t\t\tc0.312,0.105,0.621-0.006,0.697-0.254C296.708,232.216,296.517,231.933,296.208,231.831z M296.173,231.94\n\t\t\tc0.234,0.078,0.377,0.291,0.318,0.475c-0.056,0.185-0.289,0.271-0.523,0.191c-0.229-0.08-0.375-0.291-0.318-0.476\n\t\t\tC295.706,231.95,295.942,231.866,296.173,231.94z"], ["fill", "#62381B", "d", "M299.431,219.573c-0.695-0.139-1.172-0.684-1.059-1.217c0.121-0.533,0.766-0.865,1.457-0.744\n\t\t\tc0.709,0.123,1.194,0.672,1.071,1.219C300.784,219.38,300.128,219.714,299.431,219.573z"], ["fill", "#F15C27", "d", "M299.792,217.86c-0.523-0.096-1.021,0.152-1.103,0.555c-0.088,0.402,0.269,0.812,0.791,0.914\n\t\t\tc0.521,0.103,1.017-0.146,1.104-0.557C300.671,218.362,300.315,217.952,299.792,217.86z M299.769,217.97\n\t\t\tc0.445,0.082,0.744,0.428,0.672,0.774c-0.073,0.349-0.489,0.558-0.936,0.471c-0.443-0.086-0.744-0.432-0.672-0.771\n\t\t\tC298.905,218.103,299.325,217.892,299.769,217.97z"], ["fill", "#F15C27", "d", "M299.731,218.142c-0.319-0.058-0.625,0.096-0.676,0.344c-0.053,0.248,0.166,0.498,0.484,0.559\n\t\t\tc0.319,0.062,0.623-0.09,0.676-0.34C300.271,218.454,300.054,218.202,299.731,218.142z M299.708,218.255\n\t\t\tc0.242,0.043,0.405,0.232,0.364,0.42c-0.04,0.189-0.268,0.306-0.51,0.259c-0.237-0.047-0.403-0.234-0.365-0.422\n\t\t\tC299.239,218.325,299.468,218.21,299.708,218.255z"], ["fill", "#62381B", "d", "M299.663,233.659c1.561-4.752,2.85-9.58,3.774-14.471l-0.365-0.068c-0.922,4.875-2.204,9.685-3.76,14.42\n\t\t\tL299.663,233.659z"], ["fill", "#F15C27", "d", "M303.073,219.12l-2.084-0.389c-0.901,4.774-2.161,9.488-3.686,14.131l2.01,0.678\n\t\t\tC300.868,228.804,302.151,223.995,303.073,219.12z"], ["fill", "#62381B", "d", "M298.224,234.083c-0.67-0.231-1.049-0.846-0.895-1.387c0.166-0.535,0.85-0.793,1.524-0.576\n\t\t\tc0.676,0.219,1.082,0.842,0.912,1.396C299.606,234.071,298.897,234.319,298.224,234.083z"], ["fill", "#F15C27", "d", "M298.776,232.366c-0.504-0.164-1.018,0.029-1.143,0.432c-0.123,0.404,0.184,0.871,0.68,1.043\n\t\t\tc0.51,0.177,1.023-0.018,1.148-0.43C299.591,233.001,299.282,232.532,298.776,232.366z M298.743,232.479\n\t\t\tc0.43,0.141,0.688,0.535,0.579,0.887c-0.108,0.348-0.54,0.512-0.969,0.365c-0.426-0.146-0.688-0.543-0.582-0.887\n\t\t\tC297.878,232.5,298.313,232.339,298.743,232.479z"], ["fill", "#F15C27", "d", "M298.688,232.651c-0.309-0.103-0.625,0.018-0.701,0.266c-0.077,0.248,0.113,0.535,0.423,0.642\n\t\t\tc0.309,0.105,0.62-0.013,0.698-0.265S298.999,232.753,298.688,232.651z M298.653,232.765c0.234,0.075,0.375,0.295,0.316,0.481\n\t\t\tc-0.057,0.189-0.295,0.277-0.527,0.199c-0.231-0.08-0.375-0.297-0.313-0.484C298.185,232.776,298.419,232.687,298.653,232.765z"], ["fill", "#62381B", "d", "M301.993,220.081c-0.697-0.139-1.168-0.694-1.054-1.242c0.123-0.547,0.771-0.893,1.461-0.77\n\t\t\tc0.707,0.123,1.193,0.682,1.064,1.246C303.349,219.876,302.688,220.222,301.993,220.081z"], ["fill", "#F15C27", "d", "M302.364,218.321c-0.522-0.092-1.021,0.164-1.108,0.576c-0.086,0.412,0.27,0.83,0.791,0.934\n\t\t\tc0.521,0.103,1.018-0.153,1.106-0.576C303.241,218.833,302.888,218.415,302.364,218.321z M302.339,218.437\n\t\t\tc0.445,0.082,0.742,0.434,0.67,0.791c-0.078,0.354-0.494,0.576-0.939,0.487c-0.44-0.088-0.741-0.438-0.67-0.788\n\t\t\tC301.474,218.575,301.896,218.358,302.339,218.437z"], ["fill", "#F15C27", "d", "M302.302,218.616c-0.32-0.061-0.625,0.098-0.68,0.353c-0.056,0.254,0.164,0.51,0.483,0.569\n\t\t\tc0.32,0.062,0.625-0.094,0.679-0.352C302.841,218.929,302.624,218.673,302.302,218.616z M302.276,218.729\n\t\t\tc0.242,0.045,0.406,0.235,0.365,0.43c-0.041,0.191-0.27,0.312-0.512,0.266c-0.242-0.049-0.402-0.237-0.363-0.432\n\t\t\tC301.808,218.806,302.036,218.685,302.276,218.729z"], ["fill", "#62381B", "d", "M302.142,234.495c1.598-4.869,2.916-9.812,3.865-14.826l-0.365-0.067\n\t\t\tc-0.945,4.996-2.26,9.924-3.852,14.774L302.142,234.495z"], ["fill", "#F15C27", "d", "M305.642,219.601l-2.084-0.39c-0.926,4.896-2.215,9.729-3.774,14.486l2.008,0.678\n\t\t\tC303.382,229.524,304.696,224.597,305.642,219.601z"], ["fill", "#62381B", "d", "M300.69,234.937c-0.666-0.232-1.045-0.855-0.885-1.408c0.17-0.553,0.859-0.816,1.533-0.6\n\t\t\tc0.676,0.217,1.08,0.854,0.904,1.416C302.079,234.915,301.364,235.175,300.69,234.937z"], ["fill", "#F15C27", "d", "M301.261,233.181c-0.506-0.166-1.021,0.034-1.15,0.448c-0.127,0.412,0.179,0.89,0.677,1.062\n\t\t\tc0.508,0.176,1.022-0.023,1.151-0.447C302.069,233.819,301.767,233.345,301.261,233.181z M301.224,233.294\n\t\t\tc0.432,0.144,0.687,0.545,0.578,0.902c-0.113,0.357-0.547,0.529-0.975,0.383c-0.427-0.146-0.687-0.551-0.576-0.904\n\t\t\tC300.36,233.325,300.796,233.155,301.224,233.294z"], ["fill", "#F15C27", "d", "M301.169,233.472c-0.312-0.103-0.627,0.02-0.705,0.274s0.109,0.549,0.418,0.652\n\t\t\tc0.307,0.104,0.625-0.019,0.705-0.275S301.479,233.575,301.169,233.472z M301.134,233.587c0.232,0.078,0.373,0.3,0.312,0.492\n\t\t\tc-0.059,0.193-0.295,0.285-0.528,0.207c-0.232-0.08-0.373-0.299-0.312-0.492C300.663,233.604,300.899,233.51,301.134,233.587z"], ["fill", "#62381B", "d", "M304.556,220.589c-0.695-0.139-1.166-0.704-1.049-1.268c0.127-0.559,0.777-0.916,1.469-0.795\n\t\t\tc0.707,0.123,1.188,0.693,1.062,1.271C305.913,220.374,305.253,220.729,304.556,220.589z"], ["fill", "#F15C27", "d", "M304.935,218.786c-0.521-0.094-1.021,0.174-1.11,0.594c-0.089,0.425,0.264,0.851,0.786,0.953\n\t\t\tc0.521,0.103,1.021-0.164,1.109-0.596C305.81,219.308,305.46,218.88,304.935,218.786z M304.911,218.905\n\t\t\tc0.444,0.08,0.739,0.438,0.664,0.805c-0.078,0.365-0.496,0.59-0.939,0.502c-0.443-0.086-0.742-0.444-0.668-0.803\n\t\t\tC304.046,219.05,304.468,218.825,304.911,218.905z"], ["fill", "#F15C27", "d", "M304.872,219.085c-0.322-0.059-0.627,0.105-0.683,0.365c-0.055,0.26,0.16,0.521,0.482,0.582\n\t\t\tc0.32,0.062,0.625-0.1,0.682-0.363C305.409,219.405,305.192,219.144,304.872,219.085z M304.847,219.202\n\t\t\tc0.242,0.045,0.404,0.242,0.363,0.439c-0.041,0.196-0.271,0.319-0.515,0.274c-0.239-0.049-0.401-0.242-0.36-0.438\n\t\t\tC304.376,219.282,304.604,219.159,304.847,219.202z"], ["fill", "#62381B", "d", "M304.614,235.329c1.638-4.981,2.988-10.047,3.959-15.18l-0.362-0.068\n\t\t\tc-0.968,5.117-2.312,10.164-3.943,15.129L304.614,235.329z"], ["fill", "#F15C27", "d", "M308.21,220.081l-2.085-0.391c-0.948,5.021-2.27,9.969-3.868,14.842l2.01,0.678\n\t\t\tC305.897,230.245,307.242,225.198,308.21,220.081z"], ["fill", "#62381B", "d", "M303.159,235.792c-0.666-0.231-1.041-0.864-0.875-1.434c0.174-0.562,0.862-0.842,1.536-0.623\n\t\t\tc0.679,0.219,1.078,0.863,0.9,1.438C304.552,235.76,303.833,236.028,303.159,235.792z"], ["fill", "#F15C27", "d", "M303.743,233.991c-0.507-0.166-1.023,0.043-1.156,0.471c-0.129,0.425,0.17,0.906,0.67,1.078\n\t\t\tc0.51,0.176,1.027-0.033,1.16-0.465C304.552,234.642,304.249,234.155,303.743,233.991z M303.708,234.112\n\t\t\tc0.428,0.139,0.684,0.551,0.569,0.914c-0.114,0.367-0.553,0.545-0.979,0.396c-0.428-0.145-0.687-0.555-0.572-0.916\n\t\t\tC302.839,234.147,303.278,233.972,303.708,234.112z"], ["fill", "#F15C27", "d", "M303.649,234.292c-0.309-0.102-0.627,0.027-0.709,0.287c-0.08,0.262,0.105,0.56,0.414,0.664\n\t\t\tc0.31,0.104,0.625-0.022,0.707-0.287C304.144,234.69,303.96,234.394,303.649,234.292z M303.614,234.411\n\t\t\tc0.234,0.076,0.371,0.301,0.312,0.496c-0.062,0.199-0.299,0.297-0.533,0.219c-0.233-0.082-0.371-0.303-0.309-0.5\n\t\t\tC303.142,234.429,303.378,234.331,303.614,234.411z"], ["fill", "#62381B", "d", "M307.117,221.097c-0.694-0.14-1.163-0.718-1.043-1.291c0.131-0.576,0.781-0.945,1.472-0.822\n\t\t\tc0.709,0.125,1.188,0.705,1.059,1.297C308.479,220.87,307.815,221.237,307.117,221.097z"], ["fill", "#F15C27", "d", "M307.507,219.249c-0.525-0.094-1.023,0.183-1.115,0.613c-0.09,0.434,0.258,0.867,0.783,0.971\n\t\t\tc0.521,0.104,1.02-0.172,1.112-0.612C308.38,219.778,308.03,219.344,307.507,219.249z M307.481,219.37\n\t\t\tc0.443,0.082,0.74,0.447,0.662,0.822s-0.502,0.606-0.945,0.52c-0.44-0.088-0.74-0.452-0.662-0.819\n\t\t\tC306.612,219.522,307.035,219.292,307.481,219.37z"], ["fill", "#F15C27", "d", "M307.442,219.556c-0.32-0.058-0.627,0.11-0.684,0.377c-0.058,0.268,0.16,0.53,0.479,0.596\n\t\t\tc0.318,0.061,0.623-0.107,0.683-0.377C307.976,219.88,307.763,219.614,307.442,219.556z M307.419,219.677\n\t\t\tc0.239,0.045,0.399,0.243,0.358,0.446c-0.043,0.205-0.272,0.328-0.514,0.281c-0.244-0.045-0.402-0.244-0.361-0.445\n\t\t\tC306.944,219.76,307.175,219.632,307.419,219.677z"], ["fill", "#62381B", "d", "M309.239,217.454c-0.141-0.397-0.627-0.639-1.084-0.539c-0.334,0.072-0.562,0.304-0.604,0.576\n\t\t\tc-0.017,0.103-0.004,0.207,0.035,0.312c1.479,3.491,2.887,7.17,3.979,10.954l1.365-1.338\n\t\t\tC311.813,223.974,310.673,220.659,309.239,217.454z"], ["fill", "#62381B", "d", "M312.574,232.216c0.074,0.431,0.519,0.742,0.99,0.691c0.486-0.049,0.795-0.453,0.697-0.895l-0.637-2.234\n\t\t\tl-1.365,1.336L312.574,232.216z"], ["fill", "#62381B", "d", "M315.007,226.808c-0.382-0.277-0.929-0.226-1.224,0.108c-3.608,3.638-7.297,6.967-11.167,9.929\n\t\t\tc-0.316,0.276-0.287,0.748,0.062,1.059c0.354,0.309,0.895,0.336,1.215,0.057c3.918-2.989,7.641-6.36,11.264-10.039l0.16-0.299\n\t\t\tC315.394,227.331,315.283,227.01,315.007,226.808z"], ["fill", "#E8D320", "d", "M299.673,231.26c0.406-1.306,0.856-2.601,1.162-3.933l4.387,1.193c-0.318,1.389-0.785,2.737-1.211,4.102\n\t\t\tL299.673,231.26z"], ["fill", "#E8D320", "points", "300.86,227.222 300.288,225.606 306.554,227.21 305.249,228.411 \t\t"], ["fill", "#62381B", "d", "M300.821,229.313c0.171-0.486,0.271-0.99,0.404-1.484l3.527,0.974c-0.14,0.512-0.246,1.03-0.422,1.532\n\t\t\tL300.821,229.313z"], ["fill", "#62381B", "points", "303.763,232.13 304.245,230.61 303.354,230.349 302.876,231.856 \t\t"], ["fill", "#62381B", "points", "303.083,230.269 300.735,229.579 300.269,231.046 302.604,231.772 \t\t"], ["fill", "#E8D320", "d", "M305.396,228.644c0.066,0.752,0.168,1.518,0.183,2.266l-1.39,1.812\n\t\t\tC304.606,231.366,305.077,230.024,305.396,228.644z"], ["fill", "#62381B", "points", "256.457,282.702 258.268,281.39 268.365,295.501 266.24,297.032 \t\t"], ["fill", "#62381B", "points", "252.484,285.274 254.357,284.054 263.779,298.622 261.584,300.05 \t\t"], ["fill", "#62381B", "points", "248.395,287.659 250.324,286.528 259.055,301.524 256.791,302.847 \t\t"], ["fill", "#62381B", "points", "244.197,289.853 246.178,288.815 254.193,304.202 251.871,305.413 \t\t"], ["fill", "#62381B", "points", "239.902,291.844 241.93,290.903 249.217,306.649 246.838,307.749 \t\t"], ["fill", "#62381B", "points", "235.518,293.632 237.588,292.788 244.127,308.862 241.701,309.845 \t\t"], ["fill", "#62381B", "d", "M240.68,309.388c9.885-3.763,19.33-8.74,27.863-14.992l2.803,3.856\n\t\t\tc-8.885,6.509-18.711,11.689-28.998,15.603L240.68,309.388z"], ["fill", "#62381B", "d", "M240.656,314.022c11.375-4.043,22.104-9.861,31.796-17.049l2.194,1.168\n\t\t\tc-10.383,7.809-21.932,14.129-34.233,18.35L240.656,314.022z"], ["fill", "#62381B", "d", "M242.426,316.29c11.016-4.055,21.471-9.645,30.924-16.608l0.783,1.065\n\t\t\tc-9.553,7.039-20.119,12.689-31.252,16.787L242.426,316.29z"], ["fill", "#62381B", "d", "M244.539,316.772c9.907-3.863,19.407-8.836,28.035-15.072l0.77,1.078\n\t\t\tc-8.717,6.301-18.318,11.33-28.33,15.232L244.539,316.772z"], ["fill", "#62381B", "d", "M246.83,317.101c8.705-3.508,17.061-7.922,24.778-13.271l0.752,1.088\n\t\t\tc-7.799,5.408-16.243,9.867-25.036,13.416L246.83,317.101z"], ["fill", "#62381B", "d", "M250.008,317.056c6.887-2.968,13.514-6.533,19.779-10.648l0.727,1.107\n\t\t\tc-6.332,4.157-13.025,7.762-19.984,10.758L250.008,317.056z"], ["fill", "#62381B", "d", "M264.803,312.54c-0.258-0.444-0.127-1.004,0.293-1.246c0.42-0.246,0.973-0.084,1.236,0.357l1.051,1.766\n\t\t\tc0.262,0.441,0.125,1.004-0.307,1.254c-0.437,0.254-0.994,0.097-1.248-0.35L264.803,312.54z"], ["fill", "#62381B", "d", "M261.984,314.405c-0.309-0.57-0.11-1.234,0.412-1.541c0.523-0.307,1.205-0.102,1.521,0.457l1.264,2.238\n\t\t\tc0.316,0.561,0.131,1.27-0.416,1.586c-0.543,0.315-1.256,0.076-1.557-0.48L261.984,314.405z"], ["fill", "#62381B", "d", "M259.119,315.892c-0.289-0.57-0.091-1.261,0.446-1.541c0.537-0.277,1.22-0.047,1.521,0.52l1.209,2.271\n\t\t\tc0.301,0.565,0.092,1.26-0.467,1.551c-0.56,0.289-1.248,0.061-1.541-0.508L259.119,315.892z"], ["fill", "#62381B", "d", "M256.473,316.974c-0.227-0.468-0.041-0.99,0.387-1.215c0.433-0.226,0.968-0.035,1.197,0.426l0.92,1.836\n\t\t\tc0.23,0.461,0.058,1.02-0.389,1.25c-0.441,0.231-1,0.01-1.221-0.445L256.473,316.974z"], ["fill", "#62381B", "d", "M263.367,320.073c-0.234-0.441-0.066-0.986,0.37-1.213c0.438-0.229,0.988-0.059,1.228,0.381\n\t\t\tc0.24,0.439,0.074,0.982-0.371,1.213C264.148,320.687,263.6,320.515,263.367,320.073z"], ["fill", "#62381B", "d", "M264.75,319.976c1.059,1.19,2.28,1.297,2.192,0.774c-0.254-0.731-1.606-3.67-2.35-1.285L264.75,319.976z"], ["fill", "#62381B", "d", "M264.084,320.321c0.401,1.531-0.193,2.59-0.574,2.242c-0.459-0.599-1.984-3.365,0.234-2.658\n\t\t\tL264.084,320.321z"], ["fill", "#62381B", "points", "260.064,312.548 260.588,312.276 264.361,319.26 263.805,319.548 \t\t"], ["fill", "#62381B", "points", "233.055,294.507 234.527,293.999 237.809,302.88 236.197,303.438 \t\t"], ["fill", "#62381B", "d", "M229.93,295.571c0.502-0.133,0.992-0.307,1.48-0.486l2.987,8.984c-0.535,0.195-1.069,0.383-1.619,0.531\n\t\t\tL229.93,295.571z"], ["fill", "#62381B", "points", "226.764,296.51 228.258,296.062 230.949,305.138 229.314,305.626 \t\t"], ["fill", "#62381B", "points", "223.57,297.329 225.084,296.962 227.477,306.122 225.82,306.524 \t\t"], ["fill", "#62381B", "d", "M224.857,306.153c4.81-1.057,9.484-2.643,14.104-4.34l0.719,1.869c-4.701,1.731-9.465,3.346-14.361,4.424\n\t\t\tL224.857,306.153z"], ["fill", "#62381B", "points", "260.309,279.937 259.037,280.839 264.621,288.485 266.01,287.493 \t\t"], ["fill", "#62381B", "points", "262.891,277.882 261.67,278.849 267.5,286.308 268.834,285.249 \t\t"], ["fill", "#62381B", "points", "265.42,275.769 264.254,276.798 270.326,284.062 271.605,282.937 \t\t"], ["fill", "#62381B", "points", "267.898,273.597 266.73,274.624 273.037,281.683 274.316,280.556 \t\t"], ["fill", "#62381B", "d", "M274.525,279.532c-3.623,3.322-7.375,6.525-11.43,9.322l1.16,1.635c4.129-2.85,7.951-6.111,11.638-9.492\n\t\t\tL274.525,279.532z"], ["fill", "#E2324B", "d", "M191.651,320.339c11.527,0.802,23.154-0.104,34.443-2.6l-0.756,2.109\n\t\t\tc-10.709,2.246-21.703,3.145-32.623,2.453L191.651,320.339z"], ["fill", "#2D948D", "d", "M193.06,299.966c9.56,0.664,19.198-0.092,28.577-2.157l4.35,19.453\n\t\t\tc-11.241,2.483-22.819,3.387-34.301,2.59L193.06,299.966z"], ["fill", "#E2324B", "d", "M201.93,324.435l0.025,1.559c2.295,1.443,4.668,2.797,7.123,4.183l0.614,0.317l0.562-0.426\n\t\t\tc2.25-1.744,4.432-3.359,6.5-5.228l-0.209-1.538c-2.209,2.02-4.547,3.747-6.965,5.641\n\t\t\tC206.938,327.497,204.385,325.983,201.93,324.435z"], ["fill", "#69C8C3", "d", "M201.514,300.198c3.938-0.107,7.875-0.35,11.781-0.914l3.149,23.166c-2.194,2.021-4.522,3.752-6.93,5.648\n\t\t\tc-2.633-1.451-5.176-2.968-7.621-4.523L201.514,300.198z"], ["fill", "#FFFFFF", "d", "M224.012,308.358l-0.201-0.906c-10.313,2.279-20.926,3.105-31.45,2.375l-0.062,0.926\n\t\t\tC202.91,311.491,213.613,310.655,224.012,308.358z"], ["fill", "#FFFFFF", "d", "M209.867,322.003c0.096,1.216,1.254,2.097,2.586,1.97s2.293-1.201,2.139-2.429l-0.367-3.02l-4.606,0.447\n\t\t\tL209.867,322.003z"], ["fill", "#F15C27", "d", "M210.465,319.642l3.065-0.291l0.263,2.278c0.094,0.802-0.541,1.517-1.416,1.599\n\t\t\tc-0.873,0.082-1.642-0.5-1.709-1.304L210.465,319.642z"], ["fill", "#FFFFFF", "d", "M203.701,322.354c0.034,1.219,1.146,2.156,2.483,2.094c1.34-0.061,2.351-1.092,2.26-2.311l-0.215-3.031\n\t\t\tl-4.623,0.211L203.701,322.354z"], ["fill", "#F15C27", "d", "M204.418,320.026l3.076-0.139l0.146,2.284c0.055,0.808-0.617,1.49-1.492,1.529\n\t\t\tc-0.879,0.039-1.612-0.58-1.643-1.387L204.418,320.026z"], ["fill", "#FFFFFF", "d", "M209.336,315.544c0.096,1.213,1.197,2.103,2.459,1.98c1.266-0.119,2.166-1.188,2.014-2.414l-0.367-3.021\n\t\t\tl-4.354,0.423L209.336,315.544z"], ["fill", "#F15C27", "d", "M209.889,313.187l2.902-0.271l0.262,2.277c0.094,0.801-0.504,1.51-1.334,1.588\n\t\t\tc-0.826,0.08-1.557-0.508-1.625-1.309L209.889,313.187z"], ["fill", "#FFFFFF", "d", "M203.5,315.878c0.033,1.22,1.088,2.156,2.354,2.099c1.271-0.056,2.226-1.082,2.135-2.302l-0.215-3.032\n\t\t\tl-4.373,0.196L203.5,315.878z"], ["fill", "#F15C27", "d", "M204.174,313.55l2.908-0.129l0.146,2.287c0.053,0.806-0.58,1.484-1.41,1.523\n\t\t\tc-0.832,0.037-1.528-0.586-1.559-1.392L204.174,313.55z"], ["fill", "#E2324B", "d", "M216.045,303.985c0.289,1.9,1.69,3.344,3.104,3.035c1.416-0.281,2.242-2.037,1.845-3.935l-1.019-4.938\n\t\t\tc-1.572,0.27-3.121,0.682-4.709,0.854L216.045,303.985z"], ["fill", "#E8D320", "d", "M217.008,303.849c0.193,1.184,1.045,2.014,1.897,1.836c0.855-0.168,1.363-1.25,1.132-2.414l-0.972-4.949\n\t\t\tc-0.963,0.178-1.918,0.396-2.885,0.553L217.008,303.849z"], ["fill", "#E2324B", "d", "M208.146,304.921c0.146,1.933,1.426,3.384,2.863,3.25c1.438-0.108,2.393-1.836,2.137-3.768l-0.641-5.002\n\t\t\tc-1.578,0.238-3.172,0.309-4.758,0.49L208.146,304.921z"], ["fill", "#E8D320", "d", "M209.115,304.825c0.103,1.185,0.89,2.078,1.755,1.996c0.866-0.078,1.457-1.102,1.313-2.279l-0.594-5.01\n\t\t\tl-2.92,0.271L209.115,304.825z"], ["fill", "#E2324B", "d", "M202.385,305.233c0.037,1.936,1.236,3.449,2.676,3.383c1.441-0.072,2.49-1.666,2.342-3.621l-0.36-5.029\n\t\t\tl-4.775,0.226L202.385,305.233z"], ["fill", "#E8D320", "d", "M203.354,305.185c0.037,1.186,0.773,2.117,1.642,2.078c0.871-0.041,1.516-1.031,1.438-2.218l-0.315-5.034\n\t\t\tl-2.929,0.133L203.354,305.185z"], ["fill", "#E2324B", "d", "M194.623,305.097c-0.105,1.93,0.975,3.577,2.414,3.637c1.442,0,2.608-1.566,2.604-3.502l0.013-5.045\n\t\t\tc-1.593,0.02-3.187-0.004-4.775-0.127L194.623,305.097z"], ["fill", "#E8D320", "d", "M195.592,305.151c-0.052,1.18,0.612,2.199,1.48,2.229c0.87-0.002,1.589-0.965,1.599-2.151l0.06-5.043\n\t\t\tc-0.978,0.01-1.955,0.006-2.931-0.074L195.592,305.151z"], ["fill", "#E8D320", "d", "M224.166,314.323l-0.599-2.795l-0.832,0.16l0.781,3.795C223.99,315.351,224.279,314.851,224.166,314.323z"], ["fill", "#E8D320", "d", "M222.232,314.696l-0.549-2.805l0.832-0.16l0.773,3.795C222.801,315.581,222.336,315.226,222.232,314.696z"], ["fill", "#E8D320", "d", "M221.369,314.864l-0.527-2.809l-0.832,0.162l0.689,3.813C221.172,315.897,221.471,315.396,221.369,314.864\n\t\t\tz"], ["fill", "#E8D320", "d", "M219.438,315.243l-0.479-2.815l0.832-0.164l0.68,3.815C219.982,316.13,219.527,315.774,219.438,315.243z"], ["fill", "#E8D320", "d", "M218.57,315.374l-0.461-2.819l-0.84,0.12l0.596,3.828C218.344,316.392,218.656,315.907,218.57,315.374z"], ["fill", "#E8D320", "d", "M216.621,315.653l-0.412-2.828l0.84-0.121l0.586,3.832C217.145,316.563,216.699,316.188,216.621,315.653z"], ["fill", "#E8D320", "d", "M200.457,316.868l-0.016-2.856l-0.847-0.005l-0.01,3.875C200.076,317.844,200.458,317.407,200.457,316.868\n\t\t\tz"], ["fill", "#E8D320", "d", "M198.489,316.862l0.036-2.859l0.847,0.002l-0.019,3.875C198.863,317.837,198.483,317.399,198.489,316.862z\n\t\t\t"], ["fill", "#E8D320", "d", "M197.612,316.86l0.057-2.859h-0.848l-0.105,3.873C197.207,317.833,197.601,317.397,197.612,316.86z"], ["fill", "#E8D320", "d", "M195.645,316.804l0.104-2.855l0.848,0.047l-0.114,3.875C195.995,317.8,195.626,317.341,195.645,316.804z"], ["fill", "#E8D320", "d", "M194.769,316.755l0.125-2.854l-0.846-0.047l-0.199,3.871C194.341,317.71,194.746,317.294,194.769,316.755z\n\t\t\t"], ["fill", "#E8D320", "d", "M192.804,316.651l0.176-2.855l0.847,0.048l-0.209,3.87C193.13,317.646,192.771,317.188,192.804,316.651z"], ["fill", "#E2324B", "d", "M208.525,326.079c-0.039-0.549,0.343-1.028,0.849-1.082c0.506-0.049,0.955,0.361,1,0.912\n\t\t\tc0.049,0.555-0.332,1.041-0.849,1.092C209.009,327.052,208.561,326.64,208.525,326.079z"], ["fill", "#A0BF3B", "d", "M286.642,272.946c-0.858-0.729-1.041-1.92-0.406-2.66c0.615-0.76,1.8-0.838,2.693-0.141\n\t\t\tc0.879,0.688,1.111,1.922,0.469,2.711C288.733,273.635,287.501,273.673,286.642,272.946z"], ["fill", "#A0BF3B", "d", "M287.226,270.46c-0.707-0.575-0.922-1.516-0.473-2.1c0.447-0.584,1.397-0.605,2.123-0.055\n\t\t\tc0.727,0.555,0.938,1.493,0.473,2.098C288.886,271.01,287.937,271.034,287.226,270.46z"], ["fill", "#A0BF3B", "d", "M284.915,269.829c-0.713-0.588-0.875-1.479-0.451-2.063c0.438-0.572,1.379-0.582,2.098-0.021\n\t\t\tc0.722,0.56,0.937,1.496,0.482,2.088C286.603,270.435,285.61,270.403,284.915,269.829z"], ["fill", "#A0BF3B", "d", "M283.812,271.118c0.693,0.592,1.65,0.609,2.138,0.043c0.487-0.565,0.303-1.492-0.419-2.07\n\t\t\tc-0.702-0.565-1.653-0.581-2.129-0.036C282.933,269.603,283.116,270.526,283.812,271.118z"], ["fill", "#A0BF3B", "d", "M284.837,273.274c0.688,0.598,1.649,0.611,2.145,0.031c0.492-0.578,0.322-1.519-0.383-2.097\n\t\t\tc-0.707-0.576-1.668-0.592-2.145-0.03C283.976,271.737,284.147,272.677,284.837,273.274z"], ["fill", "#E2324B", "d", "M278.921,265.038c-0.396-0.326-0.56-0.774-0.363-1.002c0.203-0.225,0.662-0.166,1.066,0.158\n\t\t\tc0.414,0.313,6.756,6.191,6.739,6.193C286.356,270.399,279.31,265.376,278.921,265.038z"], ["fill", "#E8D320", "d", "M279.944,271.298c-0.573-0.516-0.729-1.305-0.346-1.762l1.266-1.485c0.388-0.453,1.188-0.423,1.785,0.067\n\t\t\tl1.949,1.604c0.598,0.489,0.748,1.274,0.34,1.754l-1.33,1.562c-0.405,0.482-1.203,0.455-1.778-0.061L279.944,271.298z"], ["fill", "#A0BF3B", "d", "M276.354,266.118c-0.348-0.299-0.485-0.709-0.311-0.912c0.172-0.205,0.598-0.133,0.944,0.164\n\t\t\tc0.357,0.287,5.863,5.656,5.857,5.664S276.692,266.425,276.354,266.118z"], ["fill", "#E8D320", "d", "M277.116,267.937c0.733-0.865,0.479-2.308-0.554-3.342c-0.939,1.075-1.812,2.211-2.827,3.221\n\t\t\tC274.881,268.696,276.405,268.825,277.116,267.937z"], ["fill", "#E8D320", "d", "M280.79,265.472c1.02-1.341,0.553-3.437-1.035-4.865c-1.244,1.678-2.553,3.305-3.941,4.869\n\t\t\tC277.542,266.728,279.694,266.753,280.79,265.472z"], ["fill", "#E8D320", "d", "M272.041,273.284c0.83-0.777,0.68-2.234-0.289-3.354c-0.98,1.041-2.056,1.989-3.066,2.998\n\t\t\tC269.773,273.901,271.221,274.071,272.041,273.284z"], ["fill", "#E8D320", "d", "M271.623,270.069c1.037,0.625,2.221,0.613,2.896-0.105c0.674-0.717,0.613-1.897-0.076-2.893\n\t\t\tL271.623,270.069z"], ["fill", "#E8D320", "d", "M283.985,278.915c-0.907-0.86-1.032-2.207-0.274-3.008c0.77-0.791,2.069-0.846,3.026-0.012\n\t\t\tc0.933,0.807,1.136,2.225,0.328,3.053C286.272,279.788,284.896,279.774,283.985,278.915z"], ["fill", "#E8D320", "d", "M284.813,276.159c-0.742-0.67-0.922-1.738-0.385-2.369c0.537-0.635,1.6-0.614,2.375,0.041\n\t\t\tc0.773,0.654,0.947,1.717,0.389,2.373C286.634,276.858,285.575,276.849,284.813,276.159z"], ["fill", "#E8D320", "d", "M282.267,275.331c-0.75-0.69-0.887-1.711-0.35-2.319c0.522-0.619,1.571-0.584,2.34,0.075\n\t\t\tc0.766,0.662,0.945,1.722,0.399,2.365C284.099,276.085,283.009,276.013,282.267,275.331z"], ["fill", "#E8D320", "d", "M280.956,276.724c0.731,0.698,1.797,0.768,2.375,0.149c0.58-0.61,0.438-1.655-0.318-2.33\n\t\t\tc-0.756-0.676-1.822-0.746-2.379-0.155C280.077,274.978,280.222,276.024,280.956,276.724z"], ["fill", "#E8D320", "d", "M281.954,279.196c0.727,0.707,1.795,0.77,2.385,0.141c0.59-0.627,0.463-1.688-0.285-2.371\n\t\t\tc-0.75-0.684-1.82-0.747-2.389-0.145C281.099,277.427,281.228,278.491,281.954,279.196z"], ["fill", "#E2324B", "d", "M282.614,277.626c-0.909-0.858-1.043-2.196-0.299-2.983c0.756-0.775,2.049-0.818,3.006,0.014\n\t\t\tc0.931,0.809,1.144,2.213,0.351,3.029C284.89,278.511,283.522,278.485,282.614,277.626z"], ["fill", "#E2324B", "d", "M283.413,274.901c-0.742-0.67-0.931-1.729-0.402-2.353c0.527-0.62,1.584-0.594,2.357,0.062\n\t\t\tc0.772,0.655,0.954,1.707,0.405,2.354C285.226,275.612,284.175,275.589,283.413,274.901z"], ["fill", "#E2324B", "d", "M280.878,274.058c-0.75-0.689-0.896-1.701-0.367-2.299c0.514-0.609,1.555-0.566,2.322,0.096\n\t\t\tc0.766,0.662,0.953,1.711,0.418,2.346C282.702,274.821,281.62,274.741,280.878,274.058z"], ["fill", "#E2324B", "d", "M279.589,275.429c0.733,0.698,1.789,0.774,2.358,0.17c0.568-0.604,0.421-1.64-0.336-2.312\n\t\t\tc-0.758-0.676-1.815-0.754-2.362-0.174S278.856,274.729,279.589,275.429z"], ["fill", "#E2324B", "d", "M280.601,277.89c0.728,0.705,1.787,0.774,2.367,0.157c0.582-0.618,0.445-1.672-0.303-2.354\n\t\t\tc-0.75-0.684-1.812-0.756-2.371-0.162C279.735,276.128,279.874,277.183,280.601,277.89z"], ["fill", "#F15C27", "d", "M274.52,268.388c-0.42-0.386-0.578-0.894-0.352-1.132c0.229-0.237,0.756-0.122,1.184,0.257\n\t\t\tc0.437,0.368,7.11,7.239,7.102,7.252C282.44,274.778,274.928,268.788,274.52,268.388z"], ["fill", "#69C8C3", "d", "M142.007,293.796c0.827,0.281,1.585,0.707,2.373,1.074c0.847,0.424,1.715,0.834,2.506,1.357\n\t\t\tc0.407,0.27,0.795,0.549,1.211,0.778c-0.336,0.304-0.661,0.689-0.871,0.939l-0.144,0.168c-0.188,0.223-0.405,0.609-0.638,1.02\n\t\t\tc-0.554,0.984-1.178,2.104-2.221,2.369c-0.527,0.133-1.012,0.08-1.43-0.151c-1.146-0.644-1.217-2.308-1.234-3.306l-0.004-0.233\n\t\t\tc-0.032-1.646-0.129-3.177-1.161-4.109C140.943,293.597,141.439,293.594,142.007,293.796z"], ["fill", "#E2324B", "d", "M140.415,292.788c1.729,1.082,1.824,3.121,1.896,5.01c0.027,0.964,0.004,3.4,1.701,2.979\n\t\t\tc1.121-0.285,1.809-2.344,2.515-3.152c0.586-0.676,1.617-2.014,2.632-1.785c-2.024-0.872-3.769-1.809-5.345-3.409\n\t\t\tc-1.3-1.349-2.265-3.636-4.644-2.089C139.544,291.198,139.994,291.964,140.415,292.788z"], ["fill", "#69C8C3", "d", "M143.357,294.499c-0.702-0.172-1.379-0.18-2.051-0.022l-0.655,0.155c-1.588,0.371-3.695,0.902-5.146-0.17\n\t\t\tc-0.788-0.553-1.311-1.436-1.527-2.608c-0.209-1.146,0.082-2.328,0.399-3.5c0.56-2.066,0.872-3.383-0.267-4.412l0.097-0.033\n\t\t\tc0.354-0.156,0.71-0.27,1.061-0.342c0.02,0.145,0.092,0.272,0.241,0.348c1.885,0.984,3.317,2.502,4.538,4.33\n\t\t\tC140.878,290.491,141.837,292.735,143.357,294.499z"], ["fill", "#E2324B", "d", "M142.677,293.64c-0.499-0.039-1.01-0.006-1.535,0.112c-2.344,0.595-5.758,1.625-6.428-2.026\n\t\t\tc-0.476-2.545,2.059-5.854,0.16-8.062l0.393-0.096c0.02,0.145,0.093,0.271,0.241,0.346c1.896,0.978,3.236,1.709,4.444,3.517\n\t\t\tC140.609,289.353,141.542,292.011,142.677,293.64z"], ["fill", "#A0BF3B", "d", "M139.897,286.624c0.768,0.621,1.298,1.57,1.914,2.355c1.242,1.623,2.381,3.463,4.035,4.711\n\t\t\tc1.613,1.27,3.73,2.545,5.998,2.604l-0.546,1.123c-1.119,0.308-3.387,0.609-5.744-0.76c-1.375-0.744-2.613-1.908-3.589-3.496\n\t\t\tc-1.645-2.504-2.187-4.465-2.542-5.924c-0.109-0.412-0.201-0.766-0.294-1.072C139.406,286.284,139.666,286.431,139.897,286.624z"], ["fill", "#F15C27", "d", "M140.743,286.515c1.064,2.567,2.42,5.133,5.007,6.678c0.404,0.225,0.832,0.416,1.266,0.568\n\t\t\tc2.124,0.795,4.763,0.096,6.728-1.279l-1.997,4.016c0.064,0.043-5.146,2.338-9.17-3.742c-3.843-6.034-1.533-8.502-5.713-9.62\n\t\t\tc-2.745-0.851-1.038-1.476,0.738-1.89c0.959,1.426,1.707,2.984,2.835,4.812L140.743,286.515z"], ["fill", "#E2324B", "d", "M138.784,286.048c0.701,0.222,1.355,0.404,1.971,0.56l0.449,0.889c-0.792-0.19-1.654-0.42-2.609-0.729\n\t\t\tc-1.594-0.48-2.973-1.205-4.094-2.111c-1.276-0.996-1.833-1.807-2.105-2.26l-0.024-1.637l0.483,0.5\n\t\t\tC132.831,281.243,134.076,284.47,138.784,286.048z"], ["fill", "#E2324B", "points", "134.181,282.228 136.369,279.425 136.405,279.446 \t\t"], ["fill", "#E2324B", "d", "M135.858,278.985c2.089,1.623,3.185,4.297,4.61,7.043l0.048,0.1l0.238,0.479\n\t\t\tc-0.615-0.154-1.27-0.338-1.971-0.56c-4.708-1.567-5.967-4.403-5.964-4.364l-0.448-0.896l0.152-4.562\n\t\t\tC132.713,276.337,135.664,278.886,135.858,278.985z"], ["fill", "#A0BF3B", "d", "M147.281,293.077c-6.068-2.371-5.554-12.186-14.756-17.799c0.172-0.213,0.006-0.717,0.168-0.902\n\t\t\tc6.889,6.103,14.495,11.402,22.81,15.412C153.999,292.231,150.03,294.142,147.281,293.077z"], ["fill", "#2D948D", "points", "147.337,292.45 147.315,291.167 148.499,291.31 148.542,292.515 \t\t"], ["fill", "#2D948D", "points", "148.893,292.349 148.993,291.495 150.108,291.788 \t\t"], ["fill", "#EE7D8F", "points", "148.762,291.094 147.64,290.802 147.57,289.735 149.12,289.899 \t\t"], ["fill", "#E8D320", "points", "149.485,290.558 149.753,289.071 151.858,289.616 151.246,290.972 \t\t"], ["fill", "#E2324B", "points", "146.523,289.321 147.682,289.345 147.533,287.862 146.574,288.946 \t\t"], ["fill", "#E2324B", "points", "148.084,289.386 147.978,288.45 149.927,288.563 149.061,289.655 \t\t"], ["fill", "#E2324B", "d", "M147.102,290.837l-0.595-0.659l-0.845,0.102C146.126,290.493,146.619,290.657,147.102,290.837z"], ["fill", "#E2324B", "d", "M146.943,291.112c-0.407-0.164-0.833-0.297-1.227-0.488l-0.04,0.906l1.094,0.787L146.943,291.112z"], ["fill", "#EE7D8F", "points", "145.32,289.78 144.665,288.896 145.11,287.989 146.227,288.567 146.3,289.649 \t\t"], ["fill", "#E2324B", "points", "149.746,291.427 149.859,291.06 151.7,291.478 151.372,292.368 \t\t"], ["fill", "#EE7D8F", "points", "150.227,292.013 150.888,292.368 150.075,292.751 149.31,292.544 \t\t"], ["fill", "#2D948D", "points", "142.667,284.835 143.297,284.562 142.998,283.731 142.175,283.491 \t\t"], ["fill", "#E8D320", "points", "142.935,285.104 142.248,285.536 142.902,286.298 143.811,286.036 \t\t"], ["fill", "#E2324B", "points", "144.253,284.624 143.193,285.067 144.769,285.521 \t\t"], ["fill", "#2D948D", "points", "143.607,285.399 144.544,285.712 144.791,286.269 144.343,286.413 143.652,285.466 \t\t"], ["fill", "#FFFFFF", "points", "142.25,284.181 142.66,285.159 142.008,285.415 141.605,284.521 \t\t"], ["fill", "#FFFFFF", "d", "M141.993,286.188l0.271-0.17c0.302,0.377,0.642,0.703,0.966,1.051l-0.613,0.309L141.993,286.188z"], ["fill", "#FFFFFF", "points", "144.834,285.802 145.109,286.487 145.727,286.401 145.194,285.554 \t\t"], ["fill", "#FFFFFF", "points", "143.705,299.181 143.078,299.028 142.781,299.724 143.234,300.312 \t\t"], ["fill", "#EE7D8F", "points", "143.677,298.866 144.438,298.942 144.453,298.116 143.675,297.808 \t\t"], ["fill", "#2D948D", "points", "142.448,298.479 143.466,298.757 142.689,297.628 \t\t"], ["fill", "#E2324B", "points", "143.395,298.323 142.967,297.624 143.167,297.14 143.562,297.284 143.408,298.26 \t\t"], ["fill", "#FFFFFF", "points", "143.604,299.819 143.909,298.976 144.536,299.14 144.279,299.931 \t\t"], ["fill", "#A0BF3B", "points", "145.02,298.653 144.723,298.624 144.734,297.448 145.339,297.569 \t\t"], ["fill", "#E8D320", "points", "142.832,297.409 143.097,296.833 142.623,296.556 142.423,297.378 \t\t"], ["fill", "#E2324B", "points", "143.924,296.917 144.47,297.331 145.535,297.317 144.713,296.61 \t\t"], ["fill", "#E2324B", "points", "136.967,290.31 137.877,289.874 138.25,291.26 \t\t"], ["fill", "#EE7D8F", "points", "135.799,289.28 136.089,288.358 136.952,288.278 136.741,289.56 \t\t"], ["fill", "#FFFFFF", "points", "136.323,290.22 135.437,289.827 135.156,291.052 136.003,291.815 \t\t"], ["fill", "#E8D320", "points", "137.658,291.247 136.538,290.46 137.131,292.456 \t\t"], ["fill", "#E2324B", "points", "136.492,291.136 136.799,292.356 136.423,293.024 135.987,292.649 136.457,291.233 \t\t"], ["fill", "#A0BF3B", "points", "136.902,292.735 136.425,293.521 136.925,294.13 137.379,292.938 \t\t"], ["fill", "#FFFFFF", "points", "151.741,290.819 152.134,290.075 153.831,290.495 153.074,291.216 \t\t"], ["fill", "#E8D320", "d", "M134.513,282.405l0.601,1.053l0.688-0.608c0.046-0.062-0.35-1.088-0.348-1.084L134.513,282.405z"], ["fill", "#E2324B", "points", "135.53,283.88 135.937,283.349 136.787,284.405 \t\t"], ["fill", "#FFFFFF", "points", "136.21,282.874 136.788,282.278 137.156,283.548 136.799,284.022 \t\t"], ["fill", "#FFFFFF", "points", "136.103,282.3 136.824,281.294 136.379,280.589 135.875,281.927 \t\t"], ["fill", "#A0BF3B", "points", "136.929,281.897 137.451,281.26 138.331,283.261 137.677,283.86 \t\t"], ["fill", "#69C8C3", "d", "M137.044,284.347l0.263-0.517c0.295,0.469,0.628,0.89,0.952,1.326l-0.554,0.432L137.044,284.347z"], ["fill", "#FFFFFF", "points", "137.986,284.091 138.468,283.638 139.1,284.737 \t\t"], ["fill", "#E2324B", "points", "138.83,285.868 139.169,285.224 138.576,284.845 \t\t"], ["fill", "#E2324B", "points", "149.96,296.323 150.357,295.47 151.464,295.226 151.221,296.47 \t\t"], ["fill", "#FFFFFF", "points", "149.409,296.63 149.751,295.724 148.382,296.05 \t\t"], ["fill", "#E8D320", "points", "150.138,295.024 150.455,294.499 151.22,294.374 151.097,294.862 \t\t"], ["fill", "#E8D320", "d", "M159.236,314.491c15.361,5.441,28.903,1.947,29.204-3.631c0.323-5.516-9.839-12.074-22.067-16.475\n\t\t\tc-3.348-1.185-6.549-2.201-9.565-2.941l-8.295,17.678C151.563,311.161,155.191,313.062,159.236,314.491z"], ["fill", "#F15C27", "d", "M186.344,331.224l2.123-20.386c-12.729,7.078-28.412,5.271-39.101-3.534l-8.706,18.551\n\t\t\tC153.425,335.644,171.398,338.073,186.344,331.224z"], ["fill", "#FFFFFF", "d", "M182.38,329.782c-0.094,0.674,0.429,1.049,1.16,0.742c0.731-0.31,1.378-1.129,1.457-1.812\n\t\t\tc0.246-2.108,0.367-3.164,0.614-5.272c-0.992,0.477-1.5,0.725-2.517,1.084C182.809,326.628,182.666,327.679,182.38,329.782z"], ["fill", "#FFFFFF", "d", "M178.565,330.933c-0.112,0.682,0.422,1.071,1.184,0.856c0.761-0.219,1.446-0.963,1.544-1.645\n\t\t\tc0.303-2.103,0.455-3.152,0.757-5.254c-1.037,0.35-1.562,0.51-2.625,0.805C179.081,327.79,178.909,328.839,178.565,330.933z"], ["fill", "#FFFFFF", "d", "M174.626,331.719c-0.131,0.678,0.401,1.141,1.183,1.018c0.782-0.129,1.51-0.85,1.624-1.523\n\t\t\tc0.36-2.09,0.541-3.137,0.902-5.229c-1.078,0.283-1.614,0.359-2.702,0.522C175.231,328.591,175.029,329.635,174.626,331.719z"], ["fill", "#FFFFFF", "d", "M170.603,332.114c-0.15,0.67,0.38,1.178,1.182,1.109c0.8-0.066,1.553-0.687,1.688-1.359\n\t\t\tc0.42-2.084,0.629-3.125,1.049-5.205c-1.098,0.137-1.65,0.191-2.762,0.273C171.296,329.005,171.065,330.042,170.603,332.114z"], ["fill", "#FFFFFF", "d", "M166.543,332.099c-0.171,0.666,0.344,1.244,1.147,1.271c0.805,0.023,1.576-0.514,1.732-1.197\n\t\t\tc0.479-2.065,0.72-3.1,1.199-5.168c-1.109,0.017-1.662-0.004-2.775-0.053C167.326,329.013,167.065,330.04,166.543,332.099z"], ["fill", "#FFFFFF", "d", "M162.467,331.741c-0.189,0.662,0.312,1.281,1.121,1.361c0.809,0.08,1.603-0.414,1.775-1.08\n\t\t\tc0.54-2.053,0.81-3.078,1.349-5.133c-1.115-0.074-1.675-0.125-2.79-0.254C163.34,328.677,163.05,329.7,162.467,331.741z"], ["fill", "#FFFFFF", "d", "M158.453,330.935c-0.208,0.655,0.264,1.344,1.058,1.514c0.795,0.17,1.596-0.242,1.79-0.904\n\t\t\tc0.599-2.036,0.897-3.057,1.498-5.092c-1.099-0.205-1.648-0.32-2.741-0.576C159.415,327.897,159.095,328.911,158.453,330.935z"], ["fill", "#FFFFFF", "d", "M154.503,329.812c-0.226,0.641,0.199,1.43,0.988,1.637c0.784,0.223,1.597-0.145,1.809-0.801\n\t\t\tc0.658-2.019,0.987-3.027,1.646-5.045c-1.085-0.291-1.641-0.4-2.691-0.801C155.554,326.808,155.204,327.808,154.503,329.812z"], ["fill", "#FFFFFF", "d", "M150.688,328.29c-0.248,0.646,0.156,1.431,0.91,1.736c0.754,0.311,1.56,0.02,1.791-0.629\n\t\t\tc0.716-2,1.075-2.998,1.793-4.996c-1.049-0.402-1.568-0.617-2.596-1.066C151.827,325.317,151.448,326.31,150.688,328.29z"], ["fill", "#FFFFFF", "d", "M147.029,326.444c-0.266,0.635,0.088,1.479,0.803,1.873c0.712,0.396,1.526,0.119,1.773-0.512\n\t\t\tc0.776-1.978,1.165-2.966,1.94-4.941c-1.023-0.453-1.503-0.758-2.475-1.318C148.254,323.505,147.846,324.485,147.029,326.444z"], ["fill", "#FFFFFF", "d", "M143.563,324.276c-0.284,0.627,0.026,1.502,0.709,1.936c0.684,0.437,1.467,0.263,1.735-0.373\n\t\t\tc0.834-1.952,1.25-2.93,2.085-4.881c-0.954-0.588-1.423-0.891-2.343-1.52C144.875,321.374,144.437,322.341,143.563,324.276z"], ["fill", "#FFFFFF", "d", "M183.413,322.19c-0.094,0.674,0.396,1.043,1.088,0.731c0.691-0.312,1.306-1.137,1.385-1.821\n\t\t\tc0.246-2.107,0.368-3.164,0.615-5.271c-0.936,0.482-1.414,0.732-2.372,1.101C183.843,319.034,183.699,320.085,183.413,322.19z"], ["fill", "#FFFFFF", "d", "M179.805,323.372c-0.112,0.681,0.39,1.066,1.11,0.847c0.719-0.224,1.373-0.976,1.47-1.656\n\t\t\tc0.302-2.103,0.454-3.152,0.757-5.254c-0.978,0.358-1.473,0.522-2.476,0.826C180.321,320.229,180.149,321.278,179.805,323.372z"], ["fill", "#FFFFFF", "d", "M176.079,324.196c-0.132,0.676,0.366,1.133,1.106,1c0.741-0.135,1.436-0.861,1.55-1.533\n\t\t\tc0.36-2.092,0.54-3.137,0.901-5.229c-1.018,0.293-1.524,0.377-2.551,0.553C176.683,321.069,176.481,322.11,176.079,324.196z"], ["fill", "#FFFFFF", "d", "M172.271,324.636c-0.15,0.672,0.347,1.172,1.104,1.094c0.758-0.076,1.477-0.703,1.61-1.379\n\t\t\tc0.421-2.08,0.629-3.119,1.05-5.201c-1.037,0.149-1.561,0.209-2.609,0.305C172.963,321.526,172.733,322.563,172.271,324.636z"], ["fill", "#FFFFFF", "d", "M168.426,324.671c-0.17,0.668,0.311,1.238,1.073,1.252c0.76,0.017,1.499-0.53,1.654-1.213\n\t\t\tc0.479-2.067,0.72-3.104,1.198-5.172c-1.047,0.035-1.57,0.021-2.622-0.014C169.209,321.585,168.948,322.612,168.426,324.671z"], ["fill", "#FFFFFF", "d", "M164.566,324.374c-0.189,0.66,0.278,1.269,1.043,1.338c0.767,0.068,1.526-0.434,1.7-1.1\n\t\t\tc0.54-2.053,0.81-3.082,1.348-5.133c-1.054-0.06-1.582-0.103-2.635-0.213C165.44,321.31,165.149,322.329,164.566,324.374z"], ["fill", "#FFFFFF", "d", "M160.769,323.63c-0.209,0.658,0.229,1.332,0.981,1.49c0.753,0.158,1.52-0.266,1.713-0.928\n\t\t\tc0.6-2.037,0.898-3.057,1.499-5.092c-1.039-0.187-1.558-0.291-2.589-0.529C161.73,320.597,161.41,321.606,160.769,323.63z"], ["fill", "#FFFFFF", "d", "M157.031,322.579c-0.225,0.64,0.165,1.416,0.912,1.611c0.743,0.207,1.521-0.172,1.732-0.826\n\t\t\tc0.659-2.02,0.987-3.025,1.646-5.047c-1.023-0.271-1.549-0.369-2.54-0.748C158.083,319.573,157.732,320.575,157.031,322.579z"], ["fill", "#FFFFFF", "d", "M153.429,321.135c-0.248,0.645,0.123,1.418,0.835,1.709c0.712,0.295,1.484-0.009,1.715-0.658\n\t\t\tc0.718-1.994,1.076-2.996,1.794-4.994c-0.987-0.381-1.478-0.584-2.445-1.012C154.567,318.161,154.187,319.153,153.429,321.135z"], ["fill", "#FFFFFF", "d", "M149.978,319.372c-0.267,0.635,0.054,1.467,0.728,1.842c0.672,0.382,1.455,0.093,1.7-0.538\n\t\t\tc0.776-1.979,1.164-2.968,1.94-4.943c-0.964-0.43-1.414-0.721-2.325-1.26C151.204,316.433,150.794,317.413,149.978,319.372z"], ["fill", "#FFFFFF", "d", "M146.719,317.294c-0.285,0.627-0.006,1.486,0.636,1.902c0.643,0.418,1.393,0.23,1.662-0.404\n\t\t\tc0.833-1.95,1.251-2.93,2.084-4.881c-0.895-0.561-1.335-0.854-2.196-1.455C148.03,314.392,147.593,315.358,146.719,317.294z"], ["fill", "#E2324B", "d", "M159.454,305.04c2.394-0.805,4.666-1.502,6.95-2.475c-0.384-2.142-1.746-4.101-3.824-4.873\n\t\t\tc-2.373-0.803-4.932-0.221-6.725,1.67C156.996,301.231,158.147,303.235,159.454,305.04z"], ["fill", "#E2324B", "d", "M154.561,314.491l0.188-0.375c0.437-1.113-0.016-2.32-0.982-2.76c-0.973-0.42-2.151,0.137-2.632,1.238\n\t\t\tl-0.132,0.397C152.19,313.489,153.353,314.046,154.561,314.491z"], ["fill", "#62381B", "d", "M152.102,315.388c0.888,0.397,1.921-0.011,2.458-0.896c-1.208-0.445-2.37-1.002-3.558-1.498\n\t\t\tC150.764,313.983,151.209,315.001,152.102,315.388z"], ["fill", "#62381B", "d", "M149.39,312.219c0.198-0.437,1.896-0.132,3.788,0.688c1.885,0.84,3.354,1.695,3.176,2.172\n\t\t\tc-0.156,0.424-1.922,0.287-3.839-0.565C150.591,313.681,149.191,312.655,149.39,312.219z"], ["fill", "#2D948D", "d", "M156.037,304.815c-0.377,0.467-0.417,1.117-0.084,1.461c0.333,0.34,0.907,0.236,1.275-0.232l3.508-4.614\n\t\t\tl-1.574-0.589L156.037,304.815z"], ["fill", "#EE7D8F", "points", "160.737,301.429 162.788,298.618 162.89,298.45 161.375,297.894 159.163,300.841 \t\t"], ["fill", "#62381B", "d", "M162.89,298.45c0.249-0.457,0.242-1.002-0.033-1.271c-0.308-0.308-0.841-0.158-1.197,0.327l-0.284,0.388\n\t\t\tL162.89,298.45z"], ["fill", "#EE7D8F", "points", "155.784,299.38 157.326,300.042 157.837,296.409 156.356,295.774 156.312,295.964 \t\t"], ["fill", "#2D948D", "d", "M155.024,305.087c-0.072,0.599,0.254,1.093,0.726,1.101s0.9-0.476,0.966-1.078l0.611-5.066l-1.542-0.662\n\t\t\tL155.024,305.087z"], ["fill", "#62381B", "d", "M157.837,296.409l0.071-0.473c0.088-0.592-0.189-1.062-0.627-1.056c-0.39,0.011-0.777,0.396-0.926,0.894\n\t\t\tL157.837,296.409z"], ["fill", "#2D948D", "d", "M158.72,305.042c0.125-0.319,0.442-0.498,0.707-0.401c0.266,0.1,0.383,0.438,0.26,0.76l-2.138,5.617\n\t\t\tc-0.123,0.321-0.45,0.496-0.733,0.391c-0.282-0.104-0.41-0.445-0.285-0.768L158.72,305.042z"], ["fill", "#2D948D", "d", "M153.635,302.905c0.141-0.314,0.464-0.479,0.724-0.365c0.26,0.109,0.358,0.455,0.222,0.771l-2.407,5.506\n\t\t\tc-0.138,0.313-0.473,0.473-0.749,0.354c-0.277-0.118-0.387-0.469-0.247-0.782L153.635,302.905z"], ["fill", "#2D948D", "d", "M151.83,308.567c0.528,0.543,0.67,1.387,0.429,2.154l0.12,0.057l2.529,1.092\n\t\t\tc0.371-0.715,1.074-1.223,1.842-1.248c0.316-0.012,0.608,0.062,0.862,0.201c0.139-0.402,0.188-0.887,0.135-1.438l-0.268-3.041\n\t\t\tc-0.153-2.023-1.414-2.601-2.958-1.263l-2.351,1.994c-0.425,0.355-0.731,0.73-0.919,1.107\n\t\t\tC151.462,308.267,151.659,308.392,151.83,308.567z"], ["fill", "#FFFFFF", "d", "M156.749,310.622c-0.768,0.025-1.471,0.533-1.843,1.248l0.06,0.023c1.281,0.475,2.283,0.006,2.646-1.07\n\t\t\tC157.357,310.685,157.065,310.61,156.749,310.622z"], ["fill", "#FFFFFF", "d", "M152.258,310.722c0.241-0.769,0.101-1.611-0.429-2.154c-0.17-0.176-0.367-0.301-0.579-0.385\n\t\t\tC150.753,309.173,151.095,310.167,152.258,310.722z"], ["fill", "#62381B", "d", "M171.02,317.231c4.589,1.19,13.223-1.644,17.727-10.09c-5.387-0.545-10.738-1.498-15.982-2.918\n\t\t\tC167.64,310.481,166.368,316.022,171.02,317.231z"], ["fill", "#62381B", "d", "M172.451,300.368c0.135,1.953,0.303,3.92,0.504,5.894l1.254,0.329c-0.217-1.989-0.4-3.971-0.551-5.938\n\t\t\tL172.451,300.368z"], ["fill", "#62381B", "d", "M190.755,303.757c-0.999,1.765-2.042,3.527-3.131,5.285l-1.289-0.131c1.109-1.766,2.174-3.537,3.192-5.309\n\t\t\tL190.755,303.757z"], ["fill", "#62381B", "d", "M187.78,304.72c-1.062,1.778-2.163,3.51-3.307,5.196l-1.294-0.201c1.164-1.713,2.284-3.428,3.359-5.147\n\t\t\tL187.78,304.72z"], ["fill", "#62381B", "points", "170.833,302.247 171.167,306.481 172.079,306.719 171.723,302.452 \t\t"], ["fill", "#62381B", "d", "M167.957,312.575c3.053,0.859,9.07-1.055,13.373-4.611c-3.745-0.659-7.454-1.52-11.13-2.526\n\t\t\tC166.159,308.614,164.911,311.63,167.957,312.575z"], ["fill", "#62381B", "d", "M167.22,305.974c0.333-1.07,1.188-1.756,1.907-1.525c2.122,0.641,4.281,1.139,6.421,1.705\n\t\t\tc0.738,0.148,1.145,1.162,0.909,2.258c-0.236,1.099-1.053,1.857-1.822,1.701c-2.22-0.584-4.458-1.104-6.659-1.766\n\t\t\tC167.225,308.106,166.886,307.046,167.22,305.974z"], ["fill", "#F15C27", "d", "M167.404,305.519l0.276-0.398c-0.09-0.311-0.088-0.694,0.032-1.082c0.246-0.789,0.869-1.295,1.393-1.127\n\t\t\tc0.524,0.166,0.763,0.943,0.534,1.74c-0.141,0.484-0.429,0.861-0.756,1.041c0.008,0.172-0.002,0.34-0.044,0.494\n\t\t\tc0.48-0.207,0.913-0.736,1.113-1.438c0.3-1.055-0.017-2.084-0.706-2.305c-0.691-0.219-1.519,0.451-1.847,1.494\n\t\t\tC167.219,304.515,167.234,305.083,167.404,305.519z"], ["fill", "#FFFFFF", "d", "M171.696,312.446c-0.308-0.133-0.571-0.336-0.776-0.586c-0.362-0.438-0.642-1.012-0.86-1.023\n\t\t\tc-0.22-0.012-0.5,0.802-0.15,1.509c0.323,0.653,0.896,1.207,1.533,1.477c1.255,0.545,2.64-0.172,3.074-1.604\n\t\t\tc0.205-0.664,0.169-1.353-0.048-1.937c-0.279-0.773-0.428-0.816-0.281-0.195c0.094,0.394,0.091,0.808-0.034,1.207\n\t\t\tC173.819,312.368,172.715,312.88,171.696,312.446z"], ["fill", "#62381B", "d", "M166.146,310.37c0.33,0.051,0.658,0.019,0.96-0.084c0.534-0.184,1.067-0.522,1.261-0.418\n\t\t\tc0.191,0.107,0.01,0.947-0.651,1.367c-0.613,0.387-1.381,0.549-2.063,0.441c-1.342-0.214-2.149-1.546-1.789-2.974\n\t\t\tc0.166-0.672,0.556-1.246,1.05-1.649c0.639-0.521,0.782-0.472,0.34-0.021c-0.281,0.285-0.494,0.644-0.594,1.049\n\t\t\tC164.388,309.171,165.058,310.194,166.146,310.37z"], ["fill", "#62381B", "d", "M103.524,221.349c4.369,19.85,15.129,38.293,30.151,51.895l5.126-5.664\n\t\t\tc-13.846-12.537-23.794-29.576-27.823-47.893L103.524,221.349z"], ["fill", "#FFFFFF", "points", "128.096,261.444 127.298,260.521 126.83,260.911 127.632,261.841 \t\t"], ["fill", "#FFFFFF", "points", "122.145,253.696 121.452,252.688 120.946,253.028 121.643,254.042 \t\t"], ["fill", "#FFFFFF", "points", "135.275,269.81 136.087,270.577 136.495,270.128 135.689,269.362 \t\t"], ["fill", "#FFFFFF", "points", "120.774,251.671 120.123,250.636 119.608,250.96 120.265,252.003 \t\t"], ["fill", "#FFFFFF", "points", "134.8,268.528 133.912,267.694 133.487,268.13 134.38,268.97 \t\t"], ["fill", "#FFFFFF", "points", "119.466,249.603 118.834,248.556 118.312,248.866 118.947,249.921 \t\t"], ["fill", "#FFFFFF", "points", "126.496,259.526 125.736,258.569 125.257,258.948 126.023,259.909 \t\t"], ["fill", "#FFFFFF", "points", "124.972,257.62 124.249,256.63 123.761,256.995 124.489,257.987 \t\t"], ["fill", "#FFFFFF", "points", "123.522,255.649 122.801,254.663 122.304,255.015 123.03,256.007 \t\t"], ["fill", "#FFFFFF", "points", "129.697,263.288 128.887,262.372 128.429,262.774 129.245,263.694 \t\t"], ["fill", "#FFFFFF", "points", "131.349,265.083 130.525,264.183 130.078,264.597 130.907,265.501 \t\t"], ["fill", "#FFFFFF", "points", "133.057,266.823 132.199,265.958 131.762,266.382 132.626,267.253 \t\t"], ["fill", "#FFFFFF", "points", "108.153,222.636 107.854,221.45 107.262,221.589 107.562,222.782 \t\t"], ["fill", "#FFFFFF", "points", "110.189,229.677 109.81,228.517 109.229,228.7 109.612,229.87 \t\t"], ["fill", "#FFFFFF", "points", "109.436,227.351 109.103,226.175 108.518,226.345 108.854,227.528 \t\t"], ["fill", "#FFFFFF", "points", "110.99,231.989 110.564,230.844 109.989,231.042 110.418,232.196 \t\t"], ["fill", "#FFFFFF", "points", "111.838,234.284 111.409,233.14 110.84,233.353 111.271,234.507 \t\t"], ["fill", "#FFFFFF", "points", "108.764,224.999 108.444,223.821 107.855,223.978 108.178,225.161 \t\t"], ["fill", "#FFFFFF", "points", "114.776,241.015 114.244,239.911 113.692,240.167 114.227,241.278 \t\t"], ["x", "115.843", "y", "244.658", "transform", "matrix(-0.4725 -0.8813 0.8813 -0.4725 -44.4054 463.3495)", "fill", "#FFFFFF", "width", "1.226", "height", "0.61"], ["fill", "#FFFFFF", "points", "112.762,236.552 112.303,235.415 111.738,235.646 112.201,236.786 \t\t"], ["fill", "#FFFFFF", "points", "115.854,243.21 115.318,242.112 114.772,242.382 115.312,243.489 \t\t"], ["fill", "#FFFFFF", "points", "113.746,238.794 113.242,237.677 112.685,237.921 113.191,239.042 \t\t"], ["fill", "#FFFFFF", "points", "118.218,247.497 117.597,246.442 117.067,246.741 117.692,247.804 \t\t"], ["fill", "#62381B", "d", "M103.524,221.349l7.455-1.662c-4.15-18.658-2.316-38.432,5.498-56.104l-7.005-3.047\n\t\t\tC101.025,179.642,99.016,201.126,103.524,221.349z"], ["fill", "#FFFFFF", "points", "105.655,207.347 105.583,206.128 104.977,206.169 105.048,207.394 \t\t"], ["fill", "#FFFFFF", "points", "105.402,197.611 105.45,196.393 104.842,196.37 104.794,197.594 \t\t"], ["fill", "#FFFFFF", "points", "107.412,219.405 107.157,218.21 106.56,218.329 106.816,219.532 \t\t"], ["fill", "#FFFFFF", "points", "105.51,195.177 105.565,193.962 104.957,193.921 104.902,195.147 \t\t"], ["fill", "#FFFFFF", "points", "106.931,217.013 106.725,215.812 106.125,215.913 106.333,217.122 \t\t"], ["fill", "#FFFFFF", "points", "105.665,192.749 105.769,191.536 105.164,191.478 105.058,192.702 \t\t"], ["fill", "#FFFFFF", "points", "105.503,204.858 105.444,203.642 104.835,203.665 104.895,204.89 \t\t"], ["fill", "#FFFFFF", "points", "105.416,202.427 105.382,201.208 104.773,201.216 104.807,202.44 \t\t"], ["fill", "#FFFFFF", "points", "105.377,199.991 105.393,198.774 104.784,198.765 104.769,199.991 \t\t"], ["fill", "#FFFFFF", "points", "105.892,209.771 105.771,208.558 105.166,208.614 105.287,209.835 \t\t"], ["fill", "#FFFFFF", "points", "106.178,212.192 106.008,210.983 105.403,211.056 105.574,212.271 \t\t"], ["fill", "#FFFFFF", "points", "106.513,214.608 106.342,213.401 105.739,213.487 105.912,214.704 \t\t"], ["fill", "#FFFFFF", "points", "112.424,164.292 112.913,163.17 112.352,162.932 111.86,164.063 \t\t"], ["fill", "#FFFFFF", "points", "109.915,171.221 110.29,170.05 109.712,169.855 109.335,171.035 \t\t"], ["fill", "#FFFFFF", "points", "110.689,168.888 111.122,167.738 110.55,167.531 110.114,168.688 \t\t"], ["fill", "#FFFFFF", "points", "109.187,173.567 109.536,172.391 108.955,172.211 108.603,173.397 \t\t"], ["fill", "#FFFFFF", "points", "108.524,175.929 108.858,174.748 108.272,174.586 107.935,175.771 \t\t"], ["fill", "#FFFFFF", "points", "111.549,166.586 111.972,165.433 111.404,165.21 110.98,166.371 \t\t"], ["fill", "#FFFFFF", "points", "106.915,183.083 107.16,181.887 106.562,181.769 106.316,182.974 \t\t"], ["fill", "#FFFFFF", "points", "106.172,187.904 106.321,186.694 105.718,186.607 105.567,187.824 \t\t"], ["fill", "#FFFFFF", "points", "107.939,178.305 108.223,177.115 107.632,176.966 107.347,178.164 \t\t"], ["fill", "#FFFFFF", "points", "106.521,185.49 106.714,184.286 106.114,184.184 105.919,185.396 \t\t"], ["fill", "#FFFFFF", "points", "107.398,180.69 107.65,179.494 107.056,179.361 106.803,180.564 \t\t"], ["fill", "#FFFFFF", "points", "105.868,190.322 106.022,189.113 105.417,189.042 105.263,190.258 \t\t"], ["fill", "#62381B", "d", "M109.472,160.535l7.005,3.047c7.572-17.569,20.779-32.464,37.387-42.098l-3.857-6.592\n\t\t\tC132.023,125.322,117.676,141.493,109.472,160.535z"], ["fill", "#FFFFFF", "points", "119.441,150.464 120.085,149.43 119.571,149.104 118.924,150.145 \t\t"], ["fill", "#FFFFFF", "points", "124.962,142.447 125.703,141.479 125.226,141.102 124.479,142.075 \t\t"], ["fill", "#FFFFFF", "d", "M113.739,161.24c0.167-0.372,0.3-0.76,0.492-1.119l-0.553-0.256c-0.193,0.361-0.327,0.752-0.495,1.128\n\t\t\tL113.739,161.24z"], ["fill", "#FFFFFF", "points", "126.439,140.51 127.236,139.587 126.768,139.198 125.967,140.127 \t\t"], ["fill", "#FFFFFF", "points", "114.775,159.026 115.314,157.931 114.769,157.661 114.226,158.763 \t\t"], ["fill", "#FFFFFF", "points", "128.027,138.663 128.814,137.732 128.356,137.332 127.564,138.268 \t\t"], ["fill", "#FFFFFF", "points", "120.753,148.345 121.432,147.334 120.926,146.996 120.243,148.013 \t\t"], ["fill", "#FFFFFF", "points", "122.129,146.337 122.822,145.335 122.326,144.984 121.628,145.991 \t\t"], ["fill", "#FFFFFF", "points", "123.511,144.331 124.25,143.365 123.763,143 123.018,143.972 \t\t"], ["fill", "#FFFFFF", "points", "118.179,152.547 118.793,151.495 118.271,151.184 117.652,152.242 \t\t"], ["fill", "#FFFFFF", "points", "117,154.68 117.591,153.614 117.061,153.317 116.464,154.39 \t\t"], ["fill", "#FFFFFF", "d", "M115.849,156.832c0.18-0.365,0.342-0.74,0.553-1.087l-0.538-0.284c-0.213,0.351-0.375,0.729-0.557,1.096\n\t\t\tL115.849,156.832z"], ["fill", "#FFFFFF", "points", "150.171,119.661 151.226,119.041 150.913,118.519 149.851,119.143 \t\t"], ["fill", "#FFFFFF", "points", "144.098,123.776 145.092,123.063 144.739,122.567 143.739,123.284 \t\t"], ["fill", "#FFFFFF", "points", "146.082,122.345 147.092,121.658 146.752,121.153 145.735,121.845 \t\t"], ["fill", "#FFFFFF", "d", "M142.138,125.235c0.323-0.249,0.623-0.527,0.963-0.752l-0.365-0.486c-0.344,0.226-0.645,0.507-0.97,0.756\n\t\t\tL142.138,125.235z"], ["fill", "#FFFFFF", "points", "140.225,126.753 141.183,125.997 140.805,125.519 139.841,126.282 \t\t"], ["fill", "#FFFFFF", "points", "148.122,120.998 149.148,120.332 148.822,119.819 147.789,120.487 \t\t"], ["fill", "#FFFFFF", "points", "134.73,131.589 135.603,130.739 135.189,130.292 134.311,131.148 \t\t"], ["fill", "#FFFFFF", "points", "131.285,135.041 132.117,134.149 131.681,133.725 130.844,134.623 \t\t"], ["fill", "#FFFFFF", "points", "138.351,128.319 139.264,127.507 138.874,127.041 137.955,127.856 \t\t"], ["fill", "#FFFFFF", "points", "132.971,133.281 133.853,132.438 133.428,132.001 132.54,132.85 \t\t"], ["fill", "#FFFFFF", "points", "136.512,129.925 137.434,129.125 137.032,128.667 136.105,129.472 \t\t"], ["fill", "#FFFFFF", "points", "129.61,136.812 130.451,135.927 130.003,135.516 129.158,136.404 \t\t"], ["fill", "#62381B", "d", "M150.006,114.892l3.857,6.592c16.525-9.747,36.114-14.067,55.047-12.071l0.764-7.599\n\t\t\tC189.13,99.652,167.901,104.338,150.006,114.892z"], ["fill", "#FFFFFF", "points", "164.028,112.624 165.163,112.166 164.938,111.601 163.797,112.061 \t\t"], ["fill", "#FFFFFF", "points", "173.253,109.378 174.424,109.029 174.26,108.442 173.082,108.794 \t\t"], ["fill", "#FFFFFF", "points", "153.039,117.988 154.093,117.365 153.799,116.834 152.737,117.458 \t\t"], ["fill", "#FFFFFF", "points", "175.599,108.689 176.788,108.406 176.638,107.814 175.442,108.102 \t\t"], ["fill", "#FFFFFF", "points", "155.176,116.796 156.264,116.234 155.982,115.694 154.888,116.26 \t\t"], ["fill", "#FFFFFF", "points", "177.974,108.117 179.159,107.82 179.025,107.226 177.832,107.522 \t\t"], ["fill", "#FFFFFF", "d", "M166.346,111.682c0.374-0.168,0.768-0.278,1.151-0.417l-0.209-0.571c-0.387,0.139-0.783,0.25-1.158,0.418\n\t\t\tL166.346,111.682z"], ["fill", "#FFFFFF", "points", "168.653,110.864 169.807,110.46 169.612,109.883 168.452,110.291 \t\t"], ["fill", "#FFFFFF", "points", "170.959,110.048 172.133,109.708 171.955,109.127 170.772,109.469 \t\t"], ["fill", "#FFFFFF", "points", "161.771,113.57 162.891,113.077 162.653,112.517 161.526,113.013 \t\t"], ["fill", "#FFFFFF", "points", "159.549,114.597 160.662,114.086 160.409,113.532 159.289,114.047 \t\t"], ["fill", "#FFFFFF", "points", "157.349,115.667 158.435,115.103 158.168,114.555 157.074,115.124 \t\t"], ["fill", "#FFFFFF", "points", "207.01,105.761 208.223,105.885 208.277,105.278 207.057,105.153 \t\t"], ["fill", "#FFFFFF", "points", "199.71,105.521 200.929,105.524 200.936,104.915 199.71,104.911 \t\t"], ["fill", "#FFFFFF", "d", "M202.146,105.523c0.406-0.016,0.812,0.028,1.215,0.048l0.023-0.609c-0.408-0.021-0.814-0.062-1.225-0.048\n\t\t\tL202.146,105.523z"], ["fill", "#FFFFFF", "points", "197.277,105.537 198.494,105.511 198.484,104.902 197.259,104.93 \t\t"], ["fill", "#FFFFFF", "points", "194.843,105.653 196.06,105.599 196.035,104.99 194.81,105.045 \t\t"], ["fill", "#FFFFFF", "points", "204.578,105.641 205.793,105.704 205.832,105.096 204.607,105.032 \t\t"], ["fill", "#FFFFFF", "points", "187.565,106.328 188.772,106.145 188.7,105.539 187.486,105.724 \t\t"], ["fill", "#FFFFFF", "points", "182.75,107.097 183.946,106.858 183.843,106.257 182.637,106.5 \t\t"], ["fill", "#FFFFFF", "d", "M192.414,105.806c0.403-0.032,0.806-0.104,1.213-0.105l-0.041-0.605c-0.408,0.001-0.813,0.073-1.222,0.104\n\t\t\tL192.414,105.806z"], ["fill", "#FFFFFF", "points", "185.152,106.674 186.359,106.502 186.271,105.901 185.056,106.072 \t\t"], ["fill", "#FFFFFF", "points", "189.986,106.039 191.201,105.925 191.143,105.32 189.921,105.433 \t\t"], ["fill", "#FFFFFF", "points", "180.351,107.558 181.551,107.331 181.432,106.735 180.225,106.962 \t\t"], ["fill", "#62381B", "d", "M209.674,101.814l-0.764,7.599c18.977,1.895,37.536,9.995,51.651,22.656l5.094-5.694\n\t\t\tC250.318,112.627,230.256,103.869,209.674,101.814z"], ["fill", "#FFFFFF", "points", "222.303,108.238 223.486,108.549 223.641,107.958 222.449,107.646 \t\t"], ["fill", "#FFFFFF", "points", "231.699,111.066 232.85,111.496 233.061,110.927 231.902,110.494 \t\t"], ["fill", "#FFFFFF", "points", "210.297,106.101 211.51,106.219 211.584,105.615 210.365,105.497 \t\t"], ["fill", "#FFFFFF", "points", "234.002,111.922 235.156,112.344 235.383,111.779 234.223,111.353 \t\t"], ["fill", "#FFFFFF", "points", "212.717,106.393 213.92,106.583 214.012,105.981 212.799,105.79 \t\t"], ["fill", "#FFFFFF", "points", "236.277,112.835 237.402,113.32 237.643,112.763 236.51,112.273 \t\t"], ["fill", "#FFFFFF", "points", "224.727,108.867 225.912,109.171 226.082,108.586 224.887,108.281 \t\t"], ["fill", "#FFFFFF", "points", "227.084,109.548 228.254,109.919 228.438,109.34 227.258,108.966 \t\t"], ["fill", "#FFFFFF", "points", "229.428,110.285 230.6,110.651 230.797,110.075 229.617,109.707 \t\t"], ["fill", "#FFFFFF", "points", "219.92,107.686 221.117,107.925 221.258,107.332 220.051,107.091 \t\t"], ["fill", "#FFFFFF", "points", "217.527,107.192 218.725,107.442 218.846,106.846 217.643,106.594 \t\t"], ["fill", "#FFFFFF", "points", "215.125,106.769 216.332,106.947 216.438,106.348 215.225,106.167 \t\t"], ["fill", "#FFFFFF", "points", "261.131,128.055 262.059,128.842 262.459,128.383 261.523,127.589 \t\t"], ["fill", "#FFFFFF", "points", "255.406,123.518 256.381,124.248 256.744,123.76 255.764,123.025 \t\t"], ["fill", "#FFFFFF", "points", "257.342,124.994 258.309,125.735 258.684,125.257 257.713,124.511 \t\t"], ["fill", "#FFFFFF", "points", "253.402,122.136 254.402,122.83 254.752,122.332 253.746,121.635 \t\t"], ["fill", "#FFFFFF", "points", "251.389,120.769 252.404,121.438 252.742,120.931 251.719,120.258 \t\t"], ["fill", "#FFFFFF", "points", "259.277,126.473 260.205,127.261 260.594,126.792 259.66,125.998 \t\t"], ["fill", "#FFFFFF", "points", "245.096,117.048 246.16,117.642 246.457,117.111 245.387,116.513 \t\t"], ["fill", "#FFFFFF", "points", "240.746,114.83 241.842,115.371 242.111,114.825 241.008,114.282 \t\t"], ["fill", "#FFFFFF", "points", "249.316,119.484 250.352,120.13 250.676,119.614 249.635,118.966 \t\t"], ["fill", "#FFFFFF", "points", "242.939,115.906 244.033,116.45 244.316,115.911 243.217,115.363 \t\t"], ["fill", "#FFFFFF", "d", "M247.229,118.229c0.355,0.198,0.722,0.379,1.058,0.606l0.312-0.522c-0.34-0.23-0.707-0.412-1.063-0.611\n\t\t\tL247.229,118.229z"], ["fill", "#FFFFFF", "points", "238.529,113.802 239.652,114.284 239.908,113.732 238.775,113.246 \t\t"], ["fill", "#62381B", "d", "M265.656,126.375l-5.094,5.694c14.197,12.707,24.333,30.117,28.364,48.81l7.465-1.614\n\t\t\tC292.024,159.004,281.058,140.16,265.656,126.375z"], ["fill", "#FFFFFF", "points", "272.064,139.014 272.842,139.955 273.314,139.569 272.531,138.622 \t\t"], ["fill", "#FFFFFF", "points", "277.978,146.793 278.636,147.826 279.144,147.49 278.481,146.453 \t\t"], ["fill", "#FFFFFF", "points", "263.615,130.231 264.5,131.069 264.918,130.624 264.025,129.78 \t\t"], ["fill", "#FFFFFF", "points", "279.3,148.853 279.968,149.877 280.483,149.554 279.812,148.523 \t\t"], ["fill", "#FFFFFF", "points", "265.391,131.9 266.281,132.732 266.711,132.299 265.812,131.463 \t\t"], ["fill", "#FFFFFF", "points", "280.616,150.914 281.226,151.976 281.749,151.667 281.136,150.6 \t\t"], ["fill", "#FFFFFF", "points", "273.633,140.958 274.395,141.915 274.873,141.542 274.107,140.579 \t\t"], ["fill", "#FFFFFF", "points", "275.158,142.867 275.872,143.858 276.36,143.499 275.645,142.5 \t\t"], ["fill", "#FFFFFF", "points", "276.581,144.854 277.298,145.845 277.796,145.498 277.077,144.499 \t\t"], ["fill", "#FFFFFF", "points", "270.453,137.181 271.258,138.099 271.717,137.701 270.908,136.777 \t\t"], ["fill", "#FFFFFF", "points", "268.818,135.369 269.654,136.26 270.104,135.847 269.264,134.954 \t\t"], ["fill", "#FFFFFF", "points", "267.123,133.616 267.967,134.495 268.408,134.073 267.557,133.189 \t\t"], ["fill", "#FFFFFF", "points", "291.753,177.954 292.046,179.138 292.642,179.003 292.343,177.811 \t\t"], ["fill", "#FFFFFF", "points", "289.786,170.891 290.138,172.062 290.72,171.88 290.364,170.702 \t\t"], ["fill", "#FFFFFF", "points", "290.481,173.235 290.833,174.406 291.419,174.241 291.065,173.062 \t\t"], ["fill", "#FFFFFF", "points", "288.972,168.583 289.376,169.738 289.952,169.543 289.546,168.381 \t\t"], ["fill", "#FFFFFF", "points", "288.146,166.282 288.571,167.428 289.144,167.217 288.714,166.063 \t\t"], ["fill", "#FFFFFF", "points", "291.179,175.578 291.462,176.766 292.052,176.615 291.769,175.419 \t\t"], ["fill", "#FFFFFF", "points", "285.245,159.537 285.755,160.651 286.308,160.396 285.794,159.276 \t\t"], ["fill", "#FFFFFF", "points", "283.04,155.168 283.601,156.254 284.14,155.974 283.575,154.879 \t\t"], ["fill", "#FFFFFF", "points", "287.224,164.014 287.681,165.148 288.247,164.924 287.786,163.782 \t\t"], ["fill", "#FFFFFF", "points", "284.167,157.34 284.739,158.422 285.286,158.154 284.71,157.066 \t\t"], ["fill", "#FFFFFF", "d", "M286.271,161.76c0.164,0.372,0.363,0.73,0.5,1.116l0.562-0.238c-0.14-0.389-0.338-0.75-0.504-1.125\n\t\t\tL286.271,161.76z"], ["fill", "#FFFFFF", "points", "281.843,153.033 282.462,154.089 282.995,153.792 282.37,152.731 \t\t"], ["fill", "#62381B", "d", "M296.392,179.265l-7.465,1.614c4.037,18.69,1.984,38.429-5.842,56.079l6.985,3.088\n\t\t\tC298.54,220.969,300.776,199.521,296.392,179.265z"], ["fill", "#FFFFFF", "points", "294.171,193.253 294.228,194.47 294.837,194.433 294.776,193.209 \t\t"], ["fill", "#FFFFFF", "points", "294.36,202.989 294.29,204.206 294.897,204.231 294.97,203.01 \t\t"], ["fill", "#FFFFFF", "points", "292.478,181.186 292.71,182.383 293.308,182.269 293.075,181.062 \t\t"], ["fill", "#FFFFFF", "points", "294.224,205.421 294.163,206.636 294.771,206.681 294.831,205.456 \t\t"], ["fill", "#FFFFFF", "d", "M292.946,183.58c0.078,0.4,0.173,0.797,0.216,1.202l0.6-0.098c-0.043-0.407-0.137-0.808-0.215-1.208\n\t\t\tL292.946,183.58z"], ["fill", "#FFFFFF", "points", "294.071,207.851 293.94,209.062 294.546,209.12 294.679,207.901 \t\t"], ["fill", "#FFFFFF", "points", "294.282,195.742 294.341,196.959 294.95,196.939 294.892,195.713 \t\t"], ["fill", "#FFFFFF", "points", "294.396,198.174 294.384,199.392 294.993,199.388 295.005,198.165 \t\t"], ["fill", "#FFFFFF", "points", "294.378,200.61 294.378,201.827 294.987,201.839 294.987,200.614 \t\t"], ["fill", "#FFFFFF", "points", "293.929,190.828 294.046,192.041 294.653,191.989 294.536,190.768 \t\t"], ["fill", "#FFFFFF", "d", "M293.685,188.404c0.07,0.4,0.103,0.806,0.135,1.21l0.605-0.067c-0.033-0.406-0.064-0.814-0.137-1.219\n\t\t\tL293.685,188.404z"], ["fill", "#FFFFFF", "points", "293.329,185.991 293.503,187.198 294.106,187.114 293.931,185.898 \t\t"], ["fill", "#FFFFFF", "points", "287.126,236.263 286.638,237.388 287.198,237.628 287.687,236.497 \t\t"], ["fill", "#FFFFFF", "points", "289.677,229.356 289.317,230.53 289.892,230.726 290.255,229.546 \t\t"], ["fill", "#FFFFFF", "points", "288.886,231.681 288.456,232.833 289.026,233.044 289.46,231.885 \t\t"], ["fill", "#FFFFFF", "points", "290.415,227.011 290.042,228.183 290.624,228.364 290.999,227.185 \t\t"], ["fill", "#FFFFFF", "points", "291.083,224.653 290.784,225.841 291.37,226.007 291.671,224.812 \t\t"], ["fill", "#FFFFFF", "points", "288.03,233.985 287.612,235.14 288.177,235.366 288.599,234.204 \t\t"], ["fill", "#FFFFFF", "points", "292.741,217.505 292.489,218.702 293.087,218.823 293.339,217.62 \t\t"], ["fill", "#FFFFFF", "points", "293.532,212.692 293.341,213.897 293.942,213.987 294.136,212.776 \t\t"], ["fill", "#FFFFFF", "points", "291.702,222.282 291.392,223.466 291.979,223.62 292.292,222.427 \t\t"], ["fill", "#FFFFFF", "points", "293.157,215.103 292.978,216.308 293.575,216.415 293.757,215.2 \t\t"], ["fill", "#FFFFFF", "points", "292.245,219.897 292.005,221.097 292.599,221.233 292.839,220.028 \t\t"], ["fill", "#FFFFFF", "points", "293.815,210.274 293.696,211.487 294.3,211.56 294.421,210.341 \t\t"], ["fill", "#62381B", "d", "M290.071,240.046l-6.985-3.088c-7.653,17.537-21.009,32.306-37.651,41.861l3.818,6.617\n\t\t\tC267.273,275.091,281.774,259.054,290.071,240.046z"], ["fill", "#FFFFFF", "points", "280.032,250.05 279.392,251.087 279.905,251.415 280.55,250.372 \t\t"], ["fill", "#FFFFFF", "points", "274.467,258.036 273.729,259.003 274.205,259.385 274.945,258.409 \t\t"], ["fill", "#FFFFFF", "d", "M285.817,239.319c-0.145,0.383-0.348,0.736-0.524,1.104l0.551,0.261c0.178-0.369,0.381-0.728,0.529-1.111\n\t\t\tL285.817,239.319z"], ["fill", "#FFFFFF", "points", "272.963,259.95 272.168,260.874 272.635,261.269 273.434,260.337 \t\t"], ["fill", "#FFFFFF", "points", "284.749,241.517 284.214,242.614 284.757,242.888 285.298,241.784 \t\t"], ["fill", "#FFFFFF", "points", "271.381,261.802 270.594,262.733 271.051,263.138 271.84,262.2 \t\t"], ["fill", "#FFFFFF", "points", "278.718,252.165 278.017,253.161 278.521,253.505 279.226,252.501 \t\t"], ["fill", "#FFFFFF", "points", "277.321,254.163 276.632,255.163 277.126,255.521 277.821,254.511 \t\t"], ["fill", "#FFFFFF", "points", "275.923,256.153 275.176,257.114 275.662,257.483 276.415,256.517 \t\t"], ["fill", "#FFFFFF", "points", "281.325,247.985 280.679,249.019 281.2,249.333 281.851,248.292 \t\t"], ["fill", "#FFFFFF", "points", "282.501,245.847 281.911,246.915 282.438,247.216 283.034,246.144 \t\t"], ["fill", "#FFFFFF", "points", "283.681,243.714 283.095,244.784 283.632,245.073 284.222,243.995 \t\t"], ["fill", "#FFFFFF", "points", "249.113,280.663 248.053,281.274 248.363,281.796 249.43,281.183 \t\t"], ["fill", "#FFFFFF", "points", "255.211,276.585 254.219,277.3 254.568,277.8 255.566,277.077 \t\t"], ["fill", "#FFFFFF", "points", "253.23,278.021 252.199,278.677 252.535,279.185 253.572,278.522 \t\t"], ["fill", "#FFFFFF", "points", "257.191,275.151 256.207,275.876 256.568,276.364 257.559,275.636 \t\t"], ["fill", "#FFFFFF", "points", "259.102,273.628 258.145,274.388 258.52,274.868 259.48,274.103 \t\t"], ["fill", "#FFFFFF", "points", "251.172,279.341 250.146,280.01 250.469,280.524 251.502,279.853 \t\t"], ["fill", "#FFFFFF", "points", "264.637,268.835 263.754,269.681 264.166,270.128 265.053,269.28 \t\t"], ["fill", "#FFFFFF", "points", "268.1,265.405 267.271,266.298 267.705,266.726 268.539,265.829 \t\t"], ["fill", "#FFFFFF", "points", "260.996,272.089 260.062,272.872 260.449,273.345 261.389,272.554 \t\t"], ["fill", "#FFFFFF", "points", "266.391,267.142 265.512,267.987 265.934,268.427 266.82,267.575 \t\t"], ["fill", "#FFFFFF", "points", "262.832,270.478 261.912,271.278 262.311,271.741 263.236,270.933 \t\t"], ["fill", "#FFFFFF", "points", "269.771,263.63 268.934,264.517 269.379,264.931 270.221,264.04 \t\t"], ["fill", "#62381B", "d", "M249.252,285.437l-3.818-6.617c-16.58,9.668-36.203,13.803-55.116,11.732l-0.812,7.596\n\t\t\tC210.029,300.394,231.297,295.903,249.252,285.437z"], ["fill", "#FFFFFF", "points", "235.213,287.616 234.078,288.075 234.301,288.644 235.441,288.179 \t\t"], ["fill", "#FFFFFF", "points", "225.971,290.81 224.801,291.163 224.961,291.749 226.139,291.394 \t\t"], ["fill", "#FFFFFF", "d", "M246.242,282.329c-0.355,0.203-0.695,0.431-1.064,0.604l0.291,0.535c0.373-0.177,0.715-0.404,1.07-0.607\n\t\t\tL246.242,282.329z"], ["fill", "#FFFFFF", "points", "223.617,291.469 222.43,291.755 222.576,292.345 223.771,292.056 \t\t"], ["fill", "#FFFFFF", "points", "244.088,283.493 243.002,284.056 243.279,284.599 244.371,284.032 \t\t"], ["fill", "#FFFFFF", "points", "221.244,292.046 220.059,292.345 220.189,292.938 221.383,292.64 \t\t"], ["fill", "#FFFFFF", "points", "232.893,288.55 231.734,288.946 231.939,289.521 233.105,289.118 \t\t"], ["fill", "#FFFFFF", "points", "230.58,289.349 229.428,289.76 229.617,290.335 230.777,289.925 \t\t"], ["fill", "#FFFFFF", "points", "228.264,290.135 227.09,290.478 227.266,291.06 228.447,290.714 \t\t"], ["fill", "#FFFFFF", "points", "237.482,286.7 236.35,287.159 236.584,287.722 237.725,287.26 \t\t"], ["fill", "#FFFFFF", "points", "239.703,285.667 238.592,286.181 238.84,286.735 239.961,286.22 \t\t"], ["fill", "#FFFFFF", "points", "241.918,284.626 240.816,285.159 241.08,285.71 242.188,285.171 \t\t"], ["fill", "#FFFFFF", "points", "192.195,294.208 190.984,294.077 190.925,294.681 192.146,294.815 \t\t"], ["fill", "#FFFFFF", "points", "199.49,294.499 198.273,294.499 198.263,295.104 199.488,295.108 \t\t"], ["fill", "#FFFFFF", "points", "197.056,294.489 195.841,294.417 195.815,295.026 197.039,295.097 \t\t"], ["fill", "#FFFFFF", "points", "201.926,294.517 200.708,294.507 200.713,295.114 201.939,295.124 \t\t"], ["fill", "#FFFFFF", "points", "204.359,294.394 203.143,294.45 203.164,295.06 204.389,295.003 \t\t"], ["fill", "#FFFFFF", "points", "194.625,294.351 193.41,294.29 193.368,294.897 194.591,294.958 \t\t"], ["fill", "#FFFFFF", "points", "211.643,293.78 210.434,293.927 210.5,294.53 211.719,294.386 \t\t"], ["fill", "#FFFFFF", "d", "M216.463,293.038c-0.4,0.072-0.795,0.178-1.199,0.224l0.1,0.602c0.406-0.043,0.806-0.152,1.207-0.225\n\t\t\tL216.463,293.038z"], ["fill", "#FFFFFF", "d", "M206.793,294.272c-0.404,0.059-0.812,0.047-1.217,0.07l0.036,0.606c0.408-0.025,0.818-0.014,1.226-0.068\n\t\t\tL206.793,294.272z"], ["fill", "#FFFFFF", "points", "214.055,293.429 212.848,293.601 212.932,294.206 214.146,294.03 \t\t"], ["fill", "#FFFFFF", "points", "209.219,294.036 208.006,294.151 208.059,294.76 209.279,294.642 \t\t"], ["fill", "#FFFFFF", "points", "218.859,292.571 217.66,292.802 217.775,293.399 218.982,293.169 \t\t"], ["fill", "#62381B", "d", "M189.504,298.147l0.812-7.596c-18.978-2.005-37.479-10.22-51.518-22.974l-5.126,5.664\n\t\t\tC148.925,287.091,168.928,295.972,189.504,298.147z"], ["fill", "#FFFFFF", "points", "176.916,291.635 175.73,291.327 175.573,291.915 176.767,292.226 \t\t"], ["fill", "#FFFFFF", "points", "167.537,288.749 166.386,288.321 166.169,288.89 167.329,289.321 \t\t"], ["fill", "#FFFFFF", "d", "M188.908,293.862c-0.403-0.045-0.812-0.059-1.211-0.131l-0.079,0.602c0.402,0.074,0.812,0.088,1.219,0.136\n\t\t\tL188.908,293.862z"], ["fill", "#FFFFFF", "points", "165.232,287.899 164.092,287.446 163.861,288.007 165.009,288.464 \t\t"], ["fill", "#FFFFFF", "points", "186.493,293.538 185.288,293.349 185.193,293.95 186.405,294.14 \t\t"], ["fill", "#FFFFFF", "points", "162.971,286.954 161.845,286.47 161.601,287.026 162.733,287.517 \t\t"], ["fill", "#FFFFFF", "points", "174.49,291.011 173.312,290.671 173.14,291.255 174.326,291.599 \t\t"], ["fill", "#FFFFFF", "points", "172.141,290.296 170.97,289.927 170.783,290.507 171.962,290.878 \t\t"], ["fill", "#FFFFFF", "points", "169.795,289.565 168.635,289.163 168.434,289.737 169.601,290.142 \t\t"], ["fill", "#FFFFFF", "points", "179.291,292.222 178.099,291.948 177.958,292.54 179.156,292.815 \t\t"], ["fill", "#FFFFFF", "points", "181.684,292.71 180.489,292.464 180.363,293.06 181.566,293.308 \t\t"], ["fill", "#FFFFFF", "d", "M184.082,293.169c-0.401-0.062-0.807-0.104-1.203-0.205l-0.111,0.601c0.399,0.098,0.807,0.143,1.211,0.205\n\t\t\tL184.082,293.169z"], ["fill", "#FFFFFF", "points", "138.212,271.589 137.286,270.798 136.883,271.253 137.814,272.052 \t\t"], ["fill", "#FFFFFF", "points", "143.903,276.165 142.94,275.423 142.573,275.909 143.544,276.657 \t\t"], ["fill", "#FFFFFF", "points", "141.98,274.671 141.019,273.929 140.639,274.403 141.607,275.153 \t\t"], ["fill", "#FFFFFF", "points", "145.904,277.554 144.905,276.858 144.552,277.353 145.557,278.054 \t\t"], ["fill", "#FFFFFF", "d", "M147.905,278.942c-0.353-0.201-0.672-0.455-1.006-0.687l-0.34,0.502c0.336,0.234,0.657,0.488,1.012,0.691\n\t\t\tL147.905,278.942z"], ["fill", "#FFFFFF", "points", "140.052,273.185 139.133,272.388 138.741,272.853 139.667,273.659 \t\t"], ["fill", "#FFFFFF", "points", "154.18,282.69 153.115,282.097 152.814,282.626 153.887,283.224 \t\t"], ["fill", "#FFFFFF", "points", "158.515,284.933 157.419,284.394 157.146,284.937 158.249,285.481 \t\t"], ["fill", "#FFFFFF", "points", "149.974,280.229 148.941,279.583 148.613,280.095 149.652,280.745 \t\t"], ["fill", "#FFFFFF", "points", "156.321,283.858 155.241,283.29 154.955,283.827 156.042,284.399 \t\t"], ["fill", "#FFFFFF", "points", "152.048,281.507 151.002,280.88 150.688,281.401 151.74,282.034 \t\t"], ["fill", "#FFFFFF", "points", "160.718,285.989 159.607,285.479 159.349,286.03 160.467,286.544 \t\t"], ["id", "airplane2"], ["fill", "#F15C27", "d", "M236.783,38.819c-27.964-6.462-57.599-5.521-85.059,2.874l0.206,0.674\n\t\t\t\tc27.354-8.361,56.879-9.295,84.733-2.853C236.676,39.276,236.709,39.041,236.783,38.819z"], ["fill", "#EE7D8F", "d", "M236.756,40.347c-34.021-7.978-70.586-4.699-102.564,9.443l0.406,0.923\n\t\t\t\tc32.142-14.219,68.961-17.389,103.1-9.111C237.215,41.334,236.902,40.873,236.756,40.347z"], ["fill", "#E8D320", "d", "M243.795,43.947c-0.73-0.284-1.404-0.626-2.121-0.892C201.906,32.281,158.058,37.35,122,57.389\n\t\t\t\tl0.485,0.882c36.504-20.287,81.056-25.147,121.159-13.634l0.193-0.679C243.822,43.952,243.811,43.952,243.795,43.947z"], ["fill", "#2D948D", "d", "M243.232,46.077c-30.975-8.823-64.655-8.02-95.111,2.486l-0.181-0.523\n\t\t\t\tc30.565-10.542,64.361-11.349,95.445-2.495L243.232,46.077z"], ["fill", "#69C8C3", "d", "M242.934,47.121c-39.451-11.327-83.298-6.547-119.202,13.412l-0.376-0.685\n\t\t\t\tC159.44,39.791,203.5,34.986,243.148,46.37L242.934,47.121z"], ["fill", "#69C8C3", "d", "M254.555,46.239l-4.512-8.032c-0.181-0.32-0.611-0.677-0.959-0.791l-1.148-0.382\n\t\t\t\tc-0.352-0.115-0.541,0.074-0.426,0.425l2.426,7.373c0.113,0.35,0.494,0.715,0.849,0.816l3.457,0.989\n\t\t\t\tC254.594,46.739,254.734,46.56,254.555,46.239z"], ["fill", "#2D948D", "d", "M252.951,49.896l-8.418,3.741c-0.337,0.149-0.896,0.177-1.244,0.061l-1.148-0.381\n\t\t\t\tc-0.35-0.116-0.389-0.381-0.088-0.593l6.354-4.46c0.299-0.212,0.823-0.278,1.17-0.147l3.36,1.274\n\t\t\t\tC253.281,49.52,253.289,49.747,252.951,49.896z"], ["fill", "#2D948D", "d", "M250.949,44.656c-4.021-1.323-8.056-2.614-12.099-3.868c-0.899-0.28-1.746,0.136-2.35,0.787\n\t\t\t\t\t\tc-0.601,0.64-0.873,1.533-0.188,2.505c0.931,1.313,2.078,1.545,3.041,1.881c4.219,1.478,8.457,2.933,12.693,4.322\n\t\t\t\t\t\tc4.565,1.497,8.256,2.585,12.85,4.013c0.502,0.157,1.23-0.004,1.404-0.441c0.488-1.229-0.715-3.32-0.965-3.642\n\t\t\t\t\t\tc-0.646-0.816-1.254-1.086-1.896-1.311C258.979,47.34,255.439,46.134,250.949,44.656z"], ["fill", "#2D948D", "d", "M235.941,43.594l-0.674-6.528c-0.022-0.216,0.127-0.337,0.332-0.27l1.154,0.385\n\t\t\t\tc0.207,0.067,0.461,0.277,0.569,0.466l1.953,3.417c0.107,0.188,0.039,0.422-0.155,0.522l-2.861,1.461\n\t\t\t\tC236.064,43.146,235.965,43.811,235.941,43.594z"], ["fill", "#FFFFFF", "cx", "252.673", "cy", "47.702", "r", "0.554"], ["fill", "#FFFFFF", "cx", "255.49", "cy", "48.635", "r", "0.554"], ["fill", "#FFFFFF", "cx", "258.305", "cy", "49.571", "r", "0.554"], ["fill", "#FFFFFF", "d", "M261.646,50.679c-0.096,0.29-0.41,0.446-0.701,0.352c-0.291-0.096-0.446-0.411-0.35-0.7\n\t\t\t\t\tc0.094-0.292,0.408-0.448,0.699-0.353C261.586,50.076,261.744,50.387,261.646,50.679z"], ["fill", "#FFFFFF", "d", "M250.385,46.941c-0.096,0.291-0.41,0.448-0.701,0.352c-0.289-0.097-0.445-0.41-0.352-0.701\n\t\t\t\t\tc0.1-0.29,0.41-0.447,0.701-0.351C250.324,46.337,250.482,46.65,250.385,46.941z"], ["fill", "#FFFFFF", "cx", "247.043", "cy", "45.833", "r", "0.554"], ["fill", "#FFFFFF", "cx", "244.229", "cy", "44.898", "r", "0.554"], ["fill", "#FFFFFF", "cx", "241.412", "cy", "43.963", "r", "0.554"], ["fill", "#2D948D", "d", "M238.443,37.706c-0.073,0.223-0.313,0.342-0.534,0.271l-3.619-1.202\n\t\t\t\tc-0.224-0.074-0.345-0.313-0.271-0.536l0,0c0.074-0.223,0.314-0.341,0.537-0.268l3.617,1.199\n\t\t\t\tC238.396,37.245,238.518,37.485,238.443,37.706L238.443,37.706z"], ["id", "airplane1"], ["fill", "#F15C27", "d", "M300.649,326.339c-32.001,24.181-73.167,35.484-113.023,31.668c0.024,0.234,0.023,0.472-0.014,0.707\n\t\t\t\tc40.01,3.818,81.335-7.536,113.459-31.811L300.649,326.339z"], ["fill", "#EE7D8F", "d", "M319.285,307.528c-33.812,35.615-84.521,53.887-133.252,48.537c0.009,0.002,0.017,0.002,0.024,0.008\n\t\t\t\tc0.666,0.227,1.096,0.648,1.342,1.146c48.581,4.86,98.932-13.513,132.611-48.988L319.285,307.528z"], ["fill", "#E8D320", "d", "M330.949,291.716c-17.326,22.97-40.897,41.193-67.568,52.011c-26.635,10.93-56.24,14.246-84.685,9.918\n\t\t\t\tl-0.074,0.494c1.526,0.452,3.088,0.772,4.636,1.145c27.162,3.32,55.166-0.229,80.503-10.625\n\t\t\t\tc26.839-10.885,50.558-29.223,67.991-52.336L330.949,291.716z"], ["fill", "#2D948D", "d", "M178.923,352.165c44.001,6.967,90.593-5.731,124.836-34.244l0.35,0.429\n\t\t\t\tc-34.357,28.61-81.12,41.356-125.269,34.362L178.923,352.165z"], ["fill", "#69C8C3", "d", "M179.087,351.091c27.993,4.261,57.12,0.996,83.321-9.758c26.236-10.639,49.433-28.571,66.479-51.174\n\t\t\t\tl0.623,0.471c-17.131,22.714-40.439,40.734-66.81,51.427c-26.332,10.807-55.604,14.086-83.732,9.809L179.087,351.091z"], ["fill", "#2D948D", "d", "M169.401,353.132l5.165,7.628c0.207,0.305,0.665,0.622,1.023,0.709l1.176,0.284\n\t\t\tc0.358,0.086,0.532-0.118,0.388-0.459l-3.03-7.143c-0.144-0.34-0.554-0.674-0.915-0.746l-3.525-0.695\n\t\t\tC169.321,352.636,169.194,352.827,169.401,353.132z"], ["fill", "#69C8C3", "d", "M170.694,349.353l8.076-4.431c0.324-0.176,0.876-0.25,1.236-0.163l1.176,0.284\n\t\t\tc0.358,0.086,0.418,0.349,0.136,0.582l-5.958,4.976c-0.282,0.237-0.799,0.346-1.153,0.244l-3.457-0.99\n\t\t\tC170.397,349.757,170.371,349.528,170.694,349.353z"], ["fill", "#69C8C3", "d", "M173.126,354.407c4.118,0.984,8.244,1.934,12.378,2.848c0.919,0.203,1.728-0.282,2.275-0.979\n\t\t\t\t\tc0.543-0.688,0.744-1.603-0.023-2.512c-1.035-1.232-2.198-1.367-3.187-1.625c-4.326-1.117-8.672-2.214-13.01-3.246\n\t\t\t\t\tc-4.674-1.111-8.443-1.888-13.139-2.929c-0.514-0.112-1.226,0.109-1.363,0.562c-0.384,1.262,0.989,3.248,1.268,3.545\n\t\t\t\t\tc0.709,0.762,1.339,0.977,1.997,1.15C164.9,352.401,168.529,353.31,173.126,354.407z"], ["fill", "#69C8C3", "d", "M188.169,354.214l1.216,6.449c0.041,0.215-0.097,0.347-0.309,0.297l-1.184-0.287\n\t\t\tc-0.211-0.051-0.481-0.235-0.605-0.416l-2.229-3.243c-0.125-0.181-0.075-0.416,0.11-0.533l2.729-1.693\n\t\t\tC188.084,354.671,188.13,354.003,188.169,354.214z"], ["fill", "#2D948D", "cx", "171.153", "cy", "351.516", "r", "0.554"], ["fill", "#2D948D", "d", "M167.731,350.692c0.072-0.299,0.37-0.482,0.668-0.412c0.297,0.072,0.479,0.373,0.407,0.67\n\t\t\t\ts-0.371,0.48-0.668,0.41C167.842,351.286,167.66,350.989,167.731,350.692z"], ["fill", "#2D948D", "cx", "165.386", "cy", "350.125", "r", "0.554"], ["fill", "#2D948D", "cx", "162.502", "cy", "349.426", "r", "0.555"], ["fill", "#2D948D", "cx", "174.036", "cy", "352.213", "r", "0.553"], ["fill", "#2D948D", "d", "M176.381,352.78c0.073-0.299,0.372-0.482,0.669-0.408c0.298,0.07,0.479,0.369,0.407,0.668\n\t\t\t\tc-0.072,0.297-0.37,0.479-0.667,0.41C176.492,353.376,176.31,353.077,176.381,352.78z"], ["fill", "#2D948D", "cx", "179.803", "cy", "353.605", "r", "0.554"], ["fill", "#2D948D", "cx", "182.687", "cy", "354.303", "r", "0.555"], ["fill", "#69C8C3", "d", "M186.167,360.292c0.055-0.229,0.285-0.367,0.511-0.315l3.707,0.897c0.227,0.056,0.368,0.283,0.312,0.511\n\t\t\tl0,0c-0.056,0.229-0.283,0.366-0.513,0.312l-3.704-0.893C186.253,360.745,186.113,360.517,186.167,360.292L186.167,360.292z"], ["id", "floatingGlobe"], ["id", "cloud3"], ["fill", "#69C8C3", "d", "M66.556,68.339c-0.038,0.058-0.069,0.115-0.104,0.173c-1.225-0.498-2.67-0.087-3.43,1.056\n\t\t\t\tc-0.677,1.016-0.61,2.304,0.065,3.235c-0.329,0.249-0.624,0.551-0.865,0.913c-1.147,1.726-0.682,4.054,1.042,5.202l0.083,0.048\n\t\t\t\tl7.9-11.859C69.62,66.279,67.593,66.782,66.556,68.339z"], ["id", "cloud2"], ["fill", "#E8D320", "d", "M63.183,75.428c-0.639,0.958-0.816,2.089-0.589,3.134c-1.438,0.035-2.81,0.714-3.64,1.959\n\t\t\t\tc-0.222,0.33-0.383,0.679-0.502,1.039c-1.757-0.423-3.771,0.389-4.945,2.151c-1.221,1.833-1.141,4.104,0.051,5.559\n\t\t\t\tc-0.074,0.096-0.146,0.191-0.216,0.295c-1.522,2.284-0.904,5.368,1.381,6.889c0.056,0.038,0.116,0.068,0.171,0.103l14.524-21.804\n\t\t\t\tc-0.174-0.166-0.361-0.322-0.568-0.461C66.97,73.04,64.434,73.549,63.183,75.428z"], ["id", "cloud1"], ["fill", "#EE7D8F", "d", "M54.284,71.778c-0.227,0.342-0.375,0.712-0.453,1.091c-1.448-0.076-2.929,0.624-3.822,1.963\n\t\t\t\tc-0.458,0.69-0.698,1.458-0.739,2.218c-1.128,0.156-2.185,0.772-2.864,1.794c-1.123,1.686-0.837,3.896,0.578,5.251\n\t\t\t\tc-0.097,0.11-0.189,0.229-0.273,0.355c-1.079,1.619-0.732,3.771,0.744,4.979L59.31,71.629c-0.203-0.269-0.451-0.51-0.748-0.708\n\t\t\t\tC57.143,69.977,55.229,70.361,54.284,71.778z"], ["id", "globe"], ["x", "72.131", "y", "105.627", "transform", "matrix(-0.5542 0.8324 -0.8324 -0.5542 203.174 109.2116)", "fill", "#F15C27", "width", "0.418", "height", "6.778"], ["x", "70.9", "y", "107.488", "transform", "matrix(-0.5536 0.8328 -0.8328 -0.5536 202.812 113.0433)", "fill", "#F15C27", "width", "0.42", "height", "6.778"], ["x", "69.658", "y", "109.361", "transform", "matrix(-0.5569 0.8306 -0.8306 -0.5569 202.4233 117.5026)", "fill", "#F15C27", "width", "0.417", "height", "6.776"], ["x", "68.41", "y", "111.22", "transform", "matrix(-0.5563 0.831 -0.831 -0.5563 202.0303 121.3445)", "fill", "#F15C27", "width", "0.42", "height", "6.777"], ["fill", "#E8D320", "d", "M63.61,105.152c-6.2-10.182-14.584-10.383-16.479-9.651c-0.104,0.146-0.213,0.279-0.312,0.428\n\t\t\t\t\tc-0.22,0.327-0.419,0.665-0.607,1.003c0.106,2.084,3.6,9.639,15.329,11.35c2.21,0.321,4.252,1.46,6.139,2.864l0.975-1.464\n\t\t\t\t\tC66.624,108.494,64.774,107.062,63.61,105.152z"], ["fill", "#69C8C3", "d", "M61.542,108.281c-11.729-1.71-15.223-9.265-15.329-11.35c-0.175,0.311-0.331,0.624-0.48,0.94\n\t\t\t\t\tc-1.44,3.539-0.811,8.584,4.71,11.965c2.518,1.543,6.831,1.281,9.389,1.117c2.538-0.164,4.015-0.022,6.883,1.643l0.967-1.451\n\t\t\t\t\tC65.794,109.741,63.752,108.602,61.542,108.281z"], ["fill", "#F15C27", "d", "M50.443,109.837c-5.521-3.381-6.15-8.426-4.71-11.965c-2.649,5.602-1.466,12,3.09,15.034\n\t\t\t\t\tc3.259,2.171,7.444,2.082,11.082,0.175c1.849-0.67,3.479-1.041,6.14,0.521l0.67-1.006c-2.868-1.665-4.345-1.807-6.883-1.643\n\t\t\t\t\tC57.273,111.118,52.96,111.381,50.443,109.837z"], ["fill", "#F15C27", "d", "M60.699,94.33c-5.683-4.047-10.917-2.119-13.439,0.997c-0.044,0.059-0.086,0.116-0.128,0.174\n\t\t\t\t\tc1.894-0.731,10.278-0.53,16.479,9.651c1.164,1.91,3.015,3.342,5.047,4.529l0.965-1.448c-2.667-1.994-3.375-3.297-4.221-5.703\n\t\t\t\t\tC64.551,100.112,63.104,96.042,60.699,94.33z"], ["fill", "#E2324B", "d", "M47.26,95.327c2.522-3.115,7.758-5.043,13.439-0.997c2.403,1.711,3.852,5.782,4.701,8.2\n\t\t\t\t\tc0.845,2.405,1.554,3.709,4.221,5.703l0.815-1.227c-1.362-0.987-2.417-2.638-2.732-5.756c0.312-4.042-1.225-7.873-4.447-10.018\n\t\t\t\t\tC58.344,87.959,51.327,89.813,47.26,95.327z"], ["fill", "#62381B", "points", "74.637,109.911 70.346,116.354 74.69,118.545 78.333,113.075 \t\t\t"], ["id", "innerCircles"], ["id", "circle5", "fill", "#F15C27", "d", "M288.569,200.171c0.433-34.354-21.302-67.555-52.857-81.048\n\t\t\tc-31.26-14.176-70.434-7.837-95.479,15.701c-25.674,22.849-35.486,61.307-24.13,93.701c10.636,32.639,41.765,57.229,76.03,59.846\n\t\t\tl-0.126,1.414c-34.818-2.658-66.439-27.643-77.248-60.807c-11.542-32.912-1.567-71.987,24.517-95.2\n\t\t\tc25.45-23.912,65.248-30.357,97.012-15.952c32.061,13.708,54.142,47.439,53.703,82.346L288.569,200.171L288.569,200.171z"], ["id", "circle4", "fill", "#EE7D8F", "d", "M284.937,200.171c0.051-19.738-7.062-39.39-19.792-54.483\n\t\t\tc-12.639-15.128-30.668-25.74-50.131-29.101c-19.402-3.526-40.029-0.038-57.123,9.838c-17.177,9.729-30.664,25.691-37.525,44.189\n\t\t\tc-6.875,18.503-7.045,39.381-0.405,57.977c6.559,18.623,19.868,34.726,36.884,44.724c16.958,10.125,37.526,13.873,56.979,10.652\n\t\t\tc19.481-3.146,37.719-13.39,50.528-28.398l1.535,1.322c-13.113,15.362-31.785,25.854-51.738,29.076\n\t\t\tc-19.91,3.297-40.973-0.544-58.336-10.908c-17.423-10.238-31.045-26.717-37.763-45.791c-6.799-19.045-6.625-40.406,0.415-59.358\n\t\t\tc7.028-18.945,20.833-35.28,38.419-45.242c17.505-10.111,38.625-13.685,58.484-10.072c19.932,3.44,38.391,14.306,51.329,29.793\n\t\t\tc13.03,15.447,20.319,35.581,20.264,55.783H284.937z"], ["id", "circle3", "fill", "#E8D320", "d", "M282.087,200.171c0.102-21.531-8.755-42.883-24.042-58.042\n\t\t\tc-15.16-15.285-36.51-24.141-58.042-24.042c-21.531-0.1-42.881,8.755-58.042,24.042c-15.287,15.16-24.142,36.511-24.041,58.042\n\t\t\tc-0.101,21.531,8.755,42.882,24.042,58.041c15.16,15.289,36.511,24.144,58.042,24.043c21.532,0.101,42.881-8.756,58.042-24.043\n\t\t\tC273.332,243.052,282.188,221.702,282.087,200.171h2.024c0.105,22.058-8.974,43.947-24.634,59.476\n\t\t\tc-15.526,15.66-37.418,24.738-59.475,24.635c-22.057,0.104-43.946-8.973-59.475-24.635c-15.66-15.527-24.739-37.418-24.635-59.476\n\t\t\tc-0.104-22.056,8.975-43.946,24.634-59.474c15.527-15.662,37.419-24.74,59.476-24.637c22.057-0.104,43.948,8.975,59.475,24.637\n\t\t\tc15.66,15.527,24.739,37.418,24.634,59.474H282.087z"], ["id", "circle1", "fill", "#2D948D", "d", "M279.073,200.171c0.505-32.562-21.546-63.749-52.265-74.399\n\t\t\tc-30.48-11.412-67.283-1.406-87.706,23.976c-21.112,24.755-24.097,62.852-7.185,90.62c16.173,28.275,50.92,43.988,82.834,37.48\n\t\t\tl0.207,1.094c-32.358,6.604-67.604-9.334-84-38.008c-17.153-28.164-14.124-66.791,7.285-91.898\n\t\t\tc20.709-25.737,58.032-35.887,88.942-24.312c31.152,10.802,53.509,42.428,53.001,75.448H279.073z"], ["id", "circle2_1_", "fill", "#69C8C3", "d", "M276.892,200.171c0.088-20.185-8.191-40.148-22.521-54.367\n\t\t\tc-14.218-14.326-34.185-22.608-54.368-22.52c-20.187-0.089-40.15,8.193-54.368,22.52c-14.327,14.219-22.609,34.184-22.52,54.367\n\t\t\tc-0.09,20.187,8.192,40.148,22.52,54.367c14.219,14.326,34.183,22.609,54.368,22.521c20.186,0.088,40.15-8.195,54.368-22.521\n\t\t\tC268.699,240.319,276.979,220.354,276.892,200.171h1.57c0.092,20.593-8.362,40.978-22.979,55.478\n\t\t\tc-14.504,14.617-34.887,23.074-55.479,22.979c-20.591,0.095-40.976-8.36-55.479-22.979\n\t\t\tc-14.616-14.502-23.071-34.887-22.979-55.479c-0.093-20.592,8.362-40.976,22.979-55.478c14.503-14.617,34.888-23.074,55.479-22.98\n\t\t\tc20.592-0.092,40.975,8.363,55.479,22.98c14.617,14.502,23.071,34.886,22.979,55.478L276.892,200.171L276.892,200.171z"], ["id", "Timeless_Design"], [1, "col-md-6"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polygon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "polygon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "polygon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "polygon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "polygon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "polygon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "polygon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "polygon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "polygon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "polygon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polygon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "polygon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "polygon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "polygon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "polygon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "polygon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "polygon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "polygon", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "polygon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "polygon", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "polygon", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "polygon", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "polygon", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "polygon", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "polygon", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "polygon", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "polygon", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "polygon", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "polygon", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "polygon", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "polygon", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "polygon", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "polygon", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "polygon", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "polygon", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "polygon", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "polygon", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "polygon", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "polygon", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "path", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "polygon", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "polygon", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "path", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "path", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "path", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "path", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "polygon", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "path", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "path", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "path", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "path", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "path", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "polygon", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "polygon", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "polygon", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "path", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "path", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "path", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "path", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "path", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "path", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "polygon", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "rect", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "rect", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "rect", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "rect", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "rect", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "rect", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "rect", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "rect", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "rect", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "polygon", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "polygon", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "polygon", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "polygon", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "polygon", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "polygon", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "polygon", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "polygon", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "polygon", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "polygon", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "polygon", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "polygon", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "polygon", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "polygon", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "polygon", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "polygon", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "polygon", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "polygon", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "polygon", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "rect", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "rect", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "rect", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "rect", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "rect", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "rect", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "rect", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "rect", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "rect", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "path", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "polygon", 341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "polygon", 342);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "polygon", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "polygon", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "polygon", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "polygon", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "polygon", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "polygon", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "polygon", 349);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "polygon", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "polygon", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "polygon", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "polygon", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "polygon", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "polygon", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "polygon", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "polygon", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "polygon", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "path", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "polygon", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "polygon", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "polygon", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "polygon", 363);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "path", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "path", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "path", 366);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "path", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "path", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "path", 369);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "path", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "path", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "path", 372);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "path", 373);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "path", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "path", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "path", 376);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "path", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "path", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "path", 379);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "path", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "path", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "path", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "path", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "path", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "path", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "path", 386);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "path", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "path", 388);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "path", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "path", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "path", 391);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "path", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "path", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "path", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "path", 395);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "path", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "path", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "path", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "path", 399);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "path", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "polygon", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "polygon", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "polygon", 403);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "polygon", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "rect", 405);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "polygon", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "polygon", 407);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "polygon", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "path", 409);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "rect", 410);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "polygon", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "polygon", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "polygon", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "polygon", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "rect", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "path", 416);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "path", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "path", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "path", 419);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "path", 420);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "path", 421);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "path", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "path", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "path", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "path", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "path", 426);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "path", 427);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "path", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "path", 429);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "path", 430);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "path", 431);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "path", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "path", 433);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "path", 434);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "path", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "path", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "path", 437);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "path", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "path", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "path", 440);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "path", 441);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "path", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "path", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "path", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "path", 445);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "path", 446);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "path", 447);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "path", 448);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "path", 449);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "path", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "path", 451);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "path", 452);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "path", 453);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "path", 454);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "path", 455);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "path", 456);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "path", 457);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "path", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "path", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "path", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "path", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "polygon", 462);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "polygon", 463);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "path", 464);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "path", 465);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "path", 466);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "path", 467);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "path", 468);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "polygon", 469);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "polygon", 470);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "polygon", 471);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "polygon", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "polygon", 473);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "polygon", 474);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "path", 475);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "polygon", 476);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "path", 477);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "path", 478);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "path", 479);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "path", 480);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "path", 481);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "path", 482);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "path", 483);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "path", 484);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "path", 485);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "path", 486);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "path", 487);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "path", 488);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "path", 489);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "path", 490);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "path", 491);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](492, "path", 492);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "path", 493);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "path", 494);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "polygon", 495);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "rect", 496);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "path", 497);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "polygon", 498);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "polygon", 499);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "polygon", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "polygon", 501);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "polygon", 502);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "polygon", 503);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "path", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "path", 505);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](506, "path", 506);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "path", 507);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "path", 508);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "path", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "path", 510);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "path", 511);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "path", 512);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "path", 513);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](514, "polygon", 514);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "polygon", 515);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "polygon", 516);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "path", 517);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "path", 518);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "path", 519);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "path", 520);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "path", 521);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](522, "path", 522);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "path", 523);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "path", 524);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "path", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](526, "polygon", 526);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "polygon", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "polygon", 528);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "path", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](530, "path", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "path", 531);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "path", 532);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "path", 533);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "path", 534);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "path", 535);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "path", 536);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](537, "polygon", 537);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](538, "polygon", 538);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "polygon", 539);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](540, "polygon", 540);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "polygon", 541);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](542, "polygon", 542);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "polygon", 543);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "polygon", 544);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "polygon", 545);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](546, "polygon", 546);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](547, "polygon", 547);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](548, "path", 548);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](549, "path", 549);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](550, "path", 550);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](551, "path", 551);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "path", 552);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](553, "path", 553);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "path", 554);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](555, "path", 555);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "path", 556);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](557, "path", 557);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "path", 558);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](559, "path", 559);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](560, "path", 560);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "path", 561);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "polygon", 562);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](563, "path", 563);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "path", 564);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "path", 565);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "path", 566);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](567, "path", 567);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](568, "path", 568);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](569, "path", 569);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "path", 570);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](571, "path", 571);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "path", 572);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](573, "path", 573);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](574, "path", 574);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](575, "path", 575);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](576, "polygon", 576);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "path", 577);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "g", 578);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "path", 579);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](580, "path", 580);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "path", 581);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](582, "path", 582);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](583, "path", 583);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](584, "path", 584);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "path", 585);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](586, "path", 586);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](587, "path", 587);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](588, "path", 588);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "path", 589);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](590, "path", 590);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "path", 591);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](592, "polygon", 592);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "polygon", 593);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](594, "polygon", 594);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "rect", 595);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](596, "rect", 596);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "polygon", 597);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "polygon", 598);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](599, "polygon", 599);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "polygon", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "polygon", 601);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](602, "rect", 602);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](603, "path", 603);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "polygon", 604);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](605, "polygon", 605);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](606, "polygon", 606);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](607, "polygon", 607);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](608, "polygon", 608);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "polygon", 609);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "polygon", 610);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "rect", 611);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "path", 612);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](613, "polygon", 613);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](614, "polygon", 614);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](615, "polygon", 615);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](616, "polygon", 616);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](617, "path", 617);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "polygon", 618);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](619, "polygon", 619);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "polygon", 620);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](621, "path", 621);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](622, "rect", 622);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](623, "path", 623);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](624, "polygon", 624);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](625, "path", 625);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](626, "polygon", 626);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "path", 627);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](628, "path", 628);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](629, "path", 629);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](630, "path", 630);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "polygon", 631);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](632, "polygon", 632);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](633, "polygon", 633);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](634, "rect", 634);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "rect", 635);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](636, "polygon", 636);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](637, "polygon", 637);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](638, "polygon", 638);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](639, "polygon", 639);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](640, "polygon", 640);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](641, "polygon", 641);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](642, "polygon", 642);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](643, "rect", 643);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](644, "rect", 644);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](645, "rect", 645);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](646, "polygon", 646);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](647, "polygon", 647);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](648, "rect", 648);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](649, "rect", 649);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](650, "rect", 650);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](651, "polygon", 651);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](652, "polygon", 652);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](653, "polygon", 653);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](654, "polygon", 654);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](655, "polygon", 655);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](656, "polygon", 656);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](657, "polygon", 657);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](658, "rect", 658);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](659, "polygon", 659);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](660, "rect", 660);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](661, "polygon", 661);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](662, "polygon", 662);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](663, "polygon", 663);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](664, "rect", 664);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](665, "rect", 665);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "polygon", 666);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](667, "polygon", 667);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "polygon", 668);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](669, "polygon", 669);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](670, "polygon", 670);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](671, "polygon", 671);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](672, "polygon", 672);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](673, "rect", 673);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](674, "polygon", 674);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](675, "rect", 675);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "polygon", 676);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](677, "polygon", 677);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](678, "polygon", 678);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](679, "path", 679);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](680, "path", 680);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](681, "path", 681);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "path", 682);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](683, "polygon", 683);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "polygon", 684);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](685, "path", 685);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](686, "polygon", 686);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](687, "polygon", 687);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "polygon", 688);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](689, "path", 689);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](690, "rect", 690);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "polygon", 691);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](692, "polygon", 692);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](693, "path", 693);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](694, "polygon", 694);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](695, "polygon", 695);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](696, "polygon", 696);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](697, "path", 697);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](698, "polygon", 698);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "polygon", 699);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](700, "polygon", 700);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](701, "path", 701);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](702, "polygon", 702);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](703, "polygon", 703);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](704, "polygon", 704);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](705, "path", 705);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](706, "rect", 706);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](707, "path", 707);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](708, "path", 708);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](709, "path", 709);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](710, "polygon", 710);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](711, "polygon", 711);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](712, "polygon", 712);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](713, "path", 713);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](714, "polygon", 714);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](715, "path", 715);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](716, "path", 716);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "polygon", 717);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](718, "path", 718);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](719, "path", 719);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](720, "path", 720);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](721, "path", 721);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](722, "path", 722);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](723, "path", 723);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](724, "polygon", 724);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](725, "path", 725);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](726, "path", 726);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](727, "path", 727);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](728, "path", 728);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](729, "path", 729);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](730, "path", 730);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](731, "polygon", 731);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](732, "path", 732);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "path", 733);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](734, "path", 734);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](735, "path", 735);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](736, "path", 736);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](737, "path", 737);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](738, "polygon", 738);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "path", 739);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](740, "path", 740);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](741, "path", 741);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](742, "path", 742);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](743, "path", 743);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](744, "path", 744);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](745, "path", 745);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](746, "path", 746);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](747, "path", 747);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](748, "path", 748);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](749, "path", 749);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](750, "path", 750);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](751, "polygon", 751);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](752, "path", 752);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](753, "path", 753);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](754, "polygon", 754);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](755, "path", 755);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](756, "path", 756);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](757, "path", 757);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](758, "path", 758);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](759, "polygon", 759);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "path", 760);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](761, "path", 761);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](762, "path", 762);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](763, "polygon", 763);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](764, "path", 764);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](765, "path", 765);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](766, "path", 766);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](767, "path", 767);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](768, "polygon", 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](769, "polygon", 769);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](770, "path", 770);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](771, "path", 771);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](772, "path", 772);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](773, "polygon", 773);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](774, "path", 774);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](775, "path", 775);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](776, "polygon", 776);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](777, "path", 777);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](778, "path", 778);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](779, "path", 779);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](780, "path", 780);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](781, "path", 781);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](782, "path", 782);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](783, "path", 783);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](784, "path", 784);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](785, "path", 785);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](786, "path", 786);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](787, "path", 787);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](788, "path", 788);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](789, "path", 789);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "path", 790);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](791, "path", 791);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](792, "path", 792);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](793, "path", 793);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](794, "path", 794);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](795, "path", 795);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](796, "path", 796);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](797, "path", 797);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](798, "path", 798);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](799, "polygon", 799);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](800, "path", 800);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](801, "path", 801);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](802, "path", 802);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "path", 803);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](804, "path", 804);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "path", 805);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](806, "path", 806);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](807, "polygon", 807);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](808, "path", 808);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](809, "path", 809);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](810, "path", 810);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](811, "path", 811);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](812, "path", 812);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](813, "path", 813);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "path", 814);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](815, "polygon", 815);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](816, "path", 816);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](817, "polygon", 817);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](818, "path", 818);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](819, "polygon", 819);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](820, "path", 820);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](821, "polygon", 821);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](822, "path", 822);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](823, "path", 823);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](824, "path", 824);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](825, "path", 825);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](826, "path", 826);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](827, "path", 827);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](828, "path", 828);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](829, "path", 829);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](830, "path", 830);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](831, "path", 831);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](832, "path", 832);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](833, "path", 833);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](834, "path", 834);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](835, "path", 835);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "path", 836);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](837, "path", 837);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](838, "path", 838);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](839, "path", 839);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](840, "path", 840);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](841, "path", 841);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](842, "path", 842);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](843, "path", 843);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](844, "path", 844);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](845, "path", 845);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](846, "path", 846);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](847, "path", 847);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](848, "path", 848);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](849, "path", 849);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](850, "path", 850);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](851, "path", 851);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](852, "path", 852);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](853, "path", 853);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](854, "path", 854);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](855, "path", 855);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](856, "path", 856);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](857, "path", 857);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](858, "path", 858);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](859, "polygon", 859);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](860, "path", 860);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](861, "path", 861);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](862, "path", 862);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](863, "path", 863);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](864, "path", 864);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](865, "path", 865);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](866, "path", 866);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](867, "path", 867);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](868, "path", 868);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "polygon", 869);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](870, "path", 870);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](871, "polygon", 871);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](872, "path", 872);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](873, "path", 873);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](874, "path", 874);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](875, "path", 875);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](876, "path", 876);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](877, "path", 877);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](878, "path", 878);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](879, "path", 879);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](880, "path", 880);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](881, "path", 881);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "path", 882);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](883, "path", 883);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](884, "path", 884);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](885, "path", 885);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](886, "path", 886);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](887, "path", 887);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](888, "path", 888);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](889, "path", 889);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](890, "path", 890);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "path", 891);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](892, "path", 892);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](893, "path", 893);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](894, "path", 894);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](895, "path", 895);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](896, "path", 896);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](897, "path", 897);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](898, "path", 898);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](899, "path", 899);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](900, "path", 900);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](901, "path", 901);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](902, "path", 902);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](903, "path", 903);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "path", 904);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](905, "path", 905);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](906, "path", 906);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](907, "path", 907);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](908, "path", 908);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "path", 909);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](910, "path", 910);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](911, "polygon", 911);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](912, "path", 912);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](913, "polygon", 913);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](914, "polygon", 914);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](915, "path", 915);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](916, "polygon", 916);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](917, "polygon", 917);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "polygon", 918);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](919, "polygon", 919);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](920, "polygon", 920);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](921, "polygon", 921);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](922, "path", 922);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](923, "path", 923);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "path", 924);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](925, "path", 925);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](926, "path", 926);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](927, "path", 927);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](928, "path", 928);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](929, "path", 929);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](930, "path", 930);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](931, "path", 931);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](932, "path", 932);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](933, "path", 933);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](934, "path", 934);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](935, "polygon", 935);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](936, "polygon", 936);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](937, "path", 937);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](938, "polygon", 938);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](939, "polygon", 939);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](940, "path", 940);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](941, "polygon", 941);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](942, "polygon", 942);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](943, "polygon", 943);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](944, "polygon", 944);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](945, "path", 945);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](946, "path", 946);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](947, "path", 947);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](948, "path", 948);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](949, "path", 949);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](950, "path", 950);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](951, "path", 951);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](952, "path", 952);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](953, "path", 953);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](954, "path", 954);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](955, "path", 955);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](956, "path", 956);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](957, "path", 957);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](958, "path", 958);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](959, "path", 959);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](960, "path", 960);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](961, "path", 961);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](962, "path", 962);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](963, "path", 963);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](964, "path", 964);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](965, "path", 965);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](966, "path", 966);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](967, "path", 967);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](968, "path", 968);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](969, "path", 969);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](970, "path", 970);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](971, "path", 971);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](972, "path", 972);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](973, "path", 973);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "path", 974);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](975, "path", 975);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](976, "path", 976);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](977, "path", 977);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "path", 978);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](979, "path", 979);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](980, "path", 980);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](981, "path", 981);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](982, "path", 982);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](983, "path", 983);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](984, "path", 984);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](985, "path", 985);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](986, "path", 986);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](987, "path", 987);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](988, "path", 988);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](989, "path", 989);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](990, "path", 990);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](991, "path", 991);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "path", 992);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](993, "path", 993);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](994, "path", 994);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](995, "path", 995);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](996, "path", 996);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](997, "path", 997);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](998, "path", 998);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](999, "path", 999);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1000, "path", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1001, "path", 1001);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1002, "path", 1002);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1003, "path", 1003);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1004, "path", 1004);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1005, "path", 1005);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1006, "path", 1006);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1007, "path", 1007);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1008, "path", 1008);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1009, "path", 1009);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1010, "polygon", 1010);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1011, "path", 1011);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1012, "path", 1012);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1013, "polygon", 1013);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1014, "polygon", 1014);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1015, "polygon", 1015);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1016, "polygon", 1016);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1017, "polygon", 1017);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1018, "polygon", 1018);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1019, "path", 1019);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1020, "path", 1020);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1021, "polygon", 1021);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1022, "polygon", 1022);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1023, "polygon", 1023);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1024, "polygon", 1024);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1025, "polygon", 1025);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1026, "polygon", 1026);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1027, "polygon", 1027);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1028, "polygon", 1028);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1029, "path", 1029);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1030, "polygon", 1030);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1031, "polygon", 1031);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1032, "polygon", 1032);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1033, "polygon", 1033);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1034, "polygon", 1034);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1035, "polygon", 1035);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1036, "polygon", 1036);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1037, "polygon", 1037);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1038, "polygon", 1038);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1039, "polygon", 1039);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1040, "polygon", 1040);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1041, "polygon", 1041);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1042, "polygon", 1042);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1043, "polygon", 1043);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1044, "polygon", 1044);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1045, "polygon", 1045);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1046, "path", 1046);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1047, "polygon", 1047);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1048, "polygon", 1048);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1049, "polygon", 1049);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1050, "polygon", 1050);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1051, "path", 1051);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1052, "polygon", 1052);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1053, "polygon", 1053);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1054, "polygon", 1054);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1055, "polygon", 1055);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1056, "polygon", 1056);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1057, "path", 1057);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1058, "path", 1058);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1059, "path", 1059);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1060, "path", 1060);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1061, "path", 1061);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1062, "path", 1062);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1063, "path", 1063);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1064, "path", 1064);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1065, "path", 1065);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1066, "path", 1066);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1067, "path", 1067);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "path", 1068);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1069, "path", 1069);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1070, "path", 1070);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1071, "path", 1071);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1072, "path", 1072);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1073, "path", 1073);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1074, "path", 1074);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1075, "path", 1075);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1076, "path", 1076);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1077, "path", 1077);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1078, "path", 1078);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1079, "path", 1079);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1080, "path", 1080);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1081, "path", 1081);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1082, "path", 1082);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1083, "path", 1083);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1084, "path", 1084);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1085, "path", 1085);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1086, "polygon", 1086);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1087, "path", 1087);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1088, "polygon", 1088);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1089, "path", 1089);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1090, "path", 1090);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1091, "path", 1091);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1092, "path", 1092);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1093, "path", 1093);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "path", 1094);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1095, "path", 1095);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1096, "path", 1096);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1097, "path", 1097);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1098, "path", 1098);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1099, "path", 1099);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "polygon", 1100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1101, "path", 1101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "path", 1102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1103, "path", 1103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1104, "path", 1104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1105, "path", 1105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1106, "path", 1106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1107, "polygon", 1107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1108, "polygon", 1108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1109, "polygon", 1109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1110, "polygon", 1110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1111, "polygon", 1111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1112, "polygon", 1112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1113, "polygon", 1113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1114, "polygon", 1114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1115, "polygon", 1115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1116, "polygon", 1116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "polygon", 1117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1118, "polygon", 1118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1119, "polygon", 1119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1120, "polygon", 1120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1121, "polygon", 1121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1122, "polygon", 1122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1123, "polygon", 1123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1124, "polygon", 1124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1125, "polygon", 1125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1126, "rect", 1126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1127, "polygon", 1127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1128, "polygon", 1128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1129, "polygon", 1129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1130, "polygon", 1130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1131, "path", 1131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1132, "polygon", 1132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1133, "polygon", 1133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1134, "polygon", 1134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1135, "polygon", 1135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "polygon", 1136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1137, "polygon", 1137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1138, "polygon", 1138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1139, "polygon", 1139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1140, "polygon", 1140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1141, "polygon", 1141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1142, "polygon", 1142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1143, "polygon", 1143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1144, "polygon", 1144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1145, "polygon", 1145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1146, "polygon", 1146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "polygon", 1147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1148, "polygon", 1148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1149, "polygon", 1149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1150, "polygon", 1150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1151, "polygon", 1151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1152, "polygon", 1152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1153, "polygon", 1153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1154, "polygon", 1154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1155, "polygon", 1155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1156, "path", 1156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1157, "polygon", 1157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1158, "polygon", 1158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1159, "path", 1159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1160, "polygon", 1160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1161, "polygon", 1161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1162, "polygon", 1162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1163, "polygon", 1163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1164, "polygon", 1164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "polygon", 1165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1166, "polygon", 1166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1167, "polygon", 1167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1168, "path", 1168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1169, "polygon", 1169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1170, "polygon", 1170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1171, "polygon", 1171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1172, "path", 1172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1173, "polygon", 1173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1174, "polygon", 1174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1175, "polygon", 1175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1176, "polygon", 1176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1177, "polygon", 1177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1178, "polygon", 1178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "polygon", 1179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1180, "polygon", 1180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "path", 1181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1182, "polygon", 1182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1183, "polygon", 1183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1184, "polygon", 1184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1185, "polygon", 1185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1186, "polygon", 1186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1187, "polygon", 1187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1188, "path", 1188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1189, "polygon", 1189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1190, "polygon", 1190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "polygon", 1191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1192, "polygon", 1192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1193, "polygon", 1193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1194, "polygon", 1194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1195, "polygon", 1195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1196, "path", 1196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "polygon", 1197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1198, "polygon", 1198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1199, "polygon", 1199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1200, "polygon", 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1201, "polygon", 1201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1202, "path", 1202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1203, "polygon", 1203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1204, "polygon", 1204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1205, "polygon", 1205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1206, "path", 1206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1207, "polygon", 1207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1208, "polygon", 1208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1209, "polygon", 1209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1210, "polygon", 1210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1211, "polygon", 1211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1212, "polygon", 1212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1213, "polygon", 1213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1214, "polygon", 1214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1215, "polygon", 1215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1216, "polygon", 1216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1217, "polygon", 1217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1218, "polygon", 1218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1219, "polygon", 1219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1220, "polygon", 1220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1221, "polygon", 1221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1222, "polygon", 1222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1223, "polygon", 1223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1224, "polygon", 1224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1225, "polygon", 1225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1226, "polygon", 1226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1227, "polygon", 1227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1228, "polygon", 1228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1229, "path", 1229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1230, "polygon", 1230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1231, "path", 1231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1232, "polygon", 1232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1233, "polygon", 1233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1234, "polygon", 1234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1235, "polygon", 1235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1236, "polygon", 1236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1237, "polygon", 1237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1238, "polygon", 1238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1239, "polygon", 1239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1240, "polygon", 1240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1241, "polygon", 1241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1242, "polygon", 1242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1243, "polygon", 1243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1244, "polygon", 1244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1245, "polygon", 1245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1246, "polygon", 1246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1247, "polygon", 1247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1248, "polygon", 1248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1249, "polygon", 1249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1250, "polygon", 1250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1251, "polygon", 1251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1252, "polygon", 1252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1253, "polygon", 1253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1254, "path", 1254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1255, "polygon", 1255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1256, "path", 1256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1257, "polygon", 1257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1258, "polygon", 1258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1259, "polygon", 1259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1260, "polygon", 1260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1261, "path", 1261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1262, "polygon", 1262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1263, "polygon", 1263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1264, "polygon", 1264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1265, "polygon", 1265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1266, "polygon", 1266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1267, "path", 1267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1268, "polygon", 1268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1269, "polygon", 1269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1270, "polygon", 1270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1271, "polygon", 1271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1272, "polygon", 1272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1273, "polygon", 1273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1274, "polygon", 1274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1275, "polygon", 1275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1276, "polygon", 1276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1277, "polygon", 1277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1278, "polygon", 1278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1279, "polygon", 1279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1280, "polygon", 1280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1281, "path", 1281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1282, "polygon", 1282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1283, "polygon", 1283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1284, "path", 1284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1285, "polygon", 1285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1286, "polygon", 1286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1287, "polygon", 1287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1288, "polygon", 1288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1289, "polygon", 1289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1290, "polygon", 1290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1291, "polygon", 1291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1292, "polygon", 1292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1293, "polygon", 1293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1294, "polygon", 1294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1295, "polygon", 1295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1296, "polygon", 1296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1297, "polygon", 1297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1298, "polygon", 1298);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1299, "polygon", 1299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1300, "polygon", 1300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1301, "polygon", 1301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1302, "polygon", 1302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1303, "polygon", 1303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1304, "polygon", 1304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1305, "polygon", 1305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1306, "path", 1306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1307, "polygon", 1307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1308, "polygon", 1308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1309, "path", 1309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1310, "polygon", 1310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1311, "polygon", 1311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1312, "polygon", 1312);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1313, "polygon", 1313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1314, "polygon", 1314);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1315, "polygon", 1315);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1316, "polygon", 1316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1317, "polygon", 1317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1318, "polygon", 1318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1319, "polygon", 1319);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1320, "polygon", 1320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1321, "polygon", 1321);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1322, "polygon", 1322);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1323, "polygon", 1323);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1324, "polygon", 1324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1325, "polygon", 1325);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1326, "path", 1326);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1327, "path", 1327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1328, "polygon", 1328);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1329, "polygon", 1329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1330, "polygon", 1330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "path", 1331);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1332, "polygon", 1332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1333, "polygon", 1333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1334, "path", 1334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1335, "polygon", 1335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1336, "polygon", 1336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1337, "polygon", 1337);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1338, "polygon", 1338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1339, "polygon", 1339);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1340, "polygon", 1340);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1341, "polygon", 1341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1342, "polygon", 1342);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1343, "path", 1343);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1344, "polygon", 1344);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1345, "polygon", 1345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1346, "polygon", 1346);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1347, "polygon", 1347);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1348, "path", 1348);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1349, "polygon", 1349);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1350, "polygon", 1350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1351, "polygon", 1351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1352, "polygon", 1352);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1353, "polygon", 1353);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1354, "polygon", 1354);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1355, "polygon", 1355);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1356, "g", 1356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1358, "path", 1357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1359, "path", 1358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1360, "path", 1359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1361, "path", 1360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1362, "path", 1361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1364, "path", 1362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1365, "path", 1363);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1368, "path", 1364);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1369, "path", 1365);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1371, "circle", 1366);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1372, "circle", 1367);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1373, "circle", 1368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1374, "path", 1369);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1375, "path", 1370);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1376, "circle", 1371);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1377, "circle", 1372);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1378, "circle", 1373);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1379, "path", 1374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "g", 1375);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1381, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1382, "path", 1376);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1383, "path", 1377);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1384, "path", 1378);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1385, "path", 1379);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1386, "path", 1380);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1387, "path", 1381);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1388, "path", 1382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1391, "path", 1383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1392, "path", 1384);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1394, "circle", 1385);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1395, "path", 1386);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1396, "circle", 1387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1397, "circle", 1388);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1398, "circle", 1389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1399, "path", 1390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1400, "circle", 1391);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1401, "circle", 1392);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1402, "path", 1393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1403, "g", 1394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "g", 1395);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1405, "path", 1396);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "g", 1397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1407, "path", 1398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1408, "g", 1399);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1409, "path", 1400);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "g", 1401);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1411, "rect", 1402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1412, "rect", 1403);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1413, "rect", 1404);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1414, "rect", 1405);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1416, "path", 1406);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1417, "path", 1407);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1418, "path", 1408);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1419, "path", 1409);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1420, "path", 1410);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1421, "polygon", 1411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "g", 1412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1423, "path", 1413);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1424, "path", 1414);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1425, "path", 1415);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1426, "path", 1416);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1427, "path", 1417);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "g", 1418);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1429, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1431, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1432, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1433, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1434, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "div", 1419);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1436, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Pathway+Gothic+One);\n  \n  body[_ngcontent-%COMP%] {\n    background: -webkit-radial-gradient(center, ellipse cover, #fff 0%, #f2efd9 100%);\n  }\n  @-webkit-keyframes rotate-right {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes rotate-left {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(-360deg);\n    }\n  }\n  @-webkit-keyframes hover {\n    0% {\n      -webkit-transform: translateY(0%);\n    }\n    50% {\n      -webkit-transform: translateY(5%);\n    }\n    100% {\n      -webkit-transform: translateY(0%);\n    }\n  }\n  @-webkit-keyframes pull {\n    0% {\n      -webkit-transform: scaleY(1);\n    }\n    40% {\n      -webkit-transform: scaleY(1.01);\n    }\n    60% {\n      -webkit-transform: scaleY(0.99);\n    }\n    80% {\n      -webkit-transform: scaleY(1.01);\n    }\n    100% {\n      -webkit-transform: scaleY(0.99);\n    }\n    80% {\n      -webkit-transform: scaleY(1.01);\n    }\n    100% {\n      -webkit-transform: scaleY(1);\n    }\n  }\n  #airplane2[_ngcontent-%COMP%], #airplane1[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-right 60s linear 0s infinite;\n  }\n  #countryObjects[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-right 240s linear 0s infinite;\n  }\n  #floatingGlobe[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-left 360s linear 0s infinite;\n  }\n  #globe[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: hover 0s linear 0s infinite;\n  }\n  #windmill[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 331px 201px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-right 2s linear 0s infinite;\n  }\n  #cloud1[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: hover 3s linear 1s infinite;\n  }\n  #cloud2[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: hover 3s linear 2s infinite;\n  }\n  #cloud3[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: hover 3s linear 3s infinite;\n  }\n  #circle1[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-right 12s linear 0s infinite;\n  }\n  #circle2[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-left 24s linear 0s infinite;\n  }\n  #circle3[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-right 12s linear 0s infinite;\n  }\n  #circle4[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-left 24s linear 0s infinite;\n  }\n  #circle5[_ngcontent-%COMP%] {\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transform-origin: 200px 200px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-animation: rotate-right 12s linear 0s infinite;\n  }\n/*# sourceMappingURL=home.component.css.map */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'home.component.html'
            }]
    }], function () { return [{ type: _core_log_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"] }]; }, null); })();


/***/ }),

/***/ "EcI+":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "ryO2");




class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    /** Obrigatoriamente preciso retornar algo como : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree **/
    canActivate(route, state) {
        if (this.userService.isLogged()) {
            this.router.navigate(['user', this.userService.getUserName()], {
            /** Por algum motivo deu loop infinito **/
            // queryParams:{
            //   /** Aqui pegamos a última url para redirecionar automaticamente, caso o usuário não estiver logado e tentar acessar algum local **/
            //   /** Nota: precisamos alterar no component (signin) **/
            //   fromUrl:state.url
            // }
            });
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "IfHE":
/*!**************************************************************!*\
  !*** ./src/app/shared/validators/fields-signup.validator.ts ***!
  \**************************************************************/
/*! exports provided: fieldsSignupValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsSignupValidator", function() { return fieldsSignupValidator; });
function fieldsSignupValidator(control) {
    if (!control.value.length) {
        return { validadorPersonalizado: true };
    }
    return null;
}


/***/ }),

/***/ "Q3GV":
/*!*****************************************************************!*\
  !*** ./src/app/home/signup/user-not-taken.validator.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserNotTakenValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotTakenValidatorService", function() { return UserNotTakenValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.service */ "STsO");




class UserNotTakenValidatorService {
    constructor(signUpService) {
        this.signUpService = signUpService;
    }
    checkUserNameTaken() {
        return (control) => {
            return control
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(userName => this.signUpService.checkUserNameTaken(userName)))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ExisteOsuario => ExisteOsuario ? { usuarioJaCadastrado: true } : null))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        };
    }
    checkUserEmailTaken() {
        return (control) => {
            return control
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(Emai => this.signUpService.checkUserEmailTaken(Emai)))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ExisteOsuario => ExisteOsuario ? { usuarioJaCadastrado: true } : null))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        };
    }
}
UserNotTakenValidatorService.ɵfac = function UserNotTakenValidatorService_Factory(t) { return new (t || UserNotTakenValidatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"])); };
UserNotTakenValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserNotTakenValidatorService, factory: UserNotTakenValidatorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNotTakenValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"] }]; }, null); })();


/***/ }),

/***/ "QynK":
/*!*********************************************************************!*\
  !*** ./src/app/core/platform-detector/platform-detector.service.ts ***!
  \*********************************************************************/
/*! exports provided: PlatformDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetectorService", function() { return PlatformDetectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * PLATFORM_ID = Token para injetar um serviço específico
 * **/



class PlatformDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * Retorna se o App está sendo executado em um Browser
     **/
    isPlatformBrowser() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
    }
}
PlatformDetectorService.ɵfac = function PlatformDetectorService_Factory(t) { return new (t || PlatformDetectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
PlatformDetectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlatformDetectorService, factory: PlatformDetectorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformDetectorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "RKBM":
/*!*******************************************************************!*\
  !*** ./src/app/home/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_ux_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ux/animations */ "Yubz");
/* harmony import */ var _shared_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/spinner/spinner.service */ "UVPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/auth/auth.service */ "Vurf");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/user/user.service */ "ryO2");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert.service */ "/4oc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/vmessage/vmessage.component */ "u/iR");















function ForgotPasswordComponent_app_vmessage_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 11);
} }
function ForgotPasswordComponent_app_vmessage_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r3.message);
} }
class ForgotPasswordComponent {
    constructor(spinnerService, activatedRoute, formBuilder, authService, router, userService, alertService) {
        this.spinnerService = spinnerService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.isSpinnerVisibile$ = this.spinnerService.isNavigationPending$;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            userNameEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    save() {
        const userNameEmail = this.forgotPasswordForm.get('userNameEmail').value;
        if (!this.forgotPasswordForm.invalid) {
            this.authService
                .forgoutPassword(userNameEmail)
                .subscribe(success => {
                this.message = '';
                this.alertService.success(success.body);
                this.forgotPasswordForm.reset();
            }, error => {
                this.message = error.body;
                this.forgotPasswordForm.reset();
            });
        }
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["ng-component"]], decls: 16, vars: 4, consts: [[1, "text-center", "mt-lg-5", "font-weight-bold", "pb-2", "pt-2"], [1, "form", "mt-lg-5", "p-5", 3, "formGroup", "submit"], ["form", "ngForm"], [1, "form-group"], [1, "pb-2", "pt-2"], [1, "w-100"], ["formControlName", "userNameEmail", "matInput", "", "type", "text"], ["userNameEmailInput", ""], ["text", "Nome de usu\u00E1rio/E-mail \u00E9 obrigat\u00F3rio!", 4, "ngIf"], [3, "text", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", 1, "w-100", "bg-dark", "text-white", 3, "disabled"], ["text", "Nome de usu\u00E1rio/E-mail \u00E9 obrigat\u00F3rio!"], [3, "text"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Relembrar senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_Template_form_submit_2_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Insira o E-mail que voc\u00EA usou para criar a conta ou seu nome de usu\u00E1rio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usu\u00E1rio / E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordComponent_app_vmessage_12_Template, 1, 0, "app-vmessage", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_app_vmessage_13_Template, 1, 1, "app-vmessage", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        var tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.forgotPasswordForm.get("userName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.forgotPasswordForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _shared_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_12__["VmessageComponent"]], styles: [".form-general[_ngcontent-%COMP%] {\n  width: 500px !important;\n}\n\n@media only screen and (min-width: 600px) {\n  .form-general[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7RUFFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ2VuZXJhbHtcclxuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZvcm0tZ2VuZXJhbHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            _core_ux_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss'],
                animations: [
                    _core_ux_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
                ]
            }]
    }], function () { return [{ type: _shared_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "STsO":
/*!***********************************************!*\
  !*** ./src/app/home/signup/signup.service.ts ***!
  \***********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const API = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl;
class SignupService {
    constructor(httpCliente) {
        this.httpCliente = httpCliente;
    }
    checkUserNameTaken(userName) {
        return this.httpCliente.get(API + 'valid_user/' + userName);
    }
    checkUserEmailTaken(userEmail) {
        return this.httpCliente.post(API + 'valid_email/', { userEmail });
    }
    newUser(newUser) {
        return this.httpCliente.post(API + 'signup', newUser);
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "zPIe");
/* harmony import */ var _shared_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/vmessage/vmessage.module */ "6Eu0");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "22EC");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.routing.module */ "qwTd");
/* harmony import */ var _signup_signup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.service */ "STsO");
/* harmony import */ var _core_ux_ux_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/ux/ux-module */ "2Ny7");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "RKBM");














class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_signup_signup_service__WEBPACK_IMPORTED_MODULE_9__["SignupService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_5__["VmessageModule"],
            _core_ux_ux_module__WEBPACK_IMPORTED_MODULE_10__["UxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
        _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _shared_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_5__["VmessageModule"],
        _core_ux_ux_module__WEBPACK_IMPORTED_MODULE_10__["UxModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
                    _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _shared_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_5__["VmessageModule"],
                    _core_ux_ux_module__WEBPACK_IMPORTED_MODULE_10__["UxModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"]
                ],
                providers: [_signup_signup_service__WEBPACK_IMPORTED_MODULE_9__["SignupService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fPlr":
/*!*****************************************!*\
  !*** ./src/app/core/log/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const API = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl;
class LogService {
    constructor(http) {
        this.http = http;
    }
    logHome() {
        this.http.get(API + 'log_home').subscribe();
    }
}
LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qwTd":
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth/auth.guard */ "EcI+");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "zPIe");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "22EC");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "RKBM");
/** System */



/** Components */






/** Resolvers */
const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: '',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    title: 'Sign In'
                }
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                data: {
                    title: 'Sign Up'
                }
            },
            {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                data: {
                    title: 'Forgot password'
                }
            },
        ]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uABi":
/*!**************************************************************!*\
  !*** ./src/app/shared/validators/fields-signin.validator.ts ***!
  \**************************************************************/
/*! exports provided: userNamePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userNamePassword", function() { return userNamePassword; });
const userNamePassword = (formgroup) => {
    const userName = formgroup.get('userName').value;
    const password = formgroup.get('password').value;
    return userName !== password
        ? null
        : { userNamePassword: true };
};


/***/ }),

/***/ "zPIe":
/*!*************************************************!*\
  !*** ./src/app/home/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "Vurf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/platform-detector/platform-detector.service */ "QynK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/vmessage/vmessage.component */ "u/iR");












const _c0 = ["userNameInput"];
function SignInComponent_app_vmessage_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 14);
} }
function SignInComponent_app_vmessage_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 15);
} }
function SignInComponent_app_vmessage_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vmessage", 16);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r4.authInvalid);
} }
const _c1 = function () { return ["forgot-password"]; };
const _c2 = function () { return ["signup"]; };
class SignInComponent {
    constructor(formBuilder, authService, router, platformDetectionService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.platformDetectionService = platformDetectionService;
        this.blockSubmited = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.authService.stopRefreshTokenTimer();
    }
    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.blockSubmited = true;
        if (this.loginForm.valid && !this.loginForm.pending)
            this.authService.authenticate(userName, password)
                .subscribe((res) => {
                var _a;
                this.authInvalid = '';
                const verification = (_a = res.body) === null || _a === void 0 ? void 0 : _a.user_code_verification;
                if (verification) {
                    this.router.navigate(['confirmation', userName]);
                }
                else {
                    this.router.navigate(['timeline', userName]);
                }
                this.authInvalid = res.body;
                this.blockSubmited = false;
                this.platformDetectionService.isPlatformBrowser()
                    && this.userNameInput.nativeElement.focus();
            }, error => {
                this.blockSubmited = false;
                this.authInvalid = 'Usuário e/ou senha incorreto(s)';
            });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_4__["PlatformDetectorService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["ng-component"]], viewQuery: function SignInComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userNameInput = _t.first);
    } }, decls: 27, vars: 9, consts: [[1, "text-center", "mt-lg-5", "font-weight-bold"], [1, "form", "mt-lg-5", 3, "formGroup", "submit"], ["form", "ngForm"], [1, "form-group"], [1, "w-100"], ["formControlName", "userName", "matInput", "", "type", "text"], ["userNameInput", ""], ["text", "Nome de usu\u00E1rio \u00E9 obrigat\u00F3rio!", 4, "ngIf"], ["formControlName", "password", "matInput", "", "type", "password"], ["text", "Senha \u00E9 obrigat\u00F3ria ", 4, "ngIf"], [3, "text", 4, "ngIf"], [1, "ml-2", 3, "routerLink"], ["mat-raised-button", "", "type", "submit", 1, "w-100", "bg-dark", "text-white", 3, "disabled"], [1, "p-5"], ["text", "Nome de usu\u00E1rio \u00E9 obrigat\u00F3rio!"], ["text", "Senha \u00E9 obrigat\u00F3ria "], [3, "text"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_2_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignInComponent_app_vmessage_10_Template, 1, 0, "app-vmessage", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignInComponent_app_vmessage_16_Template, 1, 0, "app-vmessage", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignInComponent_app_vmessage_17_Template, 1, 1, "app-vmessage", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Esqueceu a senha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "N\u00E3o \u00E9 registrado?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Registre-se agora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("userName").errors == null ? null : ctx.loginForm.get("userName").errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("password").errors == null ? null : ctx.loginForm.get("password").errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authInvalid == null ? null : ctx.authInvalid.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.blockSubmited);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _shared_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_9__["VmessageComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './signin.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_4__["PlatformDetectorService"] }]; }, { userNameInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['userNameInput']
        }] }); })();


/***/ })

};;
//# sourceMappingURL=src-app-home-home-module.js.map