import { hiqidashi } from '/@/lib/apis/pb/ws/hiqidashi'

export type HiqidashiTree = {
  children: HiqidashiTree[]
  id: string
  parentId: string
  title: string
  description: string
  colorId: string
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
    parentId: string,
    root: hiqidashi.Hiqidashi
  ): HiqidashiTree => {
    const children = childrenMap.get(root.id) ?? []

    return {
      children: children.map((child) =>
        makeHiqidashiTreeRecursive(root.id, child)
      ),
      id: root.id,
      parentId,
      title: root.title,
      description: root.description,
      colorId: root.colorId,
    }
  }

  const rootHiqidashis = hiqidashis.filter((hiqidashi) => !hiqidashi.parentId)
  if (rootHiqidashis.length !== 1) {
    throw new Error()
  }
  const rootHiqidashi = rootHiqidashis[0]

  return makeHiqidashiTreeRecursive('', rootHiqidashi)
}
