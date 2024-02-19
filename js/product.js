// let mobile = {
//     infinix:[
//         {
//             "name":"inifinx",
//             "storage":"128GB",
//             "price":45600,

//         },
//         {
//             "name":"inifinx 10",
//             "storage":"129GB",
//             "price":45600,
//         }
//     ],
//     vivo:[
//         {
//             "name":"vivo",
//             "storage":"1291GB",
//             "price":45600,

//         },
//         {
//             "name":"vivo 10",
//             "storage":"12GB",
//             "price":45600,
//         },
//         {
//             "name":"vivo 11",
//             "storage":"121GB",
//             "price":45600,
//         }

//     ]

// }
// console.log(mobile);
// for(let keys in mobile){
//     // console.log(mobile[keys][0].storage)
//     for(let i=0; i<mobile[keys].length; i++){
//         console.log(mobile[keys][i].name)
//         console.log(mobile[keys][i].storage)
//         console.log(mobile[keys][i].price)
//     }
// }
let mobile = [
    {
        "name": "inifinx ab",
        "storage": "128GB",
        "price": 45600,
        "images":"js/images/i1.jpg"

    },
    {
        "name": "inifinx 10",
        "storage": "129GB",
        "price": 45600,
        "images":"js/images/i2.jpg"
    },
    {
        "name": "vivo abc",
        "storage": "1291GB",
        "price": 45600,
        "images":"js/images/i3jpg.jpg"
    },
    {
        "name": "vivo 10",
        "storage": "12GB",
        "price": 45600,
        "images":"js/images/i4.jpg"
    },
    {
        "name": "vivo x 11",
        "storage": "121GB",
        "price": 45600,
        "images":"js/images/i5.jpg"
    }
];
let dataset = document.querySelector("#data");
for(let index in mobile){
    let x = "<tr><td>"+mobile[index].name+"</td><td>"+mobile[index].storage+"</td><td>"+mobile[index].price+"</td><td><img src='"+mobile[index].images+"'width='30px'></td><td><a href='detail.html'>details</a></td></tr>"
    // console.log(mobile[index].name)
    dataset.innerHTML+=x;
}
// console.log(mobile)
