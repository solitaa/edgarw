                            </div>
                            <div class="custom-select">Years</div>
                            <div class="custom-select-option-box">
                                <?php
                                for($i = date('Y') ; $i >= 2010; $i--){
                                    if($year == $i){
                                        $checked = 'checked';
                                        $color = "#c4daff";
                                    }
                                    else {
                                        $checked = '';
                                        $color = "#ffffff";

                                    }
                                    echo '<div class="custom-select-option" style="background-color:'. $color .'">
                                            <label for="y'. $i .'" class="catLabel"><input class="custom-select-option-checkbox" id="y'. $i .'" type="radio" name="year" value="'. $i .'" '. $checked .'>'. $i .'</label>
                                        </div>';
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="tablePart tablePartTexts">
                        <div class="tableTitle">
                            <span>Client</span>
                        </div>
                        <div class="tableContent">
                            <textarea title="If there are more than one clients, separate names using , sign." name="client_name"><?php echo $client ?></textarea>
                        </div>
                    </div>
                    <div class="tablePart tablePartImages">
                        <div class="tableTitle">
                            <span>Homepage Image</span>
                        </div>
                        <div class="tableContent">
                            <div class="bgImages" title="Name: <?php echo $projectImageS ?>, Size: <?php echo $projectImageSizeS ?>kb">
                                <input type="file" id="file-<?php echo $projectId ?>S" name="imageikSmall" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">
                                <label for="file-<?php echo $projectId ?>S">
                                    <span class="<?php echo $icons['open']; ?>"></span>
                                    <span>Bg image S</span>
                                </label>
                            </div>
                            <div class="bgImages" title="Name: <?php echo $projectImageM ?>, Size: <?php echo $projectImageSizeM ?>kb">
                                <input type="file" id="file-<?php echo $projectId ?>M" name="imageikMedium" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">
                                <label for="file-<?php echo $projectId ?>M">
                                    <span class="<?php echo $icons['open']; ?>"></span>
                                    <span>Bg image M</span>
                                </label>
                            </div>
                            <div class="bgImages" title="Name: <?php echo $projectImageL ?>, Size: <?php echo $projectImageSizeL ?>kb">
                                <input type="file" id="file-<?php echo $projectId ?>L" name="imageikLarge" class="addBgImage inputfile inputfile-1" data-multiple-caption="{count} files selected">
                                <label for="file-<?php echo $projectId ?>L">
                                    <span class="<?php echo $icons['open']; ?>"></span>
                                    <span>Bg image L</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="tablePart tablePartIcons">
                        <div class="tableTitle">
                            <span>Icon</span>
                        </div>
                        <div class="tableContent">
                            <button type="submit" name="update">
                                <span class="saveProjectChanges <?php echo $icons['agree']; ?>" title="Update"></span>
                            </button>
                            <span class="inactiveProject <?php echo $icons['inactive']; ?>" title="Hide/Show this project"></span>
                            <span class="removeProject <?php echo $icons['remove']; ?>" title="Delete project"></span>
                        </div>
                    </div>
                </div>
            </form>
            <button class="addMore">Add more</button>
        </div>