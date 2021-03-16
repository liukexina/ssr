export default function template(content = '') {
	let page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="icon" href="data:;base64,=">
</head>
<body>
  <div id="app">${content}</div>
</body>
<script src="/client.js"></script>`;
	return page;
}
