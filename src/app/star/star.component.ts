import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  rating: number = 4;
  cropWidth:number = 75

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
    
      
  }

  constructor() { }

  ngOnInit() {
    this.ngOnChanges()
  }

}
