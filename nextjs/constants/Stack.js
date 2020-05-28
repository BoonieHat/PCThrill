export const SKILLS = [
  'Thrill',
  'News',
  'Reviews',
  'Builds',
  'Guides',
  'Showcases',
]

export const articleGroq = `
  *[_type == "post" && slug.current == $slug][0]
  {
    title,
    "name": author->name,
    "categories": categories[]->title,
    _updatedAt,
    mainImage,
    body
  }
`