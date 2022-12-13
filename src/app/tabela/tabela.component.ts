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

  user?: Todo[] | any

  toDisplay = false;



  ngOnInit(): void {
  }


  showUser(){
    this.toDisplay = !this.toDisplay;
    this.userService.GetUser().subscribe(user => this.user = user)
  }


}
