import lunr from 'lunr'

const postImportResult = import.meta.glob('./**/*.{md,mdx}', { eager: true })
const posts = Object.values(postImportResult).filter(post => !post.data.draft)
const documents = posts.map(post => ({
  url: post.url,
  title: post.data.title,
  description: post.data.description,
  author: post.data.author,
  categories: post.data.categories && post.data.categories.join(' '),
  tags: post.data.tags && post.data.tags.join(' '),
  content: post.file.search(/.mdx$/) >= 0 ? '' : post.rawContent(),
}))
const idx = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('author')
  this.field('categories')
  this.field('tags')
  this.field('content')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

export async function get() {
    const body = JSON.stringify(idx)
    return {
      body
    }
  }