import QRCode from 'qrcode';
import './garden.css';

// Original vector illustrations: no remote image dependencies.
const cat = `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path d="M145 143c28 4 35-16 24-24-8-6-17 1-11 7" stroke="#faf7ed" stroke-width="22" stroke-linecap="round"/>
  <path d="M145 143c28 4 35-16 24-24-8-6-17 1-11 7" stroke="#898b76" stroke-width="2" stroke-linecap="round"/>
  <path d="M62 105c-14 17-18 43-4 49 11 5 23 3 31 3h39c18 0 23-8 16-24l-15-30" fill="#fffcf4" stroke="#898b76" stroke-width="2"/>
  <path d="M46 54 40 19c-1-6 3-8 8-5l29 17c12-5 31-5 44-1l27-18c5-3 9-1 9 4l-3 40c15 21 7 48-15 56-21 9-52 10-73 0C39 102 33 75 46 54Z" fill="#fffcf4" stroke="#898b76" stroke-width="2.3" stroke-linejoin="round"/>
  <path d="m49 26 6 23 13-12Z" fill="#eac2ba"/><path d="m146 25-16 13 14 10Z" fill="#eac2ba"/>
  <path d="M71 69q6-7 12 0M117 69q6-7 12 0" stroke="#686e60" stroke-width="2.8" stroke-linecap="round"/>
  <ellipse cx="63" cy="80" rx="12" ry="6" fill="#efd1c9"/><ellipse cx="136" cy="80" rx="12" ry="6" fill="#efd1c9"/>
  <path d="m96 78 5 4 5-4" fill="#c79c8f"/><path d="M101 82v5m0-1q-6 8-12 0m12 0q6 8 12 0" stroke="#686e60" stroke-width="1.8" stroke-linecap="round"/>
  <path d="m38 76 15 3m-14 8 14-2m95-6 16-4m-16 11 17 1" stroke="#9c9c86" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M76 143c-2-8-1-15 0-19m49 18c2-8 1-14 0-18" stroke="#999a85" stroke-width="2" stroke-linecap="round"/>
  <path d="M101 111c-9-12-25 1-14 12l14 13 14-13c11-11-5-24-14-12Z" fill="#d9a397" stroke="#b98275" stroke-width="1.4"/>
  <path d="M73 118c4-5 13-2 15 4m40-4c-4-5-13-2-15 4" fill="#fffcf4" stroke="#898b76" stroke-width="2" stroke-linecap="round"/>
  <path d="m88 34 3 14m10-16 1 15m10-14-2 15" stroke="#d2cabb" stroke-width="4" stroke-linecap="round"/>
</svg>`;

