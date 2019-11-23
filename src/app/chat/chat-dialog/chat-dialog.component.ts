import { Component, OnInit } from '@angular/core';
import { ChatService,Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { AuthService } from '../../core/auth.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  constructor(private chat:ChatService,
    public authService: AuthService,private location : Location) { }
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
    .pipe(scan((acc, val) => acc.concat(val) ));
  }
 sendMessage(){
   this.chat.converse(this.formValue);
   this.formValue='';
 }
  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
}
