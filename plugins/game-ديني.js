import _0x5c173e from 'fs';
let handler = async (_0x1e5785, {
  conn: _0xa88de4,
  usedPrefix: _0x111abb
}) => {
  _0xa88de4.tekateki = _0xa88de4.tekateki ? _0xa88de4.tekateki : {};
  let _0x554c13 = _0x1e5785.chat;
  if (_0x554c13 in _0xa88de4.tekateki) {
    _0xa88de4.reply(_0x1e5785.chat, "❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯", _0xa88de4.tekateki[_0x554c13][0x0]);
    throw false;
  }
  let _0x5af87a = JSON.parse(_0x5c173e.readFileSync('./src/game/qoran.json'));
  let _0x14641f = _0x5af87a[Math.floor(Math.random() * _0x5af87a.length)];
  let _0x263b98 = ("\n\nⷮ " + _0x14641f.question + "*\n\n*❍⤪┇ الــوقــت ⌚ ❪ " + 60 .toFixed(0x2) + "❫ثــانـيـة*\n\n*❍⤪┇ الــجـائــزة ⚡ ❪ " + 0x1f4 + " ❫ نــقـطـه*\n\n*┇𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴 ┇↞〄*\n\n").trim();
  _0xa88de4.tekateki[_0x554c13] = [await _0xa88de4.reply(_0x1e5785.chat, _0x263b98, _0x1e5785), _0x14641f, 0x1f4, setTimeout(async () => {
    if (_0xa88de4.tekateki[_0x554c13]) {
      await _0xa88de4.reply(_0x1e5785.chat, " *『𒀭خلص  الوقت ┇𒀭』*\n *❍⤪┇الاجـابـة💧↫  " + _0x14641f.response + '┇*', _0xa88de4.tekateki[_0x554c13][0x0]);
    }
    delete _0xa88de4.tekateki[_0x554c13];
  }, 0xea60)];
};
handler.help = ["acertijo"];
handler.tags = ["game"];
handler.command = /^(دينيه|دين)$/i;
export default handler;