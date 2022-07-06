let userData = [];

const fetchUSer = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results))
    .then(() => console.log(userData[0]));
};

const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
};

const dayCalc = (date) => {
  let today = new Date();
  let todayTimestamp = Date.parse(today);
  let timestamp = Date.parse(date);

  return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
};

const userDisplay = async () => {
  await fetchUSer();

  document.body.innerHTML = userData
    .map(
      (user) =>
        `<div class="card">
          <img src="${user.picture.large}" alt=" photo de ${user.name.last}">
          <h3> ${user.name.first} </h3>
          <h2> ${user.name.last} </h2>
          <h5> ${user.location.country} </h5>
          <h5> ${dateParser(user.dob.date)} </h5>
          <h5> Membre depuis le ${dayCalc(user.registered.date)} jours </h5>
        </div>`
    )
    .join("");
};
userDisplay();

localStorage.data = "je stock la data";
