// movies.js

// 영화 객체를 저장하는 배열 선언
let movies = [];

// 기본 장르 설정
const defaultGenre = "Unknown";

// 하드코딩으로 영화 객체 생성 및 배열에 추가
movies.push({ title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" });
movies.push({ title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" });
movies.push({ title: "Parasite", director: "Bong", year: 2019, genre: "Drama" });

// 영화 목록 출력 함수 (함수 선언문 사용)
function printMovies(movieList) {
  console.log("Movie Collection:");
  for (let i = 0; i < movieList.length; i++) {
    let movie = movieList[i];

    // 빈 문자열 속성 기본값 설정
    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown";
    if (!movie.genre) movie.genre = defaultGenre;

    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
    );
  }

  console.log(`Total Movies: ${movieList.length}`);
}

// 영화 목록 출력
printMovies(movies);

// ----------- 도전 과제 구현 -----------

// 특정 장르 영화 검색 함수
const printMoviesByGenre = function(movieList, genre) {
  console.log(`${genre} Movies:`);
  let count = 0; // var 사용
  for (let movie of movieList) {
    if (movie.genre === genre) {
      count++;
      console.log(
        `${count}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
      );
    }
  }
  if (count === 0) console.log(`No movies found for genre: ${genre}.`);
};

// 평균 출판년도 계산 함수
const calculateAverageYear = function(movieList) {
  let totalYear = 0;
  for (let movie of movieList) {
    totalYear += movie.year;
  }
  return (totalYear / movieList.length).toFixed(1);
};

// 가장 최신 영화 찾는 화살표 함수
const findNewestMovie = (movieList) => {
  let newestMovie = movieList[0];
  for (let movie of movieList) {
    if (movie.year > newestMovie.year) {
      newestMovie = movie;
    }
  }
  return newestMovie;
};

// ...rest를 사용해 영화 객체를 여러 개 추가하는 함수
function addMovies(...newMovies) {
  movies.push(...newMovies);
}

// 영화 추가 (하드코딩)
addMovies(
  { title: "Interstellar", director: "Nolan", year: 2014, genre: "Sci-Fi" },
  { title: "The Godfather", director: "Coppola", year: 1972, genre: "Crime" }
);

// 추가된 영화 포함한 전체 목록 출력
printMovies(movies);

// 특정 장르의 영화 검색 예시
printMoviesByGenre(movies, "Sci-Fi");

// 통계 출력
console.log("Statistics:");
console.log(`Average Year: ${calculateAverageYear(movies)}`);
const newestMovie = findNewestMovie(movies);
console.log(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
