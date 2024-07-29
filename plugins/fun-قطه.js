import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {

try {

let res = await fetch('https://api.thecatapi.com/v1/images/search')

let img = await res.json()

let caption = `

*⌬ ❛╏ مياو مياو*
*_⌬ ❛╏ BY: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕_*

`.trim()

conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m)

} catch (e) {

console.log(e)

throw '*Error!*'

}}

handler.help = ['cat']

handler.tags = ['random']

handler.command = /^قطه$/i

handler.fail = null

export default handler