function daisy(x, y, scale = 1, color = '#fffcf0', center = '#c6a253', rotation = 0) {
  let petals = '';
  for (let i = 0; i < 10; i++) petals += `<ellipse cx="0" cy="-20" rx="8" ry="17" fill="${color}" transform="rotate(${i * 36})"/>`;
  return `<g transform="translate(${x} ${y}) rotate(${rotation}) scale(${scale})">${petals}<circle r="10" fill="${center}"/><circle r="6" fill="#d5b774" opacity=".6"/><g fill="#a68a42"><circle cx="-3" cy="-3" r="1"/><circle cx="4" cy="-1" r="1.2"/><circle cx="-1" cy="4" r="1.2"/></g></g>`;
}
function rose(x, y, scale = 1, color = '#dba49d') {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none"><path d="M-28 8c-17-12-11-30 3-34 0-17 23-24 33-12 17-8 34 4 30 18 17 12 10 33-5 34-7 18-31 23-40 9-12 5-22-4-21-15Z" fill="${color}"/><path d="M-25-11c9-13 28-11 31-2M17-27C2-27-4-14 2-6M28 0C19-13 6-9 1 2M16 20C20 6 8 0-1 5M-15 19c15 4 18-5 15-14M-27 3c6 13 19 11 25 3" stroke="#b77e7d" stroke-width="2" opacity=".45" stroke-linecap="round"/><path d="M-8-5c-5 8 1 15 10 10 10-5 1-14-6-8" stroke="#b77e7d" stroke-width="2"/><path d="M-24-19c-4-11 10-20 20-14" stroke="#f5d2c8" stroke-width="6" stroke-linecap="round" opacity=".55"/></g>`;
}
const bouquet = `<svg viewBox="0 0 330 360" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="paper"><stop stop-color="#f4eee1"/><stop offset="1" stop-color="#e6dfcf"/></radialGradient><linearGradient id="wrap" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e5d1b6"/><stop offset="1" stop-color="#ceb495"/></linearGradient></defs>
  <rect width="330" height="360" fill="url(#paper)"/>
  <ellipse cx="172" cy="311" rx="79" ry="13" fill="#73654d" opacity=".06"/>
  <g stroke="#7d8e68" stroke-width="3" fill="none"><path d="m166 301-52-185m54 185 42-213m-42 207-7-210m7 209-80-99m79 102 89-145m-88 144 62-176"/></g>
  <g fill="#8d9d79"><path d="M135 210c-41-8-64-31-60-54 32 3 53 21 60 54"/><path d="M147 174c-34-9-49-34-39-53 24 11 35 28 39 53"/><path d="M183 202c9-37 32-52 56-46-9 30-31 44-56 46"/><path d="M181 158c-12-25-9-49 8-60 14 23 10 43-8 60"/><path d="M210 148c-2-28 9-47 29-50 2 28-10 43-29 50"/><path d="M106 159c-33-1-51-16-51-37 26-1 45 15 51 37"/></g>
  <g stroke="#9aa789" stroke-width="2" fill="#a8b194"><path d="M101 171C70 145 66 111 72 78"/><ellipse cx="67" cy="91" rx="7" ry="14" transform="rotate(-32 67 91)"/><ellipse cx="79" cy="112" rx="7" ry="14" transform="rotate(30 79 112)"/><ellipse cx="65" cy="126" rx="7" ry="14" transform="rotate(-38 65 126)"/><path d="M213 187c35-39 43-65 46-93"/><ellipse cx="258" cy="113" rx="7" ry="15" transform="rotate(38 258 113)"/><ellipse cx="246" cy="135" rx="7" ry="15" transform="rotate(-21 246 135)"/><ellipse cx="259" cy="151" rx="7" ry="15" transform="rotate(40 259 151)"/></g>
  <path d="m76 185 70 132 48 7 60-143-82 34Z" fill="url(#wrap)"/><path d="m76 185 86 60-16 72Z" fill="#e7d8c0"/><path d="m254 181-92 64 32 79Z" fill="#d9c3a4"/><path d="m107 193 54 55 66-51-54 26Z" fill="#f2e5cf"/>
  ${daisy(112, 110, .9, '#fffbed', '#c6a154', -8)}
  ${daisy(217, 96, .65, '#fdf8e8', '#c6a154', 7)}
  ${rose(164, 101, .9, '#dca99e')}
  ${rose(207, 153, .91, '#d8a19b')}
  ${rose(122, 166, 1.05, '#e4b9ac')}
  ${daisy(166, 178, .77)}
  ${daisy(226, 194, .53, '#fdf9e8', '#c6a154', 15)}
  ${daisy(80, 169, .5)}
  ${daisy(171, 55, .44)}
  <g fill="#fffbef"><circle cx="241" cy="129" r="4"/><circle cx="249" cy="120" r="3"/><circle cx="250" cy="134" r="3"/><circle cx="87" cy="133" r="4"/><circle cx="83" cy="145" r="3"/><circle cx="95" cy="140" r="3"/><circle cx="199" cy="56" r="3"/></g>
  <path d="m142 273 53 1-3 10-46-1Z" fill="#b78c7c"/><path d="M168 278c-42-33-44 11 0 0 33-35 48 7 0 0Z" fill="#c9a390" stroke="#ad8174" stroke-width="1.2"/><path d="m166 279-13 40 10-7 5 8 4-39m0-2 26 29-9-1-2 9-18-35" fill="#c9a390"/><ellipse cx="169" cy="278" rx="6" ry="5" fill="#b58a78"/>
</svg>`;
document.querySelector('#bouquet').innerHTML = bouquet;
document.querySelector('#hero-cat').innerHTML = cat;
document.querySelector('#gift-cat').innerHTML = cat;

const calendar = document.querySelector('#calendar');
const weekdayRow = document.createElement('div');
weekdayRow.className = 'calendar-row';
weekdayRow.setAttribute('role', 'row');
['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].forEach(day => {
  const cell = document.createElement('span');
  cell.className = 'calendar-day calendar-weekday';
  cell.setAttribute('role', 'columnheader');
  cell.textContent = day;
  weekdayRow.append(cell);
});
calendar.append(weekdayRow);
const offset = (new Date(2026, 9, 1).getDay() + 6) % 7;
for (let week = 0; week < 5; week++) {
  const row = document.createElement('div');
  row.className = 'calendar-row';
  row.setAttribute('role', 'row');
  for (let col = 0; col < 7; col++) {
    const day = week * 7 + col - offset + 1;
    const cell = document.createElement('span');
    cell.className = `calendar-day${col > 4 ? ' weekend' : ''}${day === 20 ? ' special' : ''}`;
    cell.setAttribute('role', 'cell');
    if (day > 0 && day <= 31) {
      cell.textContent = day;
      if (day === 20) cell.setAttribute('aria-label', '20 tháng 10, Ngày Phụ nữ Việt Nam');
    }
    row.append(cell);
  }
  calendar.append(row);
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function flowerRain(container = document.querySelector('#petals'), count = 28) {
  if (reducedMotion.matches) return;
  const flowers = ['✿', '❀', '♡', '✾'];
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    petal.style.setProperty('--left', `${Math.random() * 100}%`);
    petal.style.setProperty('--size', `${12 + Math.random() * 15}px`);
    petal.style.setProperty('--duration', `${3 + Math.random() * 3}s`);
    petal.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
    petal.style.animationDelay = `${Math.random() * 1.5}s`;
    petal.style.color = ['#d4a293', '#a6b392', '#dfb9ab'][i % 3];
    container.append(petal);
    petal.addEventListener('animationend', () => petal.remove(), { once: true });
  }
}
let toastTimer;
function toast(message) {
  const el = document.querySelector('#toast');
  el.textContent = message;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), 3400);
}

