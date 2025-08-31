"use client"

import { redirect } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/common/button"

export default function HomePage() {
  const [name, setName] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    redirect(`/hi/${name}`)
  }

  return (
    <main className="px-7 py-10 overflow-x-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center max-w-[250px] mx-auto"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="What's your name?"
          className="flex h-9 w-full rounded-md border border-foreground bg-transparent px-3 py-1 text-foreground shadow-sm transition-colors placeholder:text-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground md:text-sm"
        />
        <Button
          type="submit"
          className="mt-4"
          disabled={!name}
        >
          Click
        </Button>
      </form>
    </main>
  )
}
