import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{

  filme: any={title:'Details', opening_crawl:'', image:''};

  constructor(
  	private location: Location,
  	private router: Router,
  	) { 
      if (!this.router.getCurrentNavigation().extras.state) {
        this.location.back();
      }else{
        this.filme = this.router.getCurrentNavigation().extras.state;
      }
  	}

}
