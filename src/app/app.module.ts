import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatService } from './chat/chat.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing.module';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
AngularFireModule.initializeApp(environment.firebaseConfig),
 AngularFireAuthModule,
    AngularFirestoreModule,    
BrowserModule,
   CommonModule,
    FormsModule,
       ReactiveFormsModule,
      RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [ChatService,AuthService, UserService, UserResolver, AuthGuard],
    exports: [ChatDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
