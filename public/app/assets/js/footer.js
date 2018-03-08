var connections = [
    // github = {
    //     link: "#",
    //     imgSrc: "app/assets/images/github.png"
    // },
    // linkedin = {
    //     link: "#",
    //     imgSrc: "app/assets/images/LinkedIn.png"
    // },
    // stackFlow = {
    //     link: "#",
    //     imgSrc: "app/assets/images/stackoverflow.png"
    // },
    facebook = {
        link: "#",
        imgSrc: "app/assets/images/Facebook.png"
    },
    twitter = {
        link: "#",
        imgSrc: "app/assets/images/Twitter.png"
    },
    instagram = {
        link: "#",
        imgSrc: "app/assets/images/Instagram.png"
    }
];

for (var i = 0; i < connections.length; i++) {

    var $img = $('<img>').addClass('img-responsive link-ani footer-flex-item-logo').attr('src', connections[i].imgSrc);
    var $a = $('<a>').attr('href', connections[i].link).attr('target', '_blank');

    $a.html($img);

    $(".footer-connect").append($a);

};

var $a = $('<a>').attr('href', 'mailto:eladorno@gmail.com').text('eladorno@gmail.com').addClass("info-email");

$(".footer-connect").append($a);
