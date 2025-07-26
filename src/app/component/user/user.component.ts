import { Component, OnInit } from '@angular/core';
import { Iuser } from '../models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   userArray:Array<Iuser>=[]
  constructor(

    private _userService:UsersService
  ) { }

  ngOnInit(): void {
    this.fetcharr()
  }

  fetcharr(){
      this._userService.fetchAlluser()
      .subscribe({
        next:(data)=>{
           this.userArray=data
        },
        error:err=>{
           console.log(err)
        }
      })
  }

}
