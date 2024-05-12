window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 1) {
      header.classList.add('small');
  } else {
      header.classList.remove('small');
  }
});

window.onload = function() {
  setTimeout(function() {
      document.body.classList.add('visible');
  }, 500);
};


document.querySelectorAll('.toggle-group input[type="radio"]').forEach((input) => {
    input.addEventListener('change', () => {
      const groupName = input.getAttribute('name');
      document.querySelectorAll(`.toggle-group input[type="radio"][name="${choice1}"]`).forEach((otherInput) => {
        if (otherInput !== input) {
          otherInput.checked = false;
        }
      });
    });
});

document.querySelectorAll('.toggle-group input[type="radio"]').forEach((input) => {
    input.addEventListener('change', () => {
      const groupName = input.getAttribute('name');
      document.querySelectorAll(`.toggle-group input[type="radio"][name="${choice2}"]`).forEach((otherInput) => {
        if (otherInput !== input) {
          otherInput.checked = false;
        }
      });
    });
});

document.querySelectorAll('.toggle-group input[type="radio"]').forEach((input) => {
  input.addEventListener('change', () => {
    const groupName = input.getAttribute('name');
    document.querySelectorAll(`.toggle-group input[type="radio"][name="${choice3}"]`).forEach((otherInput) => {
      if (otherInput !== input) {
        otherInput.checked = false;
      }
    });
  });
});

document.querySelectorAll('.toggle-group input[type="radio"]').forEach((input) => {
  input.addEventListener('change', () => {
    const groupName = input.getAttribute('name');
    document.querySelectorAll(`.toggle-group input[type="radio"][name="${choice4}"]`).forEach((otherInput) => {
      if (otherInput !== input) {
        otherInput.checked = false;
      }
    });
  });
});