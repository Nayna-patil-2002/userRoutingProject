import { Injectable } from '@angular/core';
import { Iuser } from '../component/models/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   userArray:Array<Iuser>=[
    {
    userName: "sneha_patil",
    userRole: "Candidate",
    userId:"123",
    userimg: "https://randomuser.me/api/portraits/women/21.jpg",
    userdescription: "Sneha works on building responsive web UIs using Angular and SCSS. She has 3 years of experience in the industry."
  },
  {
    userName: "rahul_deshmukh",
    userRole: "Admin",
    userId:"124",
    userimg: "https://randomuser.me/api/portraits/men/31.jpg",
    userdescription: "Rahul handles API development using Node.js and MongoDB. He focuses on writing clean and scalable code."
  },
  {
    userName: "aishwarya_joshi",
   userRole: "Candidate",
    userId:"125",
    userimg: "https://randomuser.me/api/portraits/women/45.jpg",
    userdescription: "Aishwarya ensures timely delivery of all projects and coordinates between teams. She has over 7 years of project management experience."
  },
  {
    userName: "pratik_kamble",
    userRole: "Admin",
     userId:"126",
    userimg: "https://randomuser.me/api/portraits/men/28.jpg",
    userdescription: "Pratik takes care of product testing using both manual and automated techniques. He’s known for catching even the smallest bugs."
  },
  {
    userName: "komal_shinde",
   userRole: "Candidate",
    userId:"127",
    userimg: "https://randomuser.me/api/portraits/women/35.jpg",
    userdescription: "Komal designs intuitive user interfaces with a focus on user experience. She creates prototypes using Figma and Adobe XD."
  },
 
   ]
  constructor() { }
  

  fetchAlluser():Observable<Iuser[]>{
     return of(this.userArray) 
  }

  fetchAlluserDetails(id:string){
    let userObj=this.userArray.find(user=>user.userId===id)as Iuser
    return of(userObj)
  }
  
  addUser(userObj:Iuser){
    this.userArray.push(userObj)
  }

  updateUser(userObj:Iuser){
     let getIndex=this.userArray.findIndex(user=>user.userId===userObj.userId);
     this.userArray[getIndex]=userObj;
  }

  removeUser(userObj:Iuser){
       let getIndex=this.userArray.findIndex(user=>user.userId===userObj.userId);
       this.userArray.splice(getIndex, 1)
  }
}
