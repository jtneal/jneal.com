import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { ExperienceComponent } from './experience/experience.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { component: AboutComponent, path: '' },
  { component: ExperienceComponent, path: 'experience' },
  { component: ProjectListComponent, path: 'projects' },
  { component: ProjectItemComponent, path: 'projects/:uri' },
  { component: SkillsComponent, path: 'skills' },
  { component: AwardsComponent, path: 'awards' },
  { component: NotFoundComponent, path: '404' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
})
export class AppRoutingModule { }
