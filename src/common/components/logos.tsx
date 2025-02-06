type LogoProps = {
  name: string
  className?: string
}

export const GetLogo = ({ name, className }: LogoProps) => {
  switch (name) {
  }
}

export const LinkedInIcon = ({ className }: LogoProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8h16M4 12h16M4 16h16"
      />
    </svg>
  )
}
