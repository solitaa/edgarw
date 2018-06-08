$(document).ready(function () {
    var giantParent = $(".wrapper");
    addMenu('.wrapper');
    var aboutDiv = $(".aboutDiv");


    // -------------------ABOUT DIV INFO--------------------------------


    const cornerTexts = {
        'topLeft': 'studio edgar kandratian',
        'topLeft2': 'art direction &#38; graphic design',
        'topRight': 'information',
        'bottomRight': 'registry',
        'back': 'back to projects',
        'exit': 'back to projects',
        'insights': 'back to projects'
    };
    var texts = '<div class="topContainer">' +
        '           <div class="topLeftText topRightWithPAndA">' +
        '               <h2 class="cornerLinks">' + cornerTexts.topLeft + '</h2>' +
        '               <span class="cornerLinks">' + cornerTexts.topLeft2 + '</span>' +
        '           </div>' +
        '           <div class="topRightText closeAboutDiv"><h2 class="cornerLinks" >' + cornerTexts.topRight + '</h2></div>' +
        '           <div class="bottomRightText closeAllProjectsDiv"><h2 class="cornerLinks" >' + cornerTexts.bottomRight + '</h2></div>' +
        '       </div>' +
        '       <div class="bottomContainer">' +
        '           <div class="bottomRightText closeAllProjectsDiv"><h2 class="cornerLinks" >' + cornerTexts.bottomRight + '</h2></div>' +
        '           <div class="bottomLeftText closeAboutDiv"><h2 class="cornerLinks" >' + cornerTexts.back + '</h2></div>' +
        '       </div>';


    aboutDiv.append(texts);






    $.get(edgarw + "/info/infoJson/", function (data, status) {

        var dat = JSON.parse(data);

        console.log(dat);

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

        console.log(aboutColor);
        var aboutColor = colors.infoBgColor;
        var aboutTextColor = colors.infoTextColor;


        aboutDiv.css('background-color', aboutColor).css('color', aboutTextColor);
        $('.allProjectsDiv').css('background-color', aboutColor);

        $('.aboutDiv .topContainer').css('background-color', aboutColor);
        $('.aboutDiv .bottomContainer').css('background-color', aboutColor);

        $('.colorTd input').attr('value', aboutColor);
        $('.sp-preview-inner').css('background-color', aboutColor);
        var infoEditTags = '<div class="editInfo">' +
            '                   <div class="saveTextChangesDiv">' +
            '                       <span>Save text changes </span>' +
            '                       <span class="saveText ' + icons.agree + '"></span>' +
            '                   </div>' +
            '                   <div class="infoDiv">' +
            '                       <form method="POST" id="infoForm" action="' + edgarw + '/info/updateImageAndColor/" enctype="multipart/form-data">' +
            '                           <div class="infoTable">' +
            '                               <div class="tablePart tablePartColors">' +
            '                                   <div class="colorContainerInline">' +
            '                                       <div>' +
            '                                           <div class="colorTitle">' +
            '                                               <span>Info bg color</span>' +
            '                                           </div>' +
            '                                           <div class="tableContent">' +
            '                                               <div id="aboutBgColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="1">' +
            '                                                   <input type="text" class="form-control input-lg" name="infoBgColor" value="' + colors.infoBgColor + '">' +
            '                                                   <span class="input-group-addon"><i></i></span>' +
            '                                               </div>' +
            '                                           </div>' +
            '                                       </div>' +
            '                                       <div>' +
            '                                           <div class="colorTitle">' +
            '                                               <span>Info text color</span>' +
            '                                           </div>' +
            '                                           <div class="tableContent">' +
            '                                               <div id="aboutTextColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="1">' +
            '                                                   <input type="text" class="form-control input-lg" name="infoTextColor" value="' + colors.infoTextColor + '">' +
            '                                                   <span class="input-group-addon"><i></i></span>' +
            '                                               </div>' +
            '                                           </div>' +
            '                                       </div>' +
            '                                   </div>' +
            '                                   <div class="colorContainerInline colorContainerInlineBig" >' +
            '                                       <div>' +
            '                                           <div class="colorTitle">' +
            '                                               <span>Registry bg color</span>' +
            '                                           </div>' +
            '                                           <div class="tableContent">' +
            '                                               <div id="registryBgColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="1">' +
            '                                                   <input type="text" class="form-control input-lg" name="registryBgColor" value="' + colors.registryBgColor + '">' +
            '                                                   <span class="input-group-addon"><i></i></span>' +
            '                                               </div>' +
            '                                           </div>' +
            '                                       </div>' +
            '                                       <div>' +
            '                                           <div class="colorTitle">' +
            '                                               <span>Registry text color</span>' +
            '                                           </div>' +
            '                                           <div class="tableContent">' +
            '                                               <div id="registryTextColorAdd" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="1">' +
            '                                                   <input type="text" class="form-control input-lg" name="registryTextColor" value="' + colors.registryTextColor + '">' +
            '                                                   <span class="input-group-addon"><i></i></span>' +
            '                                               </div>' +
            '                                           </div>' +
            '                                       </div>' +
            '                                   </div>' +
            '                               </div>' +
            '                               <div class="tablePart tablePartImages">' +
            '                                   <div class="tableContent">' +
            '                                       <div class="bgImages">' +
            '                                           <input type="file" id="file-info" name="infoImage" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">' +
            '                                           <label for="file-info">' +
            '                                               <span class="' + icons.open + '"></span>' +
            '                                               <span>IMG</span>' +
            '                                           </label>' +
            '                                       </div>' +
            '                                   </div>' +
            '                               </div>' +
            '                               <div class="tablePart tablePartIcons">' +
            '                                   <div class="tableContent">' +
            '                                       <button type="submit" name="updateInfoImageColor">' +
            '                                           <span class="addmore ' + icons.agree + '" title="Update"></span>' +
            '                                       </button>' +
            '                                   </div>' +
            '                               </div>' +
            '                           </div>' +
            '                       </form>' +
            '                   </div>' +
            '               </div>';

        aboutDiv.append(infoEditTags);
        $('#aboutTextColorAdd, #aboutBgColorAdd, #registryTextColorAdd, #registryBgColorAdd').colorpicker();

        //----------------INFO EVENTS-----------------------
        $(".saveText").click(updateInfoFunction);

        //----------------INFO EVENTS-----------------------





        var texts = '<div class="aboutContainer">' +
            '           <div>' +
            '               <div class="leftDiv"><div id="myInstance1" data-id="1" class="mainInfo">' + info1 + '</div></div>' +
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
            '                       <div class="hor smallLeft"><div id="myInstance8" data-id="8"  class="">' + info8 + '</div></div>' +
            '                       <div class="hor bigRight"><div id="myInstance9" data-id="9"  class="">' + info9 + '</div></div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="clear"></div>' +
            '           </div>' +
            '           <div>' +
            '               <div class="leftDiv">' +
            '                   <div class="forMarginTop">' +
            '                       <div class="hor"><div id="myInstance3" data-id="3"  class="">' + info3 + '</div></div>' +
            '                       <div class="hor toRight"><div id="myInstance4" data-id="4"  class="">' + info4 + '</div></div>' +
            '                   </div>' +
            '                   <div class="forMarginTop">' +
            '                       <div class="hor"><div id="myInstance5" data-id="5"  class="">' + info5 + '</div></div>' +
            '                       <div class="hor toRight"><div id="myInstance6" data-id="6"  class="">' + info6 + '</div></div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="rightDiv forMarginTop">' +
            '                   <div class="hor smallLeft"><div id="myInstance10" data-id="10"  class="">' + info10 + '</div></div>' +
            '                   <div class="hor bigRight"><div id="myInstance12" data-id="12"  class="">' + 'clientele<br><br>' + '</div>*This part will be created automatically</div>' +
            '               </div>' +
            '               <div class="forMarginTop ">' +
            '                   <div class="leftDiv imprint">' +
            '                       <div class="forMarginTop"><div id="myInstance7"  data-id="7" class="" >' + info7 + '</div></div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="clear"></div>' +
            '           </div>' +
            '       </div>';

        aboutDiv.append(texts);
        aboutDiv.append('<script src="../js/lib/jquery.custom-file-input.js"></script>');


        var quill = new Quill('#myInstance1', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance3', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance5', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance4', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance6', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance7', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance8', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance10', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance9', { modules: {toolbar: toolbarOptions},theme: 'snow'});
        var quill = new Quill('#myInstance12', { modules: {toolbar: toolbarOptions},theme: 'snow'});


        //height for aboutContainer
        var topContainerHeight = $('.aboutDiv .topContainer').height();
        var bottomContainerHeight = $('.aboutDiv .bottomContainer').height();
        console.log(topContainerHeight, bottomContainerHeight, $(document).height());
        $('.aboutContainer').css('height', $(document).height() - topContainerHeight - bottomContainerHeight);
    });



    //----------------INFO FUNCTIONS--------------------

    function updateInfoFunction(e){
        e.preventDefault();
        var texts = [];

        $('.aboutContainer').find('div[data-id]').each(function() {
            texts[$(this).attr('data-id')] = $(this).find('.ql-editor').html();
        });

        $.post(edgarw + "/info/update/", {info: texts})
            .done(function (data) {
                savedWithAjax('.wrapper','Saved!');
            });
    }


    //----------------INFO FUNCTIONS--------------------

    $(window).resize(function () {
        var topContainerHeight = $('.aboutDiv .topContainer').height();
        var bottomContainerHeight = $('.aboutDiv .bottomContainer').height();
        $('.aboutContainer').css('height', $(document).height() - topContainerHeight - bottomContainerHeight);

    });



});
