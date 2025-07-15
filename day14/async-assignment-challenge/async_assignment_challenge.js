// ✅ 상수 선언
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// ✅ DOM 요소
const btnFetch = document.getElementById("fetchPosts");
const inputEl = document.getElementById("postIds");
const outputEl = document.getElementById("output");

// ✅ 화살표 함수로 데이터 가져오기 (...rest 활용)
const fetchMultiplePosts = async (...ids) => {
  let results = {}; // 결과를 저장할 객체
  for (let id of ids) {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("데이터를 가져올 수 없습니다.");
      const data = await response.json();
      results[id] = data.title;
    } catch (error) {
      results[id] = `에러: ${error.message}`;
    }
  }
  return results;
};

// ✅ 메인 로직 함수 (함수 표현식 사용)
const runChallenge = function () {
  // ✅ 초기화
  outputEl.innerHTML = "";
  outputEl.classList.remove("error");

  // 입력값 처리
  let rawInput = inputEl.value;
  if (!rawInput.trim()) {
    outputEl.textContent = "유효한 ID(1-100)를 입력하세요!";
    outputEl.classList.add("error");
    return;
  }

  // 쉼표로 나눈 뒤 숫자 변환
  let ids = rawInput.split(",").map(id => Number(id.trim()));

  // 유효성 검사
  let validIds = ids.filter(id => !isNaN(id) && id >= 1 && id <= 100);

  if (validIds.length === 0) {
    outputEl.textContent = "유효한 ID(1-100)를 입력하세요!";
    outputEl.classList.add("error");
    return;
  }

  // 버튼 비활성화
  btnFetch.disabled = true;

  // 데이터 가져오기
  (async () => {
    const posts = await fetchMultiplePosts(...validIds);

    // ✅ 결과 렌더링
    let htmlContent = "";
    for (let key in posts) {
      htmlContent += `<div class="post">post${key}: ${posts[key]}</div>`;
    }
    outputEl.innerHTML = htmlContent;

    // 버튼 재활성화
    btnFetch.disabled = false;
  })();
};

// ✅ 이벤트 등록
btnFetch.addEventListener("click", runChallenge);
