import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterMenuComponent } from './shared/footer-menu/footer-menu.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AboutComponent,
    AppComponent,
    FooterMenuComponent,
    HomeComponent,
    PortfolioItemComponent,
    PortfolioListComponent,
    ResumeComponent,
    SkillsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
})
export class AppModule {}
