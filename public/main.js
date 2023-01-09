async function getfile(url) {
  var output;
  await fetch(url)
    .then((res) => res.text())
    .then((out) => (output = out));
  return output;
}

async function copyToClipboard(url) {
  var output = await getfile(url);
  navigator.clipboard.writeText(output);
}
