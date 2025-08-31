import { Metadata } from 'next';
import HomePage from './home-page';

export default function Page() {
  return <HomePage />
}

export const metadata: Metadata = {
  title: 'Home page',
};
