const emoji1 = ["👀", "🖕", "🔪"]
const emoji = ["☠️", "⚔️", "💣", "🤬", "💥"]
const getEmoji = function () {
    return emoji[Math.ceil(Math.random() * emoji.length)]
}
