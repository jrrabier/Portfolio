<!-- HOME -->
<section id="home" class="container-fluid">
    <div class="row" id="presentation">
            <img src="assets/img/logos/logoJR.svg" alt="Jérôme Rabier">
            <aside>
                <h1>Jérôme Rabier</h1>
                <h2>Développeur Web / Web mobiles</h2>
            </aside>
        <div id="homeAnim">
            <?php
                for ($i=1; $i <= 20; $i++) { 
                    echo '<div class="dots" id="d' . $i .'"></div>';
                }
            ?>
        </div>
    </div>
</section>