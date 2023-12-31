export enum CareerTypes {
  education = 'education',
  experience = 'experience',
}

export interface Expertise {
  title: string
  subtitle: string
  description: string
  start: string
  end: string
}

export interface ExpertiseDetails {
  education: Expertise[]
  experience: Expertise[]
}
