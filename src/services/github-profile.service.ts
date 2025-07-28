import { env } from '@/config'
import { GithubProfile } from '@/interfaces'

export interface GithubStats {
  followers: number
  stars: number
  totalRepos: number
  totalPRs: number
  totalIssues: number
  totalCommits: number
  contributions: number
  topLanguages: { name: string; percentage: number }[]
}

class GithubProfileService {
  constructor(private token: string) {}

  async getProfile(username: string = 'vKurama7u7v'): Promise<GithubProfile> {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${this.token}`,
      },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch user data')
    }

    return res.json()
  }

  async getRepositories(
    username: string = 'vKurama7u7v',
    per_page: number = 100,
    page: number = 1
  ): Promise<any[]> {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${per_page}&page=${page}`,
      {
        headers: {
          Authorization: `token ${this.token}`,
        },
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch repositories')
    }

    return res.json()
  }

  async getGithubData(username: string = 'vKurama7u7v') {
    let page = 1
    let allRepos: any[] = []
    const per_page = 100

    while (true) {
      const repos = await this.getRepositories(username, per_page, page)
      if (repos.length === 0) break

      allRepos = allRepos.concat(repos)
      page++
    }

    if (allRepos.length === 0) {
      throw new Error('No repositories found for the user')
    }

    return {
      stars: this.getStars(allRepos),
      languages: this.getLanguages(allRepos),
      prs: await this.getPullRequests(username),
      issues: await this.getIssues(username),
      commits: await this.getCommits(username),
      profile: await this.getProfile(username),
    }
  }

  getStars(allRepos: any[] = []): number {
    if (allRepos.length === 0) {
      return 0
    }

    return allRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0
  }

  getLanguages(allRepos: any[] = []) {
    if (allRepos.length === 0) {
      return []
    }

    const languages: { [key: string]: number } = {}
    allRepos.forEach((repo) => {
      const lang = repo.language || 'Unknown'
      languages[lang] = (languages[lang] || 0) + 1
    })

    const totalBytes = Object.values(languages).reduce(
      (acc, bytes) => acc + bytes,
      0
    )
    const topLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .filter(([name]) => name !== 'Unknown')
      .slice(0, 5) // Get top 5 languages
      .map(([name, bytes]) => ({
        name,
        percentage: Math.round((bytes / totalBytes) * 100),
      }))

    return topLanguages
  }

  async getPullRequests(username: string = 'vKurama7u7v') {
    const currentYear = new Date().getFullYear()
    const result = await fetch(
      `https://api.github.com/search/issues?q=type:pr+author:${username}+created:${currentYear}-01-01..${currentYear}-12-31`
    )
    if (!result.ok) {
      throw new Error('Failed to fetch pull requests')
    }

    const data = await result.json()
    return data.total_count || 0
  }

  async getIssues(username: string = 'vKurama7u7v') {
    const currentYear = new Date().getFullYear()
    const result = await fetch(
      `https://api.github.com/search/issues?q=type:issue+author:${username}+created:${currentYear}-01-01..${currentYear}-12-31`
    )
    if (!result.ok) {
      throw new Error('Failed to fetch issues')
    }

    const data = await result.json()
    return data.total_count || 0
  }

  async getCommits(username: string = 'vKurama7u7v') {
    const currentYear = new Date().getFullYear()
    const result = await fetch(
      `https://api.github.com/search/commits?q=author:${username}+committer-date:${currentYear}-01-01..${currentYear}-12-31`,
      {
        headers: {
          Accept: 'application/vnd.github.cloak-preview',
          Authorization: `token ${this.token}`,
        },
      }
    )
    if (!result.ok) {
      throw new Error('Failed to fetch commits')
    }

    const data = await result.json()
    return data.total_count || 0
  }
}

export const githubProfileService = new GithubProfileService(env.GITHUB_TOKEN)
