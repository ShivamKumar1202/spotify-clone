import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

import './globals.css'
import SupabaseProvider from '@/Providers/SupabseProvider'
import UserProvider from '@/Providers/UserProvider'
import ModalProvider from '@/Providers/ModalProvider'
import ToasterProvider from '@/Providers/ToasterProvider'
import getSongsByUserId from '@/Actions/getSongsByUserId'
import Player from '@/components/Player'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        
        <ToasterProvider />
        
        <SupabaseProvider>
          <UserProvider>
          
            <ModalProvider />
          
            <Sidebar songs={ userSongs } >
              {children}
            </Sidebar>

            <Player />
          
          </UserProvider>
        </SupabaseProvider>
      
      </body>
    </html>
  )
}