import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-lua-orbita-terra-com-uma-velocidade-tangencial-trajetoria-aproximadamente-3700-kmh-que-mantem-em-orbita-574dce01293a7.jpg'
  contentTitle:string = 'TITULO DA NOTICIA'
  contentDescription:string = 'descrição'

  constructor(
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get('id')))
  }
}
