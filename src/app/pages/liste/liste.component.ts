import { Component, OnInit } from '@angular/core';
import { UserService } from './../../swagger/services/services/user.service';
import { UserDto } from 'src/app/swagger/services/models';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  customers:Array<UserDto>=[]

  constructor(private userservice:UserService) {  }

  ngOnInit(): void {
    this.FindAllCustomer()
  }
  FindAllCustomer(){
    this.userservice.findAll().subscribe({next:(value:UserDto[]) =>{
      this.customers=value;
    }
    })
  }

}
