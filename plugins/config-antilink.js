let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
    
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    const grupo = `https://chat.whatsapp.com`

    if (isAdmin && chat.antiLink && m.text.includes(grupo)) {
        return m.reply('*!خاصية منع ارسال الروابط مفعله سيتم طردك..اوه انت مشرف اسف على وقاحتي بامكانك ارسال الروابط ولن يتم طردك😏*')
    }

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }    

        await conn.sendButton(m.chat, `*「 حظر الروابط 」*\n*يا نجم، خاصية حظر الروابط مفعلة وانت بعثت لينك، فلازم أقولك باي باي من الجروب👋. يا ${await this.getName(m.sender)} انت كسرت قواعد الجروب، هيبقى لازم تطير من هنا...!!*${isBotAdmin ? '' : '\n\n*[❗ملاحظه❗]البوت مش مشرف، مش هيعرف يطرد اللي بيبعت اللينكات*'}`, author, ['الغاء تفعيل حظر الروابط', '/disable antilink'], m)    

        if (isBotAdmin && bot.restrict) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
            let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            if (responseb[0].status === "404") return
        } else if (!bot.restrict) {
            return m.reply('*[❗] مالك البوت لسه مش مفعل خاصية حظر الروابط، كلمه وفعلها بقى*')
        }
    }
    return !0
}