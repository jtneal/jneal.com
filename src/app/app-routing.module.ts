import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{
  component: HomeComponent,
  path: '',
}, {
  component: AboutComponent,
  path: 'about',
}, {
  component: SkillsComponent,
  path: 'skills',
}, {
  component: PortfolioListComponent,
  path: 'portfolio',
}, {
  component: PortfolioItemComponent,
  path: 'portfolio/:uri',
}, {
  component: ResumeComponent,
  path: 'resume',
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
})
export class AppRoutingModule {}
