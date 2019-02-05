<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bootstrap-grid.min.css">
    <link href="https://fonts.googleapis.com/css?family=Thasadith:400,400i" rel="stylesheet"> 
    <link rel="stylesheet" href="assets/css/indexStyle.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <title>Jérôme Rabier</title>
</head>
<body>
    <nav>
        <ul>
            <li onclick="showHome()">Accueil</li>
            <li onclick="showSkills()">Compétences</li>
            <li onclick="showPortfolio()">Portfolio</li>
            <li onclick="showContacts()">Contacts</li>
        </ul>
    </nav>
    <?php require 'sections/home.php'; ?>
    <?php require 'sections/skills.php'; ?>
    <?php require 'sections/portfolio.php'; ?>
    <?php require 'sections/contacts.php'; ?>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>