import { Module } from '@nestjs/common';
import { PlayerModule } from './players/player.module';

@Module({
  imports: [PlayerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
