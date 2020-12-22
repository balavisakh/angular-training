import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  userId:any;
  userDetails:any;
  constructor(private activatedRouter: ActivatedRoute,private userService: UserService, private fb: FormBuilder, private router:Router) { }

  updateFormGroup = this.fb.group({
    username: [''],
    email: [''],
    website: [''],
    phone: [''],
  })
  ngOnInit(): void {
    this.getUserId();
    this.getUserById(this.userId);
  }

  getUserId(): void {
    this.activatedRouter.params.subscribe((userId)=>{
      this.userId = userId.id;
      console.log("id",this.userId);
    })
  }

  getUserById(id): void {
    this.userService.getUserById(id).subscribe((posts)=>{
      this.userDetails = posts;
      console.log(this.userDetails,"post");
      this.updateFormGroup.patchValue({
        username: this.userDetails.username,
        email: this.userDetails.email,
        website: this.userDetails.website,
        phone: this.userDetails.phone
      })
    })
  }
  updateUser(): void {
    const body = this.updateFormGroup.value;
    this.userService.updateUserById(this.userId,body).subscribe(()=>{
      console.log("id",this.userId);
      console.log("body", body);
      this.router.navigate(['view-users']);
    })
  }

}
