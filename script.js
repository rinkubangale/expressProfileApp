console.log("js connected");
// const url = "https://randomuser.me/api/1.4/?nat=IN&gender=female";
const url = "https://6xsrsv-3000.csb.app/api/user";
apiCall(url);

async function apiCall(url) {
  let x = await fetch(url);
  let data = await x.json();
  console.log(JSON.stringify(data));
  renderPageWithData(data);
}

function renderPageWithData(data) {
  const profile = data.results[0];

  document.getElementById("profile-img").src = profile.picture.large;
  document.getElementById("profile-name").innerText =
    `${profile.name.title} ${profile.name.first} ${profile.name.last}`;
  document.getElementById("profile-title").innerText = "Web Developer"; // This can be dynamic if included in your data
  document.getElementById("about-me").innerText =
    `Hello! I am ${profile.name.first}, a passionate web developer with experience in creating beautiful and functional websites.`; // This can also be dynamic if included in your data
  document.getElementById("profile-email").innerText = profile.email;
  document.getElementById("profile-email").href = `mailto:${profile.email}`;
  document.getElementById("profile-phone").innerText = profile.phone;
  document.getElementById("profile-location").innerText =
    `${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.state}, ${profile.location.country}`;
}
