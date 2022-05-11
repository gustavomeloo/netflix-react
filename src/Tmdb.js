const API_KEY = 'ffc0601dd2e446a81299725e9f1f3564'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: []
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },

    ]
  }
}