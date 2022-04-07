export class User {
    id?:string;
    name:string;
    email:string;
    phone_number:number;
    address:string;
    national_id:string;
    birth_date?:Date = new Date;
}