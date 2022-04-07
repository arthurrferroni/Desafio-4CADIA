import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  bankList:any[] = [];
  dateFrom:Date;
  dateTo:Date;
  
  constructor(private bankService:BankService) {
    this.bankService.getAllBanks().subscribe((result:any)=>{
      console.dir(result);
      this.bankList = result;
    });

   }

  ngOnInit(): void {
  }

}
