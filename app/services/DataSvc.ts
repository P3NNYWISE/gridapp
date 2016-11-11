'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    getData(count: number): wijmo.collections.ObservableArray {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = new wijmo.collections.ObservableArray();

            for (var i = 0; i < count; i++) {
                data.push({
                    id: Math.round(Math.random() * 5),
                    client :"String",
                    dueDate: 100,
                    date: new Date(2014, i % 12, i % 28),
                    amount: Math.random() * 5,

                    active: i % 4 == 0,
                    
                });
            }




            return data;
    }
}