// import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// import { IBM_Plex_Sans } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// const IBMPlex = IBM_Plex_Sans({
//   variable: "--font-ibm-plex",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// export const metadata: Metadata = {
//   title: "Imaginify",
//   description: "AI-powered image generator",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider appearance={{ variables: { colorPrimary: "#624cf5" } }}>
//       <html lang="en">
//         <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
//           <header className="p-4 flex justify-end gap-4">
//             <SignedOut>
//               <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </header>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

/////////////////////////////////////

import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ variables: { colorPrimary: "#624cf5" } }}
      afterSignOutUrl="/" // Added this line
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <header className="p-4 flex justify-end gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>{/* <UserButton /> */}</SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
