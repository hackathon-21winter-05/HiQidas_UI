/* eslint-disable @typescript-eslint/no-var-requires */
// const pbjs = require('protobufjs-cli/pbjs')
const axios = require('axios')
const fs = require('fs').promises
const path = require('path')
const { exec } = require('child_process')
const { promisify } = require('util')
const execPromise = promisify(exec)

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

  await fs.writeFile(
    `${protoDir}/${getRestOrWs(url)}/${getFileName(url)}.proto`,
    res.data
  )
}

const makeDir = async (path) => {
  await fs.mkdir(path, {
    recursive: true,
  })
}

const protoDir = path.resolve(__dirname, '../', 'protobuf')
const genDir = path.resolve(__dirname, '../', 'src/lib/pb')

;(async () => {
  await makeDir(`${protoDir}/rest`)
  await makeDir(`${protoDir}/ws`)
  await makeDir(genDir)
  for (const url of PROTO_PATH) {
    await downloadFile(url)
  }

  const generateCmds = PROTO_PATH.map((url) => [
    'protoc',
    '--plugin=./node_modules/.bin/protoc-gen-ts_proto',
    '--ts_proto_out=./src/lib/pb',
    `./protobuf/${getRestOrWs(url)}/${getFileName(url)}.proto`,
    `--ts_proto_opt=esModuleInterop=true`,
  ])

  for (const cmd of generateCmds) {
    await execPromise(cmd.join(' '))
  }

  await fs.rm(protoDir, { recursive: true })
})()
