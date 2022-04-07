import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { UserDTO } from './dto/user-dto';

@Injectable()
export class UserService {

    constructor(@Inject(PG_CONNECTION) private conn: any) {
    }

    async createUser(user:UserDTO) {
        const res = await this.conn.query(`INSERT INTO PUBLIC.BANK4ALL_USERS 
        (NAME,EMAIL,PHONE_NUMBER,ADDRESS,NATIONAL_ID,BIRTH_DATE) VALUES 
        ('${user.name}','${user.email}','${user.phone_number}','${user.address}','${user.national_id}','${user.birth_date}')`);
        
        return res.rows;
    }

    async get(email: string): Promise<UserDTO | undefined> {
        const res = await this.conn.query(`SELECT * FROM PULBIC.BANK4ALL_USERS WHERE EMAIL='${email}'`);
        
        return res.rows[0];
      }
}
