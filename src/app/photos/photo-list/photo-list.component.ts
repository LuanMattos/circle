import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'App';
  /** TypeScript = Quando não tipamos o dado, o mesmo retorn tipo n **/
  photos:Photo[] = [];
  filter:string = '';

  hasMore:Boolean = true;
  currentPage:number = 1;
  userName:string = '';

  /**
   * (inserido no resolver)
   * Deixaremos o construtor apenas para injeção de dependências
   **/
  constructor(
    //private photoService : PhotoService,
    private activatedRoute:ActivatedRoute,
    private photoService : PhotoService,
    private route:Router
  ) {

  }

  /**
   * (inserido no resolver)
   * E ngOnInit (Live Circle) para objetos de inicialização
   * O correto é o Angular 'Obrigao' a implementação do método, então implementamos a
   *  interface OnInit na classe (implements OnInit)
   **/

  ngOnInit():void{
    /**
     * Caso tenhar problema de clicar no voltar e não carregar o component
     * Provavelmente nas versões do Angular temos essa questão melhorada
     * de ficar escutando as rotas
     **/
    // this.activatedRoute.params.subscribe(params=>{
    //   this.userName = params.userName,
    //     this.photos = this.activatedRoute.snapshot.data['photos']
    // })
    this.userName = this.activatedRoute.snapshot.params.userName;
    /** Aqui pegamos o parâmetro da rota - (inserido no resolver)*/
    // const userName = this.activatedRoute.snapshot.params.userName;
    // this.photoService.listFromUser(userName)
    //   .subscribe(photos => this.photos = photos)

    /** Busca os dados do activateRoute, ou seja, a requisição será feita por ROTA **/
    this.photos = this.activatedRoute.snapshot.data['photos'];

  }

  load(){
    this.photoService
      .listFromUserPaginated(this.userName,this.currentPage ++)
      .subscribe(
        photos=>{
          this.filter = '';
          this.photos = this.photos.concat(photos);
          if(!photos.length) this.hasMore = false;
        }
      )
  }
}
