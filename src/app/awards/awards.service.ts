import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Award } from './awards';

@Injectable({ providedIn: 'root' })
export class AwardsService {
  private readonly awards: Award[] = [
    {
      date: 'November 2019',
      descriptions: [
        'The Rock Honors are a yearly Oscar-style award show held at the Fox Theater in downtown Detroit, MI to honor the best in team member achievements.',
      ],
      id: 12,
      title: 'Best Performance - Impacting the Outcome',
      type: 'Rock Honors Nomination',
    },
    {
      date: 'November 2019',
      descriptions: [
        'The ISMs in Action award is a monthly recognition program where each month a different ISM is chosen and team members can nominate others for living the ISMs. One winner is chosen each month.',
        'You\'ll see it when you believe it: Nothing significant in this world has ever happened without someone believing in it first. It\'s only the passive observers of life who say "I\'ll believe it when I see it." We take the opposite approach, and lead with our hearts and minds. We know the truth: If we truly believe in something, we can – and will – affect the outcome. If we believe in ourselves first, we dramatically increase our odds of success. If we believe it can happen, then it will.',
      ],
      id: 11,
      title: 'You\'ll see it when you believe it',
      type: 'ISMs In Action Award Nomination',
    },
    {
      date: 'May 2019',
      descriptions: [
        'The ISMs in Action award is a monthly recognition program where each month a different ISM is chosen and team members can nominate others for living the ISMs. One winner is chosen each month.',
        'Obsessed with finding a better way: Our never-ending mission is to find a better way for every process and everything we touch. If it\'s good, let\'s make it great. If it\'s great, let\'s take it to an even higher level. Don\'t settle for less. In fact, don\'t settle at all. Finding a better way is not something we do on the side or when we get the time. Rather, it\'s a key priority for every one of our team members. It\'s our passion … our way of living … our obsession. We don\'t just work IN our business – we work ON our business.',
      ],
      id: 10,
      title: 'Obsessed with finding a better way',
      type: 'ISMs In Action Award Nomination',
    },
    {
      date: 'June 2018',
      descriptions: [
        'The NC Operations Huddle Awards are a yearly award show held for our operations team members in Charlotte, NC.',
      ],
      id: 9,
      title: 'Technology: Pride in Excellence Award',
      type: 'NC Operations Huddle Awards',
    },
    {
      date: 'May 2018',
      descriptions: [
        'The New Stuff Challenge was a contest to think up a new idea that would benefit our partner portal, and to implement it as a proof of concept.',
        'The winning project would have their idea transition into an actual feature that would be prioritized and implemented in production.',
      ],
      id: 8,
      title: 'Partner Portal Notifications',
      type: 'Winner of New Stuff Challenge',
    },
    {
      date: 'February 2018',
      descriptions: [
        'The Gold Medal Fortnight was a special event held in 2018 to recognize team members that go above and beyond expectations on a regular basis.',
      ],
      id: 7,
      title: 'Gold Medalist',
      type: 'QLMS/QL Gold Medal Fortnight',
    },
    {
      date: 'October 2017',
      descriptions: [
        'The Gilbies are a yearly Oscar-style award show held at the Fox Theater in downtown Detroit, MI to honor the best in team member achievements.',
      ],
      id: 6,
      title: 'Special Achievement - Figuring It Out',
      type: 'Gilbies Nomination',
    },
    {
      date: 'October 2017',
      descriptions: [
        'The ISMs in Action award is a monthly recognition program where each month a different ISM is chosen and team members can nominate others for living the ISMs. One winner is chosen each month.',
        'Responding with a sense of urgency is the ante to play: Urgency is your inner compulsion and drive to get things done in a timely, yet thoughtful, manner. On this team, we return all phone calls and emails the same day. We\'re on the lunatic fringe. We\'re obsessed with answering inquiries ASAP. Not just to clients and partners, but to each other! There\'s no other way, and no other option. Urgency motivates us to ensure we communicate all news fast, both good and bad. We take care of things, especially our clients…NOW!',
      ],
      id: 5,
      title: 'Responding with a sense of urgency is the ante to play',
      type: 'ISMs In Action Award Nomination',
    },
    {
      date: 'October 2017',
      descriptions: [
        'Bullet Time is a weekly four-hour period in which technology team members can work on any personal project or idea they want, even those outside the core business.',
        'With thousands of Bullet Time projects, the Bullet Time Gig of the Week is a prestigious honor that helps increase visibility and awareness to the entire technology team.',
      ],
      id: 4,
      title: 'QL Badges',
      type: 'Bullet Time Gig of the Week',
    },
    {
      date: 'September 2017',
      descriptions: [
        'The ISMs in Action award is a monthly recognition program where each month a different ISM is chosen and team members can nominate others for living the ISMs. One winner is chosen each month.',
        'The inches we need are everywhere around us: If a company does one big thing better than their competition, it becomes fairly easy for their competition to level the playing field: they can just imitate that one thing. But, if a company does thousands of little things better than anyone else, they become nearly impossible to imitate. We call those thousands of little things "inches." We\'d never be able to foresee all the things that should be noticed or improved. Instead, we drive a culture that motivates our team members to find the inches we need all around us. We are all empowered to find the opportunities to make an impact everywhere; one inch at a time, these inches all add up to greatness.',
      ],
      id: 3,
      title: 'The inches we need are everywhere around us',
      type: 'ISMs In Action Award Nomination',
    },
    {
      date: 'July 2017',
      descriptions: [
        'The ISMs in Action award is a monthly recognition program where each month a different ISM is chosen and team members can nominate others for living the ISMs. One winner is chosen each month.',
        'Do the right thing: The high road is not a shortcut. Stick to the highest standard of integrity, without compromise. Character is what you do when no one is looking over your shoulder! Doing the wrong thing is never worth it. How can you go wrong doing the right thing? Remember, eventually three things always come out: the sun, the moon and the truth.',
      ],
      id: 2,
      title: 'Do the right thing',
      type: 'ISMs In Action Award Nomination',
    },
    {
      date: 'January 2017',
      descriptions: [
        'The ISMs in Action award is a monthly recognition program where each month a different ISM is chosen and team members can nominate others for living the ISMs. One winner is chosen each month.',
        'Ignore the noise: We\'ve found it\'s not always skill and long hours that lead to greatness. It\'s also the ability to ignore the noise. Noise could be from naysayers, something going wrong, sun in your eyes, ball took a bad bounce, dog ate your homework, someone cut you off on the way to work, etc. A lot of things that seem serious at first glance turn out to be noise. Will you allow it to keep you from winning? The noise may fluctuate in volume, but your determination to press on in spite of it (ignore it!) will make all the difference to you and our Family of Companies. There\'s not a human on the planet who does not experience noise. The winners have developed an ability to ignore it and press on.',
      ],
      id: 1,
      title: 'Ignore the noise',
      type: 'ISMs In Action Award Nomination',
    },
  ];

  public get(): Observable<Award[]> {
    return of(this.awards);
  }
}
