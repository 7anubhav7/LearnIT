"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import { SessionProvider } from "next-auth/react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <Provider store={store}>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <ToastContainer />
            {children}
          </body>
        </Provider>
      </html>
    </SessionProvider>
  );
}
