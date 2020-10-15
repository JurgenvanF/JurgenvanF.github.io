function rockPaperScissors() {
    // Get rock img from HTML and add event listener
    const rockImg = document.getElementById("rock");
    rockImg.addEventListener("click", rockHandler);
    // Get paper img from HTML and add event listener
    const paperImg = document.getElementById("paper");
    paperImg.addEventListener("click", paperHandler);
    // Get scissors img from HTML and add event listener
    const scissorsImg = document.getElementById("scissors");
    scissorsImg.addEventListener("click", scissorsHandler);

    const result = document.querySelector("#result");
    const body = document.querySelector(".body");
    const tdYourChoice = document.getElementById("tdYourChoice");
    const tdCompChoice = document.getElementById("tdCompChoice");
    const yourText = document.getElementById("yourText");
    const compText = document.getElementById("compText");
    const tr = document.getElementById("tr");

    function rockHandler() {
        yourText.innerHTML = "<h3>Jouw keuze:<h3>";
        tr.append(yourText);

        tdYourChoice.innerHTML = "<img src='./pictures/rock.png'>";
        tr.append(tdYourChoice);
        const items = ["Steen", "Papier", "Schaar"];
        var comp = items[Math.floor(Math.random() * items.length)];
        if (comp === "Steen") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/rock.png'>";
            tr.append(tdCompChoice);

            result.innerHTML = "Gelijk!";
            body.append(result);
        } else if (comp === "Papier") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/paper.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Jij verliest!";
            body.append(result);
        } else if (comp === "Schaar") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/scissors.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Jij wint!";
            body.append(result);
        }
    }

    function paperHandler() {
        yourText.innerHTML = "<h3>Jouw keuze:<h3>";
        tr.append(yourText);

        tdYourChoice.innerHTML = "<img src='./pictures/paper.png'>";
        tr.append(tdYourChoice);
        const items = ["Steen", "Papier", "Schaar"];
        var comp = items[Math.floor(Math.random() * items.length)];
        if (comp === "Steen") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/rock.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Jij wint!";
            body.append(result);
        } else if (comp === "Papier") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/paper.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Gelijk!";
            body.append(result);
        } else if (comp === "Schaar") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/scissors.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Jij verliest!";
            body.append(result);
        }
    }

    function scissorsHandler() {
        yourText.innerHTML = "<h3>Jouw keuze:<h3>";
        tr.append(yourText);

        tdYourChoice.innerHTML = "<img src='./pictures/scissors.png'>";
        tr.append(tdYourChoice);
        const items = ["Steen", "Papier", "Schaar"];
        var comp = items[Math.floor(Math.random() * items.length)];
        if (comp === "Steen") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/rock.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Jij verliest!";
            body.append(result);
        } else if (comp === "Papier") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/paper.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Jij wint!";
            body.append(result);
        } else if (comp === "Schaar") {
            compText.innerHTML = "<h3>Computers keuze:</h3>";
            tr.append(compText);

            tdCompChoice.innerHTML = "<img src='./pictures/scissors.png'>";
            tr.append(tdCompChoice);
            result.innerHTML = "Gelijk!";
            body.append(result);
        }
    }
}

rockPaperScissors();