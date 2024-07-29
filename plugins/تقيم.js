const _0x279030 = function () {
  let _0x261777 = true;
  return function (_0x1360c8, _0x4639c2) {
    const _0x34b3a7 = _0x261777 ? function () {
      if (_0x4639c2) {
        const _0x545817 = _0x4639c2.apply(_0x1360c8, arguments);
        _0x4639c2 = null;
        return _0x545817;
      }
    } : function () {};
    _0x261777 = false;
    return _0x34b3a7;
  };
}();
const _0x248511 = _0x279030(this, function () {
  return _0x248511.toString().search("(((.+)+)+)+$").toString().constructor(_0x248511).search("(((.+)+)+)+$");
});
_0x248511();
const _0xdb6792 = function () {
  let _0x545e66 = true;
  return function (_0x42bd0c, _0x4cfa2b) {
    const _0x44a718 = _0x545e66 ? function () {
      if (_0x4cfa2b) {
        const _0x406dd5 = _0x4cfa2b.apply(_0x42bd0c, arguments);
        _0x4cfa2b = null;
        return _0x406dd5;
      }
    } : function () {};
    _0x545e66 = false;
    return _0x44a718;
  };
}();
const _0x44febf = _0xdb6792(this, function () {
  let _0xc743d1;
  try {
    const _0x396d6c = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xc743d1 = _0x396d6c();
  } catch (_0x414227) {
    _0xc743d1 = window;
  }
  const _0x4e7923 = _0xc743d1.console = _0xc743d1.console || {};
  const _0x30d0f8 = ['log', 'warn', "info", "error", "exception", 'table', "trace"];
  for (let _0x486877 = 0x0; _0x486877 < _0x30d0f8.length; _0x486877++) {
    const _0x62c463 = _0xdb6792.constructor.prototype.bind(_0xdb6792);
    const _0x188154 = _0x30d0f8[_0x486877];
    const _0x4a8135 = _0x4e7923[_0x188154] || _0x62c463;
    _0x62c463.__proto__ = _0xdb6792.bind(_0xdb6792);
    _0x62c463.toString = _0x4a8135.toString.bind(_0x4a8135);
    _0x4e7923[_0x188154] = _0x62c463;
  }
});
_0x44febf();
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
const handler = async (_0x121af2, {
  conn: _0x2fc1c7,
  text: _0x22775b,
  usedPrefix: _0x2b24b0
}) => {
  const _0x2dcd18 = await getDevice(_0x121af2.key.id);
  if (_0x2dcd18 !== "desktop" || _0x2dcd18 !== "web") {
    var _0x20b29a = await prepareWAMessageMedia({
      'image': {
        'url': "https://telegra.ph/file/1e09b9a4be53cb8c08ffd.jpg"
      }
    }, {
      'upload': _0x2fc1c7.waUploadToServer
    });
    const _0x599873 = {
      'body': {
        'text': ''.trim()
      },
      'footer': {
        'text': "يمكنك إستخدامه عبر الاختيار من الاسفل\n*─[ BY ELAKRAB ]*🌟✨".trim()
      },
      'header': {
        'title': "مرحبا يا حب 👋 أتمنى أنك بخير ♥️\nالان يمكنك تقييم البوت لكي يتحسن اكثر",
        'subtitle': "خـلــيك صـــادق فــي تــقــيــمـك يا حب ❤️🥹\n\n\n\n.",
        'hasMediaAttachment': true,
        'imageMessage': _0x20b29a.imageMessage
      },
      'nativeFlowMessage': {
        'buttons': [{
          'name': "quick_reply",
          'buttonParamsJson': "{\"display_text\":\"⭐\",\"id\":\".قيم١\"}"
        }, {
          'name': "quick_reply",
          'buttonParamsJson': "{\"display_text\":\"⭐⭐\",\"id\":\".قيم ⭐⭐\"}"
        }, {
          'name': "quick_reply",
          'buttonParamsJson': "{\"display_text\":\"⭐⭐⭐\",\"id\":\".قيم ⭐⭐⭐\"}"
        }, {
          'name': 'quick_reply',
          'buttonParamsJson': "{\"display_text\":\"⭐⭐⭐⭐\",\"id\":\".قيم ⭐⭐⭐⭐\"}"
        }, {
          'name': "quick_reply",
          'buttonParamsJson': "{\"display_text\":\"⭐⭐⭐⭐⭐\",\"id\":\".قيم ⭐⭐⭐⭐⭐\"}"
        }],
        'messageParamsJson': ''
      }
    };
    let _0x3e85d4 = generateWAMessageFromContent(_0x121af2.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': _0x599873
        }
      }
    }, {
      'userJid': _0x2fc1c7.user.jid,
      'quoted': _0x121af2
    });
    _0x2fc1c7.relayMessage(_0x121af2.chat, _0x3e85d4.message, {
      'messageId': _0x3e85d4.key.id
    });
  } else {
    _0x2fc1c7.sendFile(_0x121af2.chat, "JoAnimi•Error.jpg", _0x121af2);
  }
};
handler.customPrefix = /تقييم|تقيم/i;
handler.command = new RegExp();
export default handler;