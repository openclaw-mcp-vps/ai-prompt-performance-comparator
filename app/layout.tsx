import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Performance Comparator — A/B Test AI Prompts Across Models',
  description: 'Compare prompt performance across GPT-4, Claude, and Gemini with cost and quality metrics. Built for AI product managers and developers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="91649b0f-eab0-4182-b507-71554e7ac98c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
