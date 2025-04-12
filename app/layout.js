import NavBar from "./components/NavBar";
import { Progress } from "./components/Progress";
import { UserDetails } from "./components/UserDetails";
import { LanguageContext, LanguageProvider } from "./context/LanguageContext";
import './globals.css';

export const metadata = {
  title: 'Lost in Translation'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <NavBar />
          <UserDetails>
            <Progress>
                {children}
            </Progress>
          </UserDetails>
        </LanguageProvider>
      </body>
    </html>
  );
}
