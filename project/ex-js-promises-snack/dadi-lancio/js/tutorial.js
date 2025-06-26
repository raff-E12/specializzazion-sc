
    const dice = document.getElementById('dice');

    const faces = {
      1: [5],
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9]
    };

    function rollDice() {
      const roll = Math.floor(Math.random() * 6) + 1;
      drawFace(roll);
    }

    function drawFace(number) {
      dice.innerHTML = ''; // svuota
      for (let i = 1; i <= 9; i++) {
        const dot = document.createElement('div');
        dot.classList.add('cell');
        if (faces[number].includes(i)) {
          dot.classList.add('dot');
        }
        dice.appendChild(dot);
      }
    }

    // Disegna il primo dado iniziale
    // onclick="rollDice()" evento
    drawFace(1);