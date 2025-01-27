import Blogs from '@/components/Blogs/Blogs.js';
import Cards from '@/components/Cards/Cards.js';
import Footer from '@/components/Footer/Footer.js';
import Form from '@/components/Form/Form.js';
import Hero from '@/components/Hero/Hero.js';
import Navbar from '@/components/Navbar/Navbar.js'
import Scroller from '@/components/Scroller/Scroller.js';
import Stats from '@/components/Stats/Stats.js';
import TechStack from '@/components/TechStack/TechStack.js'
import Protocols from '@/components/Protocols/Protocols';


export default function Home() {
  return (

    <main id="parent">
      <Navbar />
      <Hero />
      <Scroller />
      <Stats />
      <Cards />
      {/* <Blogs /> */}
      <Protocols />
      <TechStack />
      <Form />
      <Footer />
    </main>
  )
};
