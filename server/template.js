export default ({ html, assets }) => {
  return `<!DOCTYPE html>
<html>
<head>
<title>Hello World: Hot Reload</title>
</head>
<body>
<div id="root">${html}</div>
</body>
<script src="${assets["vendor.js"]}"></script>
<script src="${assets["manifest.js"]}"></script>
<script src="${assets["main.js"]}"></script>
</html>`;
};
