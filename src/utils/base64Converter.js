export default function utf8_to_b64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
