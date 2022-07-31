let navButton = document.querySelector('.navButton');
let main = document.querySelector('main');

let toggleNav = function() {
    let navMenu = document.querySelector('#navMenu');
    
    if(navMenu.classList.contains('closeMenu')) {
        navMenu.classList.remove('closeMenu');
        navMenu.classList.add('openMenu');
    } else {
        navMenu.classList.remove('openMenu');
        navMenu.classList.add('closeMenu');
    }
    
    let hamburgerBars = document.querySelectorAll('rect');
}

navButton.addEventListener('click', toggleNav);
main.addEventListener('click', function() {
    if(navMenu.classList.contains('openMenu')) {
        navMenu.classList.remove('openMenu');
        navMenu.classList.add('closeMenu');
    }
})


// Main animated text
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; padding-right: 0.5rem}";
    document.body.appendChild(css);
};


// Modal
let aboutModal = document.querySelector('#aboutMeModal'),
    aboutMeLink = document.querySelector('#aboutMe'),
    closeModalBtns = document.querySelectorAll('.closeModalBtn'),
    contactModal = document.querySelector('#contactModal'),
    contactLink = document.querySelector('#contact');


const toggleAboutModal = function (e) {
    e.preventDefault()
    if(aboutModal.classList.contains('closeModal') || contactModal.classList.contains('openModal')) {
        contactModal.classList.remove('openModal');
        contactModal.classList.add('closeModal');
        aboutModal.classList.remove('closeModal');
        aboutModal.classList.add('openModal');
    } else {
        aboutModal.classList.remove('openModal');
        aboutModal.classList.add('closeModal');
    }
}

const toggleContactModal = function (e) {
    e.preventDefault()
    if(contactModal.classList.contains('closeModal') || aboutModal.classList.contains('openModal')) {
        aboutModal.classList.remove('openModal');
        aboutModal.classList.add('closeModal');
        contactModal.classList.remove('closeModal');
        contactModal.classList.add('openModal');
    } else {
        contactModal.classList.remove('openModal');
        contactModal.classList.add('closeModal');
    }
}


if(document.querySelector('.typewrite')) {
    let mainText = document.querySelector('.typewrite');
    mainText.addEventListener('click', toggleAboutModal);
}

contactLink.addEventListener('click', toggleContactModal);
aboutMeLink.addEventListener('click', toggleAboutModal);


const closeModals = function() {
    if(aboutModal.classList.contains('openModal') || contactModal.classList.contains('openModal')) {
        aboutModal.classList.remove('openModal');
        aboutModal.classList.add('closeModal');
        contactModal.classList.remove('openModal');
        contactModal.classList.add('closeModal');
    }
}

main.addEventListener('click', closeModals);

closeModalBtns.forEach(closeModalBtn => {
    closeModalBtn.addEventListener('click', closeModals)
});


// Project stack keyword styling
let stacklists = document.querySelectorAll('.stackList')
for(i=0; i<stacklists.length; i++) {
    let stacks = stacklists[i].getAttribute('dataType').split('/');
    stacks.forEach(stack => {
        let text = document.createElement('p');
        text.textContent = (stack);
        text.classList.add('stack');
        stacklists[i].appendChild(text);
    })
}