import Navbar from '../components/Navbar';
import '../styles/globals.css';
import '../styles/Home.module.css'; // Example import, but each page will have its own style

export const metadata = {
  title: 'NhaNha Engineering | Mining & Construction Safety',
  description: 'Your Safety Is Our Priority.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
       
      </body>
    </html>
  );
}
