import fetch from 'node-fetch';

let imdbHandler = async (m, { conn, text }) => {
  if (!text) throw 'من فضلك اكتب اسم الفيلم';

  try {
    let res = await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`);

    if (!res.ok) {
      throw new Error(`طلب الـAPI فشل بحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('رد الـJSON:', json);

    let ratings = json.ratings.map(rating => `• *${rating.source}:* ${rating.value}`).join('\n');

    let movieInfo = 
    `*معلومات الفيلم:*\n
     • *العنوان:* ${json.title}\n
     • *السنة:* ${json.year}\n
     • *المواسم:* ${json.totalseasons}\n
     • *التقييم العمري:* ${json.rated}\n
     • *تاريخ الإصدار:* ${json.released}\n
     • *مدة العرض:* ${json.runtime}\n
     • *الأنواع:* ${json.genres}\n
     • *المخرج:* ${json.director}\n
     • *الكاتب:* ${json.writer}\n
     • *الممثلين:* ${json.actors}\n
     • *القصة:* ${json.plot}\n
     • *اللغات:* ${json.languages}\n
     • *الدولة:* ${json.country}\n
     • *الجوائز:* ${json.awards}\n
     • *Metascore:* ${json.metascore}\n
     • *التقييم:* ${json.rating}\n
     • *عدد الأصوات:* ${json.votes}\n
     • *رقم الـIMDB:* ${json.imdbid}\n
     • *النوع:* ${json.type}\n
     • *DVD:* ${json.dvd}\n
     • *إيرادات شباك التذاكر:* ${json.boxoffice}\n
     • *الإنتاج:* ${json.production}\n
     • *الموقع:* ${json.website}\n\n
     *التقييمات:*\n${ratings}`;

    // بعت صورة بوستر الفيلم مع معلومات الفيلم في الكابشن
    await conn.sendFile(m.chat, json.poster, 'poster.jpg', movieInfo, m);
  } catch (error) {
    console.error(error);
    // التعامل مع الخطأ بشكل مناسب
  }
};

imdbHandler.help = ['imdb'];
imdbHandler.tags = ['tools'];
imdbHandler.command = /^(imdb|movie|موفي|فيلم)$/i;

export default imdbHandler;