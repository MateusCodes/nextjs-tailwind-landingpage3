import React from 'react';
import { Hero, Features, Downloads, FAQ, Contact } from '../components/index';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Downloads />
      <FAQ />
      <Contact />
    </>
  );
}
