import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@jneal.com/ui/components';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
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
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking', scrollPositionRestoration: 'enabled' }),
    UiComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
