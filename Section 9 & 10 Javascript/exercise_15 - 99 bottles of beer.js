// 99 bottles rhyme creator

function beer() {
  var count = 99;
  while (count >= 0) {
    if (count > 1) {
      console.log(`${count} bottles of beer on the wall, ${count} bottles of beer. Take one down pass it around ${count-1} bottles of beer on the wall.`);
    }
    else if (count === 1) {
      console.log(`${count} bottle of beer on the wall, ${count} bottle of beer. Take one down pass it around no more bottles of beer on the wall.`);
    }
    else {
      console.log(`No more bottle of beer on the wall, no more bottle of beer. Go to the store buy some more, 99 bottles of beer on the wall.`);
    }
    count--;
  }
}

beer();
