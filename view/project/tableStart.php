<div class="project" id="<?php echo $idFromProjectName; ?>" style=' background-image: url(<?php echo $baseURL . $uploadFolderName . $projectImageL; ?>); opacity: <?php echo $opacity; ?>'>
    <div class="content">
        <div class="table">
            <form method="POST" class="mainInfoForm" action="<?php echo $baseURL; ?>project/update" enctype="multipart/form-data">
                <div class="projectsTable">
                    <input type="hidden" name="id" value="<?php echo $projectId; ?>">
                    <div class="tablePart tablePartTexts">
                        <div class="tableTitle">
                            <span>Top left text</span>
                        </div>
                        <div class="tableContent">
                            <textarea name="top_left"><?php echo $projectTopLeft; ?></textarea>
                        </div>
                    </div>
                    <div class="tablePart tablePartTexts">
                        <div class="tableTitle">
                            <span>Top right text</span>
                        </div>
                        <div class="tableContent">
                            <textarea name="top_right"><?php echo $projectTopRight; ?></textarea>
                        </div>
                    </div>
                    <div class="tablePart tablePartTexts">
                        <div class="tableTitle">
                            <span>Bottom left text</span>
                        </div>
                        <div class="tableContent">
                            <textarea name="bottom_left"><?php echo $projectBottomLeft; ?></textarea>
                        </div>
                    </div>
                    <div class="tablePart tablePartTexts">
                        <div class="tableTitle">
                            <span>Bottom right text</span>
                        </div>
                        <div class="tableContent">
                            <textarea name="bottom_right"><?php echo $projectBottomRight; ?></textarea>
                        </div>
                    </div>
                    <div class="tablePart tablePartColors">
                        <div class="tableTitle">
                            <span>Color</span>
                        </div>
                        <div class="tableContent">
                            <div>
                                <div class="colorTitle">
                                    <span>Homepage text color</span>
                                </div>
                                <div id="cpTextColor" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="1">
                                    <input type="text" class="form-control input-lg" name="textColor" value="<?php echo $textColor; ?>">
                                    <span class="input-group-addon"><i></i></span>
                                </div>
                            </div>
                            <div>
                                <div class="colorTitle">
                                    <span>Insights bg color</span>
                                </div>
                                <div id="cpInnerBgColor" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="2">
                                    <input type="text" class="form-control input-lg" name="innerBgColor" value="<?php echo $innerBgColor; ?>">
                                    <span class="input-group-addon"><i></i></span>
                                </div>
                            </div>
                            <div>
                                <div class="colorTitle">
                                    <span>Insights text color</span>
                                </div>
                                <div id="cpInnerTextColor" class="input-group colorpicker-component colorpicker-element" title="Using input value" data-colorpicker-id="3">
                                    <input type="text" class="form-control input-lg" name="innerTextColor" value="<?php echo $innerTextColor; ?>">
                                    <span class="input-group-addon"><i></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tablePart tablePartCategories">
                        <div class="tableTitle">
                            <span>Category</span>
                        </div>
                        <div class="tableContent">
                            <div class="custom-select">Categories</div>
                            <div class="custom-select-option-box">