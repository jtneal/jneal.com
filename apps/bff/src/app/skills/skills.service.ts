import { Injectable } from '@nestjs/common';
import { SkillDto } from '@jneal.com/shared/dtos';

@Injectable()
export class SkillsService {
  get(): SkillDto[] {
    return [
      {
        category: 'Languages',
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
  }
}
