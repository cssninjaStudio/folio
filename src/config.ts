import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  draft?: boolean
  title: string
  description?: string
  author?: string
  publishDate: string
  featured?: boolean
  coverSVG?: string
  coverImage?: string
  socialImage?: string
  categories?: string[]
  tags?: string[]
  file?: string
  url?: string
  minutesRead?: string
  extra?: string[]
  section?: string[]
}

export interface TagType {
  tag: string
  count: number
  pages: MarkdownInstance<Frontmatter>[]
}

export const SiteMetadata = {
  title: 'Folio',
  description: 'An Astro starter for blog and portfolio websites.',
  author: {
    name: 'Css Ninja',
    twitter: '@cssninjaStudio',
    url: 'https://cssninja.io',
    email: 'hello@cssninja.io',
    summary: 'Css Ninja is a web design studio. We build handcrafted and polished templates that will give some hype to your brand. Let\'s start building awesome apps!',
  },
  org: {
    name: 'cssninja.io',
    twitter: '@cssninjaStudio',
    url: 'https://cssninja.io',
    email: 'hello@cssninja.io',
    summary:
      'Css Ninja is a web design studio. We build handcrafted and polished templates that will give some hype to your brand. Let\'s start building awesome apps!',
  },
  location: 'United States',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/cssninjaStudio/folio',
  social: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/cssninja/',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/cssninjaStudio',
      icon: 'facebook',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/cssninjaStudio',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/cssninjaStudio',
      icon: 'github',
    },
  ],
  buildTime: new Date().toString(),
}

export const Logo = '../svg/logo/logo.svg'
export const LogoImage = '../images/logo.png'
export const FeaturedSVG = '../svg/illustrations/scenses/draw-1.svg'
export const DefaultSVG = '../svg/illustrations/scenses/draw-1.svg'
export const DefaultImage = '../images/posts/1.png'

export const NavigationLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Blog', href: 'blog' },
  { name: 'Categories', href: 'categories' },
  { name: 'Authors', href: 'authors' },
  { name: 'About', href: 'about' },
]

export const CategoryDetail = [
  {
    category: 'business',
    coverImage: '../images/categories/5.png',
    coverSVG: undefined,
    socialImage: '../images/categories/5.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'engineering',
    coverImage: '../images/categories/6.png',
    coverSVG: undefined,
    socialImage: '../images/categories/6.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'tutorials',
    coverImage: '../images/categories/1.png',
    coverSVG: undefined,
    socialImage: '../images/categories/1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'hobbies',
    coverImage: '../images/categories/2.png',
    coverSVG: undefined,
    socialImage: '../images/categories/2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'human resources',
    coverImage: '../images/categories/9.png',
    coverSVG: undefined,
    socialImage: '../images/categories/9.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'lifestyle',
    coverImage: '../images/categories/8.png',
    coverSVG: undefined,
    socialImage: '../images/categories/8.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'UX design',
    coverImage: '../images/categories/7.png',
    coverSVG: undefined,
    socialImage: '../images/categories/7.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
  {
    category: 'coaching',
    coverImage: '../images/categories/10.png',
    coverSVG: undefined,
    socialImage: '../images/categories/10.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverImage: '../images/categories/10.png',
    coverSVG: undefined,
    socialImage: '../images/categories/10.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.',
  }
}
export const AuthorDetail = [
  {
    name: 'Maya Piretti',
    description: 'UX Designer',
    contact: 'maya@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/2.svg',
    bio: 'Maya Piretti is a highly skilled User Experience (UX) designer with over 8 years of industry experience, Maya has a proven track record of success in designing successful mobile apps and websites.',
    location: 'Roma, IT',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  },
  {
    name: 'Harold Miller',
    description: 'Business Analyst',
    contact: 'harold@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/8.svg',
    bio: 'Harold Miller is a highly experienced business analyst with over 10 years of experience in the field. He is qualified in data analysis and is skilled in identifying and solving business problems.',
    location: 'Los Angeles, CA',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  },
  {
    name: 'Clark Smith',
    description: 'Software Engineer',
    contact: 'clark@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/3.svg',
    bio: 'Clark Smith is a software engineer with over 8+ years of experience. Clark has experience with many languages and is comfortable working on both front-end and back-end development.',
    location: 'New York, NY',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  },
  {
    name: 'Clarissa Stokes',
    description: 'HR Manager',
    contact: 'clarissa@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/5.svg',
    bio: 'Clarissa Stokes is a talented human resources manager with over a decade of experience in the field. She specializes in talent management and employee relations, as well as business development.',
    location: 'London, UK',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  },
  {
    name: 'Irina Kropova',
    description: 'Lifestyle Coach',
    contact: 'irina@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/9.svg',
    bio: 'Irina Kropova is a passionate and experienced lifestyle coach with over 5 years of experience in the field. She helps her clients achieve health, wellness, and overall quality of life goals.',
    location: 'Warsaw, PL',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  },
  {
    name: 'Alan Mitchells',
    description: 'Account Manager',
    contact: 'alan@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/7.svg',
    bio: 'Alan Mitchells is a top 5% account manager with over 15 years of experience in sales and customer service. He has a strong background in building and maintaining sustainable relationships with clients.',
    location: 'Miami, FL',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  },
  {
    name: 'Frieda Weinberg',
    description: 'Health Coach',
    contact: 'frieda@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/12.svg',
    bio: 'Meet Frieda Weinberg, a passionate health coach who is committed to helping her clients achieve optimal wellness. After years of personal experimentation, she decided to turn her passion into a career.',
    location: 'Berlin, DE',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  }
  ,
  {
    name: 'Wallace Knolder',
    description: 'Art Director',
    contact: 'wallace@cssninja.io',
    image: undefined,
    svg: '../svg/avatars/small/16.svg',
    bio: 'Meet Wallace Knolder, a highly talented art director with a keen eye for detail. Wallace began his career in the creative industry as a graphic designer, but quickly realized his true passion was in art direction.',
    location: 'Dublin, IR',
    company: 'Freelance',
    social: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cssninja/',
        icon: 'linkedin',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/cssninjaStudio',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/cssninjaStudio',
        icon: 'twitter',
      },
    ],
  }
]

export const DefaultAuthor = {
  name: 'Anonymous',
  contact: 'anonymous@cssninja.io',
  description: 'Anonymous',
  image: '../images/authors/placeholder.png',
  svg: undefined,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.',
  location: 'Earth',
  company: 'Freelance',
  social: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/cssninja/',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/cssninjaStudio',
      icon: 'facebook',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/cssninjaStudio',
      icon: 'twitter',
    },
  ],
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 12

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