function openDialog(dialog) {
  dialog.classList.remove('dialog-leaving');
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}
let switchingDialog = false;
async function transitionDialog(from, to) {
  if (switchingDialog) return;
  switchingDialog = true;
  from.classList.add('dialog-leaving');
  if (!reducedMotion.matches) await new Promise(resolve => setTimeout(resolve, 240));
  from.close();
  from.classList.remove('dialog-leaving');
  if (to) openDialog(to);
  switchingDialog = false;
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('close', () => {
    document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : '';
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => transitionDialog(document.getElementById(button.dataset.close))));
document.querySelectorAll('.open-letter').forEach(button => button.addEventListener('click', () => {
  openDialog(document.querySelector('#letter-dialog'));
}));
const gardenDialog = document.querySelector('#garden-dialog');
const gardenRain = document.querySelector('#garden-rain');
document.querySelector('#garden-cat').innerHTML = cat;
// Deterministic arrangement keeps the little garden balanced on every visit.
let plants = '';
for (let i = 0; i < 27; i++) {
  const x = 18 + i * 37;
  const y = 130 + ((i * 47) % 135);
  const scale = .37 + (i % 4) * .09;
  const colors = ['#fcf9e9', '#e9b9ac', '#f4ddc5', '#fdfbf2'];
  plants += `<g class="garden-plant" style="--sway-delay:-${i % 7}s;--sway-time:${4 + i % 3}s;transform-origin:${x}px 400px">
    <path d="M${x} 410Q${x - 18} ${y + 80} ${x} ${y}" fill="none" stroke="#8c9f77" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M${x - 6} ${y + 101}q-32-4-29-29 26 3 29 29M${x - 6} ${y + 135}q34-6 30-30-27 4-30 30" fill="${i % 2 ? '#b6c49e' : '#9fb58c'}"/>
    ${daisy(x, y, scale, colors[i % 4], '#cbb16d', i * 11)}
  </g>`;
}
document.querySelector('#garden-flowers').innerHTML = `<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">${plants}</svg>`;
function gardenShower(count = 12) {
  if (reducedMotion.matches || document.hidden || !gardenDialog.open) return;
  const room = Math.max(0, 65 - gardenRain.childElementCount);
  for (let i = 0; i < Math.min(count, room); i++) {
    const petal = document.createElement('span');
    petal.className = 'garden-petal';
    petal.style.setProperty('--x', `${Math.random() * 100}%`);
    petal.style.setProperty('--drift', `${Math.random() * 100 - 50}px`);
    petal.style.setProperty('--duration', `${6 + Math.random() * 4}s`);
    petal.style.setProperty('--delay', `${Math.random() * 2}s`);
    petal.style.setProperty('--petal-color', ['#e6b1a8', '#eed4bf', '#fffdf0'][i % 3]);
    gardenRain.append(petal);
    petal.addEventListener('animationend', () => petal.remove(), { once: true });
  }
}
let gardenTimer;
function stopGardenRain() {
  clearInterval(gardenTimer);
  gardenRain.replaceChildren();
}
document.querySelector('#flower-button').addEventListener('click', async () => {
  await transitionDialog(document.querySelector('#letter-dialog'), gardenDialog);
  clearInterval(gardenTimer);
  gardenShower(24);
  gardenTimer = setInterval(() => gardenShower(7), 2200);
});
document.querySelector('#garden-back').addEventListener('click', () => {
  transitionDialog(gardenDialog, document.querySelector('#letter-dialog'));
});
gardenDialog.addEventListener('close', stopGardenRain);
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) gardenRain.replaceChildren();
});
document.querySelector('#garden-rain-button').addEventListener('click', () => {
  gardenShower(22);
  document.querySelector('#garden-status').textContent = 'Thêm một chút yêu thương, dành riêng cho nàng.';
});
const wishes = [
  ['Gửi nàng một chiếc ôm!', 'Mệt thì nghỉ một chút, có mèo ở đây rồi.'],
  ['Nàng đã làm tốt lắm rồi!', 'Hôm nay nhớ dành một chút dịu dàng cho mình nhé.'],
  ['Chúc nàng cười thật nhiều!', 'Nụ cười của nàng làm ngày thường cũng hóa thật xinh.'],
  ['Mọi điều tốt đẹp đang đến!', 'Cứ bước theo nhịp của mình, không cần vội đâu.'],
  ['Nàng xứng đáng được yêu thương!', 'Hôm nay, ngày mai, và cả những ngày sau nữa.'],
  ['Một ngày 20/10 thật rực rỡ!', 'Hoa xinh, trời đẹp, và nàng là điều đáng yêu nhất.'],
];
let wishIndex = 0;
function hug() {
  wishIndex = (wishIndex + 1) % wishes.length;
  document.querySelector('#cat-wish').textContent = wishes[wishIndex][0];
  document.querySelector('#cat-description').textContent = wishes[wishIndex][1];
  const button = document.querySelector('#cat-button');
  button.classList.remove('bounce');
  void button.offsetWidth;
  button.classList.add('bounce');
  flowerRain(undefined, 12);
}
document.querySelector('#cat-button').addEventListener('click', hug);
document.querySelector('#hug-button').addEventListener('click', hug);

