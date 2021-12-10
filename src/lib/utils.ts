export const getRandomColor = () => {
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
  const idx = Math.floor(Math.random() * defaultColors.length)

  return `#${defaultColors[idx]}`
}