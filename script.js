const showUser = document.getElementById("showUser");
const btn = document.getElementById("btn");

const newValue = () => {
  fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then((data) => allDetails(data.results));
};

const allDetails = (users) => {
  console.log(users);

  users.map((results) => {
    const {
      picture: { medium },
      name: { title, first, last },

      gender,
      email,
      phone,
    } = results;

    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
<div class="card shadow mb-3 py-5  bg-dark-subtle fs-2 text-center  rounded-5 p-1 border border-info  border-5  shadow-lg" style="width:400px; margin: auto;" >
<div class="card-body  text-center  text-primary-emphasis ">
<img src="${medium}" alt="user pic" style="width: 200px;">
<h5 style=" padding-top: 30px;">My Full Details</h5>
<h2 class="text-danger py-1">${title} ${first} ${last}</h2>
<h4>${gender} </h4>
<h4>${email} </h4>

<h4>${phone} </h4>

</div>
</div>`;
    showUser.innerHTML = "";
    showUser.appendChild(newDiv);
  });
};
