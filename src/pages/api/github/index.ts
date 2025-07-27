import { githubProfileService } from '@/services/github-profile.service'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleResponse(req, res)
    case 'OPTIONS':
      return res.status(200).end()
    default:
      return res.status(405).json({ msg: 'Method not allowed' })
  }
}

const handleResponse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await githubProfileService.getGithubData()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to fetch user data' })
  }
}
