function random(max) {
        return Math.floor(Math.random() * max);
    }

function arr(game, funcs) {
    return game.children[funcs];
}

export {arr, random}