            <form class="" method="POST" action="<?php echo $folderName; ?>/admin/checkUserData">
                <div class="inputDiv">
                    <label for="username">Username<br><input type="text" id="username"
                                                             name="username"></label>
                </div>
                <div class="inputDiv" data-validate="Enter password">
                    <label for="password">Password<br><input type="password" id="password"
                                                             name="password"></label>
                </div>
                <div class="inputDiv">
                    <div class="leftDiv">
                        <a href="">Change password</a>
                    </div>
                    <div class="rightDiv">
                        <input type="submit" name="submit" class="loginBtn" value="Let me in">
                    </div>
                </div>
            </form>
        </div>
        <a class="" href="<?php echo $home; ?>">Back to website</a>
    </div>
</div>