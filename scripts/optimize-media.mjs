import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const root = process.cwd();
const srcDir = path.join(root, "public", "assets");
const outDir = path.join(root, "public", "assets", "work");

function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, args, { stdio: "inherit" });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}`));
    });
  });
}

await mkdir(outDir, { recursive: true });

await sharp(path.join(srcDir, "ATM 7.jpg"))
  .resize({ width: 1400, withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(outDir, "atm-7.jpg"));

await sharp(path.join(srcDir, "ATM 16.jpg"))
  .resize({ width: 1400, withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(outDir, "atm-16.jpg"));

const videos = [
  { in: "brigo donne without.mp4", out: "brigo-donne", posterAt: "00:00:01" },
  { in: "SDM Service Madurai_2.mp4", out: "sdm-service-madurai", posterAt: "00:00:01" },
  { in: "Tkb.mp4", out: "tkb", posterAt: "00:00:01" },
  { in: "RP Reel 04.mp4", out: "rp-reel-04", posterAt: "00:00:01" },
  { in: "PKS FINAL 3 (1).mp4", out: "pks-final", posterAt: "00:00:01" },
  { in: "senjeri murugar v3.mp4", out: "senjeri-murugar", posterAt: "00:00:02" },
];

for (const video of videos) {
  const input = path.join(srcDir, video.in);
  const mp4 = path.join(outDir, `${video.out}.mp4`);
  const poster = path.join(outDir, `${video.out}.jpg`);

  await run([
    "-y",
    "-i",
    input,
    "-vf",
    "scale='min(1280,iw)':-2",
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-crf",
    "23",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-movflags",
    "+faststart",
    "-pix_fmt",
    "yuv420p",
    mp4,
  ]);

  await run([
    "-y",
    "-ss",
    video.posterAt,
    "-i",
    input,
    "-frames:v",
    "1",
    "-vf",
    "scale='min(1400,iw)':-2",
    "-q:v",
    "3",
    poster,
  ]);
}

console.log("Optimized assets written to public/assets/work");
