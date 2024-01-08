export async function getAllSongs() {
    const res = await fetch('https://api.deezer.com/editorial/0/charts')
             
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const json = await res.json()
    console.log('RESPONSE', json)
    return json
}