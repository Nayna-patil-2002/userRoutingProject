import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Iuser } from '../../models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-dtails',
  templateUrl: './user-dtails.component.html',
  styleUrls: ['./user-dtails.component.scss']
})
export class UserDtailsComponent implements OnInit {
  userInfo!:Iuser;
  userId!:string;
  constructor(
    private _routes:ActivatedRoute,
    private _userService: UsersService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this._routes)
    // console.log(this._routes.snapshot.params['userId'])
   this.fetchData()
  }

   fetchData(){
     this.userId=this._routes.snapshot.params['userId']
      if( this.userId){
        this._userService.fetchAlluserDetails(this.userId)
          .subscribe({
            next:data=>{
               this.userInfo=data
            },
            error:err=>{
               console.log(err)
            }
          })
      }
   }

   onRemove(){
    this._userService.removeUser(this.userInfo)
    this._router.navigate(['user'])
   }

   

}
