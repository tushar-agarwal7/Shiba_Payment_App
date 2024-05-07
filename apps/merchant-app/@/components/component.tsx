/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JpHPIv7LlPy
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'
import { Arimo } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
      <div className="max-w-3xl w-full">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Send Money</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Securely transfer funds to your friends and family.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send Money</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="recipient">Recipient</Label>
                <Input id="recipient" placeholder="Enter email or username" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" min="0" placeholder="Enter amount" step="0.01" type="number" />
              </div>
              <Button className="w-full">Send</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-gray-600 dark:text-gray-400">Current Balance</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">$2,345.67</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 dark:text-gray-400">Recent Transactions</div>
                  <Link className="text-blue-600 hover:underline dark:text-blue-400" href="#">
                    View All
                  </Link>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">Jared Palmer</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Sent $50.00</div>
                      </div>
                    </div>
                    <div className="text-gray-900 dark:text-gray-100">-$50.00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">Acme Inc.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Received $100.00</div>
                      </div>
                    </div>
                    <div className="text-green-600 dark:text-green-400">+$100.00</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
