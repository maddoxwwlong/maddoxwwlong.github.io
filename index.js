function scrollDown() {

    var targetElement = document.getElementById('gallery');
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;


    var duration = 1000;
    var start = null;
    window.requestAnimationFrame(function step(currentTime) {
        if (start === null) start = currentTime;
        var timeElapsed = currentTime - start;
        var scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) {
            window.requestAnimationFrame(step);
        }
    });

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}

function scrollDownTwo() {
    var targetElement = document.getElementById('buy');
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;


    var duration = 1000;
    var start = null;
    window.requestAnimationFrame(function step(currentTime) {
        if (start === null) start = currentTime;
        var timeElapsed = currentTime - start;
        var scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) {
            window.requestAnimationFrame(step);
        }
    });

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}