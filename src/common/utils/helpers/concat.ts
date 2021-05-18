const concat = (...items: (string | number | boolean | undefined)[]) => [...items].join(' ').trim()

export default concat