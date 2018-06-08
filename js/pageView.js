$(document).ready(function () {
    console.log('pageview.js');

    var pathname = window.location.href;
    console.log(pathname);
    var realId = false;
    var finalId;
    //var path = pathname.match(/\d+/);
    var path = pathname.split('#');
    console.log(path);
    var activeCat = '';
    var activeCatLi = '';
    var dat = '';

    if (path[1]) {

        dat = path[1].split('-');
        console.log(dat);
        if(dat[0] == '01' && dat[1] && dat[2]){
            activeCat = dat[1];
            activeCatLi = dat[2];
        }
        if(dat[0] == '01' && (!dat[1] || !dat[2])) {
            window.location.href = home;
        }
        var pageid = dat[0].match(/\d+/)[0];
        console.log(pageid,dat[1]);
    }



    var giantParent = $(".wrapper");
    giantParent.addClass('showDiv');
    createPagesView();

    function createPagesView() {
        $.get(edgarw + "/project/pageInfoJson/", function (data, status) {
            var animDirections = ['BottomLeft', 'BottomRight', 'Bottom', 'Left', 'Top'];
            var objects = JSON.parse(data);
            var docWidth = $(document).width();
            for (var i in objects) {
                obj = objects[i];


                var bgImage = obj.image_large;

                if(docWidth < 600){
                    bgImage = obj.image_small;
                }
                else if(docWidth >= 600 && docWidth < 1000){
                    bgImage = obj.image_medium;
                }
                else if(docWidth > 1000 ){
                    bgImage = obj.image_large;
                }

                var elem = $("<div>").attr('id', 'p' + obj.id).attr('class', 'project').attr('data-id', obj.id)
                    .css({
                        "background-image": "url(../" + bgImage + ")",
                        "background-position": "center"
                        //'height': $(document).height()
                    });

                elem.attr('value', animDirections[i % 3]);

                if (i == 0) {
                    finalId = obj.id;
                }
                if (obj.id == pageid) {
                    finalId = pageid;
                }



                elem.append('<div class="topContainer">' +
                    '           <div class="topLeftText topRightWithPAndA">' +
                    '               <h2 class="cornerLinks" style="color:' + obj.text_color + '">' + obj.top_left_text + '</h2>' +
                    '               <span class="cornerLinks" style="color:' + obj.text_color + '">art direction and graphic design</span>' +
                    '           </div>' +
                    '           <div class="topRightText "><h2 class="cornerLinks" style="color:' + obj.text_color + '">' + obj.top_right_text + '</a></div>' +
                    '       </div>' +
                    '       <div class="bottomContainer">' +
                    '           <div class="bottomRightText"><h2 class="cornerLinks" style="color:' + obj.text_color + '">' + obj.bottom_right_text + '</a></div>' +
                    '           <div class="bottomLeftText"><h2 class="cornerLinks" style="color:' + obj.text_color + '">' + obj.bottom_left_text + '</a></div>' +
                    '       </div>' +
                    '       <div class="centerText"><h2 class="cornerLinks" style="color:' + obj.text_color + '">' + cornerTexts.insights + '</a></div>');

                giantParent.prepend(elem);

            }
            $('.project#p' + finalId).addClass('activeProject');

            var allProjectsDiv = $("<div>").attr('id', '01').attr('class', 'allProjectsDiv').attr('value', animDirections[4]);
            if (pageid == '01') {
                allProjectsDiv.addClass('activeProject');
            }

            var aboutDivv = $("<div>").attr('id', '02').attr('class', 'aboutDiv').attr('value', animDirections[3]);
            if (pageid == '02') {
                aboutDivv.addClass('activeProject');
            }

            giantParent.append(allProjectsDiv);
            giantParent.append(aboutDivv);


            // -------------------ALL PROJECTS DIV PART ANIMATIONS--------------------------------
            var apdDir = 'close';
            var apd = $(".allProjectsDiv");// apd -> all projects div

            $('.bottomRightText').on('click',function () {
                $('.projectsInRegistry span').css('display', 'table-cell');
                elemAnim = apd.attr('value');
                apd.attr('class', 'allProjectsDiv');
                apd.addClass('activeProject').addClass('to' + elemAnim);
                canAnim = false;
                apdDir = 'open';

            });
            apd.off().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                var st = $(".allProjectsDiv").attr('style');
                if(st){
                    var newst = st.split(';');

                    for(var i = 0; i < newst.length; i++){
                        if( newst[i].indexOf('z-index') >= 0){
                            newst.splice(i,1);
                        }
                    }
                    var newStyleWithoutZIndex = newst.join('; ');
                    $(".allProjectsDiv").attr('style', newStyleWithoutZIndex);
                }



                elemAnim = apd.attr('value');
                if (apdDir == 'open') {
                    apd.removeClass('to' + elemAnim);
                }
                else if (apdDir == 'close') {
                    if (apd.hasClass('from' + elemAnim))
                        apd.removeClass('from' + elemAnim).removeClass('activeProject');
                    canAnim = true;
                }
                //window.location.href = 'http://localhost/edgarw/project/view#p01';
                //console.log('sfhgsfg')
                changeUrl();


            });


            var texts = '<div class="topContainer">' +
                '           <div class="topLeftText topRightWithPAndA">' +
                '               <h2 class="cornerLinks">' + cornerTexts.topLeft + '</h2>' +
                '               <span class="cornerLinks">' + cornerTexts.topLeft2 + '</span>' +
                '           </div>' +
                '           <div class="topRightText "><h2 class="cornerLinks" >' + cornerTexts.topRight + '</h2></div>' +
                '       </div>' +
                '       <div class="bottomContainer">' +
                '           <div class="bottomRightText closeAllProjectsDiv"><h2 class="cornerLinks" >' + cornerTexts.bottomRight + '</h2></div>' +
                '           <div class="bottomLeftText closeAllProjectsDiv"><h2 class="cornerLinks" >' + cornerTexts.back + '</h2></div>' +
                '       </div>';

            apd.append(texts);


            $('.closeAllProjectsDiv').on('click',function () {
                $('.projectsInRegistry span').css('display', 'none');
                elemAnim = apd.attr('value');
                apd.attr('class', 'allProjectsDiv');
                apd.addClass('activeProject').addClass('from' + elemAnim);
                apdDir = 'close';
            });

            $(".allProjectsDiv .topRightText").on('click',function () {
                $(".allProjectsDiv").css('z-index', 5);
                $(".aboutDiv").addClass('activeProject');
                elemAnim = apd.attr('value');
                apd.addClass('from' + elemAnim);
                apdDir = 'close';

            });


            $(".allProjectsDiv .topLeftText").on('click',function () {
                var all = $('.project');
                all.attr('class', 'project');
                all.eq(all.length - 1).addClass('activeProject');
                elemAnim = apd.attr('value');
                apd.addClass('from' + elemAnim);
                apdDir = 'close';

            });

            // -------------------- events for left bottom and center texts to go to inner page -----------------
            $('.centerText .cornerLinks').on('click',function (e) {
                e.preventDefault();
                goToInnerPage($(this));
            });
            $('.bottomLeftText').on('click',function (e) {
                e.preventDefault();
                if (!($(this).hasClass('closeAllProjectsDiv') || $(this).hasClass('closeAboutDiv'))) {
                    goToInnerPage($(this));
                }
            });


            function goToInnerPage(elem) {
                var pr = elem.parents('.project');
                pr.addClass('toTopFromCurrent');

                pr.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    document.location.href = edgarw + '/insights/view/' + pr.attr('data-id');
                });
            }


            // -------------------ABOUT DIV INFO--------------------------------


            $.get(edgarw + "/info/infoJson/", function (data, status) {

                var dat = JSON.parse(data);

                var info1 = dat[0].text;
                var info3 = dat[1].text;
                var info4 = dat[2].text;
                var info5 = dat[3].text;
                var info6 = dat[4].text;
                var info7 = dat[5].text;
                var info8 = dat[6].text;
                var info9 = dat[7].text;
                var info10 = dat[8].text;
                var info11 = dat[9].text;


                var colors = JSON.parse(dat[10].colors);
                var aboutImage = dat[10].aboutImage;

                $('.aboutDiv').css('background-color', colors.infoBgColor).css('color', colors.infoTextColor);
                $('.allProjectsDiv').css({'background-color': colors.registryBgColor, 'color': colors.registryTextColor});

                $('.aboutDiv .topContainer').css('background-color', colors.infoBgColor);
                $('.aboutDiv .bottomContainer').css('background-color', colors.infoBgColor);

                $('.allProjectsDiv .topContainer').css('background-color', colors.registryBgColor);
                $('.allProjectsDiv .bottomContainer').css('background-color', colors.registryBgColor);


                var texts = '<div class="aboutContainer">' +
                    '           <div>' +
                    '               <div id="myInstance1" data-id="1" class="mainInfo leftDiv">' + info1 + '</div>' +
                    '                   <div class="rightDiv">' +
                    '                       <div class="carousel slide" id="myCarouselAbout" data-interval="false">' +
                    '                           <div class="carousel-inner">' +
                    '                               <div class="item active">' +
                    '                                   <img src="../images/edgarik.png" style="width:100%;opacity: 0;">' +
                    '                                   <div  class="infoSliderImage" style="background-image:url(../images/uploads/' + aboutImage + ')"></div>' +
                    '                               </div>' +
                    '                               <div class="item">' +
                    '                                   <img src="../images/edgarik.png" style="width:100%;opacity: 0;">' +
                    '                                   <div  class="infoSliderImage" style="background-image:url(../images/uploads/' + aboutImage + ')"></div>' +
                    '                               </div>' +
                    '                           </div>' +
                    '                           <a class="left carousel-control" href="#myCarouselAbout" data-slide="prev"></a>' +
                    '                           <a class="right carousel-control" href="#myCarouselAbout" data-slide="next"></a>' +
                    '                       </div>' +
                    '                   <div class="forMarginTop servicesContact">' +
                    '                       <div id="myInstance8" data-id="8"  class="hor smallLeft">' + info8 + '</div>' +
                    '                       <div id="myInstance9" data-id="9"  class="hor bigRight">' + info9 + '</div>' +
                    '                   </div>' +
                    '               </div>' +
                    '               <div class="clear"></div>' +
                    '           </div>' +
                    '           <div>' +
                    '               <div class="leftDiv">' +
                    '                   <div class="forMarginTop">' +
                    '                       <div id="myInstance3" data-id="3"  class="hor">' + info3 + '</div>' +
                    '                       <div id="myInstance4" data-id="4"  class="hor toRight">' + info4 + '</div>' +
                    '                   </div>' +
                    '                   <div class="forMarginTop">' +
                    '                       <div id="myInstance5" data-id="5"  class="hor">' + info5 + '</div>' +
                    '                       <div id="myInstance6" data-id="6"  class="hor toRight">' + info6 + '</div>' +
                    '                   </div>' +
                    '               </div>' +
                    '               <div class="rightDiv forMarginTop">' +
                    '                   <div id="myInstance10" data-id="10"  class="hor smallLeft">' + info10 + '</div>' +
                    '                   <div id="myInstance12" data-id="12"  class="hor bigRight">' + info11 + '</div>' +
                    '               </div>' +
                    '               <div class="forMarginTop ">' +
                    '                   <div class="leftDiv imprint">' +
                    '                       <div id="myInstance7"  data-id="7" class="forMarginTop" >' + info7 + '</div>' +
                    '                   </div>' +
                    '               </div>' +
                    '               <div class="clear"></div>' +
                    '           </div>' +
                    '       </div>';

                $('.aboutDiv').append(texts);


                //height for aboutContainer
                var topContainerHeight = $('.allProjectsDiv .topContainer').height();
                var bottomContainerHeight = $('.allProjectsDiv .bottomContainer').height();
                $('.aboutContainer').css('height',$( document ).height() - topContainerHeight - bottomContainerHeight);




                //$('.infoSliderImage').css('height', $('.item.active img').css('height'));

                $.get(edgarw + "/project/pageInfoJson/", function (data, status) {
                    var data = JSON.parse(data);
                    var clients = [];
                    data.forEach(function (element) {
                        var clNamesArr = element.client.split(",");
                        if (clNamesArr.length > 1) {
                            for (var i = 0; i < clNamesArr.length; i++) {
                                var clName = clNamesArr[i].trim();
                                if (clients.indexOf(clName) == -1) {
                                    clients.push(clName);
                                    $("#myInstance12").append('<a><span class="clientsInAbout" data-projectName="' + element.bottom_left_text + '">' + clName + '</span></a><br>');
                                }
                            }
                        }
                        else {
                            var clName = element.client.trim();
                            if (clients.indexOf(clName) == -1) {
                                clients.push(clName);
                                $("#myInstance12").append('<a><span class="clientsInAbout" data-projectName="' + element.bottom_left_text + '">' + clName + '</span></a><br>');
                            }
                        }
                    });
                    $('a:has(.clientsInAbout)').unbind().on('click',function () {
                        var clientSpan = $(this).children('span');
                        var text = clientSpan.attr('data-projectName');


                        var giantParent = clientSpan.parents('.wrapper');
                        var giantParentProjectChildren = giantParent.children('.project');

                        for (var i = 0; i < giantParentProjectChildren.length; i++) {

                            if (giantParentProjectChildren.eq(i).find('.bottomLeftText').text() == text) {
                                giantParentProjectChildren.removeClass('activeProject');
                                giantParentProjectChildren.eq(i).addClass('activeProject');

                                clientSpan.parents('.aboutDiv').find('.closeAboutDiv').trigger('click');
                                break;
                            }
                        }
                    });
                });
            });

            $.get(edgarw + "/project/pageInfoJson/", function (data, status) {
                var data = JSON.parse(data);

                var clients = [];
                var categories = ["All"];
                var years = [];


                data.forEach(function (element) {
                    var clNamesArr = element.client.split(",");
                    if (clNamesArr.length > 1) {
                        for (var i = 0; i < clNamesArr.length; i++) {
                            var clName = clNamesArr[i].trim();
                            if (clients.indexOf(clName) == -1) {
                                clients.push(clName);
                            }
                        }
                    }
                    else {
                        var clName = element.client.trim();
                        if (clients.indexOf(clName) == -1) {
                            clients.push(clName);
                        }
                    }

                    var categoryNamesArr = element.categories.split(",");
                    if (categoryNamesArr.length > 1) {
                        for (var i = 0; i < categoryNamesArr.length; i++) {
                            var catName = categoryNamesArr[i].trim();
                            if (categories.indexOf(catName) == -1) {
                                categories.push(catName);
                            }
                        }
                    }
                    else {
                        var catName = element.categories.trim();
                        if (categories.indexOf(catName) == -1) {
                            categories.push(catName);
                        }
                    }

                    var year = element.year;
                    if (years.indexOf(year) == -1) {
                        years.push(year);
                    }


                });
                years.sort(function (a, b) {
                    return a - b
                });


                var container = $("<div>").addClass("registryContainer");


                $(".allProjectsDiv").append(container);

                //registry container height
                var topContainer = $('.allProjectsDiv .topContainer')[0].offsetHeight;
                var bottomContainer = $('.allProjectsDiv .bottomContainer')[0].offsetHeight;
                var docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                $('.registryContainer').css('height',docHeight - topContainer - bottomContainer);






                var leftDiv = $("<div>").addClass("registryLeftDiv").appendTo('.registryContainer');
                var rightDiv = $("<div>").addClass("registryRightDiv").appendTo('.registryContainer');

                var catCliDiv = $("<div>").addClass('catCliDiv').appendTo('.registryLeftDiv');



                //activeCat = dat[1];
                //activeCatLi = dat[2];

                var defCat = 'categories';
                var defLi = 'All';

                if(activeCat && activeCatLi){
                    defCat = activeCat;
                    defLi = activeCatLi;
                }




                var selectDiv = '<div class="custom-select">' +
                    '             <select class="registrySelect">' +
                    '                 <option>' + defCat + '</option>' +
                    '                 <option>categories</option>' +
                    '                 <option>clients</option>' +
                    '                 <option>years</option>' +
                    '             </select>' +
                    '         </div>';
                $('.catCliDiv').append(selectDiv);

                var divInLeftWithPosition = $("<div>").addClass("divInLeftWithPosition").appendTo('.catCliDiv');


                var correctLiName = false;
                var correctCatName = false;

                var catUl = $("<ul>").attr('class', 'catUl');
                for (var i in categories) {
                    var liId = categories[i].replace(/([^A-Za-z0-9[\]{}_.:-])\s?/g, '');
                    if(liId == defLi && defCat == 'categories'){
                        catUl.append("<li class='activeLi' id='" + liId + "'>" + categories[i] + "</li>");
                        correctLiName = true;
                    }
                    else {
                        catUl.append("<li id='" + liId + "'>" + categories[i] + "</li>");

                    }
                }
                var divForSelect1 = $('<div>').addClass("divForSelect1").append(catUl).appendTo('.divInLeftWithPosition');


                var clientUl = $("<ul>").attr('class', 'clientUl');
                for (var i in clients) {
                    var liId = clients[i].replace(/([^A-Za-z0-9[\]{}_.:-])\s?/g, '');
                    if(liId == defLi && defCat == 'clients'){
                        clientUl.append("<li class='activeLi' id='" + liId + "'>" + clients[i] + "</li>");
                        correctLiName = true;
                    }
                    else {
                        clientUl.append("<li id='" + liId + "'>" + clients[i] + "</li>");
                    }
                }
                var divForSelect2 = $('<div>').addClass("divForSelect2").append(clientUl).appendTo('.divInLeftWithPosition');


                var yearUl = $("<ul>").attr('class', 'yearUl');
                for (var i in years) {
                    var liId = years[i].replace(/([^A-Za-z0-9[\]{}_.:-])\s?/g, '');
                    if(liId == defLi && defCat == 'years'){
                        yearUl.append("<li class='activeLi' id='" + liId + "'>" + years[i] + "</li>");
                        correctLiName = true;
                    }
                    else {
                        yearUl.append("<li id='" + liId + "'>" + years[i] + "</li>");
                    }
                }
                var divForSelect3 = $('<div>').addClass("divForSelect3").append(yearUl).appendTo('.divInLeftWithPosition');


                if(defCat == 'categories'){
                    $('.clientUl').css('display', 'none');
                    $('.yearUl').css('display', 'none');
                    correctCatName = true;
                }
                else if(defCat == 'clients'){
                    $('.catUl').css('display', 'none');
                    $('.yearUl').css('display', 'none');
                    correctCatName = true;
                }
                else if(defCat == 'years'){
                    $('.clientUl').css('display', 'none');
                    $('.catUl').css('display', 'none');
                    correctCatName = true;
                }

                if(!correctLiName || !correctCatName){
                    window.location.href = home;
                }



                var x = document.getElementsByClassName("custom-select");
                for (var i = 0; i < x.length; i++) {
                    var selElmnt = x[i].getElementsByTagName("select")[0];

                    var a = document.createElement("DIV");
                    a.setAttribute("class", "select-selected");
                    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                    x[i].appendChild(a);
                    /*for each element, create a new DIV that will contain the option list:*/
                    var b = document.createElement("DIV");
                    b.setAttribute("class", "select-items select-hide");
                    for (var j = 1; j < selElmnt.length; j++) {
                        /*for each option in the original select element,
                         create a new DIV that will act as an option item:*/
                        var c = document.createElement("DIV");
                        c.innerHTML = selElmnt.options[j].innerHTML;
                        c.addEventListener("click", function (e) {
                            /*when an item is clicked, update the original select box,
                             and the selected item:*/
                            var i, s, h;
                            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                            h = this.parentNode.previousSibling;
                            for (i = 0; i < s.length; i++) {
                                if (s.options[i].innerHTML == this.innerHTML) {
                                    s.selectedIndex = i;
                                    h.innerHTML = this.innerHTML;
                                    break;
                                }
                            }
                            h.click();
                        });
                        b.appendChild(c);
                    }
                    x[i].appendChild(b);



                    a.addEventListener("click", function (e) {


                        //es em avelacrel
                        $('.select-items').children('div').each(function () {
                            if ($(this).text() == $('.select-selected').text()) {
                                $(this).hide();
                            }
                            else {
                                $(this).show();
                            }
                        });


                        /*when the select box is clicked, close any other select boxes,
                         and open/close the current select box:*/
                        e.stopPropagation();
                        closeAllSelect($(this));
                        this.nextSibling.classList.toggle("select-hide");
                        this.classList.toggle("select-arrow-active");
                    });
                }
                function closeAllSelect(elem) {

                    elmnt = elem[0];
                    /*a function that will close all select boxes in the document,
                     except the current select box:*/
                    var x, y, i, ul, arrNo = [];
                    x = document.getElementsByClassName("select-items");
                    ul = document.getElementsByClassName("catUl");
                    y = document.getElementsByClassName("select-selected");
                    if (elmnt) {
                        if (elmnt.className == 'select-selected select-arrow-active') {

                            if (elmnt.innerHTML == 'categories') {
                                $(".catUl").show();
                                $(".yearUl").hide();
                                $(".clientUl").hide();


                            }
                            else if (elmnt.innerHTML == 'clients') {
                                $(".catUl").hide();
                                $(".yearUl").hide();
                                $(".clientUl").show();


                            }
                            else if (elmnt.innerHTML == 'years') {
                                $(".catUl").hide();
                                $(".yearUl").show();
                                $(".clientUl").hide();


                            }
                        }
                    }
                    for (i = 0; i < y.length; i++) {
                        if (elmnt == y[i]) {
                            arrNo.push(i)
                        } else {
                            y[i].classList.remove("select-arrow-active");
                        }
                    }
                    for (i = 0; i < x.length; i++) {
                        if (arrNo.indexOf(i)) {
                            x[i].classList.add("select-hide");
                        }
                    }
                }

                /*if the user clicks anywhere outside the select box,
                 then close all select boxes:*/
                document.addEventListener("click", closeAllSelect);


                updateRegistryRightPart(defCat, defLi);

                $('.registryLeftDiv').find('li').on('click',regRightPartAnimationFuntion);


            });

            function regRightPartAnimationFuntion(){
                $('.registryLeftDiv').find('li').off();
                //console.log($(this).text());
                var text = $(this).text();



                $('.registryLeftDiv').find('li').removeAttr('class');
                $(this).attr('class', 'activeLi');
                var title = $(this).parents('.catCliDiv').find('.select-selected').text();

                updateRegistryRightPart(title, text);
            }


            //-------------------REGISTRY SELECT PART--------------------------------
            //-------------------REGISTRY SELECT PART--------------------------------


            //-------------------REGISTRY IMAGES PART--------------------------------


            function updateRegistryRightPart(title, text) {
                var newItems = '';
                var regRightDiv = $('.registryRightDiv');
                if (!isNaN(text)) {
                    console.log('year');
                    title = 'year';
                }
                else {
                    //console.log($(this).parents('.catCliDiv').find('.select-selected').text());
                    //title = $(this).parents('.catCliDiv').find('.select-selected').text();
                    if (title == 'clients')
                        title = "client";


                }
                if (regRightDiv.attr('class') == 'registryRightDiv') {
                    $.get(edgarw + "/project/pageInfoJson/", function (data) {
                        var data = JSON.parse(data);
                        newItems = '';


                        if (text == 'All') {


                            for (var i = 0; i < data.length; i++) {

                                var dat = data[i];
                                var t = '<div class="projectsInRegistry" style="background-image: url(../' + dat.image_small + ')">' +
                                    '       <span class="titleInRegistry" style="color:' + dat.text_color + ';">' + dat.bottom_left_text + '</span>' +
                                    '   </div>';
                                newItems = newItems + t;
                            }

                        }
                        else {
                            for (var i = 0; i < data.length; i++) {
                                var dat = data[i];
                                console.log(dat);
                                var parts = dat[title].split(",");

                                for (var j = 0; j < parts.length; j++) {
                                    var partsWithRegex = parts[j].replace(/([^A-Za-z0-9[\]{}_.:-])\s?/g, '');
                                    var textWithRegex = text.replace(/([^A-Za-z0-9[\]{}_.:-])\s?/g, '');
                                    console.log(partsWithRegex,textWithRegex);
                                    if (partsWithRegex == textWithRegex) {

                                        var t = '<div class="projectsInRegistry" style="background-image: url(../' + dat.image_small + ')">' +
                                            '       <span class="titleInRegistry" style="color:' + dat.text_color + ';">' + dat.bottom_left_text + '</span>' +
                                            '   </div>';
                                        newItems = newItems + t;
                                    }
                                }
                            }
                        }


                    });
                    regRightDiv.addClass('hideDiv');

                    regRightDiv.off().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                        if (regRightDiv.hasClass('hideDiv')) {
                            regRightDiv.empty().removeClass('hideDiv').addClass('showDiv').append(newItems);

                            $('.projectsInRegistry').unbind().on('click',function () {
                                var text = $(this).children('span').text();
                                var giantParent = $(this).parents('.wrapper');
                                var giantParentProjectChildren = giantParent.children('.project');

                                for (var i = 0; i < giantParentProjectChildren.length; i++) {
                                    if (giantParentProjectChildren.eq(i).find('.bottomLeftText').text() == text) {
                                        giantParentProjectChildren.removeClass('activeProject');
                                        giantParentProjectChildren.eq(i).addClass('activeProject');

                                        $(this).parents('.allProjectsDiv').find('.closeAllProjectsDiv').trigger('click');
                                        break;
                                    }
                                }
                            });

                        }
                        else if (regRightDiv.hasClass('showDiv')) {
                            regRightDiv.removeClass('showDiv');
                        }
                        changeUrl();
                        $('.registryLeftDiv').find('li').on('click',regRightPartAnimationFuntion);
                    });
                }
            }


            // -------------------ABOUT DIV PART ANIMATIONS--------------------------------
            var aboutDir = 'close';
            var aboutDiv = $(".aboutDiv");
            // apd -> all projects div

            $('.project .topRightText').on('click',function () {
                elemAnim = aboutDiv.attr('value');
                aboutDiv.attr('class', 'aboutDiv');
                aboutDiv.addClass('activeProject').addClass('to' + elemAnim);
                canAnim = false;
                aboutDir = 'open';
            });


            $('.aboutDiv .topRightText').on('click',function () {
                elemAnim = aboutDiv.attr('value');
                aboutDiv.attr('class', 'aboutDiv');
                aboutDiv.addClass('activeProject').addClass('to' + elemAnim);
                canAnim = false;
                aboutDir = 'open';
            });
            aboutDiv.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                elemAnim = aboutDiv.attr('value');
                if (aboutDir == 'open') {
                    aboutDiv.removeClass('to' + elemAnim);


                }
                else if (aboutDir == 'close') {
                    aboutDiv.removeClass('from' + elemAnim).removeClass('activeProject');
                    canAnim = true;

                }
                changeUrl();
            });


            var texts = '<div class="topContainer">' +
                '           <div class="topLeftText topRightWithPAndA">' +
                '               <h2 class="cornerLinks">' + cornerTexts.topLeft + '</h2>' +
                '               <span class="cornerLinks">' + cornerTexts.topLeft2 + '</span>' +
                '           </div>' +
                '           <div class="topRightText closeAboutDiv"><h2 class="cornerLinks" >' + cornerTexts.topRight + '</h2></div>' +
                '           <div class="bottomRightText closeAllProjectsDiv"><h2 class="cornerLinks" >' + cornerTexts.bottomRight + '</h2></div>' +
                '           </div>' +
                '       <div class="bottomContainer">' +
                '           <div class="bottomRightText closeAllProjectsDiv"><h2 class="cornerLinks" >' + cornerTexts.bottomRight + '</h2></div>' +
                '           <div class="bottomLeftText closeAboutDiv"><h2 class="cornerLinks" >' + cornerTexts.back + '</h2></div>' +
                '       </div>';


            aboutDiv.append(texts);

            $('.closeAboutDiv').on('click',function () {
                elemAnim = aboutDiv.attr('value');
                aboutDiv.attr('class', 'aboutDiv');
                aboutDiv.addClass('activeProject').addClass('from' + elemAnim);
                aboutDir = 'close';
            });
            $(".aboutDiv .bottomRightText").on('click',function () {

                $(".allProjectsDiv").addClass('activeProject');
                elemAnim = aboutDiv.attr('value');
                aboutDiv.addClass('from' + elemAnim);
                aboutDir = 'close';
            });

            $(".aboutDiv .topLeftText").on('click',function () {
                var all = $('.project');
                all.attr('class', 'project');
                all.eq(all.length - 1).addClass('activeProject');
                elemAnim = aboutDiv.attr('value');
                aboutDiv.addClass('from' + elemAnim);
                aboutDir = 'close';

            });


            //height for aboutContainer and registrycontainer

            var topContainer = $('.aboutDiv .topContainer')[0].offsetHeight;
            var bottomContainer = $('.aboutDiv .bottomContainer')[0].offsetHeight;
            var docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            $('.aboutContainer').css('height',docHeight - topContainer - bottomContainer);


























            //progects animations
            $(window).on('mousewheel keydown', anim);

            var dir = 'down';
            var canAnim = true;
            var elemAnim = '';

            function anim(e) {

                if (canAnim) {
                    var now = $('.project.activeProject').eq(0);
                    $('.project').attr('class', 'project');
                    now.attr('class', 'project activeProject');
                        if (e.deltaY == 1 || e.keyCode == 38) {



                        var elem = $('.project.activeProject');
                        var next = elem.next('.project');

                        if (next.length) {
                            elemAnim = next.attr('value');
                            //$('.project').attr('class','project');
                            next.addClass('activeProject').addClass('from' + elemAnim);
                            $(window).off();
                            dir = 'up';
                            canAnim = false;
                        }


                    }
                    else if (e.deltaY == -1 || e.keyCode == 40) {

                        var elem = $('.project.activeProject');
                        var prev = elem.prev('.project');
                        elemAnim = elem.attr('value');

                        if (prev.length) {
                            //$('.project').attr('class','project');
                            prev.addClass('activeProject');
                            elem.addClass('to' + elem.attr('value'));
                            $(window).off();
                            dir = 'down';
                            canAnim = false;
                        }


                    }
                }

            }

            $('.topLeftText').on('click',function () {
                $(window).on('mousewheel keydown', anim);

                var elem = $('.project.activeProject');
                var next = elem.next('.project');
                elemAnim = next.attr('value');
                if (next.length) {
                    next.addClass('activeProject').addClass('from' + elemAnim + 'Fast');
                    $(window).off();
                    dir = 'up';
                    canAnim = false;
                }
                else {
                }

                $(".project").off().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {

                    var activeik = $('.from' + elemAnim + 'Fast');
                    activeik.prev('.project').attr('class', 'project');
                    elemAnim = activeik.next('.project').attr('value');
                    activeik.next('.project').attr('class', 'project activeProject from' + elemAnim + 'Fast');

                    activeik.attr('class', 'project activeProject');

                    var nextik = activeik.next('.project');
                    if (!nextik.length) {
                        dir = 'down';
                        canAnim = true;
                        elemAnim = '';
                        $(window).on('mousewheel keydown', anim);

                        $(".project").off().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", callbackForAnim);
                    }
                    changeUrl();

                });
            });


            $(".project").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", callbackForAnim);


            function callbackForAnim() {
                if (dir == 'up') {
                    var activeik = $('.from' + elemAnim);
                    activeik.prev('.project').attr('class', 'project');
                    activeik.attr('class', 'project activeProject');
                }
                if (dir == 'down') {
                    $('.to' + elemAnim  ).attr('class', 'project');
                }
                canAnim = true;
                $(window).on('mousewheel keydown', anim);
                changeUrl();
            }


        });
    }


    window.addEventListener("resize", myFunction);
    function myFunction(){
        $('.project').css({'height': $(window).height()});

        var topContainer = $('.aboutDiv .topContainer')[0].offsetHeight;
        var bottomContainer = $('.aboutDiv .bottomContainer')[0].offsetHeight;
        var docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        $('.registryContainer').css('height',docHeight - topContainer - bottomContainer);
        $('.aboutContainer').css('height',docHeight - topContainer - bottomContainer);

        $('.project').css({'height': docHeight});

    }
});

/*
*     background-image: url(../images/uploads/tumblr_nhsazz0LXZ1th474io1_1280.jpg);
 background-size: auto 100%;
 border: 0px;
 background-repeat: repeat-x;
*
*
* */