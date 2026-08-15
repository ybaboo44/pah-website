export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
  slug: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: string
  slug: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

export interface Document {
  id: string
  title: string
  description: string
  fileUrl: string
  fileSize: string
  fileType: string
  date: string
  category: string
}

export interface Communique {
  id: string
  title: string
  content: string
  date: string
  category: string
  slug: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface ProgramItem {
  id: string
  title: string
  description: string
  icon: string
  color: string
}