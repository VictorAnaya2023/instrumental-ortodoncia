import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  dummy_Data = [
    {
      "nombre": "Pinza Corte Discal",
      "video": "https://www.youtube.com/watch?v=video1",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Pinza corte discal"
    }
  ]

}
