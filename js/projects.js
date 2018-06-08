$(document).ready(function () {
    var giantParent = $(".content");
    addMenu('.wrapperScrollable');


    var pathname = window.location.pathname;
    var pageId = pathname.match(/\d+/)[0];


    $('#cpTextColor, #cpInnerBgColor, #cpInnerTextColor').colorpicker();
    var quill = new Quill('#myInstance' + pageId, {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });



    giantParent.children('.table').append(recreateInnerImagesDiv(pageId));




    $(".addMore").click(function () {
        var afterId = $(this).parents('.project').find('input[type=hidden]').attr('value');

        var dropdownTagsCategory = $('.tablePartCategories').find(".custom-select-option-box").eq(0).clone();
        var dropdownTagsYear = $('.tablePartCategories').find(".custom-select-option-box").eq(1).clone();
        var l = dropdownTagsCategory.children();
        for (var i = 0; i < l.length; i++) {
            l.eq(i).css("background", '#ffffff').find("input").prop('checked', false);
        }

        var t = dropdownTagsYear.children();

        for (var i = 0; i < t.length; i++) {
            if (i == 0) {
                t.eq(i).css("background", '#c4daff').find("input").prop('checked', true);
            }
            else {
                t.eq(i).css("background", '#ffffff').find("input").prop('checked', false);
            }
        }

        var x = '   <form method="POST" class="mainInfoForm" action="' + edgarw + '/project/add/' + afterId + '" " enctype="multipart/form-data">' +
            '           <div class="projectsTable">' +
            '               <input type="hidden" name="id" value="<?php echo $projectId; ?>">' +
            '               <div class="tablePart tablePartTexts">' +
            '                   <div class="tableContent">' +
            '                       <textarea name="top_left">studio edgar kandratian</textarea>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartTexts">' +
            '                   <div class="tableContent">' +
            '                       <textarea name="top_right">information</textarea>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartTexts">' +
            '                   <div class="tableContent">' +
            '                       <textarea name="bottom_left"></textarea>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartTexts">' +
            '                   <div class="tableContent">' +
            '                       <textarea name="bottom_right">registry</textarea>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartColors">' +
            '                   <div class="tableContent">' +
            '                       <div>' +
            '                           <div class="colorTitle">' +
            '                               <span>Homepage text color</span>' +
            '                           </div>' +
            '                           <div id="cpTextColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="1">' +
            '                               <input type="text" class="form-control input-lg" name="textColor" value="#ffffff">' +
            '                               <span class="input-group-addon"><i></i></span>' +
            '                           </div>' +
            '                       </div>' +
            '                       <div>' +
            '                           <div class="colorTitle">' +
            '                               <span>Insights bg color</span>' +
            '                           </div>' +
            '                           <div id="cpInnerBgColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="2">' +
            '                               <input type="text" class="form-control input-lg" name="innerBgColor" value="#ffffff">' +
            '                               <span class="input-group-addon"><i></i></span>' +
            '                           </div>' +
            '                       </div>' +
            '                       <div>' +
            '                           <div class="colorTitle">' +
            '                               <span>Insights text color</span>' +
            '                           </div>' +
            '                           <div id="cpInnerTextColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="3">' +
            '                               <input type="text" class="form-control input-lg" name="innerTextColor" value="#ffffff">' +
            '                               <span class="input-group-addon"><i></i></span>' +
            '                           </div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartCategories">' +
            '                   <div class="tableContent">' +
            '                       <div class="custom-select">Categories</div>' +
            '                       <div class="custom-select">Years</div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartTexts">' +
            '                   <div class="tableContent">' +
            '                       <textarea title="If there are more than one clients, separate names using , sign." name="client_name"></textarea>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartImages">' +
            '                   <div class="tableContent">' +
            '                       <div class="bgImages">' +
            '                           <input type="file" id="file-4S" name="imageikSmall" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">' +
            '                           <label for="file-4S">' +
            '                               <span class="' + icons.open + '"  title="Hide/Show this project"></span>' +
            '                               <span>Bg image S</span>' +
            '                           </label>' +
            '                       </div>' +
            '                       <div class="bgImages">' +
            '                           <input type="file" id="file-4M" name="imageikMedium" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">' +
            '                           <label for="file-4M">' +
            '                               <span class="' + icons.open + '" title="Hide/Show this project"></span>' +
            '                               <span>Bg image M</span>' +
            '                           </label>' +
            '                       </div>' +
            '                       <div class="bgImages">' +
            '                           <input type="file" id="file-4L" name="imageikLarge" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">' +
            '                           <label for="file-4L">' +
            '                               <span class="' + icons.open + '" title="Hide/Show this project"></span>' +
            '                               <span>Bg image L</span>' +
            '                           </label>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="tablePart tablePartIcons">' +
            '                   <div class="tableContent">' +
            '                       <button type="submit" name="addmore">' +
            '                           <span class="addmore ' + icons.agree + '" title="Add"></span>' +
            '                       </button>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </form>';


        $(this).after(x);
        $('#cpTextColorAdd, #cpInnerBgColorAdd, #cpInnerTextColorAdd').colorpicker();

        var newForm = $(this).next();

        newForm.find('.tablePartCategories').find('.custom-select').eq(0).after(dropdownTagsCategory);
        newForm.find('.tablePartCategories').find('.custom-select').eq(1).after(dropdownTagsYear);

        $(this).off('click');
        tableEvents();

        //validation
        newForm.submit(function (e) {
            var textAreaValid = validateTextarea($(this));
            var inputTypeCheckboxValid = validateInputTypeCheckbox($(this));
            var inputTypeFileValid = validateInputTypeFile($(this));

            if (!textAreaValid || !inputTypeCheckboxValid || !inputTypeFileValid) {
                e.preventDefault();
            }
        });
    });


    //----------------INSIGHTS TEXT EVENTS-----------------------
    function insghtsTextEvents() {
        $('.saveInsightsText').unbind().click(saveInsightsTextFunction);
    }
    insghtsTextEvents();
    //----------------INSIGHTS TEXT EVENTS-----------------------

    //----------------INSIGHTS TEXT FUNCTIONS-----------------------

    function saveInsightsTextFunction(){
        var parentProject = $(this).parents('.project');
        var parentId = parentProject.find('input[type=hidden]').attr('value');

        var text = parentProject.find('.ql-editor').html();

        $.post(edgarw + "/project/updateInsightsText/" + parentId, {info: text})
            .done(function (data) {
                savedWithAjax('.wrapperScrollable','Saved!');
            });
    }

    //----------------INSIGHTS TEXT FUNCTIONS-----------------------




    //----------------TABLE EVENTS-----------------------

    function tableEvents() {
        $(".custom-select").unbind().click(customSelectClickFunction);
        $(".custom-select-option label").off().on("click", chooseCategory);

        $('.inputfile').each(function () {
            var $input = $(this);

            $input.unbind().on('change', imageUploadViewFileCount).on('focus', function () {
                $input.addClass('has-focus');
            }).on('blur', function () {
                $input.removeClass('has-focus');
            });
        });

    }

    tableEvents();
    //----------------TABLE EVENTS-----------------------

    //----------------TABLE FUNCTIONS--------------------

    function imageUploadViewFileCount(e) {
        var $input = $(this);
        $label = $input.next('label'), labelVal = $label.html();
        var fileName = '';

        if (this.files && this.files.length > 1) {
            fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
        }
        else if (e.target.value)
            fileName = e.target.value.split('\\').pop();

        if (fileName){
            $label.find('span:not(.glyphicon)').html(fileName);
        }
        else
            $label.html(labelVal);
    }


    $("body").on("click", function (e) {
        if ($(e.target).attr("class") != "custom-select-option-checkbox" && $(e.target).attr("class") != "addCategory" && $(e.target).attr("class") != "custom-select" && $(e.target).attr("class") != "custom-select-option" && $(e.target).attr("class") != "catLabel") {
            $(".custom-select-option-box").hide();
        }
    });


    function chooseCategory(e) {
        var checkboxDiv = $(this).parent();
        var checkboxObj = $(this).children('input');
        if (checkboxObj.attr('type') == 'radio') {
            var radios = checkboxObj.parents('.custom-select-option-box').find('input').each(function () {
                $(this).prop('checked', false);
                $(this).parents('.custom-select-option').css("background-color", '#ffffff');
            });
            checkboxObj.prop('checked', true);
            checkboxDiv.css("background", '#c4daff');
        }
        else if (checkboxObj.attr('type') == 'checkbox') {
            if (checkboxObj.prop('checked') == true) {
                checkboxObj.prop('checked', false);
                checkboxDiv.css("background", '#ffffff');
            } else {
                checkboxObj.prop('checked', true);
                checkboxDiv.css("background", '#c4daff');
            }
        }

    }


    function customSelectClickFunction() {
        var siblingDropdown = $(this).next().siblings('.custom-select-option-box');
        if (siblingDropdown.css('display') == 'block') {
            siblingDropdown.hide();
        }

        $(this).next().toggle();
    }


    //----------------TABLE FUNCTIONS-----------------------


    //----------------VALIDATION EVENTS-----------------------


    //----------------VALIDATION EVENTS-----------------------

    function ValidationEvents() {
        var mainInfoForms = $(".mainInfoForm");
        mainInfoForms.children('input').unbind().change(function () {
            validateForm($(this));
        });
        mainInfoForms.each(function () {
            var mainInfoForm = $(this);

            mainInfoForm.find('textarea').unbind().change(function () {
                var form = $(this).parents('form');
                var res = validateTextarea(form);
            });

            mainInfoForm.find('input[type="checkbox"]').unbind().change(function () {
                var form = $(this).parents('form');
                var resinput = validateInputTypeCheckbox(form);
            });
        });
        mainInfoForms.each(function () {
            var mainInfoForm = $(this);
            mainInfoForm.submit(function (e) {

                var textAreaValid = validateTextarea($(this));
                var inputTypeCheckboxValid = validateInputTypeCheckbox($(this));
                if (!textAreaValid || !inputTypeCheckboxValid) {
                    e.preventDefault();
                }
            });
        });
    }

    ValidationEvents();

    //----------------VALIDATION EVENTS-----------------------


    //----------------VALIDATION FUNCTIONS-----------------------

    function validateTextarea(mainInfo) {

        var validForm = true;
        var textareas = mainInfo.find('textarea');
        textareas.each(function (index) {
            var textarea = $(this);
            if (!$.trim(textarea.val())) {
                textarea.parents('.tableContent').css('border', '2px solid red');
                validForm = false;
            }
            else {
                textarea.parents('.tableContent').css('border', 'none');
            }
        });
        return validForm;
    }


    function validateInputTypeFile(mainInfo) {
        var validForm = true;

        var inputBgImages = mainInfo.find('input[type="file"]');

        inputBgImages.each(function (index) {
            var inputBgImage = $(this);
            if (!inputBgImage.val()) {
                inputBgImage.siblings('label').css('border', '2px solid red');
                validForm = false;
            }
            else {
                inputBgImage.siblings('label').css('border', 'none');
            }
        });
        return validForm;
    }


    function validateInputTypeCheckbox(mainInfo) {
        var validForm = true;

        var inputsCategory = mainInfo.find('input[name="category[]"]:checked');

        if (!(inputsCategory.length > 0)) {
            mainInfo.find('.custom-select').eq(0).css('border', '2px solid red');
            validForm = false;
        }
        else {
            mainInfo.find('.custom-select').eq(0).css('border', '1px solid #d6d6d6');
        }
        return validForm;
    }

    //----------------VALIDATION FUNCTIONS-----------------------


    //----------------MAIN PROJECT EVENTS-----------------------
    function ProjectEvents() {
        $(".inactiveProject").unbind().click(inactiveProjectFunction);
        $(".removeProject").unbind().click(removeProjectFunction);
    }

    ProjectEvents();
    //----------------MAIN PROJECT EVENTS-----------------------


    //----------------MAIN PROJECT FUNCTIONS-----------------------

    function inactiveProjectFunction() {
        var parentProject = $(this).parents('.project');
        var parentId = parentProject.find('input[type=hidden]').attr('value');
        $.post(edgarw +"/project/inactive/" + parentId)
            .done(function (data) {
                parentProject.css('opacity', data);
                if(data == 0.5){
                    savedWithAjax('.wrapperScrollable','Project is inactive.');

                }
                else if(data == 1){
                    savedWithAjax('.wrapperScrollable','Project is active.');
                }
            });
    }

    function removeProjectFunction() {
        if(confirm('Are you sure you want to delete this project? \n All contents will be deleted too.')) {
            var parentProject = $(this).parents('.project');
            var parentId = parentProject.find('input[type=hidden]').attr('value');

            $.post(edgarw + "/project/deleteForever/" + parentId)
                .done(function (data) {
                    window.location.replace(edgarw + '/project/wholeList');
                });
        }
    }


    //----------------MAIN PROJECT FUNCTIONS-----------------------


    //----------------INNER IMAGES EVENTS-----------------------
    function InnerImagesEvents() {
        $(".rightArrow").unbind().click(rightArrowFunction);
        $(".leftArrow").unbind().click(leftArrowFunction);

        $(".deleteInnerImage").unbind().click(deleteInnerImageFunction);
        $(".addInnerImagesForm").unbind().on('submit', function (e) {
            e.preventDefault();
            addInnerImagesFormFunction($(this));
        });
    }

    InnerImagesEvents();

    //----------------INNER IMAGES EVENTS-----------------------


    //----------------INNER IMAGES FUNCTIONS-----------------------

    function addInnerImagesFormFunction(elem) {
        var giantParent = elem.parents(".content");
        var pageId = elem.parents('.project').find('input[type=hidden]').attr('value');

        var filesCount = elem.children("input[type=file]")[0].files.length;
        if (filesCount != 0) {
            var formData = new FormData(elem[0]);
            $.ajax({
                url: edgarw + "/insights/add/" + pageId,
                type: "POST",
                data: formData,
                success: function (data) {

                    giantParent.find('div.innerImagesDivAllInfo').remove();
                    giantParent.children('.table').append(recreateInnerImagesDiv(pageId));
                },
                error: function (data) {

                },
                cache: false,
                contentType: false,
                processData: false
            });
        }


    }

    function deleteInnerImageFunction() {
        var parent = $(this).parents('.innerImagesEditPage');
        var id = parent.attr("data-id");
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
                    changeInnerImagesOrder(parent);
                    parent.remove();
                });
        }
    }

    function rightArrowFunction() {
        var parent = $(this).parents('.innerImagesEditPage');
        var next = parent.next();
        if (next.hasClass('innerImagesEditPage')) {
            var p = parent.detach();
            next.after(p);
            var pageId = $(this).parents('.project').find('input[type=hidden]').attr('value');
            changeInnerImagesOrder($(this));
        }
    }

    function leftArrowFunction() {
        var parent = $(this).parents('.innerImagesEditPage');
        var prev = parent.prev();
        if (prev.hasClass('innerImagesEditPage')) {
            var p = parent.detach();
            prev.before(p);
            var pageId = $(this).parents('.project').find('input[type=hidden]').attr('value');
            changeInnerImagesOrder($(this));
        }
    }

    function changeInnerImagesOrder(elem) {
        var idArr = [];
        elem.parents('.innerImagesDivAllInfo').children('.innerImagesEditPage').each(function () {
            idArr.push($(this).attr('data-id'));

        });
        if (idArr.length >= 0) {
            $.post(edgarw + "/insights/innerImagesOrder/", {ids: idArr})
                .done(function (data) {
                });
        }
    }


    //----------------INNER IMAGES FUNCTIONS-----------------------


    //----------------SLIDER EVENTS-----------------------
    function sliderEvents() {
        $(".sliderRightArrow").unbind().click(sliderRightArrowFunction);
        $(".sliderLeftArrow").unbind().click(sliderLeftArrowFunction);

        $(".addSlierImagesIcon").unbind().click(addSlierImagesIconFunction);
        $('.addSliderImagesInput').unbind().change(addSliderImagesInputFunction);

        $(".addSliderImagesForm").unbind().on('submit', function (e) {
            e.preventDefault();
            addSliderImagesFormFunction($(this));
        });
        $(".deleteSliderImage").unbind().click(deleteSliderImageFunction);
    }

    sliderEvents();

    //----------------SLIDER EVENTS-----------------------


    //----------------SLIDER FUNCTIONS-----------------------


    function deleteSliderImageFunction() {
        if (confirm("Are you sure you want to delete this image?")) {
            var sliderImageId = $(this).parents(".innerImagesSliderDiv").attr('data-id');
            var parent = $(this).parents(".innerImagesSliderDiv");
            var sliderParentId = parent.parent('.innerImagesEditPage').attr('data-id');

            if (parent.siblings('.innerImagesSliderDiv').length == 0) {
                savedWithAjax('.wrapperScrollable','This is the last image, please delete slider.');
            }
            else {
                $.post(edgarw + "/insights/deleteSliderImage/" + sliderImageId, {})
                    .done(function (data) {
                        parent.remove();
                        changeSliderImagesOrder(parent, sliderParentId);
                    });
            }


        }
    }

    function addSliderImagesFormFunction(elem) {
        var pageId = elem.parents('.project').find('input[type=hidden]').attr('value');
        var giantParent = elem.parents(".content");


        var filesCount = elem.children("input[type=file]")[0].files.length;
        if (filesCount != 0) {
            var formData = new FormData(elem[0]);
            $.ajax({
                url: edgarw + "/insights/addSlider/" + pageId,
                type: "POST",
                data: formData,
                success: function (data) {

                    giantParent.find('div.innerImagesDivAllInfo').remove();
                    giantParent.children('.table').append(recreateInnerImagesDiv(pageId));
                },
                error: function (data) {

                },
                cache: false,
                contentType: false,
                processData: false
            });
        }


    }

    function addSlierImagesIconFunction() {
        $(this).siblings('.addSliderImagesInput').trigger('click');
    }

    function addSliderImagesInputFunction() {
        var giantParent = $(this).parents(".content");
        var parent = $(this).parent("form");
        var sliderParentId = parent.parents('.innerImagesEditPage').attr("data-id");

        var pageId = $(this).parents('.project').find('input[type=hidden]').attr('value');


        var formData = new FormData($(this).parent()[0]);

        $.ajax({
            url: edgarw + "/insights/addSliderImage/" + sliderParentId,
            type: "POST",
            data: formData,
            success: function (data) {

                giantParent.find('div.innerImagesDivAllInfo').remove();
                giantParent.children('.table').append(recreateInnerImagesDiv(pageId));

            },
            error: function (data) {
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }


    function sliderRightArrowFunction() {
        var parent = $(this).parents('.innerImagesSliderDiv');
        var sliderParentId = parent.parent().attr('data-id');
        var next = parent.next();
        if (next.hasClass('innerImagesSliderDiv')) {
            var p = parent.detach();
            next.after(p);
            changeSliderImagesOrder($(this), sliderParentId);

        }
    }

    function sliderLeftArrowFunction() {
        var parent = $(this).parents('.innerImagesSliderDiv');
        var sliderParentId = parent.parent().attr('data-id');
        var prev = parent.prev();
        if (prev.hasClass('innerImagesSliderDiv')) {
            var p = parent.detach();
            prev.before(p);
            changeSliderImagesOrder($(this), sliderParentId);

        }
    }

    function changeSliderImagesOrder(elem, sliderParentId) {
        var idArr = [];
        elem.parents('.innerImagesEditPage').children('.innerImagesSliderDiv').each(function () {
            idArr.push($(this).attr('data-id'));

        });
        if (idArr.length >= 0) {
            $.post(edgarw + "/insights/sliderImagesOrder/" + sliderParentId, {ids: idArr})
                .done(function (data) {
                });

        }

    }

    //----------------SLIDER FUNCTIONS-----------------------


    //----------------VIDEO EVENTS-----------------------
    function videoEvents() {
        $(".addVideoForm").unbind().on('submit', function (e) {
            e.preventDefault();
            addVideoFormFunction($(this));
        });

    }

    videoEvents();

    //----------------VIDEO EVENTS-----------------------


    //----------------VIDEO FUNCTIONS-----------------------


    function addVideoFormFunction(elem) {
        var pageId = elem.parents('.project').find('input[type=hidden]').attr('value');
        var giantParent = elem.parents(".content");
        var videoInputText = elem.children("input[type=text]").val();

        //Regex for both youtube and vimeo
        var videoRegex = /^(http:\/\/|https:\/\/)(player\.vimeo\.com|vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/igm;
        var t = videoInputText.match(videoRegex);



        if (t) {
            var formData = new FormData(elem[0]);
            $.ajax({
                url: edgarw + "/insights/addVideo/" + pageId,
                type: "POST",
                data: formData,
                success: function (data) {
                    elem[0].reset();
                    giantParent.find('div.innerImagesDivAllInfo').remove();
                    giantParent.children('.table').append(recreateInnerImagesDiv(pageId));
                },
                error: function (data) {

                },
                cache: false,
                contentType: false,
                processData: false
            });
        }
        else {
            savedWithAjax('.wrapperScrollable','Wrong video link!');
        }
    }

    //----------------VIDEO FUNCTIONS-----------------------


    function recreateInnerImagesDiv(pageId) {
        var mainDiv = $("<div>").attr('class', 'innerImagesDivAllInfo');

        var adr = edgarw + "/insights/innerImagesViewPartInProjectPageJson/" + pageId;


        $.get(adr, function (data, status) {
            var objects = JSON.parse(data);
            for (var i in objects) {
                obj = objects[i];
                var elem = $("<div>").attr('class', 'innerImagesEditPage').attr('data-id', obj.id);

                if (obj.hasOwnProperty('slider_id')) {
                    for (var j in obj.slider_images) {
                        elem.append('  <div class="innerImagesSliderDiv" data-id="' + obj.slider_images[j].slider_image_id + '">' +
                            '               <img src="' + obj.slider_images[j].image_src + '" width="130" class="impImage">' +
                            '               <div class="icons"> ' +
                            '                   <span class="sliderLeftArrow ' + icons.left + '"></span>' +
                            '                   <span class="sliderRightArrow ' + icons.right + '"></span>' +
                            '                   <span class="deleteSliderImage ' + icons.remove + '"></span>' +
                            '               </div>' +
                            '          </div>');
                    }
                    elem.append('<div class="icons"> ' +
                        '           <span class="leftArrow ' + icons.left + '"></span>' +
                        '           <span class="rightArrow ' + icons.right + '"></span>' +
                        '           <span class="deleteInnerImage ' + icons.remove + '"></span>' +
                        '           <div class="addMoreImagesDiv">' +
                        '               <form action="" class="addMoreSliderImagesForm">' +
                        '                   <input class="addSliderImagesInput" type="file" name="sliderImages[]" multiple="">' +
                        '                   <span class="addSlierImagesIcon ' + icons.picture + '"></span>' +
                        '               </form>' +
                        '           </div>' +
                        '       </div>');


                }
                else if (obj.hasOwnProperty('video_id')) {
                    var url = 'https://www.youtube.com/embed/GSJdhd0stAg&index=1&list=PLZuYoNCexkHM3TE-AYsM3dqt9HSQM1dao';
                    elem.append('<iframe width="130" height="130"  src="' + obj.url + '" frameborder="0"  allowfullscreen></iframe>' +
                        '        <div class="icons"> ' +
                        '           <span class="leftArrow ' + icons.left + '"></span>' +
                        '           <span class="rightArrow ' + icons.right + '"></span>' +
                        '           <span class="deleteInnerImage ' + icons.remove + '"></span>' +
                        '        </div>');

                }
                else {
                    elem.append('<img src="' + obj.src + '" width="130" class="impImage">' +
                        '        <div class="icons"> ' +
                        '           <span class="leftArrow ' + icons.left + '"></span>' +
                        '           <span class="rightArrow ' + icons.right + '"></span>' +
                        '           <span class="deleteInnerImage ' + icons.remove + '"></span>' +
                        '        </div>');


                }
                mainDiv.append(elem);
            }


            mainDiv.append('<div class="innerImagesForm">' +
                '               <form method="POST" enctype="multipart/form-data" class="addInnerImagesForm form-style-9" >' +
                '                   <input type="file" id="file-1' + pageId + '" name="innerimages[]" multiple=""  class="inputfile inputfile-1"  data-multiple-caption="{count} files selected">' +
                '                   <label for="file-1' + pageId + '">' +
                '                       <span class="' + icons.open + '" title="Hide/Show this project"></span>' +
                '                       <span>Choose inner images&hellip;</span>' +
                '                   </label>     ' +
                '                   <input type="submit" name="addmoreinnerimages" value="Add">' +
                '               </form>' +
                '               <form method="POST" enctype="multipart/form-data" class="addSliderImagesForm form-style-9">' +
                '                   <input type="file" id="file-2' + pageId + '" name="sliderImages[]" multiple=""  class="addSlider inputfile inputfile-1"  data-multiple-caption="{count} files selected">' +
                '                   <label for="file-2' + pageId + '">' +
                '                       <span class="' + icons.open + '" title="Hide/Show this project"></span>' +
                '                       <span>Choose new slider images&hellip;</span>' +
                '                   </label>     ' +
                '                   <input type="submit" name="addSliderImages" value="Add">' +
                '               </form>' +
                '               <form method="POST" class="addVideoForm  form-style-9">' +
                '                   <input class="addVideoInput" type="text" name="videoUrl" placeholder="Video link" >' +
                '                   <input type="submit" name="addVideo" value="Add">' +
                '               </form>' +
                '               <a href="' + edgarw + '/insights/arrange/' + pageId + '" target="_blank">' +
                '                   <button class="goToInnerPageButton">Go to insights page</button>' +
                '               </a>' +
                '           </div>' +
                '           <div class="clear"></div>' +
                ' ');


            InnerImagesEvents();
            sliderEvents();
            videoEvents();
            tableEvents();
            //mainDiv.append('<script src="' + edgarw + '/js/lib/jquery.custom-file-input.js"></script>');

        });



        return mainDiv;
    }


});
