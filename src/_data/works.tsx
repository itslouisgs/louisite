import GithubFillIcon from 'remixicon-react/GithubFillIcon.js'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon.js'

interface linkProps {
  label: string
  url: string
  icon: JSX.Element
}

export interface worksProps {
  title: string
  description: string | JSX.Element
  category: string
  techStacks: string[]
  links: linkProps[]
}

const github = {
  label: 'Source code',
  icon: <GithubFillIcon size={24} />
}

const live = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={24} />
}

export const works = [
  {
    title: 'HIMTI Election 2022',
    description:
      'An e-voting website that allows students and lecturers of the School of Computer Science to vote for the next Chairman of HIMTI BINUS University.',
    category: 'Project management',
    techStacks: ['Bootstrap', 'Laravel', 'Project management'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/himti-election-2022'
      },
      {
        ...live,
        url: 'https://election.himtibinus.or.id/'
      }
    ]
  },
  {
    title: 'LOUISITE',
    description: 'My all-new personal website—this is the second and latest iteration.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    category: 'Front-end development',
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/louisite'
      },
      {
        ...live,
        url: 'https://louisite.netfliy.app'
      }
    ]
  },
  {
    title: 'BalaiTani',
    description:
      'An e-commerce web app designed as a platform for connecting small farmers to buyers directly to avoid middlemen from inflating the retail costs.',
    category: 'Full-stack development',
    techStacks: ['Laravel', 'Bootstrap'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/balaitani'
      },
      {
        ...live,
        url: 'http://balaitani.herokuapp.com'
      }
    ]
  },
  {
    title: 'BalaiTani, built with ASP.NET',
    description:
      'Another rendition of BalaiTani built with ASP.NET and domain-driven design implementation.',
    category: 'Full-stack development',
    techStacks: ['ASP.NET', 'Bootstrap', 'Domain-driven design'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/balaitani-asp'
      }
    ]
  },
  {
    title: 'TukangTravel',
    description:
      'The landing page of TukangTravel—a lifestyle traveling app designed for travelers who love adventure and hidden gems.',
    category: 'Front-end development',
    techStacks: ['React', 'Tailwind CSS', 'Figma'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/tukang-travel'
      },
      {
        ...live,
        url: 'https://tukang-travel.web.app/'
      }
    ]
  },
  {
    title: 'LOUISITE v1',
    description: 'First iteration of my personal website.',
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript', 'Tailwind CSS'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/louisite-v1'
      }
    ]
  },
  {
    title: 'himti.or.id',
    description: 'The official website of HIMTI BINUS University.',
    category: 'Project management',
    techStacks: ['Bootstrap', 'PHP', 'Project management'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/himti.or.id'
      },
      {
        ...live,
        url: 'https://himti.or.id/'
      }
    ]
  },
  {
    title: 'DanBam',
    description: (
      <span>
        The landing page of DanBam—a fictitious Korean restaurant featured in the K-drama hit{' '}
        <i>Itaewon Class</i>.
      </span>
    ),
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript', 'jQuery'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/hci-danbam'
      },
      {
        ...live,
        url: 'https://hci-danbam.itslouisgs.repl.co/'
      }
    ]
  },
  {
    title: 'FAME',
    description:
      'The landing page of FAME Workshop—a game development workshop held by HIMTI BINUS University’s programming class division.',
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript'],
    links: [
      {
        ...github,
        url: 'https://github.com/leejhlouis/fame'
      },
      {
        ...live,
        url: 'https://leejhlouis.github.io/fame'
      }
    ]
  }
]