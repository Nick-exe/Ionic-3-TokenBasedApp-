import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/loginService';
import { TokenModel } from '../../models/tokenModel';
import { LoginModel } from '../../models/loginModel';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Token: TokenModel;
  loginModel = new LoginModel();
  toastOptions: ToastOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: LoginProvider,
    private toast: ToastController) {

      this.toastOptions = {
        message : 'please verify your credentials',
        duration : 2000
      }
  }

  onLoginSuccessful(token: string){
    this.navCtrl.push("WelcomePage")
    .then(() => this.navCtrl
      .remove(0, this.navCtrl.getActive().index));
    console.log(token);
  }

  logUser(){
    this.service.login(this.loginModel.userName, this.loginModel.password, this.loginModel.grant_type)
    .subscribe(token => {this.Token = token, this.onLoginSuccessful(this.Token.access_token)},
    () => <any>this.toast.create(this.toastOptions).present());
  }

 

}
