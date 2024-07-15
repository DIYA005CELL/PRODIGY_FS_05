function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

        if (post.image) {
            const imageElement = document.createElement('img');
            imageElement.src = post.image;
            imageElement.classList.add('post-image');
            postElement.appendChild(imageElement);
        }

        const likesElement = document.createElement('span');
        likesElement.textContent = `Likes: ${post.likes}`;
        postElement.appendChild(likesElement);

        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments-section');

        post.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.textContent = comment;
            commentsSection.appendChild(commentElement);
        });

        const commentInput = document.createElement('input');
        commentInput.placeholder = 'Add a comment...';

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.addEventListener('click', () => {
            const commentContent = commentInput.value.trim();
            if (commentContent) {
                post.comments.push(commentContent);
                renderPosts(); 
                commentInput.value = ''; 
            }
        });

        commentsSection.appendChild(commentInput);
        commentsSection.appendChild(commentButton);

        postElement.appendChild(commentsSection);

        feed.appendChild(postElement);
    });
}
