type Project = { groups: string[] }

export const allProjects: { [projectId: string]: Project } = {
  "example-project": {
    groups: [
      'https://www.ise.tu-darmstadt.de/',
      'https://www.tu-darmstadt.de/',
      'https://www.wi.tu-darmstadt.de/fachbereich/index.de.jsp',
    ]
  },
}