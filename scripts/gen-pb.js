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

  const re = /import "protobuf\/.*?\/([^/]+)";/g
  const replaced = res.data.replaceAll(re, (_, p1) => `import "${p1}";`)

  await fs.writeFile(
    `${protoDir}/${getRestOrWs(url)}/${getFileName(url)}.proto`,
    replaced
  )
}

const protoDir = path.resolve(__dirname, '../', 'protobuf')
const jsDir = path.resolve(__dirname, '../', 'src/lib/apis/pb')
const tsDir = path.resolve(__dirname, '../', 'src/types/pb')

;(async () => {
  await fs.mkdir(`${jsDir}/rest`, {
    recursive: true,
  })
  await fs.mkdir(`${jsDir}/ws`, {
    recursive: true,
  })
  await fs.mkdir(tsDir, {
    recursive: true,
  })
  await fs.mkdir(`${protoDir}/rest`, {
    recursive: true,
  })
  await fs.mkdir(`${protoDir}/ws`, {
    recursive: true,
  })

  for (const url of PROTO_PATH) {
    await downloadFile(url)
  }

  for (const url of PROTO_PATH) {
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
      function (err) {
        if (err) throw err
      }
    )

    pbts.main(
      [
        '-o',
        `${tsDir}/${getFileName(url)}.d.ts`,
        `${jsDir}/${getRestOrWs(url)}/${getFileName(url)}.js`,
      ],
      function (err) {
        if (err) throw err
      }
    )

    fs.rm(protoDir, { recursive: true }, (err) => {
      if (err) {
        throw err
      }
    })
  }
})()
