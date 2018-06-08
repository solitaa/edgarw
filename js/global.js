const edgarw = '';
const imgPath = '../images/icons/';
const home = edgarw + '/project/view';
const icons = {
    'left': 'glyphicon glyphicon-chevron-left',
    'right': 'glyphicon glyphicon-chevron-right',
    'remove': 'glyphicon glyphicon-remove',
    'inactive': 'glyphicon glyphicon-asterisk',
    'open': 'glyphicon glyphicon-open',
    'picture': 'glyphicon glyphicon-picture',
    'agree': 'glyphicon glyphicon-ok'
};

const cornerTexts = {
    'topLeft': 'studio edgar kandratian',
    'topLeft2': 'art direction &#38; graphic design',
    'topRight': 'information',
    'bottomRight': 'registry',
    'back': 'back to projects',
    'exit': 'exit',
    'insights': 'insights'
};

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{'indent': '-1'}, {'indent': '+1'}],
    [{'color': []}, {'background': []}],
    ['link'],
    [{'align': []}],
    ['clean']
];


function addMenu(selector) {
    var txt = '<div class="textMenu circleShadow">' +
        '           <ul class="row text-center">' +
        '               <li class="menuLi"><a href="' + edgarw + '/info/infoView" target="_blank">Information</a></li>' +
        '               <li class="menuLi"><a href="' + edgarw + '/category/view" target="_blank">Categories</a></li>' +
        '               <li class="menuLi"><a href="' + edgarw + '/project/wholeList" target="_blank">Projects</a></li>' +
        '           </ul>' +
        '       </div>';
    $(selector).append(txt);
}

function savedWithAjax(selector, text) {
    $(selector).append('<div class="doneCenter"><span>' + text + '</span></div>');

    setTimeout(function () {
        $('.doneCenter').remove();
    }, 1500);
}

function changeUrl() {
    var prjs = $('.activeProject');
    var idForUrl = prjs.eq(prjs.length - 1).attr('id');
    var newPathname = window.location.href.split('#')[0];

    var cats = '';

    if(idForUrl == '01'){
        var categoryName = $('.select-selected').text();
        var categoryLi = $('.activeLi').attr('id');
        console.log($('.select-selected'));
        console.log($('.activeLi'));
        console.log(categoryLi);
        console.log(categoryName);

        cats = cats + '-' + categoryName + '-' + categoryLi;
    }
    window.history.pushState("", "", newPathname + '#' + idForUrl + cats);
}