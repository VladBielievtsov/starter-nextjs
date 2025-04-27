import { Metadata } from "next";
import AboutPage from "./about-page";

export default function Page() {
  return (
    <AboutPage />
  )
}

export const metadata: Metadata = {
  title: 'About page',
};
