$(document).ready(function () {
    var giantParent = $(".content");
    addMenu('.wrapperScrollable');

    $.get(edgarw + "/project/pageInfoJson/", function (data) {
        var data = JSON.parse(data);
        newItems = '';

        for (var i = 0; i < data.length; i++) {
            var dat = data[i];


            var t = '<div class="projectsInRegistry" data-id="' + dat.id + '" style="background-image: url(../' + dat.image_small + ')">' +
                '       <span class="openProject visible title"><a href="' + edgarw + '/project/edit/' + dat.id + '" style="color:' + dat.text_color + ';">' + dat.bottom_left_text + '</a></span>' +
                '       <div class="icons">' +
                '           <span class="moveProjectUp ' + icons.left + '"  title="Move this project up"></span>' +
                '           <span class="moveProjectDown ' + icons.right + '" title="Move this project down"></span>' +
                '           <span class="removeProject ' + icons.remove + '" title="Delete project" ></span>' +
                '           <span class="inactiveProject ' + icons.inactive + '" title="Hide/Show this project"></span>' +
                '       </div>' +
            '   </div>';
            newItems = newItems + t;
        }

        giantParent.append(newItems);
        giantParent.append('<div class="clear"></div>');
        ProjectEvents();

    });

    //----------------MAIN PROJECT EVENTS-----------------------
    function ProjectEvents() {
        $(".moveProjectDown").unbind().click(moveProjectDownFunction);
        $(".moveProjectUp").unbind().click(moveProjectUpFunction);
        $(".inactiveProject").unbind().click(inactiveProjectFunction);
        $(".removeProject").unbind().click(removeProjectFunction);

    }


    //----------------MAIN PROJECT EVENTS-----------------------


    //----------------MAIN PROJECT FUNCTIONS-----------------------


    function moveProjectDownFunction() {
        var parent = $('.wrapperScrollable');
        var elem = $(this).parents('.projectsInRegistry');
        console.log(elem);
        var next = elem.next();
        if (next.hasClass('projectsInRegistry')) {
            var p = elem.detach();
            next.after(p);
            changeProjectsOrder();

        }
    }

    function moveProjectUpFunction() {
        var parent = $('.wrapperScrollable');
        var elem = $(this).parents('.projectsInRegistry');
        var prev = elem.prev();
        if (prev.hasClass('projectsInRegistry')) {
            var p = elem.detach();
            prev.before(p);
            changeProjectsOrder();

        }
    }

    function inactiveProjectFunction() {
        var parentProject = $(this).parents('.projectsInRegistry');
        var parentId = parentProject.attr('data-id');
        $.post(edgarw + "/project/inactive/" + parentId)
            .done(function (data) {
                //console.log(data);
                parentProject.css('opacity', data);
            });
    }

    function removeProjectFunction() {
        if(confirm('Are you sure you want to delete this project? \n All contents will be deleted too.')){
            var parentProject = $(this).parents('.projectsInRegistry');
            var parentId = parentProject.attr('data-id');
            console.log(parentId);
            $.post(edgarw + "/project/deleteForever/" + parentId)
                .done(function (data) {
                    //console.log(data);
                    parentProject.remove();
                    savedWithAjax('.wrapperScrollable', 'Project was removed!')
                });
        }

    }

    function changeProjectsOrder() {
        var parent = $('.wrapperScrollable');

        var idArr = [];
        parent.find('.projectsInRegistry').each(function () {
            idArr.push($(this).attr('data-id'));

        });
        console.log(idArr);
        if (idArr.length >= 0) {
            console.log(edgarw + "/project/changeProjectsOrder/");
            $.post(edgarw + "/project/changeProjectsOrder/", {ids: idArr})
                .done(function (data) {
                    savedWithAjax('.wrapperScrollable', 'Order has been changed!');
                });
        }
    }


    //----------------MAIN PROJECT FUNCTIONS-----------------------

});
