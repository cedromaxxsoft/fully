import { Component, OnInit } from '@angular/core';
import { PaginationService, User } from '../pagination.service';

@Component({
  selector: 'app-modo-pagination-btn',
  templateUrl: './modo-pagination-btn.component.html',
  styleUrls: ['./modo-pagination-btn.component.scss']
})
export class ModoPaginationBtnComponent implements OnInit {

  totalItems = 0; // Variável para armazenar o número total de itens
  itemsPorPagina = 10; // Número de itens exibidos por página
  pageSizeOptions = [5, 10, 25, 100]; // Opções de tamanhos de página disponíveis
  currentPage = 1; // Página atual
  users: User[] = []; // Array de usuários

  constructor(private service: PaginationService) {}

  ngOnInit(): void {
    // Carrega os usuários no início
    this.service.getUsers().subscribe(
      res => {
        this.users = res;
        this.totalItems = this.users.length; // Atualiza o total de itens com base no tamanho do array de usuários
      },
      error => {
        console.log(error.error);
      }
    );
  }

  onPageChange(event: any): void {
    // Atualiza a página atual quando ocorre a mudança de página
    this.currentPage = event.pageIndex + 1;
    this.itemsPorPagina = event.pageSize;
  }

  getPaginatedUsers(): User[] {
    // Retorna os usuários correspondentes à página atual
    const startIndex = (this.currentPage - 1) * this.itemsPorPagina; // Índice de início da página
    const endIndex = startIndex + this.itemsPorPagina; // Índice de fim da página
    return this.users.slice(startIndex, endIndex); // Retorna uma fatia dos usuários com base nos índices
  }
}
