import React, { PropsWithChildren } from 'react'

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-[1420px] bg-gray-700 py-8">
      {children}
    </main>
  )
}

export default BaseLayout
