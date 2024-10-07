<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sara Hussain - Personal Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Include the previous CSS styles here */

        /* Accordion styles */
        .accordion {
            background-color: #f1f1f1;
            color: #444;
            cursor: pointer;
            padding: 10px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 16px;
            transition: background-color 0.3s;
            margin: 5px 0;
            border-radius: 5px;
        }

        .accordion.active, .accordion:hover {
            background-color: #e2e2e2;
        }

        .panel {
            padding: 0 10px;
            display: none;
            overflow: hidden;
            background-color: white;
            border-radius: 0 0 5px 5px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Sara Hussain</h1>
        <p><a href="mailto:saranhussain@lewis.edu">saranhussain@lewis.edu</a></p>
        <p>Discord: saraaa_.006</p>
    </header>
    
    <div class="photo-container">
        <img src="me.png" alt="Sara Hussain" style="width:200px;" class="profile-photo"> 
    </div>

    <div class="container">
        <section>
            <button class="accordion">Introduction</button>
            <div class="panel">
                <p>I am a freshman majoring in cybersecurity. I come from a family of 5 and was born in Illinois.</p>
            </div>
        </section>

        <section>
            <button class="accordion">What I Hope to Learn in this Course</button>
            <div class="panel">
                <ul>
                    <li>I hope to learn multiple programming languages.</li>
                    <li>I hope to learn more about Artificial Intelligence and its uses.</li>
                    <li>I hope to fully understand Abstraction.</li>
                </ul>
            </div>
        </section>

        <section>
            <button class="accordion">My Favorite Hobby / Activity</button>
            <div class="panel">
                <ul>
                    <li>I like to cook and bake in my spare time. <a href="https://cooking.nytimes.com/68861692-nyt-cooking/1685992-best-fall-recipes">Learn more</a></li>
                    <li>I like to travel and experience different cultures, foods, fashion, etc. <a href="https://www.harpersbazaar.com/culture/travel-dining/g7171/most-beautiful-places-in-the-world/">Learn more</a></li>
                </ul>
            </div>
        </section>

        <section>
            <button class="accordion">Fun Fact</button>
            <div class="panel">
                <p>I have been to 12 different U.S states.</p>
            </div>
        </section>
    </div>

    <script>
        // Accordion functionality
        const accordions = document.getElementsByClassName("accordion");
        for (let i = 0; i < accordions.length; i++) {
            accordions[i].addEventListener("click", function() {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    </script>
</body>
</html>
