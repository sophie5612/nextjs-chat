import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to VapeBot Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an adaptation of a Next.js open source AI chatbot app template.
        </p>
        <p className="leading-normal text-muted-foreground">
          The purpose of this bot is to interact with users who are attempting to quit nicotine. <br/> It has been instructed to not give medical advice, unless directly asked. Please be aware that AI responses are not always accurate. 
        (In progress: This app uses Compliant GPT to ensure personal data is protected...)
        </p>
      </div>
    </div>
  )
}
