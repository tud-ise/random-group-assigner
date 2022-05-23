import { Handler } from "@netlify/functions";

import { allProjects } from '../../links'

function getUrlCandidates(projectId: string | undefined): string[] {
  // Either missing `project` query param or provided param doesn't exist
  if(!projectId || !allProjects[projectId]) return []

  return allProjects[projectId].groups
}

function pickRandomUrl(candidates: string[]): string {
  return candidates[Math.floor(Math.random() * candidates.length)]
}

const handler: Handler = async (event, context) => {
 
  const projectId = event.queryStringParameters?.project
  const urlCandidates = getUrlCandidates(projectId)

  // Early return if we can't figure out where to redirect
  if(urlCandidates.length < 1) {
    return {
      statusCode: 404,
      headers: {
        Location: '',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        error: `No project with id "${projectId}" found.`
      }),
    };
  }

  const redirectUrl = pickRandomUrl(urlCandidates)

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({}),
  };
};

export { handler };