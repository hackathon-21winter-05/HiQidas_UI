import { hiqidashi } from '/@/lib/apis/pb/ws/hiqidashi'

export type HiqidashiTree = {
  children: HiqidashiTree[]
  id: string
  title: string
  description: string
}

export const constructHiqidashiTree = (hiqidashis: hiqidashi.Hiqidashi[]) => {
  const childrenMap = new Map<string, hiqidashi.Hiqidashi[]>()

  hiqidashis.forEach((hiqidashi) => {
    if (childrenMap.has(hiqidashi.parentId)) {
      childrenMap.get(hiqidashi.parentId)?.push(hiqidashi)
    } else {
      childrenMap.set(hiqidashi.parentId, [hiqidashi])
    }
  })

  const makeHiqidashiTreeRecursive = (
    root: hiqidashi.Hiqidashi
  ): HiqidashiTree => {
    const children = childrenMap.get(root.id) ?? []

    return {
      children: children.map((child) => makeHiqidashiTreeRecursive(child)),
      id: root.id,
      title: root.title,
      description: root.description,
    }
  }

  const rootHiqidashis = hiqidashis.filter((hiqidashi) => !hiqidashi.parentId)
  if (rootHiqidashis.length !== 1) {
    throw new Error()
  }
  const rootHiqidashi = rootHiqidashis[0]

  return makeHiqidashiTreeRecursive(rootHiqidashi)
}
