const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const video = document.getElementById('video');
const downloadBtn = document.getElementById('downloadBtn');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  if (file.type.startsWith('image/')) {
    // Show canvas, hide video
    video.style.display = 'none';
    canvas.style.display = 'block';

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = url;
  } else if (file.type.startsWith('video/')) {
    // Show video, hide canvas
    canvas.style.display = 'none';
    video.style.display = 'block';
    video.src = url;
  }
});

downloadBtn.addEventListener('click', () => {
  // Download the current canvas image
  const image = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = image;
  a.download = 'edited_image.png';
  a.click();
});

