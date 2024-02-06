import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import {VgApiService,VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';



@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [MatCardModule,VgCoreModule,VgControlsModule,VgBufferingModule,VgOverlayPlayModule, MatGridListModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  preload:string ='auto';
  api :VgApiService = new VgApiService;

  onPlayerReady(source:VgApiService){
    this.api = source;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.autoplay.bind(this))
  }

  autoplay()
  {
    this.api.getDefaultMedia().currentTime = 0;
    //this.api.play();
  }

  dummy_Data = [
    {
      "nombre": "Pinza Corte Discal",
      "video": "https://instrumentaldeortodoncia.com/assets/video/demo.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte discal",
      "categoria":"Pinzas de laboratorio"
    },
    {
      "nombre": "Pinza de Step",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_de_step.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    },
    {
      "nombre": "Pinza Dos Picos Laboratorio",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_dos_picos_laboratorio.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    },
    {
      "nombre": "Pinza How",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_how.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    },
    {
      "nombre": "Pinza corte distal",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_corte_distal.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    },
    {
      "nombre": "Pinza Nance",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_nance.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    },    
    {
      "nombre": "Pinza Quita Bracket Recta",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_quita_bracket_recta.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    },
    {
      "nombre": "Pinza Stop Laboratorio",
      "video": "https://instrumentaldeortodoncia.com/assets/video/pinza_stop_laboratorio.mp4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte distal",
      "categoria":"Pinzas de laboratorio"
    }

  ]

}
