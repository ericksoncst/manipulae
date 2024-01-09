export default async function getCharts(req, res) {

    const { q } = req.query

    const response = await fetch(`https://api.deezer.com/search?q=${q}`)
    const json = await response.json()
    res.json(json);
}