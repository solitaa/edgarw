$(document).ready(function () {
    var pathname = window.location.pathname;
    var pageid = pathname.match(/\d+/)[0];
    console.log(pageid);

    var giantParent = $("#main");
    var container = $("#container");

    addMenu('#main');
    recreateInnerImagesDiv(pageid);


    function recreateInnerImagesDiv(pageId) {
        $.get(edgarw + "/insights/innerImagesViewPartInProjectPageJson/" + pageId, function (data, status) {
                console.log(data);
                var objects = JSON.parse(data);
                console.log(objects);

                var maxHeight = 0;


                var docWidth = $("body").prop("clientWidth");
                for (var i in objects) {
                    obj = objects[i];
                    console.log(obj);

                    var w = Math.round(docWidth * obj.width / 100);
                    var h = Math.round(docWidth * obj.height / 100);
                    var t = Math.round(docWidth * obj.top / 100);
                    var l = Math.round(docWidth * obj.left / 100);

                    var wPercent = Math.round(obj.width);
                    var hPercent = Math.round(obj.height);
                    var tPercent = Math.round(obj.top);
                    var lPercent = Math.round(obj.left);



                    var elem = $("<div>").attr('class', 'innerImagesDiv').css({
                        "width": wPercent+'vw',
                        "height": h,
                        "top": tPercent+'vw',
                        "left": lPercent+'vw'
                    });

                    elem.append('<span style="display:none">' + obj.id + '</span>');
                    var carouselId = 'myCarousel' + obj.id;

                    if (obj.hasOwnProperty('slider_id')) {

                        var c = $("<div>").attr('class', 'carousel slide').attr('id', carouselId).attr('data-interval', false);//.attr('data-ride', 'carousel');
                        var carousel = '<a class="left carousel-control changeNumber" href="#' + carouselId + '" data-slide="prev">' +
                            '           </a>' +
                            '           <a class="right carousel-control changeNumber" href="#' + carouselId + '" data-slide="next">' +
                            '           </a>';
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
                        elem.append('<div class="innerImageInfo" >' +
                            '           <p>Width: <span class="width">' + w + '</span>px</p>' +
                            '           <p>Height: <span class="height">' + h + '</span>px</p>' +
                            '           <p>Top: <span class="top">' + t + '</span>px</p>' +
                            '           <p>Left: <span class="left">' + l + '</span>px</p>' +
                            '        </div>');
                        elem.append('<div class="icons"> ' +
                            '           <span class="deleteInnerImage ' + icons.remove + '"></span>' +
                            '        </div>');

                        var divForNumber = '<div class="numbering" >' +
                            '           <span class="numberingSpan">' + 1 + '/' + obj.slider_images.length + '</span>';

                        elem.append(divForNumber);

                    }
                    else if (obj.hasOwnProperty('video_id')) {
                        var c = '<iframe style="width:' + wPercent + 'vw; height:' + wPercent * .5625 + 'vw; z-index:-1"  src="' + obj.url + '" frameborder="0"  allowfullscreen></iframe>' +
                            '    <div style="width:' + wPercent + 'vw; height:' + wPercent * .5625 + 'vw"></div>' +
                            '    <div class="innerImageInfo">' +
                            '        <p>Width: <span class="width">' + w + '</span>px</p>' +
                            '        <p>Height: <span class="height">' + h + '</span>px</p>' +
                            '        <p>Top: <span class="top">' + t + '</span>px</p>' +
                            '        <p>Left: <span class="left">' + l + '</span>px</p>' +
                            '    </div>';
                        elem.append(c);
                        elem.append('<div class="icons"> ' +
                            '           <span class="deleteInnerImage ' + icons.remove + '"></span>' +
                            '        </div>');                    }
                    else {
                        var c = '<img src="' + obj.src + '" alt="" style="display: inline-block;width:100%">' +
                            '    <div class="innerImageInfo">' +
                            '        <p>Width: <span class="width">' + w + '</span>px</p>' +
                            '        <p>Height: <span class="height">' + h + '</span>px</p>' +
                            '        <p>Top: <span class="top">' + t + '</span>px</p>' +
                            '        <p>Left: <span class="left">' + l + '</span>px</p>' +
                            '    </div>';
                        elem.append(c);
                        elem.append('<div class="icons"> ' +
                            '           <span class="deleteInnerImage ' + icons.remove + '"></span>' +
                            '        </div>');                    }
                    $("#main").append(elem);



                }
                var sliders = $('.carousel');
                sliders.each(function(){
                    var slider = $(this);

                    var leftA = slider.children('.carousel-control.left');
                    var rightA = slider.children('.carousel-control.right');

                    leftA.click(function(){
                        var items = slider.find('.item');
                        var item = slider.find('.item.active');

                        var activeItemNum = item.index();
                        console.log(activeItemNum);
                        if(activeItemNum == 0) {
                            activeItemNum = items.length;
                        }
                        slider.parent().find('.numberingSpan').text(activeItemNum + '/' + items.length);
                    });
                    rightA.click(function(){
                        var items = slider.find('.item');
                        var item = slider.find('.item.active');

                        var activeItemNum = item.index() + 2;
                        console.log(activeItemNum);
                        if(activeItemNum > items.length) {
                            activeItemNum = 1;
                        }
                        slider.parent().find('.numberingSpan').text(activeItemNum + '/' + items.length);
                    });
                });
                $('.innerImagesDiv .deleteInnerImage').off().click(deleteInnerImageFromInnerPageFunction);




                $("#main").children(".innerImagesDiv").resizable({
                    handles: 'e',
                    resize: function (event, ui) {
                        if ($(this).children('iframe').length == 0) {
                            $(this).children('img:not(.deleteInnerImage)').width($(this).width());
                            $(this).find(".width").text(Math.round($(this).width()));

                            if ($(this).find("div.active").length != 0) {
                                $(this).find(".height").text(Math.round($(this).find("div.active").children("img:not(.deleteInnerImage)").height()));
                                $(this).height($(this).find("div.active").children("img:not(.deleteInnerImage)").height());
                            }
                            else {
                                $(this).find(".height").text(Math.round($(this).children("img:not(.deleteInnerImage)").height()));
                                $(this).height($(this).children("img:not(.deleteInnerImage)").height());
                            }

                        }
                        else {
                            $(this).children('iframe').width($(this).width());
                            $(this).children('iframe').height($(this).width() * .5625);
                            $(this).find(".height").text(Math.round(($(this).children("iframe").height())));
                            $(this).height($(this).children("iframe").height());
                        }

                    }
                }).draggable({
                    drag: function (event, ui) {
                        $(this).find("span.top").text(Math.round($(this).position().top));
                        $(this).find("span.left").text(Math.round($(this).position().left));
                    }
                });

            }
        );
    }


    $(".readyButton").click(function () {
        var info = {data: []};
        var images = $(".innerImagesDiv");

        var docWidth = $("body").prop("clientWidth");
        var docHeight = $(document).height();

        console.log(docHeight);
        for (var i = 0; i < images.length; i++) {
            var id = images.eq(i).children("span").text();



            info.data[i] = {
                //name: imgName[imgName.length - 1],
                width: ((images.eq(i).width() * 100) / docWidth),
                height: ((images.eq(i).height() * 100) / docWidth),
                top: ((images.eq(i).position().top * 100) / docWidth),
                left: ((images.eq(i).position().left * 100) / docWidth),
                pageid: id
            };
        }




        $.post(edgarw + "/insights/update/", info).done(function (data) {
            $('#container').append('<div class="doneCenter"><span>Saved!</span></div>');

            setTimeout(function(){
                $('.doneCenter').remove();
            }, 1000);
        });
    });


    function deleteInnerImageFromInnerPageFunction() {
        var parent = $(this).parent();
        var id = $(this).siblings("span").text();
        var yup = false;


        if (parent.children(".innerImagesSliderDiv").length != 0) {
            if (confirm("Are you sure you want to delete this slider?\nAll content will be deleted too.")) {
                yup = true;
            }
        }
        else if (parent.children("iframe").length != 0) {
            if (confirm("Are you sure you want to delete this video?")) {
                yup = true;
            }
        }
        else {
            if (confirm("Are you sure you want to delete this image?")) {
                yup = true;
            }
        }
        if (yup) {
            $.post(edgarw + "/insights/delete/" + id, {})
                .done(function (data) {
                    console.log("Data Loaded: " + data);
                    parent.remove();
                });
        }
    }




});


//links
//http://viralpatel.net/blogs/jquery-resizable-draggable-resize-drag-tutorial-example/