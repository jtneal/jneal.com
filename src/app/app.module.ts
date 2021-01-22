import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwardsComponent } from './awards/awards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    AwardsComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent,
    ProjectItemComponent,
    ProjectListComponent,
    SkillsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }
