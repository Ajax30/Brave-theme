var articleUrl = window.location.href;
var articleTitle = document.getElementsByClassName('article-title')[0].textContent;
var fbShareButton = document.getElementById('share-button-fb');
var twShareButton = document.getElementById('share-button-tw');
var lnShareButton = document.getElementById('share-button-ln');

fbShareButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + articleUrl,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});

twShareButton.addEventListener('click', function() {
    window.open(`https://twitter.com/share?url=${articleUrl}`);
    return false;
});

lnShareButton.addEventListener('click', function() {
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}&title=${articleTitle}`)
  return false;
});
