import { Component, OnDestroy, OnInit } from '@angular/core';
import { IndianCityService } from 'src/app/shared/services/indian-city.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {

  state_list: string[];
  city_list: string[] = [];

  constructor(private indianCityService: IndianCityService) {
    this.state_list = indianCityService.get_state();
   }

  ngOnInit(): void {
  }

  onStateChange(event:any){
    console.log(event.target.value)
    if(event.target.value === "Select a state"){
      this.city_list = [];
      return;
    }
    let index = this.state_list.findIndex(state => state === event.target.value);
    this.city_list = this.indianCityService.get_city(index);
  }

  onCityChange(event:any){
    console.log(event.target.value)
    if(event.target.value === "Select a city"){
      this.city_list = [];
      return;
    }
    //Customize according to use

  }

  ngOnDestroy(){
    this.state_list = [];
    this.city_list = [];
  }

}
