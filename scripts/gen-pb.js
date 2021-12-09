/* eslint-disable @typescript-eslint/no-var-requires */
// const pbjs = require('protobufjs-cli/pbjs')
const axios = require('axios')
const fs = require('fs').promises
const path = require('path')
const pbjs = require('protobufjs/cli').pbjs
const pbts = require('protobufjs/cli').pbts

// いい感じに取得できるかも
const PROTO_PATH = [
  'https://raw.githubusercontent.com/hackathon-21winter-05/HiQidas/main/protobuf/rest/common.proto',
  'https://raw.githubusercontent.com/hackathon-21winter-05/HiQidas/main/protobuf/rest/heyas.proto',
  'https://raw.githubusercontent.com/hackathon-21winter-05/HiQidas/main/protobuf/rest/oauth.proto',
  'https://raw.githubusercontent.com/hackathon-21winter-05/HiQidas/main/protobuf/rest/users.proto',

  'https://raw.githubusercontent.com/hackathon-21winter-05/HiQidas/main/protobuf/ws/hiqidashi.proto',
  'https://raw.githubusercontent.com/hackathon-21winter-05/HiQidas/main/protobuf/ws/ws.proto',
]

const getFileName = (url) => {
  const re = /.*?([^/]+)\.proto/
  return re.exec(url)[1]
}

const getRestOrWs = (url) => {
  if (url.includes('rest')) {
    return 'rest'
  } else {
    return 'ws'
  }
}

const downloadFile = async (url) => {
  const res = await axios.get(url)

  // importがなんかうまくいかないのでreplace
  // 時間があったらどうにかする
  const re = /import "protobuf\/.*?\/([^/]+)";/g
  const replaced = res.data.replaceAll(re, (_, p) => `import "${p}";`)

  await fs.writeFile(
    `${protoDir}/${getRestOrWs(url)}/${getFileName(url)}.proto`,
    replaced
  )
}

const makeDir = async (path) => {
  await fs.mkdir(path, {
    recursive: true,
  })
}

const protoDir = path.resolve(__dirname, '../', 'protobuf')
const jsDir = path.resolve(__dirname, '../', 'src/lib/apis/pb')

;(async () => {
  await makeDir(`${jsDir}/rest`)
  await makeDir(`${jsDir}/ws`)
  await makeDir(`${protoDir}/rest`)
  await makeDir(`${protoDir}/ws`)

  for (const url of PROTO_PATH) {
    await downloadFile(url)
  }

  for (const url of PROTO_PATH) {
    // .js の生成
    pbjs.main(
      [
        '-t',
        'static-module',
        '-w',
        'es6',
        '-o',
        `${jsDir}/${getRestOrWs(url)}/${getFileName(url)}.js`,
        `${protoDir}/${getRestOrWs(url)}/${getFileName(url)}.proto`,
      ],
      (err) => {
        if (err) throw err
      }
    )

    // .d.ts の生成
    pbts.main(
      [
        '-o',
        `${jsDir}/${getRestOrWs(url)}/${getFileName(url)}.d.ts`,
        `${jsDir}/${getRestOrWs(url)}/${getFileName(url)}.js`,
      ],
      (err) => {
        if (err) throw err
      }
    )
  }
  await fs.rm(protoDir, { recursive: true })
})()
