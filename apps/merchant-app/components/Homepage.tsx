import { Button } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 py-40 text-white font-serif">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">Streamline Your Payments</h1>
              <p className="mt-4 text-lg">
                Our payment platform makes it easy to accept payments and manage your finances.
              </p>
            </div>
            <div>
            <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-full object-cover object-center lg:order-last"
            src="https://images.unsplash.com/photo-1621837600855-ce0e4afe0f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
          />
            </div>
          </div>
        </section>
        
        <section className="py-16 ">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Features</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Discover how our platform can help your business.</p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex items-center">
                  <CreditCardIcon className="h-8 w-8 text-indigo-500" />
                  <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Accept Payments</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Easily accept credit card, debit card, and mobile payments.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex items-center">
                  <WalletIcon className="h-8 w-8 text-indigo-500" />
                  <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Manage Finances</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Track your income, expenses, and invoices in one place.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex items-center">
                  <ShieldIcon className="h-8 w-8 text-indigo-500" />
                  <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Secure Payments</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Protect your business with our advanced security features.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex items-center">
                  <BarChartIcon className="h-8 w-8 text-indigo-500" />
                  <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Detailed Reporting</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Get insights into your business with our comprehensive reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:items-start">
          <div className="flex items-center">
            <img src="shibalogo.png" alt="Shiba Payment Logo" className="h-10 w-auto mr-2" />
            <span className="ml-2 text-lg font-semibold text-white">Shiba Payment</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 md:mt-0">© 2024 Shiba Payment. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function BarChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function CreditCardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function ShieldIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

function WalletIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
)}
