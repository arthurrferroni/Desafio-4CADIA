import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  availableBalance:number = 0;
  bankList:any[];

  data: any;

  chartOptions: any;

  constructor(private bankService:BankService) { }

  ngOnInit() {
    this.bankService.getAllBanks().subscribe((result:any)=>{
      console.dir(result);
      this.bankList = result;
    });

    this.data = {
      labels: ['Score'],
      datasets: [
          {
              data: [60,40],
              backgroundColor: [
                  "#FF6384",
                  "white"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
  };
  
  }

}
