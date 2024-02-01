// let elem = document.querySelector('.elem')
// elem.classList.add('www')
// console.log(elem.classList[1]);
// elem.classList.remove('www')
// console.log(elem.classList[1])
// let elem1 = elem.classList.contains('www')
// console.log(elem1)
// let elem = document.querySelector('.elem')
// // elem.classList.add('www')
// if (elem.classList.contains('www')){
//     elem.classList.remove('www')
//     console.log(elem.classList[0])

// }else{
//     elem.classList.add('www')
//     console.log(elem.classList[1])
// }

// let elem = document.querySelector('.elem')
// // elem.classList.add('www')
// let e1 = elem.classList.length
// console.log(e1);

// let elem = document.querySelector('.elem')
// elem.classList.add('www')
// console.log(document.body.children)
// for(let el of document.body.children[2]){
//     console.log(el)
//     alert(el.tagName)
// }

let parent = document.querySelector('.sheet')

parent.addEventListener('click',() => {
    let target = event.target;
    if (target.tagName == 'DIV' || target.tagName){
        target.classList.add('light');

    }
})