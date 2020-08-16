const ffmpegHelper = require('./ffmpeg_helper');

(async () => {
   await ffmpegHelper.convertToHls('./sourceMP4/sampleVideo1.mp4');
})();