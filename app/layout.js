import NavBar from "./components/NavBar";
import { Progress } from "./components/Progress";
import { UserDetails } from "./components/UserDetails";

export const metadata = {
  title: 'Lost in Translation'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavBar />
      <UserDetails>
        <Progress>
            {children}
        </Progress>
      </UserDetails>
      </body>
    </html>
  )
}
