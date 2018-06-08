$(document).ready(function () {
    var giantParent = $("#container");
    addMenu('#container');


    $.get(edgarw + "/category/categoryJson/", function (data, status) {
        var objects = JSON.parse(data);

        var divik = $('<div>').attr('class', 'catDiv').appendTo(giantParent);
        var catTable = $('<table>').attr('class', 'catTable').appendTo(divik);

        var headPart = '<tr>' +
            '               <th>Caregory</th>' +
            '               <th>Projects in this catgory</th>' +
            '               <th></th>' +
            '            </tr>';


        catTable.append(headPart);
        for (var i in objects) {
            var obj = objects[i];
            var col = i % 2 ? '#fffff' : '#eeeeee';
            catTable.append('<tr style="background-color: ' + col + '" data-id="' + obj.id + '">' +
                '               <td>' + obj.name + '</td>' +
                '               <td>' + obj.usage + '</td>' +
                '               <td><img src="../images/icons/delete.png" width="20" height="20" alt="" class="deleteCategory"></td>' +
                '           </tr>');
        }

        catTable.append('<tr class="addNewCat">' +
            '               <td>Add new</td>' +
            '               <td><input class="catInput" type="text" placeholder="New Category"></td>' +
            '               <td><img src="../images/icons/agree.png" width="20" height="20" alt="" class="addCatInput"></td>' +
            '           </tr>');


        //add caregory to db and in html at the same time
        $("img.addCatInput").click(function () {
            var inputElem = $(this).parents('.addNewCat').find("input");
            var bla = inputElem.val();
            var info = {name: bla};

            if (bla.trim()) {
                $.post(edgarw + "/category/add/", {name: bla})
                    .done(function (data) {
                        var data = JSON.parse(data);

                        var elem = $('.addNewCat');
                        var prevCol = elem.prev().prev().css('background-color');
                        console.log(prevCol);
                        elem.before('<tr style="background-color: ' + prevCol + '" data-id="' + data.id + '">' +
                            '                       <td>' + data.name + '</td>' +
                            '                       <td></td>' +
                            '                       <td><img src="../images/icons/delete.png" width="20" height="20" alt="" class="deleteCategory"></td>' +
                            '                   </tr>');
                        categoryEvents();
                        inputElem.val('');


                    });
            }


        });

        function categoryEvents() {
            $("img.deleteCategory").off().click(function () {
                if(confirm('Are you sure?')){
                    deleteCategory($(this));
                }
            });
        }

        categoryEvents();


        function deleteCategory(elem) {
            var parent = elem.parents('tr');
            var id = parent.attr("data-id");
            console.log(id);
            $.post(edgarw + "/category/delete/" + id)
                .done(function (data) {
                    console.log(data);
                    parent.next('tr:has[data-id]');
                    console.log(parent.next('tr:has(data-id)'));
                    parent.remove();
                });
        }


    });


});
