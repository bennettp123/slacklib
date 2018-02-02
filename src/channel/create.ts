import { post } from '../fetch'
import { Channel } from '../types'

export async function create(name: string, token: string) {
  const result = await post<Channel.Info>(`https://slack.com/api/channels.create`, {
    name,
    token
  })

  return result.channel
}

