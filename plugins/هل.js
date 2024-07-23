import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
let lastReply = null

function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
    if (!text) throw `*أدخــل الـسـؤال !*`
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let responses = [
        'احــتـمـال قـلـيـل', 
        'نــعم بـالـتـأكـيد', 
        'لا أعـتـقـد', 
        'مــستـحـيــل', 
        'حـصـل', 
        'مـش عــارف', 
        'مـمـكـن', 
        'فـي الاغـلـب اة', 
        'فـي الاغـلـب لا', 
        'اکـيـد', 
        'نـتـا بـتـكـلـمـنـي', 
        'اه يا نجم', 
        'مـش هـيـحـصـل', 
        'هـتحـصـل اكيد', 
        'كـلام فـاضي', 
        'بـلاش احـلام', 
        'يـمـكن', 
        'مش متأكد', 
        'نـص نـص', 
        'مـش فـاكر', 
        'لأ بـجـد؟', 
        'احـتمـال كـبـير', 
        'عــادي', 
        'فــي الأحــلام', 
        'الـعـلـم عـنـد الله', 
        'انــسـى', 
        'يـمـكن نـعـم', 
        'يـمـكن لأ', 
        'ايـوا', 
        'نــصـحـيـه مـنـك', 
        'مـتـوقـعـش'
    ]
    
    let x = pickRandom(responses)
    
    // Ensure the reply is not the same as the last one
    while (x === lastReply) {
        x = pickRandom(responses)
    }

    lastReply = x

    let top = `*هــل ${text}*

*الــأجــابـه :* ${x}`.trim()
    conn.sendFile(m.reply(top, null, { mentions: [a] }))
}

handler.help = handler.command = ['هل']
handler.tags = ['fun']
handler.group = true
handler.limit = 0
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}