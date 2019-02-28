let vanilla = require("./journal-vanilla.json")
let decentralized = require("./journal-decentralized.json")

// let wiringTx = {
//     wiring: {
//         nets: [
//             vanilla,
//             decentralized
//         ],
//         diagrams: [
//             {
//                 name: "root",
//                 width: 2,
//                 pixes: [1,2],
//                 names: ["vanilla", "decentralized"]
//             }
//         ],
//         labels: [0, 1]
//     },
//     previous: 'deadbeef'
// }

let wiringTx = {
    wiring: {
        nets: [
            // vanilla,
            decentralized
        ],
        diagrams: [
            {
                name: "root",
                width: 1,
                pixels: [1],
                names: ["decentralized"]
            }
        ],
        labels: [0]
    },
    previous: 'deadbeef'
}

console.log(JSON.stringify(wiringTx))
