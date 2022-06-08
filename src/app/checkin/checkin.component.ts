import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {


  checkinForm = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  doCheckin(formData: FormGroup) {
    if (formData.valid) {
      this.afAuth.signInWithEmailAndPassword(formData.value.userName, formData.value.password)
        .then(loginResponse => {
          console.log(loginResponse);
          this.router.navigate(['/']);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

}
