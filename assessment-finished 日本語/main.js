const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '今日はとても寒かったが、 :insertx: は出かけた。 :inserty:に到着すると、:insertz:重さ 300kgの:insertx:は驚いたが、Bobは驚かなかった。それはよくあることだったから。';
const insertX = ['スヌーピー', 'ミッキー', 'サンタ'];
const insertY = ['ユニバーサルスタジオ', 'ディズニーランド', 'ディズニーシー'];
const insertZ = ['雪が降っていた。', '混雑していた。', '大雨が降っていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("日本").checked) {
    const weight = `${Math.round(500*0.0714286)} kg`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300kg', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
