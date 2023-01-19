import { Controller, Get } from '@nestjs/common';

import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skills: SkillsService) {}

  @Get()
  get() {
    return this.skills.get();
  }
}
