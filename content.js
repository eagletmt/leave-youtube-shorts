const m = window.location.href.match(/^https:\/\/www\.youtube\.com\/shorts\/([^/]+)$/);
if (m !== null) {
  const id = m[1];
  window.location.href = `https://www.youtube.com/watch?v=${id}`;
}
