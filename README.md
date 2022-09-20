# Back-end

## Entidades
#

## Game

- id: number
- title: string
- bannerUrl: string

## Ad

- id: number
- gameId: number
- name: string
- yearsPlaying: string
- discord: string
- weekDays: string
- hourStart: string
- hourEnd: string
- useVoiceChannel: boolean
- ceatedAt: string

#

## Casos de Uso
#

- Listagem de games com contagem de anúncios;
- Criação de novo anúncio;
- Listagem de anúncios por jogos;
- Buscar discord pelo ID do anúncio.