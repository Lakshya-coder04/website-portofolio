function enableDark() {
  let allDivs = document.getElementsByTagName('div');

  for (let index = 0; index < allDivs.length; index++) {
    const element = allDivs[index];
    allDivs[index].classList.add('dark-mode');
  }
}

function disableDark() {
  let allDivs = document.getElementsByTagName('div');

  for (let index = 0; index < allDivs.length; index++) {
    const element = allDivs[index];
    allDivs[index].classList.remove('dark-mode');
  }
}
function toggleMode() {
  const iconSun = document.getElementById('icon-sun');

  if (iconSun.classList.contains('fa-sun')) {
    iconSun.classList.remove('fa-sun');
    iconSun.classList.toggle('fa-moon');
    enableDark();
  } else if (iconSun.classList.contains('fa-moon')) {
    iconSun.classList.remove('fa-moon');
    iconSun.classList.toggle('fa-sun');
    disableDark();
  }
}

function updateLocalTime() {
  const localTimeElement = document.getElementById('local-time');
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZoneName: 'short',
  };

  // Get the user's local time and timezone
  const userLocalTime = new Date().toLocaleString(undefined, options);

  localTimeElement.textContent = userLocalTime;
}

// Update the local time every second
setInterval(updateLocalTime, 1000);

// Initial update to prevent a delay in displaying the time
updateLocalTime();

window.onscroll = function () {
  // Get the navbar element
  var navbar = document.querySelector('.header');

  //get the name-role element
  var nameRole = document.querySelector('.name-role');

  //get links
  var links = document.querySelectorAll('.links');

  if (window.pageYOffset >= 76) {
    //console.log(window.pageYOffset);
    navbar.classList.add('sticky');
    nameRole.classList.add('hidden');
    links.forEach(function (link) {
      link.classList.add('sticky');
    });
  } else {
    navbar.classList.remove('sticky');
    nameRole.classList.remove('hidden');
    // Loop through each element with the class 'links' and remove the 'sticky' class
    links.forEach(function (link) {
      link.classList.remove('sticky');
    });
  }
};
