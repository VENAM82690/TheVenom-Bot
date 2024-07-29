import _0x5a203e from 'fs';
let handler = async (_0x3df175, {
  conn: _0x1a01af,
  usedPrefix: _0x2a2f3a
}) => {
  _0x1a01af.tekateki = _0x1a01af.tekateki ? _0x1a01af.tekateki : {};
  let _0x293c23 = _0x3df175.chat;
  if (_0x293c23 in _0x1a01af.tekateki) {
    _0x1a01af.reply(_0x3df175.chat, "❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯", _0x1a01af.tekateki[_0x293c23][0x0]);
    throw false;
  }
  let _0x168923 = JSON.parse(_0x5a203e.readFileSync("./src/game/acertijo.json"));
  let _0x4eaf40 = _0x168923[Math.floor(Math.random() * _0x168923.length)];
  let _0x803def = ("\nⷮ *" + _0x4eaf40.question + "*\n*┓━━━━━━⊰⚔️⊱━━━━━━┏*\n*❍⤪┇ الــوقــت ⌚ ❪ " + 60 .toFixed(0x2) + "❫ثــانـيـة*\n*❍⤪┇ الــجـائــزة ⚡ ❪ " + 0x1f4 + " ❫ نــقـطـه*\n*┛━━━━━━⊰⚔️⊱━━━━━━┗* \n*┇ᎬᏞᎯᏦᎡᎬᏰ !- ┇〄*\n").trim();
  _0x1a01af.tekateki[_0x293c23] = [await _0x1a01af.reply(_0x3df175.chat, _0x803def, _0x3df175), _0x4eaf40, 0x1f4, setTimeout(async () => {
    if (_0x1a01af.tekateki[_0x293c23]) {
      await _0x1a01af.reply(_0x3df175.chat, " *『𒀭خلص  الوقت ┇𒀭』*\n *❍⤪┇الاجـابـة💧↫  " + _0x4eaf40.response + '┇*', _0x1a01af.tekateki[_0x293c23][0x0]);
    }
    delete _0x1a01af.tekateki[_0x293c23];
  }, 0xea60)];
};
handler.help = ["acertijo"];
handler.tags = ["game"];
handler.command = /^(فاعلية|سؤال)$/i;
export default handler;