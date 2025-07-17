import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(setCards)
  }, [])

  const filtered = cards.filter(card => 
    card.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <Head>
        <title>Pokemon TCG SG</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Singapore Pokémon TCG Listings</h1>
      <input
        className="border p-2 w-full max-w-md mb-4"
        placeholder="Search cards..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((card, idx) => (
          <div key={idx} className="border p-4 rounded">
            <h2 className="font-semibold">{card.title}</h2>
            <p className="text-green-700">{card.price}</p>
            <a href={card.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              View on {card.source}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
