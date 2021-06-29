let items = [
    {
        type: "image",
        id: 0,
        img: "/assets/images/post/изображение_viber_2021-04-15_02-25-32.jpg",
        class: "создание 3d моделей",
        title: "Сколько стоит моя работа?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        data: "22.12.2021"
    },
    {
        type: "image",
        id: 1,
        img: "https://sun9-42.userapi.com/impg/uVsxTV9pxoWOupCJvQNrAltiRiQiPYdHkTz4Kg/1_z8nqjYXIU.jpg?size=1902x838&quality=96&sign=00ecbebc4d2cd5df93f8d28421042be1&type=album",
        class: "продажа лам",
        title: "С кем я работал?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        data: "20.12.2021"
    },
    {
        type: "video",
        id: 2,
        video: "https://www.youtube.com/embed/hpvxvVNEjtk",
        class: "создание фильм/трейлеров",
        title: "Как создавалалось это видео? Вот так оп оп",
        data: "22.12.2021"
    },
    {
        type: "image",
        id: 3,
        img: "/assets/images/stories/pink.jpg",
        class: "создание 3d моделей",
        title: "Как создавалась эта картина?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        data: "20.12.2021"
    },
    {
        type: "text",
        id: 4,
        class: "новость",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        data: "22.12.2021"
    }
]

const toHTMLi = item1 => `
    <article class="post" id="${item1.id}">
        <div class="post__header post__header--preview">
            <a href="post.html">
                <img class="" src="${item1.img}" alt="/">
            </a>
        </div>
        <div class="post__content">
            <div class="post__subtitle">
                <a href="post.html">${item1.title}</a>
            </div>
            <p class="post__text">
                ${item1.text}
            </p>
        </div>
        <div class="post__footer">
            <ul class="post__data">
                <li class="post__data-item">
                    <time datetime="${item1.data}">${item1.data}</time>
                </li>
                <li class="post__data-item">
                    <a href="post.html">${item1.class}</a>
                </li>
            </ul>
            <a href="post.html" class="post__read">читать</a>
        </div>
    </article>
`

const toHTMLi2 = item4 => `
    <article class="post" id="${item4.id}">
        <div class="post__header post__header--preview">
            <a href="post.html" class="preview">
                <img class="img" src="${item4.img}" alt="/">
            </a>
        </div>
        <div class="post__content">
            <div class="post__subtitle">
                <a href="post.html">${item4.title}</a>
            </div>
            <p class="post__text">
                ${item4.text}
            </p>
        </div>
        <div class="post__footer">
            <ul class="post__data">
                <li class="post__data-item">
                    <time datetime="${item4.data}">${item4.data}</time>
                </li>
                <li class="post__data-item">
                    <a href="post.html">${item4.class}</a>
                </li>
            </ul>
            <a href="post.html" class="post__read">читать</a>
        </div>
    </article>
`

const toHTMLt = item2 => `
    <div class="post" id="${item2.id}">
        <div class="post__content">
            <p class="post__text">
                ${item2.text}
            </p>
        </div>
        <div class="post__footer">
            <ul class="post__data">
                <li class="post__data-item">
                    <time datetime="${item2.data}">${item2.data}</time>
                </li>
                <li class="post__data-item">
                    <a href="post.html">${item2.class}</a>
                </li>
            </ul>
        </div>
    </div>
`

const toHTMLv = item3 => `
    <article class="post" id="${item3.id}">
        <div class="post__header">
            <div class="embed">
                <iframe src="${item3.video}" title="${item3.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="post__content">
            <div class="post__subtitle">
                <a href="">${item3.title}</a>
            </div>
            <div class="post__text post__text--p0"></div>
        </div>
        <div class="post__footer">
            <ul class="post__data">
                <li class="post__data-item">
                    <time datetime="${item3.data}">${item3.data}</time>
                </li>
                <li class="post__data-item">
                    <a href="">${item3.data}</a>
                </li>
            </ul>
            <a href="" class="post__read">оставить комментарий</a>
        </div>
    </article>
`

items.reverse()

const toHTML = {
    'text' : toHTMLt,
    'image': toHTMLi,
    'imageN': toHTMLi2,
    'video': toHTMLv
};

let posts = document.querySelector(".posts")

function render(){
    posts.innerHTML = items.map(item => toHTML[item.type](item)).join('') + posts.innerHTML
}
render()

function create(){
    id = items.length;
    let text = document.getElementById("myTextarea").value;
    let image = document.getElementById('add-post-file').value;
    // let image = document.querySelector('#add-post-file').files[0];
    console.log(image, "- image")

    if (image === "" || image === undefined){
        items[id] = {
            type: "text", id: id, text: text, class: "новость", data: "28.06.2021"
        }
    }
    else if (image === undefined && text === ""){
        console.log("none")
        items[id].style.display = "none"
    }
    else{
        items[id] = {
            type: "imageN", id: id, text: text, img: image, class: "новость", data: "28.06.2021"
        }
    }

    posts.innerHTML = items.map(item => 
        toHTML[item.type](item)
    ).join('')

    document.getElementById("myTextarea").value = ""
    document.getElementById("add-post-file").value = ""

    console.log(items.length)
}

let addPost = document.getElementById("postA")
addPost.addEventListener("click", function (){
    create()
})