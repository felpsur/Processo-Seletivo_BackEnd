import { Component, OnInit } from '@angular/core'
import { Car } from './car'
import { CarService } from './car.service';

@Component({
    templateUrl: './car-list.component.html'
})

export class CarListComponent implements OnInit {

    filteredCar: Car[] = [];

    _veiculos: Car[] = [];

    _filterBy!: string;

    constructor(private carService: CarService){

    }

    ngOnInit(): void {
        this._veiculos = this.carService.retrieveAll();
        this.filteredCar = this._veiculos;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCar = this._veiculos.filter((car: Car) =>
        car.placa.toLocaleUpperCase().indexOf(this._filterBy.toLocaleUpperCase()) > -1)
    }

    get filter(){
        return this._filterBy;
    }

}