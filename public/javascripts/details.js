const formDetails = document.querySelector("form#detailsCreate");

formDetails.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  console.log("submit form");

  // const comment = formDetails.querySelector("textarea");
  const formData = new FormData(formDetails);
  const data = {};
  for (let [key, val] of formData.entries()) {
    data[key] = val;
  }

  const fetchRes = await fetch("/details/create", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ comment: comment }), // body data type must match "Content-Type" header
    body: JSON.stringify(data)
  });

  const res = await fetchRes.json(); // parses JSON response into native JavaScript objects

  console.log("got Response", res);

  if (res.status === "OK") {
    window.location.replace("./index.html");
  } else {
    // show error message
  }
});
