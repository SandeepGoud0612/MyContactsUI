import { Injectable } from '@angular/core';
import { Person } from './person';

export class CommonService {

    private static commonService: CommonService = new CommonService();

    persons: Person[] = [];

    private constructor() {
        alert('hi');
     }

    public static getInstance(): CommonService{
        return this.commonService;
    }

}
