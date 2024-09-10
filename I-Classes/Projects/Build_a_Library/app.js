class media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newStatus) {
    this._isCheckedOut = newStatus;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    if(this._ratings.length === 0){return 0};
    let avgRating = this._ratings.reduce((sum, rating) => sum + rating, 0) / this._ratings.length;
    console.log(`Average Rating: ${avgRating}`);
  }

  addRating(newRating) {
    if(newRating >= 1 && newRating <= 5) {
      this._ratings.push(newRating);
    } else {
      console.log(`Oops! Rating ${newRating} is not in range (1-5)`)
    }
  }
}

class book extends media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class movie extends media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class musicAlbum extends media {
  constructor(artist, title, songs, songTitles) {
    super(title);
    this._artist = artist;
    this._songs = songs;
    this._songTitles = songTitles;
    this._randSongList = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  get songTitles() {
    return this._songTitles;
  }

  shuffle() {
    let shuffledArray = [];
    let cIndex = this._songTitles.length;

    while (shuffledArray.length < this._songTitles.length) {
      let rIndex = Math.floor(Math.random() * cIndex);
      if(!shuffledArray.includes(this._songTitles[rIndex])) {
        shuffledArray.push(this._songTitles[rIndex]);
      }
    }
    return shuffledArray;
  }
}

// Create and manipulate a "book" instance
const historyOfEverything = new book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
console.log(historyOfEverything.getAverageRating());

// Create and manipulate a "movie" instance
const speed = new movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

// Create and manipulate a "musicAlbum" instance
const fashionNugget = new musicAlbum('Cake', 'Fashion Nugget', 14, [
  "Frank Sinatra",
  "The Distance",
  "Friend Is a Four Letter Word",
  "Open Book",
  "Daria",
  "Race Car Ya-Yas",
  "I Will Survive",
  "Perhaps, Perhaps, Perhaps",
  "It's Coming Down",
  "Nugget",
  "She'll Come Back to Me",
  "Italian Leather Sofa",
  "Sad Songs and Waltzes"
]);
fashionNugget.toggleCheckOutStatus();
console.log(fashionNugget.isCheckedOut);
fashionNugget.addRating(5);
fashionNugget.addRating(3);
fashionNugget.addRating(4);
fashionNugget.addRating(0);
fashionNugget.addRating(1000);
console.log(fashionNugget.getAverageRating());
console.log(fashionNugget.songTitles);
console.log(fashionNugget.shuffle());
console.log(fashionNugget.songTitles);
