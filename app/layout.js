import NavBar from "./components/NavBar";
import { UserDetails } from "./components/UserDetails";

export const metadata = {
  title: 'Lost in Translation'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavBar />
      <UserDetails>{children}</UserDetails></body>
    </html>
  )
}
