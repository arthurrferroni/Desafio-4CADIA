import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {
    @ApiProperty()
    id?:string;

    @ApiProperty()
    name:string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    phone_number:number;

    @ApiProperty()
    address:string;

    @ApiProperty()
    national_id:string;

    @ApiProperty()
    birth_date:Date;

    password:string;
}