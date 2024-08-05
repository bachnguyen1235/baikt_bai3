document.addEventListener('DOMContentLoaded', () => {
    const postsBtn = document.getElementById('postsBtn');
    const photosBtn = document.getElementById('photosBtn');
    const albumsBtn = document.getElementById('albumsBtn');
    const contentList = document.getElementById('contentList');

    const buttons = [postsBtn, photosBtn, albumsBtn];

    function fetchData(url, btn) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                contentList.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.title || item.name;
                    contentList.appendChild(li);
                });
                buttons.forEach(button => button.classList.remove('active'));
                btn.classList.add('active');
            });
    }

    postsBtn.addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/posts', postsBtn);
    });

    photosBtn.addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/photos', photosBtn);
    });

    albumsBtn.addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/albums', albumsBtn);
    });

    // Default load
    fetchData('https://jsonplaceholder.typicode.com/posts', postsBtn);
});