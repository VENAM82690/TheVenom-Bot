import axios from "axios"

let handler = async (m, {command, conn}) => {
    let apikey = global.keysxxx
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName[who]
    let fgif = m

    if (command == 'جبل') {
        let anu = await wallpaper('mountain')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0] 
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'ببجي') {
        let pug = ['ببجي', 'playerunknowns battlegrounds', 'pubg mobile']  
        let pug2 = pug[Math.floor(Math.random() * pug.length)] 
        let anu = await wallpaper(pug2)
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0] 
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'جيمز') {
        let ga = ['gaming', 'gamers', 'video game']  
        let ga2 = ga[Math.floor(Math.random() * ga.length)] 
        let anu = await wallpaper(ga2)
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0] 
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'جمالي') {
        let anu = await wallpaper('aesthetic')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0] 
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'عشوائي') {
        let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/wprandom.json`)).data  
        let res2 = await res[Math.floor(res.length * Math.random())]
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, res2, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'قهوة') {
        let haha = await conn.getFile(`https://coffee.alexflipnote.dev/random`)
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'حليب') {
        let anu = await wallpaper('milk y mocha')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'كرتون') {
        let anu = await wallpaper('cartoon network')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]  
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'فضاء') {
        let anu = await wallpaper('cyberspace')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]    
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'تكنولوجيا') {
        let anu = await wallpaper('technology')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]      
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'دورايمون') {
        let anu = await wallpaper('doraemon')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]        
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'هكر') {
        let anu = await wallpaper('hacker')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]   
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'كوكب') { 
        let anu = await wallpaper('planet')
        let result = anu[Math.floor(Math.random() * anu.length)]  
        let haha = result.image[0]     
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'صوره-عشوئيه') {
        let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/profil?apikey=${apikey}`)
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'جمالي2') {
        let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/aesthetic?apikey=${apikey}`)
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'سيارة') {
        let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/mobil?apikey=${apikey}`)
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'خلفية') {
        let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/wallhp?apikey=${apikey}`)
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

    if (command == 'موتوسيكل') { 
        let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/motor?apikey=${apikey}`)
        await conn.reply(m.chat, global.wait, m)
        conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['🔄 صورة أخرى 🔄', `/${command}`]], fgif, { mentions: [who] })
    }

}
handler.command = ['جبل', 'ببجي', 'جيمز', 'جمالي', 'عشوائي', 'قهوة', 'حليب', 'كرتون', 'فضاء', 'تكنولوجيا', 'دورايمون', 'هكر', 'كوكب', 'صوره-عشوئيه', 'جمالي2', 'سيارة', 'خلفية', 'موتوسيكل']
export default handler

async function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`).then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}