# motocal
元カレ計算機（グラブル攻撃力計算機）の開発用リポジトリです。

- src: トランスパイル前のソースコード
- build: トランスパイル後のソースコード
- release.sh: 本番リリース用のシェルスクリプト

面倒なのでcontent-dev.jsを開発用で使用し、
リリース時に本番用のcontent.jsにcpしています。

現在のトランスパイルコマンド
``browserify -t reactify src/content-dev.js -o build/content-dev.js``

DB通信用の*phpファイルは管理していません。