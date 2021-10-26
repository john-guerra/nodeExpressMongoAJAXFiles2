const playersDiv = document.querySelector("#players");

async function reloadPlayers() {
  playersDiv.innerHTML = "";

  let players;
  try {
    const res = await fetch("/players");
    if (!res.ok) {
      throw new Error("Response not ok " + res.status);
    }
    players = await res.json();
  } catch (e) {
    playersDiv.innerHTML = e.msg;
  }


  for (let p of players) {
    const divP = document.createElement("div");
    divP.className = "col-4 player";

    const divName = document.createElement("div");
    divName.className = "name";
    divName.innerText = p.name;

    divP.appendChild(divName);

    playersDiv.appendChild(divP);
  }
}

reloadPlayers();
