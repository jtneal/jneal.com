import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from './skills';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly skills: Skill[] = [
    {
      category: 'DevOps',
      id: 8,
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
      id: 7,
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
      id: 6,
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
      id: 5,
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
      id: 4,
      skills: [
        'CircleCI',
        'Travis CI',
        'Jenkins',
      ],
    },
    {
      category: 'CMS',
      id: 3,
      skills: [
        'Expression Engine',
        'WordPress',
        'Joomla',
      ],
    },
    {
      category: 'Versioning',
      id: 2,
      skills: [
        'Git / GitHub',
        'Mercurial / Bitbucket',
      ],
    },
    {
      category: 'Light Exp.',
      id: 1,
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
