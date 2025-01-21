const button = document.getElementById('btn');
const jokeContent = document.getElementById('jokecontent');
const joke = document.getElementById('joke');
const image = document.getElementById('image');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPic = document.getElementById('user-pic');

button.onclick = async () => {
  try {
    const jokeResponse = await axios.get('https://api.adviceslip.com/advice');
    jokeContent.textContent = "Advice: " + jokeResponse.data.slip.advice;
    joke.textContent = '';

    const dogResponse = await axios.get('https://dog.ceo/api/breeds/image/random');
    image.src = dogResponse.data.message;

    const userResponse = await axios.get('https://randomuser.me/api/');
    const userData = userResponse.data.results[0];
    userName.textContent = "Name: " + userData.name.first + " " + userData.name.last;
    userEmail.textContent = "Email: " + userData.email;
    userPic.src = userData.picture.large;
  } catch (error) {
    console.error('Error fetching data:', error);
    jokeContent.textContent = 'Something went wrong!';
    joke.textContent = '';
    image.src = 'dog.jpg';
    userName.textContent = 'Name: N/A';
    userEmail.textContent = 'Email: N/A';
    userPic.src = 'user.jpg';
  }
};
