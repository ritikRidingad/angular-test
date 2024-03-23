import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';
  imageData = [
    {
      id: '1',
      img: 'assets/img/1.png',
    },
    {
      id: '2',
      img: 'assets/img/3.png',
    },
    {
      id: '3',
      img: 'assets/img/4.png',
    },
  ];

  customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: false,
		autoplay: true,
		navSpeed: 50,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			740: {
				items: 1
			},
			940: {
				items: 1
			}
		},
		nav: false,
		autoplayTimeout: 1500
	}

  typedOptions_2: string[] = ['Auto Rickshaw', 'Cab', 'Tempo'];
}
