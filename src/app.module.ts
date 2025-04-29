import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CharactersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
