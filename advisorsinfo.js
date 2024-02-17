// FEDCHAIRSIM v5.0 - 21/12/2023

document.addEventListener('DOMContentLoaded', () => {
  const profiles = document.querySelectorAll('.profile');
  const container = document.querySelector('.profile-container');

  profiles.forEach((profile) => {
      profile.addEventListener('mouseenter', (event) => {
          event.stopPropagation();
          profiles.forEach((otherProfile) => {
              if (otherProfile !== profile) {
                  otherProfile.classList.remove('active');
              }
          });

          profile.classList.toggle('active');
      });
  });

  container.addEventListener('mouseleave', () => {
      profiles.forEach((profile) => {
          profile.classList.remove('active');
      });
  });

  document.addEventListener('click', () => {
      profiles.forEach((profile) => {
          profile.classList.remove('active');
      });
  });
});
