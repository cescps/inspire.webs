var links = [
 "https://liquiddeath.com/",
"https://bere.al/en",
"https://habitsgarden.com/",
"https://visualizehabit.com/",
"https://milkroad.com/",
"https://slickinbox.com/",
"https://highscore.money/",
"https://buildinpublic.com/",
"https://expensive.chat/",
"https://writesonic.com/",
"https://www.beepaudio.com/",
"https://www.llamalife.co/",
"https://www.layers.to/",
"https://www.make.to/",
"https://www.bento.me/",
"https://www.designjoy.co/",
"https://web.concise.app/",
"https://www.feyapp.com/",
"https://public.com/",
"https://www.neatprompts.com/",
"https://www.productizeyourself.co/",
"https://artifact.news/",
"https://www.learn.xyz/",
"https://windstatic.com/",
"https://brainsounds.app/",
"https://atck.fr/",
"http://cylndr.co.kr/",
"https://www.cartier.com/fr-fr/watchesandwonders",
"https://prespa.s.nomatter.dev/"

];

var previousLink = "";
var linksCopy = links.slice(0); // make a copy of the links array

function getRandomLink() {
  var randomNumber = Math.floor(Math.random() * (linksCopy.length - 1));
  if (previousLink !== "") {
    for (var i = 0; i < linksCopy.length; i++) {
      if (linksCopy[i] === previousLink) {
        linksCopy.splice(i, 1);
        break;
      }
    }
  }
  var selectedLink = linksCopy[randomNumber];
  previousLink = selectedLink;
  return selectedLink;
}
