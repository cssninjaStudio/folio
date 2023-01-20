const postImportResult = import.meta.glob('./**/*.{md,mdx}', { eager: true })
const posts = Object.values(postImportResult).filter(post => !post.data.draft)
const documents = posts.map(post => ({
  url: post.url,
  title: post.data.title,
  description: post.data.description,
  author: post.data.author,
  publishDate: post.data.publishDate,
  categories: post.data.categories,
  tags: post.data.tags,
}))

export async function get() {
    const body = JSON.stringify(documents)
    return {
      body
    }
  }