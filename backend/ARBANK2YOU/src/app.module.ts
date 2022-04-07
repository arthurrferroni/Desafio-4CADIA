import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { BankModule } from './modules/bank/bank.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    BankModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
