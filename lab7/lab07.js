const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

document.documentElement.ondblclick = function () {
    for(let item of works){
        let outerDiv = document.createElement('div');
        outerDiv.className = 'item';
        let genre = document.createElement('h4');
        genre.innerText = 'Genre:' + item.tips;
        outerDiv.appendChild(genre);
        //------------------------------
        let person = document.createElement('div');
        person.className = 'inner-box';
        let name = document.createElement('h3');
        name.innerHTML = item.author;
        name.style.display = 'inline';
        let lifetime = document.createElement('h5');
        lifetime.innerHTML = 'lifetime:' + item.lifetime;
        lifetime.style.display = 'inline';
        lifetime.style.marginLeft = '1em';
        person.appendChild(name);
        person.appendChild(lifetime);
        outerDiv.appendChild(person);
        //-----------------------------------
        let popularPhotos = document.createElement('div');
        popularPhotos.className = 'inner-box';
        outerDiv.appendChild(popularPhotos);
        let title = document.createElement('h3');
        title.innerText = 'Popular Photos';
        popularPhotos.appendChild(title);
        for(let photo of item.photos){
            let img = document.createElement('img');
            img.src = photo;
            img.className = 'photo';
            popularPhotos.appendChild(img);
        }
        //------------------------------------------------
        let button = document.createElement('button');
        outerDiv.appendChild(button);
        button.innerText = 'visit';
        document.getElementsByClassName('justify')[0].appendChild(outerDiv);

    }
}
