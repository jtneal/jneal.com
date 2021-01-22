import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from './skills';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly skills: Skill[] = [
    {
      category: 'DevOps',
      skills: [
        'Docker',
        'AWS',
        'Terraform',
        'Linux',
        'Nginx',
        'Apache',
        'MySQL',
        'Redis',
        'Memcached',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node',
        'TypeScript',
        'C#',
        '.NET Core',
        '.NET Framework',
        'PHP',
        'Symfony',
        'Laravel',
        'CodeIgniter',
      ],
    },
    {
      category: 'Frontend',
      skills: [
        'Angular',
        'RxJS',
        'AngularJS',
        'jQuery',
        'ES6',
        'JavaScript',
        'HTML 5',
        'SCSS',
        'CSS 3',
      ],
    },
    {
      category: 'Text Editors',
      skills: [
        'Visual Studio Code',
        'Visual Studio',
        'PhpStorm',
        'Sublime Text 3',
        'Vim',
      ],
    },
    {
      category: 'CI/CD',
      skills: [
        'CircleCI',
        'Travis CI',
        'Jenkins',
      ],
    },
    {
      category: 'CMS',
      skills: [
        'Expression Engine',
        'WordPress',
        'Joomla',
      ],
    },
    {
      category: 'Versioning',
      skills: [
        'Git / GitHub',
        'Mercurial / Bitbucket',
      ],
    },
    {
      category: 'Light Exp.',
      skills: [
        'Ruby on Rails',
        'Python',
        'Go Lang',
      ],
    },
  ];

  public get(): Observable<Skill[]> {
    return of(this.skills);
  }
}
