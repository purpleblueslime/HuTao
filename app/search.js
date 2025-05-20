'use server'

export default async function search (se, type) {
  const query = `
  query {
    Page(perPage: 9) {
      media(search: "${se}", type: ${type}) {
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
  `

  var url = 'https://graphql.anilist.co/'
  var options = {
    method: 'POST',
    headers: {
      Accept: 'app/json',
      'Content-Type': 'app/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  }

  var {data, errors} = await (await fetch(url, options)).json()
  if (!data) return null
  return data.Page.media
}