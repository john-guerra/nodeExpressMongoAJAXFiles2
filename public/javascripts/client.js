const playersDiv = document.querySelector("#players");

function redrawPlayers(players) {
  for (let p of players) {
    const divP = document.createElement("div");
    divP.className = "col-4 player";

    const divName = document.createElement("div");
    divName.className = "name";

    const aName = document.createElement("a");

    aName.innerText = p.name + " " + p.age;
    aName.setAttribute("href", `/playersEdit.html?player=${p.name}`);
    divName.appendChild(aName);

    divP.appendChild(divName);

    playersDiv.appendChild(divP);
  }
}

async function reloadPlayers() {
  playersDiv.innerHTML = "Loading...";

  playersDiv.innerHTML = "";
  let players;
  try {
    const res = await fetch("/players");
    if (!res.ok) {
      throw new Error("Response not ok " + res.status);
    }
    const jsonRes = await res.json();

    players = jsonRes.players;
  } catch (e) {
    playersDiv.innerHTML = e.msg;
  }

  redrawPlayers(players);
}

reloadPlayers();
