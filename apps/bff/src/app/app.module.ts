import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AwardsModule } from './awards/awards.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    AwardsModule,
    ExperienceModule,
    ProjectsModule,
    ServeStaticModule.forRoot({
      renderPath: /^(?!\/api).+/,
      rootPath: join(__dirname, 'public'),
    }),
    SkillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
