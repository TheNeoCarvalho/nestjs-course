import { Post, Body, Controller } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/createPlayer.dto';

@Controller('api/v1/player')
export class PlayerController {

    @Post()
    async createUpdatePlayer(
        @Body() createPlayerDto: CreatePlayerDto) {
        
        const { name } = createPlayerDto;

        return {"name": name};
    }
}
