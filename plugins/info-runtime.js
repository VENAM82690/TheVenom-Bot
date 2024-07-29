import { cpus as _cpus, totalmem, freemem } from 'os' // استيراد الدوال الخاصة بالمعالج والذاكرة من مكتبة النظام
import util from 'util' // استيراد مكتبة الأدوات
import os from 'os' // استيراد مكتبة النظام
import fetch from 'node-fetch' // استيراد مكتبة fetch للتعامل مع HTTP
import osu from 'node-os-utils' // استيراد مكتبة أدوات نظام التشغيل
import { performance } from 'perf_hooks' // استيراد أدوات قياس الأداء
import { sizeFormatter } from 'human-readable' // استيراد مكتبة تنسيق الأحجام

let format = sizeFormatter({
    std: 'JEDEC', // تنسيق حجم الذاكرة
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`, // تنسيق الحجم
})

let handler = async (m, { conn, command, usedPrefix }) => { // تعريف الدالة المعالجة للرسائل
    let picture = './storage/logos/Menu1.jpg' // تحديد مسار الصورة
    let name = await conn.getName(m.sender) // الحصول على اسم المرسل
    let _uptime = process.uptime() * 1000 // حساب مدة التشغيل
    let _muptime

    if (process.send) {
        process.send('uptime') // إرسال رسالة للحصول على مدة التشغيل
        _muptime = await new Promise(resolve => {
            process.once('message', resolve) // انتظار الرسالة للحصول على مدة التشغيل
            setTimeout(resolve, 1000) // مهلة للتأكد من الحصول على البيانات
        }) * 1000
    }

    let fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

    let pp = './src/fg_logo.jpg' // تحديد مسار الصورة الرمزية
    let uptime = clockString(_uptime) // تنسيق مدة التشغيل
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] // إعداد علامة المستخدم
    let muptime = clockString(_muptime) // تنسيق مدة التشغيل السابقة
    const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats) // تصفية المحادثات
    const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) // تصفية المجموعات
    const used = process.memoryUsage() // الحصول على استخدام الذاكرة
    const cpus = _cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) // حساب إجمالي وقت المعالج
        return cpu
    })

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    })

    let old = performance.now() // الحصول على الوقت الحالي
    let neww = performance.now() // الحصول على الوقت الجديد
    let speed = neww - old // حساب سرعة التنفيذ

    let info = `┏━━━━❰･𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓･❱━━━━
┃
┃مرحبا ${taguser}
┃
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃
┃➢  السرعة : *${speed}* مللي ثانية
┃➢  الذاكرة العشوائية المتاحة للخادم:  ${format(totalmem() - freemem())} / ${format(totalmem())}
┃➢  المنصة: ${os.platform()}
┃➢  النشاط: ${uptime}
┃➢  الوضع: ${global.opts['self'] ? 'خاص - PRIVATE' : 'عام - PUBLIC'}
┃➢  مجموع المجموعات المحظورة: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
┃➢  مجموع المستخدمين المحظورين: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
┃➢  إجمالي المستخدمين: ${Object.keys(global.db.data.users).length}
┃
┗━━━━━━━━━━━━━`.trim() // إعداد الرسالة التي سيتم إرسالها

    // conn.sendMessage(m.chat, { image: picture, caption: info, { quoted: fkontak })
    conn.sendFile(m.chat, picture, 'curiosity.jpg', info, fkontak, m) // إرسال الصورة والرسالة
    // conn.sendButton(m.chat, info, `${wm}`, pp, [['MENU', '.menu']], fkontak, m)
}

handler.help = ['estado'] // تحديد الأوامر المساعدة
handler.tags = ['main'] // تحديد التصنيفات
handler.command = ['runtime', 'uptime', 'estado'] // تحديد الأوامر المتاحة
handler.register = true // تسجيل الأمر
export default handler // تصدير المعالج

const more = String.fromCharCode(8206) // إعداد أحرف خاصة للعرض
const readMore = more.repeat(4001) // تكرار الأحرف الخاصة

function clockString(ms) { // دالة لتحويل الوقت إلى صيغة الساعة والدقيقة والثانية
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}