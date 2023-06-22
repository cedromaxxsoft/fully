import {Component, OnInit} from '@angular/core';
import {PaginationService, User} from "../pagination.service";
import {IInfiniteScrollEvent} from "ngx-infinite-scroll";

@Component({
  selector: 'app-modo-scroll',
  templateUrl: './modo-scroll.component.html',
  styleUrls: ['./modo-scroll.component.scss']
})
export class ModoScrollComponent implements OnInit {

  constructor(private service: PaginationService) {
  }

  users: User[] = [];
  fullUsers: User[] = [];


  ngOnInit(): void {

    this.service.getUsers().subscribe(
      res => {
        const initialUsers = res.slice(0, 20); // Peguando os primeiros 20 usuários da resposta
        this.users = initialUsers;
        this.fullUsers = res
        console.log("todos os users", this.fullUsers)
      },
      error => {
        console.log(error);
      }
    );
  }

  onScroll(e: IInfiniteScrollEvent) {
    if (this.users.length >= 100) {
      console.log("Não existem mais usuários");
      return;
    }

    this.service.getUsers().subscribe(
      res => {
        const remainingUsers = res.slice(20); // Pegue os usuários restantes da resposta (excluindo os primeiros 20)
        this.users = [...this.users, ...remainingUsers];
      },
      error => {
        console.log(error);
      }
    );
  }

  // ngOnInit(): void {
  //   this.service.getUsers().subscribe(
  //     res => {
  //       this.user = res
  //       console.log(res)
  //     }, error => {
  //       console.log(error.error)
  //     }
  //   )
  // }

}
