import { Injectable } from '@nestjs/common';
import { ExperienceDto } from '@jneal.com/shared/dtos';

@Injectable()
export class ExperienceService {
  get(): ExperienceDto[] {
    return [
      {
        company: 'Quicken Loans',
        dates: 'Oct 2019 – Present',
        description: '',
        details: [
          'Technical lead on multiple top priority projects including Partner Rocket and Broker Pro.',
          'Researched and prepared features for technical readiness prior to release planning.',
          'Assisted development teams with meeting commitments on high priority features.',
          'Provided engineering, architecture, and infrastructure guidance to development teams.',
          'Developed AWS infrastructure code using Terraform for load balancers, gateways, ECS, and more.',
          'Built internal development tools to auto-generate applications and infrastructure.',
          'Built a quality report application that is now used by the entire technology team.',
          'Mentored both engineers and senior engineers to assist with personal and career growth.',
          'Participated in the architectural alignment and standards process for the technology team.',
        ],
        location: 'Charlotte, NC',
        title: 'Staff Software Engineer',
      },
      {
        company: 'Quicken Loans',
        dates: 'Mar 2017 – Oct 2019',
        description: '',
        details: [
          'Consistently pushed myself and other engineers to improve our quality and write clean code.',
          'Built an event listener for our Docker enterprise environment to automate repetitive tasks.',
          'Championed efforts to improve our testing strategy and encouraged others to contribute.',
          'Migrated our automated builds from Jenkins to CircleCI and improved build times by 80%.',
          'Created QL Badges to enable project maintainers to easily add quality badges to their repositories.',
          'Improved our Git workflow by switching to a single perpetual branch to reduce complications.',
          'Implemented pull request templates to help encourage consistency and thoroughness.',
          'Started a lunch and learn initiative to encourage others to constantly keep learning new things.',
          'Created a CLI application to assist with local development and automate repetitive tasks.',
          'Helped define and maintain our API Design Standards.',
          'Created a collection of interview questions/answers to improve efficiency in our interview process.',
          'Implemented automated code quality enforcement into our continuous integration builds.',
          'Continued to spearhead our efforts of increasing code coverage by raising it from 56.4% to 81%.',
          'Improved performance by caching a slow service and decreased load times by as much as 92%.',
        ],
        location: 'Charlotte, NC',
        title: 'Senior Software Engineer',
      },
      {
        company: 'Quicken Loans',
        dates: 'Feb 2016 – Mar 2017',
        description: '',
        details: [
          'Day to day work involved PHP 5, PHP 7, AngularJS, Docker, Redis, Solr, Silex, Symfony, and more.',
          'Decreased our measurable technical debt from 2d 4h to 0 and issues from 1,175 to 0.',
          'Increased our code coverage from 24.9% to 56.4%, thus improving confidence when refactoring.',
          'Migrated our separated local development environments into an all inclusive Docker composition.',
          'Updated our codebases and internal dependencies to be PHP 7 compatible.',
          'Helped build Ship Yard to provide better visibility into our PRs and automate release merges/tags.',
          'Built a database migration system that used raw SQL and automated building release scripts.',
          'Wrote shell scripts to automate repetitive tasks and free up time for more impactful work.',
          'Reworked our onboarding documentation to be more thorough and efficient.',
        ],
        location: 'Charlotte, NC',
        title: 'Software Engineer',
      },
      {
        company: 'EP+Co',
        dates: 'Aug 2012 – Jan 2016',
        description: 'Notable clients include Advance America (2012-2015), Verizon (2012-2015), Denny\'s (2013-2015), Upstate SC Alliance (2014-2015), NFL (2014-2015), Chick-fil-A (2015), Confluence Watersports (2012-2013).',
        details: [
          'Developed and maintained websites, microsites, and web applications.',
          'LAMP work utilized object-oriented PHP 5.x using CodeIgniter, MVC architecture, and MySQL.',
          'Developed custom APIs using the Flight framework and Runscope for API testing and debugging.',
          'Developed integrations with third-party APIs including NetAcuity, TranDotCom (SOAP), and others.',
          'Developed asynchronous web applications using AJAX by utilizing jQuery.',
          'Worked with a variety of CMS platforms including ExpressionEngine, WordPress, and Drupal.',
          'Helped maintain and monitor (using Server Density) Linux web servers on Ubuntu and RHEL.',
          'Performance tuning of code, tables, and SQL queries for high-availability deployments.',
          'Helped mitigate security vulnerabilities by employing best practices, testing, and debugging.',
          'Researched industry trends to assist with development and promotion of best practices.',
          'Automated manual tasks and improved efficiency by implementing functional process changes.',
          'Managed development, quality assurance, and user acceptance testing environments.',
          'Helped maintain automated code builds and deployments using Jenkins.',
          'Assisted during hiring process for developers, and helped train and guide junior developers.',
          'Conducted peer code reviews on a regular basis to ensure projects maintained utmost quality.',
          'Maintained documentation and comprehensive code comments for other developers.',
          'Maintained code repositories with version control on Bitbucket using mostly Mercurial and Git.',
          'Quickly became the go-to problem solver by helping others solve their complex problems.',
          'Many projects followed the agile software development methodologies.',
          'Consistently finished projects quicker than estimated saving our company both time and money.',
        ],
        location: 'Greenville, SC',
        title: 'PHP Developer',
      },
      {
        company: 'Hannush Web',
        dates: 'Nov 2008 – Aug 2012',
        description: '',
        details: [
          'Developed and maintained websites and web applications for a wide variety of clients.',
          'Handled both front-end (HTML/CSS/JS) and back-end (PHP/Joomla/WordPress) for every project.',
          'Worked on some projects written in Classic ASP and ASP.NET/C# for one client, Dixon Hughes.',
          'Researched best practices for SEO and ensured all code was well optimized and followed standards.',
          'Trained clients to update their own website within the Joomla and WordPress CMS platforms.',
          'Trained and helped guide junior developers to follow best practices and follow coding standards.',
        ],
        location: 'Greenville, SC',
        title: 'Lead Web Developer',
      },
      {
        company: 'Strategic Advantage',
        dates: 'Jun 2008 – Jul 2008',
        description: 'This was a short-term contract – I was offered a full-time position but did not want to relocate.',
        details: [
          'Helped develop front-end and back-end code for the Phibro Animal Health Corporation website.',
          'Utilized various technologies including PHP, MySQL, HTML, CSS, XML, jQuery, AJAX, and SVN.',
          'Developed a custom flash image carousel that is still in use on the site today: www.pahc.com.',
          'Helped convert some legacy administrative tools from classic ASP to object-oriented PHP.',
        ],
        location: 'Holly Springs, NC',
        title: 'Web Developer',
      },
      {
        company: 'Apple A Day And Beyond',
        dates: 'Jul 2007 – Jun 2008',
        description: '',
        details: [
          'Assisted in customizing the Nutrition Warehouse Outlet website.',
          'Utilized various technologies including HTML, CSS, ColdFusion, and MySQL.',
          'Helped design, code, and send marketing email blasts to existing and potential customers.',
          'Helped the shipping department with printing, packaging, and shipping customer\'s orders.',
        ],
        location: 'Greenville, SC',
        title: 'Web Assistant',
      },
      {
        company: 'Central Data Corporation',
        dates: 'Aug 2006 – Mar 2007',
        description: '',
        details: [
          'Development work including front-end and back-end for the National Beta Club and Global Scholar.',
          'Utilized many technologies including HTML, CSS, Linux, PHP, MySQL, Memcached, and TortoiseCVS.',
          'Provided onsite technical support and troubleshooting assistance to the National Beta Club staff.',
          'Wrote a custom chat bot that asked students test questions and gave points for correct answers.',
          'Made an application for students to build their own personal web page by just point-and-clicking.',
        ],
        location: 'Spartanburg, SC',
        title: 'Member of Technical Staff',
      },
      {
        company: 'Nine2Five Records',
        dates: 'Jun 2004 – Aug 2006',
        description: '',
        details: [
          'Designed and developed 9th Corner website including both front-end and back-end technology.',
          'Wrote a custom content management script using PHP/MySQL to help manage upcoming shows.',
          'Designed band logo and merchandise including t-shirts as well as CD labels and CD booklet layouts.',
        ],
        location: 'Myrtle Beach, SC',
        title: 'Webmaster',
      },
    ];
  }
}
