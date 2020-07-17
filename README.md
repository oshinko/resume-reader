# Resume Reader

- [Demo](https://oshinko.github.io/resume-reader)
- 履歴書 (レジュメ) を表現する構造化データをファイルから読み込んで表示する
- YAML もしくは JSON 形式の履歴書ファイルを読み込み可能
- ブラウザの印刷機能を使うことで PDF に変換することが可能

YAML から JSON に変換する際、以下のコードをブラウザで実行すると手間が省けます。

```javascript
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/js-yaml@3.14.0/dist/js-yaml.min.js';
document.body.append(script);

var input = document.createElement('input');
input.type = 'file';
input.accept = '.yaml,.yml';
input.addEventListener('change', event => {
  let reader = new FileReader();
  reader.onload = event => console.log(JSON.stringify(jsyaml.load(event.target.result), null, 4));
  reader.readAsText(event.target.files[0]);
});
document.body.append(input);
```
