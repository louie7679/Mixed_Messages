const message = {
    first_piece_of_data: ["fierce", "wet", "light", "tall", "fast", "long"],
    second_piece_of_data: ["roaring", "big", "heavy", "little", "slow", "fluttering", "striped", "spotted", "sharp-teeth"],
    third_piece_of_data: ["lion", "elephant", "hippo", "bug", "turtle", "butterfly", "zebra", "giraffe", "cheetah", "alligator"]
}

function message_generator() {
    let res = "Your sign is";
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            res += ` ${helper_function(message[`first_piece_of_data`])}`
        } else if (i === 1) {
            res += ` ${helper_function(message[`second_piece_of_data`])}`
        } else {
            res += ` ${helper_function(message[`third_piece_of_data`])}.`
        }
    }
    return res;
}

function helper_function (arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(message_generator());