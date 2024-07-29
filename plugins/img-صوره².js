const _0x1da80e = function () {
  let _0x2ff3bf = true;
  return function (_0xa71d4e, _0x42bebb) {
    const _0x221dd4 = _0x2ff3bf ? function () {
      if (_0x42bebb) {
        const _0x2d6e1d = _0x42bebb.apply(_0xa71d4e, arguments);
        _0x42bebb = null;
        return _0x2d6e1d;
      }
    } : function () {};
    _0x2ff3bf = false;
    return _0x221dd4;
  };
}();
const _0x608f04 = _0x1da80e(this, function () {
  return _0x608f04.toString().search('(((.+)+)+)+$').toString().constructor(_0x608f04).search('(((.+)+)+)+$');
});
_0x608f04();
const _0x3418c3 = function () {
  let _0x24c93a = true;
  return function (_0x18ca78, _0xb7ddb7) {
    const _0x256b38 = _0x24c93a ? function () {
      if (_0xb7ddb7) {
        const _0xc06ab8 = _0xb7ddb7.apply(_0x18ca78, arguments);
        _0xb7ddb7 = null;
        return _0xc06ab8;
      }
    } : function () {};
    _0x24c93a = false;
    return _0x256b38;
  };
}();
const _0x42dba9 = _0x3418c3(this, function () {
  let _0x12f10a;
  try {
    const _0x422057 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x12f10a = _0x422057();
  } catch (_0xd05714) {
    _0x12f10a = window;
  }
  const _0x28c0ef = _0x12f10a.console = _0x12f10a.console || {};
  const _0x236dd6 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x580b01 = 0x0; _0x580b01 < _0x236dd6.length; _0x580b01++) {
    const _0x3c1d7f = _0x3418c3.constructor.prototype.bind(_0x3418c3);
    const _0x4590c6 = _0x236dd6[_0x580b01];
    const _0x157db7 = _0x28c0ef[_0x4590c6] || _0x3c1d7f;
    _0x3c1d7f.__proto__ = _0x3418c3.bind(_0x3418c3);
    _0x3c1d7f.toString = _0x157db7.toString.bind(_0x157db7);
    _0x28c0ef[_0x4590c6] = _0x3c1d7f;
  }
});
_0x42dba9();
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import { googleImage } from '@bochilteam/scraper';
const handler = async (_0x22faa1, {
  conn: _0x698bd1,
  text: _0x5a0279,
  usedPrefix: _0xf6ce21
}) => {
  const _0x124f60 = await getDevice(_0x22faa1.key.id);
  const _0x220c0a = ['caca', 'سكس', "اباحي", "مايا خليفه", "نيك", "شاذ", "شذوذ", "polla", 'porno', "porn", 'gore', 'cum', "semen", "puta", "puto", 'culo', "putita", "putito", "pussy", 'hentai', "pene", "coño", "asesinato", 'zoofilia', "mia khalifa", "desnudo", "desnuda", 'cuca', 'chocha', "muertos", "pornhub", "xnxx", "xvideos", "teta", "vagina", "marsha may", "misha cross", "sexmex", 'furry', "furro", "furra", 'xxx', "rule34", "panocha", "pedofilia", "necrofilia", 'pinga', "horny", "ass", "nude", 'popo', "nsfw", "femdom", "futanari", "erofeet", "sexo", "sex", "yuri", "ero", "ecchi", 'blowjob', "anal", "ahegao", "pija", "verga", "trasero", "violation", "violacion", "bdsm", 'cachonda', "+18", 'cp', "mia marin", "lana rhoades", "cepesito", 'hot', "buceta", 'xxx'];
  if (_0x220c0a.some(_0x12b3ac => _0x22faa1.text.toLowerCase().includes(_0x12b3ac))) {
    return _0x698bd1.reply(_0x22faa1.chat, " *استغفر ربك احسن* 😒", _0x22faa1);
  }
  if (!_0x5a0279) {
    throw "استخدم أمر صور عن طريق 🔎\n.صوره eren";
  }
  if (_0x124f60 !== "desktop" || _0x124f60 !== "web") {
    const _0x55f6e8 = await googleImage(_0x5a0279);
    var _0x5f2195 = await prepareWAMessageMedia({
      'image': {
        'url': _0x55f6e8.getRandom()
      }
    }, {
      'upload': _0x698bd1.waUploadToServer
    });
    const _0x4d8853 = {
      'body': {
        'text': ("- الـصـوره الـمـراد الــبحث عـنـها : " + _0x5a0279).trim()
      },
      'footer': {
        'text': "❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵".trim()
      },
      'header': {
        'title': "* *الـتـحـميل مـن مـوقـع صور جوجل 🪩*",
        'subtitle': '',
        'hasMediaAttachment': true,
        'imageMessage': _0x5f2195.imageMessage
      },
      'nativeFlowMessage': {
        'buttons': [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "جيب صوره تاني",
            'id': ".image0 " + _0x5a0279
          })
        }],
        'messageParamsJson': ''
      }
    };
    let _0x8b65f7 = generateWAMessageFromContent(_0x22faa1.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': _0x4d8853
        }
      }
    }, {
      'userJid': _0x698bd1.user.jid,
      'quoted': _0x22faa1
    });
    _0x698bd1.relayMessage(_0x22faa1.chat, _0x8b65f7.message, {
      'messageId': _0x8b65f7.key.id
    });
  } else {
    _0x698bd1.sendFile(_0x22faa1.chat, "JoAnimi•Error.jpg", _0x22faa1);
  }
};
handler.help = ["صوره"];
handler.tags = ["For Test"];
handler.command = /^(image0|صوره)$/i;
export default handler;