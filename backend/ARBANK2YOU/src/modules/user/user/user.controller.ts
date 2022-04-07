import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user-dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}
    
    @Post()
    async createUser(@Body() user:UserDTO) {
        return await this.userService.createUser(user);
    }


}
