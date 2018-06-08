$(function () {
    var pathname = window.location.pathname;
    var pageid = pathname.match(/\d+/)[0];
    console.log(pageid);

    var giantParent = $("#wrapperScrollable");
    var container = $("#container");

    var insightsText = '';


    recreateInnerImagesDiv(pageid);


    function recreateInnerImagesDiv(pageId) {
        $.get(edgarw + "/project/pageInfoJson/", function (data, status) {
            var innerProject = $(".innerProject");
            var objects = JSON.parse(data);
            for (var i in objects) {
                var obj = objects[i];
                console.log(obj);
                container.css('background-color', obj.inner_bg_color);


                if (obj.id == pageid) {
                    insightsText = obj.inner_text;
                    container.append('<div class="topContainer">' +
                        '               <div class="topLeftText topRightWithPAndA">' +
                        '                   <h2 class="cornerLinks"style="color:' + obj.inner_text_color + '">' + obj.top_left_text + '</h2>' +
                        '                   <span class="cornerLinks"style="color:' + obj.inner_text_color + '">' + cornerTexts.topLeft2 + '</span>' +
                        '               </div>' +
                        '               <div class="topRightText"><h2 class="cornerLinks" style="color:' + obj.inner_text_color + '">' + obj.top_right_text + '</a></div>' +
                        '           </div>' +
                        '           <div class="bottomContainer">' +
                        '               <div class="bottomRightText"><h2 class="cornerLinks" style="color:' + obj.inner_text_color + '">' + obj.bottom_right_text + '</a></div>' +
                        '               <div class="bottomLeftText"><h2 class="cornerLinks" style="color:' + obj.inner_text_color + '">' + obj.bottom_left_text + '</a></div>' +
                        '               <div class="bottomText"><h2 class="cornerLinks" style="color:' + obj.inner_text_color + '">' + cornerTexts.exit + '</a></div>' +
                        '           </div>');

                    console.log(insightsText);
                    var textDiv = '<div class="insightsText innerImagesDiv showAndMoveUp" id="myInstance' + obj.id + '">' + insightsText + '</div>';
                    container.append(textDiv);
                    break;
                }
            }
            $('title').text(obj.bottom_left_text);

            $('#container .topLeftText').click(function (e) {
                e.preventDefault();
                container.addClass('hideDiv');

                container.unbind().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    document.location.href = edgarw + '/project/view';

                });
            });

            $('#container .bottomLeftText').click(function (e) {
                e.preventDefault();
                container.addClass('hideDiv');

                container.unbind().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    document.location.href = edgarw + '/project/view#p' + pageid;

                });
            });

            $('#container .bottomText').click(function (e) {
                e.preventDefault();
                console.log($(this));
                container.addClass('hideDiv');

                container.unbind().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    document.location.href = edgarw + '/project/view#p' + pageid;

                });
            });

            $('#container .topRightText').click(function (e) {
                e.preventDefault();
                console.log($(this));
                container.addClass('hideDiv');

                container.unbind().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    document.location.href = edgarw + '/project/view#p02';

                });
            });

            $('#container .bottomRightText').click(function (e) {
                e.preventDefault();
                console.log($(this));
                container.addClass('hideDiv');

                container.unbind().on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    document.location.href = edgarw + '/project/view#p01';

                });
            });
        });


        $.get(edgarw + "/insights/innerImagesViewPartInProjectPageJson/" + pageId, function (data, status) {
            var objects = JSON.parse(data);
            var maxHeight = 0;
            var docWidth = $(document).width();
            for (var i in objects) {
                var obj = objects[i];
                var w = Math.round(docWidth * obj.width / 100);
                var h = Math.round(docWidth * obj.height / 100);
                var t = Math.round(docWidth * obj.top / 100);
                var l = Math.round(docWidth * obj.left / 100);



                var percent = Math.round(100 * 50 / docWidth);


                var wPercent = Math.round(obj.width);
                var hPercent = Math.round(obj.height);
                var tPercent = Math.round(obj.top);
                var lPercent = Math.round(obj.left);

                if (tPercent > maxHeight){
                    maxHeight = tPercent + hPercent;
                    console.log(tPercent, hPercent);
                }



                //console.log(tPercent, t);


                var elem = $("<div>").attr('class', 'innerImagesDiv notVisible').css({
                    "width": wPercent + 'vw',
                    "top": tPercent + 'vw',
                    "left": lPercent + 'vw'
                });

                if (t < 350) {
                    elem.removeClass('notVisible');
                }


                elem.append('<span style="display:none">' + obj.id + '</span>');
                var carouselId = 'myCarousel' + obj.id;

                if (obj.hasOwnProperty('slider_id')) {

                    var c = $("<div>").attr('class', 'carousel slide').attr('id', carouselId).attr('data-interval', false);//.attr('data-ride', 'carousel');
                    var carousel = '<a class="left carousel-control" href="#' + carouselId + '" data-slide="prev">' +
                        '           </a>' +
                        '           <a class="right carousel-control" href="#' + carouselId + '" data-slide="next">' +
                        '           </a>' +
                        '           <div class="mycur" class="cursorImage"></div>';
                    c.append(carousel);

                    var cInner = $("<div>").attr('class', 'carousel-inner');

                    for (var j in obj.slider_images) {
                        var active = j == 0 ? "active" : "";
                        var cImages = '<div class="item ' + active + '">' +
                            '               <img src="' + obj.slider_images[j].image_src + '" style="width:100%;">' +
                            '           </div>';
                        cInner.append(cImages);
                    }
                    c.prepend(cInner);
                    elem.append(c);
                    var divForNumber = '<div class="numbering" >' +
                        '           <span class="numberingSpan">' + 1 + '/' + obj.slider_images.length + '</span>';

                    elem.append(divForNumber);


                }
                else if (obj.hasOwnProperty('video_id')) {
                    var c = '<iframe style="width:' + wPercent + 'vw; height:' + wPercent * .5625 + 'vw; z-index:-1"  src="' + obj.url + '" frameborder="0"  allowfullscreen></iframe>';
                    elem.append(c);
                }
                else {
                    var c = '<img src="' + obj.src + '" alt="" style="display: inline-block;width:100%">';
                    elem.append(c);
                }
                $("#main").append(elem);

            }


            console.log(maxHeight);
            $("#main").css('height', maxHeight + 'vw');


            var sliders = $('.carousel');
            sliders.each(function () {
                var slider = $(this);

                var leftA = slider.children('.carousel-control.left');
                var rightA = slider.children('.carousel-control.right');

                leftA.click(function () {
                    var items = slider.find('.item');
                    var item = slider.find('.item.active');

                    var activeItemNum = item.index();
                    console.log(activeItemNum);
                    if (activeItemNum == 0) {
                        activeItemNum = items.length;
                    }
                    slider.parent().find('.numberingSpan').text(activeItemNum + '/' + items.length);
                });
                rightA.click(function () {
                    var items = slider.find('.item');
                    var item = slider.find('.item.active');

                    var activeItemNum = item.index() + 2;
                    console.log(activeItemNum);
                    if (activeItemNum > items.length) {
                        activeItemNum = 1;
                    }
                    slider.parent().find('.numberingSpan').text(activeItemNum + '/' + items.length);
                });
            });


        });


    }

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        //console.log($('.innerImagesDiv'));
        var toBeAnimated = $('.innerImagesDiv.notVisible');
        for (var i = 0; i < toBeAnimated.length; i++) {

            if (toBeAnimated.eq(i).position().top < scroll + 400) {
                toBeAnimated.eq(i).removeClass('notVisible').addClass('showAndMoveUp');
            }
        }
    });


});


//links
//http://viralpatel.net/blogs/jquery-resizable-draggable-resize-drag-tutorial-example/
//https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_carousel&stacked=h