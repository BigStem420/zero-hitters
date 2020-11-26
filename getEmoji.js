const pointmoji = ["👀", "🖕", "🔪"]
const emoji = ["☠️", "💥", "🤬", "⚔️", "⚰️", "💣", ]
const smilei = ['.'./gifs/ak47.gif,'./gifs/armes09.gif','./gifs/double-barrel-shotgun.gif','./gifs/machine-gun-smiley.gif','./gifs/shooting-guns.gif','./gifs/shooting-two-guns.gif','.gifs/Smiley-with-gatling-gun.gif','./gifs/tommy-gun-semiauto-smiley-facing-right.gif','./gifs/transformer-gun.gif']
const smileyUL = ['https://i.imgur.com/GOwp4s4.gif', 'https://i.imgur.com/JGsIDeB.gif', 'https://i.imgur.com/zvzGDxk.gif', 'https://i.imgur.com/GiH4LLl.gif', 'https://i.imgur.com/gLH3Rxt.gif']
var getEmoji = function () {
    return smileyUL[Math.floor(Math.random() * smileyUL.length)]
}
