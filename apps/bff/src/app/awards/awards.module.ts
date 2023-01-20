import { Module } from '@nestjs/common';

import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';

@Module({
  imports: [],
  controllers: [AwardsController],
  providers: [AwardsService],
})
export class AwardsModule {}
