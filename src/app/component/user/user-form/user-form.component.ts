import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../models/user.interface';
import { UuidService } from 'src/app/services/uuid.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  isInEdit:boolean=false;
  userId!:string
  userForm!:FormGroup
  editUser!:Iuser
  constructor(
    private _routes:ActivatedRoute,
    private _uuidservice:UuidService,
    private _userService:UsersService,
    private _router:Router
  ) { }

  ngOnInit(): void {

     this.userCreateForm(),
     this.userIdget()
  

  }

   userCreateForm(){
    this.userForm=new FormGroup({
       userName:new FormControl(null, [Validators.required]),
       userRole:new FormControl(null, [Validators.required]),
       userdescription:new FormControl(null, [Validators.required]),
       userimg:new FormControl(null, [Validators.required]),
    })
  }

  userIdget(){
    this.userId=this._routes.snapshot.params['userId'];

     if(this.userId){
      this.isInEdit=true
     }

      this._userService.fetchAlluserDetails(this.userId)
        .subscribe({
          next:data=>{
            this.editUser=data;
            this.userForm.patchValue(this.editUser)
          },
          error:err=>console.log(err)
        })
  }

 

  onuserAdd(){
    if(this.userForm.valid){
      let obj:Iuser={...this.userForm.value, userId:this._uuidservice.Uuid()}
       console.log(obj)
       this._userService.addUser(obj)
       this._router.navigate(['/user'])
       this.userForm.reset()
       
    }
   
  }

  onUpdate(){
    if(this.userForm.valid){
      let update_user={...this.userForm.value, userId:this.userId}
      console.log(update_user);
      this._userService.updateUser(update_user);
      this.userForm.reset();
      this._router.navigate(['user'])
    }
  }

}
function addUser(obj: Iuser) {
  throw new Error('Function not implemented.');
}

