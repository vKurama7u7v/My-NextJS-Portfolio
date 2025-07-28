export interface GithubProfile {
  login: string
  id: number
  html_url: string
  avatar_url: string
  name: string
  bio: string
  location: string | null
  company: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
  private_gists: number
  total_private_repos: number
  owned_private_repos: number
  disk_usage: number
  collaborators: number
  plan: {
    name: string
  }
}
