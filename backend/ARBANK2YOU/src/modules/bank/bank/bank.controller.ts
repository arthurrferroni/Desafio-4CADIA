import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankService } from './bank.service';

@ApiTags('Bank')
@Controller('bank')
export class BankController {

    constructor(private readonly bankService: BankService) {}


    @Get('listAll')
    async listAll(): Promise<any> {
        return await this.bankService.listAll();    
    }
}

