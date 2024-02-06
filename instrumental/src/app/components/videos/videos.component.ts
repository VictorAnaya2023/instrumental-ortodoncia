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
        "id": 1,
        "name": "Pinza Corte Distal",
        "description": "Pinza Corte Discal",
        "file_name": "/assets/video/pinza_corte_distal.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 1,
        "deleted_at": null,
        "created_at": "2024-02-06T10:34:08.000000Z",
        "updated_at": null
    },
    {
        "id": 2,
        "name": "Pinza de Step",
        "description": "Pinza de Step",
        "file_name": "/assets/video/pinza_de_step.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 1,
        "deleted_at": null,
        "created_at": "2024-02-06T00:00:00.000000Z",
        "updated_at": null
    },
    {
        "id": 3,
        "name": "Pinza Quita Bracket",
        "description": "Pinza Quita Bracket",
        "file_name": "/assets/video/pinza_quita_bracket.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 1,
        "deleted_at": null,
        "created_at": "2024-02-06T00:00:00.000000Z",
        "updated_at": null
    },
    {
        "id": 4,
        "name": "Pinza Z Bend",
        "description": "Pinza Z Bend",
        "file_name": "/assets/video/pinza_z_bend.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 1,
        "deleted_at": null,
        "created_at": "2024-02-06T00:00:00.000000Z",
        "updated_at": null
    },
    {
        "id": 5,
        "name": "Pinza dos Picos de Laboratorio",
        "description": "Pinza dos Picos de Laboratorio",
        "file_name": "/assets/video/pinza_dos_picos_laboratorio.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 1,
        "deleted_at": null,
        "created_at": "2024-02-06T00:00:00.000000Z",
        "updated_at": null
    },
    {
        "id": 6,
        "name": "Pinza de How",
        "description": "Pinza de How",
        "file_name": "/assets/video/pinza_how.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 1,
        "deleted_at": null,
        "created_at": "2024-02-06T00:00:00.000000Z",
        "updated_at": null
    },
    {
        "id": 7,
        "name": "Pinza Nance",
        "description": "Pinza Nance",
        "file_name": "/assets/video/pinza_nance.mp4",
        "mime": "mp4",
        "file_size": 18,
        "user_id": 1,
        "category_id": 2,
        "deleted_at": null,
        "created_at": "2024-02-06T00:00:00.000000Z",
        "updated_at": null
    }
]

}
