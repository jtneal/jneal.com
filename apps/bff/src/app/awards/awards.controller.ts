import { Controller, Get } from '@nestjs/common';

import { AwardsService } from './awards.service';

@Controller('awards')
export class AwardsController {
  public constructor(private readonly awards: AwardsService) {}

  @Get()
  get() {
    return this.awards.get();
  }
}
