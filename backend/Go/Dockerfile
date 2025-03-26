FROM golang:1.21-alpine

WORKDIR /app

# airのインストール
RUN go install github.com/cosmtrek/air@v1.49.0

# ソースコードのコピー
COPY . .

# 依存関係の解決
RUN go mod download

# ポートの公開
EXPOSE 8080

# 開発環境用のコマンド
CMD ["air"] 