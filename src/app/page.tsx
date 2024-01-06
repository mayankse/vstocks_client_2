import Image from 'next/image'
import AboutPage from './about/page';
import HeaderPage from './header1/page';

export default function Home() {
  return (<div>
    <AboutPage/>
    <HeaderPage/>
  </div>);
}
