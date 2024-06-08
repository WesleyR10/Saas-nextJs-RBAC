'use client'

import { Separator } from '@radix-ui/react-separator'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Web App</h1>
      <Button className="my-2 ">Click me</Button>
      <Separator className="my-2 h-px w-auto bg-slate-100" />
      <p className="text-slate-500">This is a paragraph</p>
    </div>
  )
}
