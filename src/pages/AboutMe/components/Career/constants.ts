import { Expertise, ExpertiseDetails } from './types'

const EXPERIENCE_DETAILS: Expertise[] = [
  {
    title: 'Frontend Engineer',
    subtitle: 'Wint Wealth',
    start: 'Sept 2023',
    end: 'Present',
    description: `Working on bonds and commodity rates (gold and silver) module of wintwealth.com. 
        Collaborating with Product Manager to enhance the user experience of the existing Ul`,
  },

  {
    title: 'UI Developer',
    subtitle: 'Navi Technologies',
    start: 'Mar 2022',
    end: 'Sept 2023',
    description: `
      Navi Edge (Personal Loan Web App):
      Developed and deployed a responsive web app for personal loans up to ₹20 Lacs.
      Integrated with major platforms (Amazon, PhonePe, Swiggy, MakeMyTrip, Zepto, Flipkart).
      Led project from setup (NextJS) to deployment, implementing error tracking for stability.
      Reduced frontend development time by 50% with innovative API mocking.
      Contributed to 500+ daily loan disbursals, generating more than ₹3 crore revenue per day
      Mentored developers and advocated coding best practices.
      Web Ul Library:
      Spearheaded an internal Web Ul Library, streamlining development for 10+ teams.
      Achieved 50% reduction in development time through library adoption.`,
  },

  {
    title: 'Frontend Developer',
    subtitle: 'HDFC Life',
    start: 'Jul 2021',
    end: 'Mar 2022',
    description: `Contributed to diverse Insurtech web applications:
      Buying Journey (Life Easy): Enhanced the insurance purchasing process for improved user experience.
      Claims Application: Streamlined claims submission and evaluation.
      Telemedical (TM): Facilitated remote medical consultations.`,
  },
]

const EDUCATION_DETAILS: Expertise[] = [
  {
    title: 'Bachelor of Engineering',
    subtitle: 'BITS Pilani, Pilani Campus',
    start: 'Jul 2017',
    end: 'May 2021',
    description: `I've done my Bachelor's from BITS Pilani main campus. I graduated with a final Cumulative Grade Point Average (CGPA) of 8.23/10`,
  },

  {
    title: 'High School',
    subtitle: 'Jaysharee Periwal High School',
    start: 'April 2014',
    end: 'March 2016',
    description: `I've done my 11th and 12th from Jayshree Periwal High School. I've scored 92.2% in my 12th Board Exams`,
  },
]

export const EXPERTISE_DETAILS: ExpertiseDetails = {
  experience: EXPERIENCE_DETAILS,
  education: EDUCATION_DETAILS,
}
