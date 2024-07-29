const fs = require('fs');

let handler = async (m, { conn }) => {
    const vn = './احلي_تحية_لأحلي_جروب.mp3';
    conn.sendPresenceUpdate('recording', m.id);
    conn.sendMessage(m.id, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `احلي_تحية_لأحلي_جروب.mp3`}, {quoted: m});
};

handler.all = async function (m) {
    if (m.isGroup && m.participants && m.action === 'add' && m.participants.includes(conn.user.jid)) {
        const vn = './احلي_تحية_لأحلي_جروب.mp3';
        conn.sendPresenceUpdate('recording', m.id);
        conn.sendMessage(m.id, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `احلي_تحية_لأحلي_جروب.mp3`}, {quoted: m});
    }
}

handler.help = ['احلي_تحية_لأحلي_جروب'];
handler.tags = ['notification'];
handler.command = ['احلي_تحية_لأحلي_جروب'];
handler.customPrefix = /^(احلي جروب|تحية|احلي تحية)$/i;
handler.command = new RegExp;

export default handler;