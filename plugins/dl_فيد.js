import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

const handler = async (m, {command, usedPrefix, conn, text}) => {
  if (!text) throw `*[❗] ايه ده؟ انت مفكر البوت ده هينزللك فيديوهات كده من غير ما تقولي اسمها؟ قول اسم الفيديو أو الرابط! وكمان، أنا مش مسؤل عن أي أغاني مش نافعة أو محتوى ما تطيقش تشوفه!*\n *~ بس حابب أفكرك إن ذنبك على جنبك ~*\n\n*—◉ مـثـال:*\n*${usedPrefix + command} save your ters*`;

  try {
    if (command === 'حملي') {
      m.reply('استنى شوية، البوت بيشتغل على الموضوع');
      
      try {
        const mediaa = await ytPlay(text);
        const audiocore = mediaa.result2?.[0]?.audio || mediaa.result2?.[1]?.audio || mediaa.result2?.[2]?.audio || null;
        const aa = await conn.sendMessage(m.chat, {audio: {url: audiocore}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
        
        if (!aa) {
          throw new Error('*[❗خطأ❗] حصلت مصيبة، حاول تاني بعد شوية*');
        }        
      } catch {
        const res = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`);
        const json = await res.json();
        const aa_1 = await conn.sendMessage(m.chat, {audio: {url: json.result.audio}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
        if (!aa_1) {
          await conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, {mimetype: 'audio/mp4'});
        }
      }
    }
    
    if (command === 'فيد') {
      await conn.sendMessage(m.chat, { react: { text: '🤌🏻', key: m.key } });
      
      try {
        const mediaa = await ytPlayVid(text);
        const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `*『🐉┇بـوت التربو』*\n> *أنا مبرأ من أي محتوى ممكن يطلع قدامك هنا، سواء مرئي أو مسموع.*`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
        
        if (!aa_2) {
          throw new Error('*[❗خطأ❗] حصلت مصيبة، حاول تاني بعد شوية*');
        }
      } catch {
        const res = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`);
        const json = await res.json();
        await conn.sendFile(m.chat, json.result.video, 'error.mp4', `> *أنا مبرأ من أي محتوى ممكن يطلع قدامك هنا.*`, m);
      }
    }
  } catch {
    throw '*[❗خطأ❗] حصلت مصيبة، حاول تاني بعد شوية*';
  }
};

handler.help = ['play.1', 'play.2'].map((v) => v + ' <texto>');
handler.tags = ['downloader'];
handler.command = ['حملي', 'فيد'];

export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType === 'audio/webm; codecs="opus"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio !== undefined && x.size !== undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container === 'mp4' && item.hasVideo === true && item.hasAudio === true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video !== undefined && x.size !== undefined && x.quality !== undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice(0, 5);
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice(0, 5);
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}