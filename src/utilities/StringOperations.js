export function toTitleCase(sentence) {
  return !sentence || !sentence.length
    ? ''
    : sentence.length === 1
    ? sentence.toUpperCase()
    : sentence
        .split(' ')
        .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
        .join(' ')
}
