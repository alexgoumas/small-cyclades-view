import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signUp/signUp.component";
import { ThankYouComponent } from "./thankYou/thankYou.component";

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        ThankYouComponent
    ]
})
export class SessionModule { }