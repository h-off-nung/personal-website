import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Kirill Bobrov",
  DESCRIPTION: "Welcome to Kirill's portfolio and blog in the one place.",
  AUTHOR: "Kirill Bobrov",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "bobrov7tech@gmail.com",
    HREF: "mailto:bobrov7tech@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "h-off-nung",
    HREF: "https://github.com/h-off-nung"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "h-off-nung",
    HREF: "https://www.linkedin.com/in/h-off-nung/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "h_off_nung",
    HREF: "https://twitter.com/h_off_nung",
  },
]

