import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { BankController } from './bank/bank.controller';
import { BankService } from './bank/bank.service';

@Module({
  controllers: [BankController],
  imports: [DbModule],
  providers: [BankService]
})
export class BankModule {}
