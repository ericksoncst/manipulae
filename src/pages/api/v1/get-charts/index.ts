export default async function getCharts(req, res) {

    const response = await fetch('https://api.deezer.com/editorial/0/charts')
    const json = await response.json()
    res.json(JSON.stringify(json));
}