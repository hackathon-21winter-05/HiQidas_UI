import { Hiqidashi } from '/@/lib/pb/protobuf/ws/hiqidashi'

export type HiqidashiTree = {
  children: HiqidashiTree[]
  id: string
  parentId: string
  title: string
  creatorId: string
  description: string
  colorCode: string
  mode: 'normal' | 'edit' | 'init'
}

export const constructHiqidashiTree = (
  hiqidashis: Hiqidashi[],
  setHiqidashi: (h: Hiqidashi) => void
) => {
  const childrenMap = new Map<string, Hiqidashi[]>()

  hiqidashis.forEach((hiqidashi) => {
    if (!hiqidashi.parentId) {
      return
    }
    if (childrenMap.has(hiqidashi.parentId)) {
      childrenMap.get(hiqidashi.parentId)?.push(hiqidashi)
    } else {
      childrenMap.set(hiqidashi.parentId, [hiqidashi])
    }
  })

  const makeHiqidashiTreeRecursive = (root: Hiqidashi) => {
    const children = childrenMap.get(root.id) ?? []

    children.forEach((child) => {
      setHiqidashi(child)
      makeHiqidashiTreeRecursive(child)
    })
  }

  const rootHiqidashis = hiqidashis.filter((hiqidashi) => !hiqidashi.parentId)
  if (rootHiqidashis.length !== 1) {
    throw new Error()
  }
  const root = rootHiqidashis[0]

  setHiqidashi(root)

  makeHiqidashiTreeRecursive(root)
}
