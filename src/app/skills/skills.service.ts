import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from './skills';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly skills: Skill[] = [
    {
      category: 'Languages',
      id: 12,
      skills: [
        'TypeScript',
        'JavaScript',
        'C#',
        'PHP',
        'HTML',
        'CSS',
        'SCSS',
        'SQL',
        'Bash',
        'Batch',
        'Python',
        'Golang',
      ],
    },
    {
      category: 'Frameworks',
      id: 11,
      skills: [
        'Angular',
        'NestJS',
        'Node',
        'RxJS',
        'Express',
        'jQuery',
        'Bootstrap',
        '.NET Core',
        'Symfony/Silex',
        'Laravel',
        'CodeIgniter',
        'Slim',
      ],
    },
    {
      category: 'DevOps',
      id: 10,
      skills: [
        'Docker',
        'AWS',
        'Terraform',
        'Linux',
        'Nginx',
        'Apache',
        'CircleCI',
        'Travis CI',
        'Jenkins',
        'Grafana',
        'Splunk',
        'Vagrant',
      ],
    },
    {
      category: 'Testing',
      id: 9,
      skills: [
        'Karma',
        'Jasmine',
        'Protractor',
        'Jest',
        'Mocha/Chai',
        'SuperTest',
        'Cypress',
        'Postman',
        'Newman',
        'PHPUnit',
        'Katalon',
        'Snyk',
      ],
    },
    {
      category: 'Static Analysis',
      id: 8,
      skills: [
        'SonarQube',
        'TSLint',
        'ESLint',
        'PHP CodeSniffer',
        'Codelyzer',
        'StyleCop',
      ],
    },
    {
      category: 'Persistance',
      id: 7,
      skills: [
        'DynamoDB',
        'MySQL',
        'Redis',
        'Memcached',
        'Elasticsearch',
        'Solr',
      ],
    },
    {
      category: 'Data',
      id: 6,
      skills: [
        'JSON',
        'YAML',
        'XML',
        'REST',
        'SOAP',
        'AJAX',
      ],
    },
    {
      category: 'Code Tools',
      id: 5,
      skills: [
        'Git / GitHub',
        'Mercurial / Bitbucket',
        'Visual Studio Code',
        'Visual Studio',
        'PhpStorm',
        'Vim',
      ],
    },
    {
      category: 'CMS',
      id: 4,
      skills: [
        'Expression Engine',
        'WordPress',
        'Joomla',
        'Drupal',
        'OctoberCMS',
        'Squarespace',
      ],
    },
    {
      category: 'Process',
      id: 3,
      skills: [
        'Agile',
        'Scrum',
        'Kanban',
        'TFS/Azure DevOps',
        'ActiveCollab',
        'Confluence',
      ],
    },
    {
      category: 'Practices',
      id: 2,
      skills: [
        'TDD',
        'BDD',
        'Design Patterns',
        'SOLID',
        'DRY',
        'KISS',
      ],
    },
    {
      category: 'Support',
      id: 1,
      skills: [
        'Debugging',
        'Problem Solving',
        'Root Cause Analysis',
        'Documentation',
        'Standards',
        'Style Guides',
      ],
    },
  ];

  public get(): Observable<Skill[]> {
    return of(this.skills);
  }
}
