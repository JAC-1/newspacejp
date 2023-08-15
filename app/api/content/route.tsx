const posts = [
  {
    title: 'Scientists and atoms',
    slug: 'scientists-and-atoms',
    content:
      "Why don't scientists trust atoms? Because they make up everything.",
  },
  {
    title: 'Eggs and jokes',
    slug: 'eggs-and-jokes',
    content: "Why don't eggs tell jokes? They'd crack each other up.",
  },
  {
    title: 'Couples and gym',
    slug: 'couples-and-gym',
    content:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
  },
  {
    title: 'Mathematician and negative numbers',
    slug: 'mathematician-and-negative-numbers',
    content:
      "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them.",
  },
  {
    title: 'Sad math book',
    slug: 'sad-math-book',
    content: 'Why was the math book sad? Because it had too many problems.',
  },
  {
    title: 'Programmers and nature',
    slug: 'programmers-and-nature',
    content: "Why don't programmers like nature? It has too many bugs.",
  },
  {
    title: 'Arrested belt',
    slug: 'arrested-belt',
    content: 'Why was the belt arrested? Because it held up a pair of pants.',
  },
  {
    title: 'Oysters and pearls',
    slug: 'oysters-and-pearls',
    content: "Why don't oysters share their pearls? Because they're shellfish.",
  },
  {
    title: 'Scientists and atoms (1)',
    slug: 'scientists-and-atoms-1',
    content:
      "Why don't scientists trust atoms? Because they make up everything.",
  },
  {
    title: 'Chicken on playground',
    slug: 'chicken-on-playground',
    content:
      'Why did the chicken cross the playground? To get to the other slide.',
  },
  {
    title: 'Cookie at doctor',
    slug: 'cookie-at-doctor',
    content:
      'Why did the cookie go to the doctor? Because it was feeling crumbly.',
  },
  {
    title: 'Computer at doctor',
    slug: 'computer-at-doctor',
    content: 'Why did the computer go to the doctor? It had a virus.',
  },
  {
    title: 'Tomato turned red',
    slug: 'tomato-turned-red',
    content: 'Why did the tomato turn red? Because it saw the salad dressing!',
  },
  {
    title: 'Six afraid of seven',
    slug: 'six-afraid-of-seven',
    content: 'Why was six afraid of seven? Because seven eight nine.',
  },
  {
    title: 'Alligator in vest',
    slug: 'alligator-in-vest',
    content: 'What do you call an alligator in a vest? An investigator.',
  },
];

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(posts);
}
