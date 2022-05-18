const images = () => {
    const imgPoup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPoup.classList.add('popup');
    workSection.appendChild(imgPoup);

    imgPoup.style.justifyContent = 'center';
    imgPoup.style.alignItems = 'center';
    imgPoup.style.display = 'none';

    imgPoup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        
        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPoup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup')) {
            imgPoup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;