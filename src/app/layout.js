import { CartProvider } from "@/context/CartContext"

import "./globals.css"

export const metadata = {
  title: "بوک پلاس",
  description: "Book Plus",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
