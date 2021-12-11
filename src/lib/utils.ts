const defaultColors = [
  '0F2540',
  '00AA90',
  'E03C8A',
  '9E7A7A',
  '2EA9DF',
  '42602D',
  '77428D',
  'FFB11B',
]

export const getRandomColor = () => {
  const idx = Math.floor(Math.random() * defaultColors.length)

  return `#${defaultColors[idx]}`
}

export const getDefaultColors = () => defaultColors.map((color) => `#${color}`)

export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}/${month}/${day}`
}
