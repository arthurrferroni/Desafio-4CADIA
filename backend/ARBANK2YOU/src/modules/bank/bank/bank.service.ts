import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class BankService {

    constructor(@Inject(PG_CONNECTION) private conn: any) {
    }

    async listAll() {
        const res = await this.conn.query('SELECT * from bank4all_banks');
        return res.rows;
    }
}
