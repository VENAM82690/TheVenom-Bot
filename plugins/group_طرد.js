let handler = async (m, { conn, participants, usedPrefix, command }) => {

    let kickte = `*مــنشـن الـشـخص يا نجم !*`
    let ownerJid = '201225655220@s.whatsapp.net' // استبدل owner_number برقم مطور البوت

    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    let botNumber = conn.user.jid

    if (user === botNumber) {
        return m.reply(`*أنا أطرّد نفسي! إزاي يعني؟!*`)
    }

    if (user === ownerJid) {
        return m.reply(`*عايز تطرد المطور بتاعي! مستحيل طبعًا 😂*`)
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    m.reply(`*مع السلامة يا نجم، تـم الطـرد بأمر من @${m.sender.split('@')[0]}! 😂✌️*`, null, { mentions: [m.sender] }) 
}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'طرد', 'كسمو', 'بره', 'خرجو', 'طلعو', 'غورو', 'مشيه'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler