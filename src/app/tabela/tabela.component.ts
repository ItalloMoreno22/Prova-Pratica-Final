import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor( private userService: UserService){ }

  view: Todo[] | any;

  ngOnInit(): void  { this.viewUser();
  }


  viewUser(){
    this.userService.GetUser().subscribe(user => this.view = user)
  }


}
