import { hiqidashi } from '/@/lib/apis/pb/ws/hiqidashi'

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

export const constructHiqidashiTree = (hiqidashis: hiqidashi.Hiqidashi[]) => {
  const childrenMap = new Map<string, hiqidashi.Hiqidashi[]>()

  hiqidashis.forEach((hiqidashi) => {
    if (!hiqidashi.parentId?.value) {
      return
    }
    if (childrenMap.has(hiqidashi.parentId.value)) {
      childrenMap.get(hiqidashi.parentId.value)?.push(hiqidashi)
    } else {
      childrenMap.set(hiqidashi.parentId.value, [hiqidashi])
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
      creatorId: root.creatorId,
      colorCode: root.colorCode,
      mode: 'normal',
    }
  }

  const rootHiqidashis = hiqidashis.filter((hiqidashi) => !hiqidashi.parentId)
  if (rootHiqidashis.length !== 1) {
    throw new Error()
  }
  const rootHiqidashi = rootHiqidashis[0]

  return makeHiqidashiTreeRecursive('', rootHiqidashi)
}
