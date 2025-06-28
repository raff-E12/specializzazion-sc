
    const dice = document.getElementById('dice');
    const btn_roll = document.getElementById('btn-roll');

    function LancioDadi(){
      const interruption = Math.random() < 0.2;
      const num = Math.floor(Math.random() * 6) + 1;
      let index = 1;
      dice.innerHTML = "";

      const faces = {
      1: [5],
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9]
    };


    while (index < 9) {
      const dot = document.createElement('div');
      dot.classList.add('cell');

      if (faces[num].includes(index)) {
        dot.classList.add('dot');
      }

      dice.appendChild(dot);
      index++;
    }
    }

    btn_roll.addEventListener("click", LancioDadi)