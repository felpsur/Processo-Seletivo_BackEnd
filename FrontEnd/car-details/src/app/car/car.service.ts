import { Car } from "./car";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CarService{

    retrieveAll(): Car[]{
        return veiculos;
    }
    
}

var veiculos: Car[] = [{
        id: 1,
        placa: 'adg1234',
        chassi: '12345678912345678',
        renavam: '12345678912',
        modelo: 'corsa',
        marca: 'chevrolet',
        ano: '2013',
    },
    {
        id: 2,
        placa: 'abc124',
        chassi: '12345678912345678',
        renavam: '12345678912',
        modelo: 'onix',
        marca: 'chevrolet',
        ano: '2012',
    },
    {
    id: 3,
    placa: 'agc451',
    chassi: '12345678912345678',
    renavam: '12345678912',
    modelo: 'vectra',
    marca: 'chevrolet',
    ano: '2008',
    },
    {
        id: 4,
        placa: 'tgc451',
        chassi: '12345678912345678',
        renavam: '12345678912',
        modelo: 'monza',
        marca: 'chevrolet',
        ano: '2008',
        }
]