const shareInput = document.querySelector('#share-url');
const shareStatus = document.querySelector('#share-status');
let qrUrl = '';
let generationId = 0;
function defaultShareUrl() {
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  return url.href;
}
shareInput.value = defaultShareUrl();
function validUrl(value) {
  try {
    const url = new URL(value.trim());
    return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
async function updateQr() {
  const url = validUrl(shareInput.value);
  const id = ++generationId;
  shareStatus.textContent = '';
  if (!url) {
    shareStatus.textContent = 'Nhập một đường dẫn đầy đủ, bắt đầu bằng https:// hoặc http:// nhé.';
    return false;
  }
  try {
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, url, { width: 600, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#354b38', light: '#ffffff' } });
    if (id !== generationId) return false;
    const target = document.querySelector('#qr-canvas');
    target.width = canvas.width;
    target.height = canvas.height;
    target.getContext('2d').drawImage(canvas, 0, 0);
    qrUrl = url;
    const host = new URL(url).hostname;
    const local = /^(localhost|127\.|0\.0\.0\.0|192\.168\.|10\.|\[::1\])/.test(host) || /^172\.(1[6-9]|2\d|3[01])\./.test(host);
    document.querySelector('#share-hint').textContent = local
      ? 'Đây là địa chỉ cục bộ. Điện thoại cần dùng cùng Wi-Fi và đường dẫn IP của máy tính. Để gửi từ xa, hãy dùng đường dẫn website đã được đưa lên mạng.'
      : 'Mã QR mở đường dẫn ở trên. Hãy dùng đường dẫn website đã hoạt động để nàng có thể nhận quà nhé.';
    return true;
  } catch {
    shareStatus.textContent = 'Chưa tạo được mã QR. Thử dùng một đường dẫn ngắn hơn nhé.';
    return false;
  }
}
document.querySelector('#share-button').addEventListener('click', () => {
  openDialog(document.querySelector('#share-dialog'));
  updateQr();
});
document.querySelector('#update-qr').addEventListener('click', async () => {
  if (await updateQr()) shareStatus.textContent = 'Đã cập nhật mã QR ♡';
});
shareInput.addEventListener('change', updateQr);
shareInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') { event.preventDefault(); updateQr(); }
});
document.querySelector('#copy-link').addEventListener('click', async () => {
  if (!await updateQr()) return;
  try {
    await navigator.clipboard.writeText(qrUrl);
    shareStatus.textContent = 'Đã sao chép đường dẫn. Gửi cho nàng thôi ♡';
  } catch {
    shareInput.focus();
    shareInput.select();
    shareStatus.textContent = 'Hãy sao chép đường dẫn đang được chọn nhé.';
  }
});
document.querySelector('#download-qr').addEventListener('click', async () => {
  if (!await updateQr()) return;
  const link = document.createElement('a');
  link.download = 'gui-nang-20-10-QR.png';
  link.href = document.querySelector('#qr-canvas').toDataURL('image/png');
  link.click();
  shareStatus.textContent = 'Đã chuẩn bị mã QR để lưu ♡';
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.gift-card,.closing').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 3) * 100}ms`;
  observer.observe(el);
});
setTimeout(() => flowerRain(undefined, 9), 800);
