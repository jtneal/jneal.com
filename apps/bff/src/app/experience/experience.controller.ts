import { Controller, Get } from '@nestjs/common';

import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experience: ExperienceService) {}

  @Get()
  get() {
    return this.experience.get();
  }
}
