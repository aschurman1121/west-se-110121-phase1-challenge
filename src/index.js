// write your code here

//base api http://localhost:3000

document.addEventListener('DOMContentLoaded', () =>{



const cmtBtn = document.getElementsByClassName('comment-button');
const cmtForm = document.getElementById('#comment-form');
const likeBtn = document.getElementById('#like-button');
const postBtn = document.getElementById('#comment-button');
const imgContainer = document.getElementsByClassName('image-card');

// const imgData = './assets/coder-dog.png';

document.querySelector(cmtForm).addEventListener('submit', (e) => {
    e.preventDefault()
    addComment(cmt.new_comment.value)}
    );

document.querySelector(likeBtn).addEventListener( 'click', () => {
    likeBtn+= 1
    document.querySelector('#like-button').textContent = 
    updateBtn(likeBtn)
})

function addComment(cmtForm){
    let input = document.querySelector('comment-input')
    p.textContent = cmtForm
    postBtn.addEventListener('click', postComment)
    p.appendChild(postBtn)
    document.querySelector(cmtForm).appendChild(p)

}

postComment = () => { e.target.parentNode.cmtForm}

// document.querySelector()

// function renderOneImg(imgData){
//     console.log(imgData)
// }

//patch
function updateBtn(likeBtn){
    fetch (`http://localhost:3000${likeBtn.id}`), {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'},
        body: JSON.stringify(likeBtn)
    } 
    .then(res => res.json())
}

fetch ('http://localhost:3000/images/1')
    .then(res => res.json())
    .then(imgData)

// const pupImg = ('./assets/coder-dog.png'); {
//     imgContainer.imgData.image = pupImg.id

//     }


function initialize(){
    getImageOfPup()
}
initialize()

function getImageOfPup(){
    fetch('http://localhost:3000')
.then(res => res.json())
.then(imgData => imgData.forEach(imgData => {renderOneImg(imgData)}))}

getImageOfPup()

}

)


// //render func?
// function addingTitle(cardTitle){
//     let cardTitle = document.querySelector('.title').innerText
//     cardTitle.innerText = images.title
//     document.querySelector('h2').appendChild(cardTitle)

// 

