import Nav from "./Nav";
import Header from "./Header";
import { Sora } from '@next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const Layout = ({ children }) => {
  return (
    <div className={`page text-white bg-main bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
