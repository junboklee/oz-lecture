// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById('taskCount'); // 도전 과제용
const prioritySelect = document.getElementById('priority'); // 도전 과제용

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  console.log(taskText);
  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

   // 삭제 버튼 생성
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.classList.add('delete-button');

  // 삭제 버튼 클릭 시 할 일 삭제
  deleteButton.addEventListener('click', function () {
    taskList.removeChild(li);
    updateTaskCount(); // 도전 과제용
  });

  // 할 일 텍스트 클릭 시 완료 상태 토글 이벤트 리스너
  span.addEventListener('click', function () {
  // span 요소에 'completed' 클래스를 토글함
  // CSS에서 .completed 클래스는 text-decoration: line-through 효과를 줌
  span.classList.toggle('completed');
  });

  // 요소 조립
  li.appendChild(span);
  taskList.appendChild(li);

    // li에 span과 버튼 추가
  li.appendChild(span);
  li.appendChild(deleteButton);

  // 목록에 추가
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = '';

  // 할 일 개수 업데이트 (도전 과제)
  updateTaskCount();
  // Enter 키 입력 시 추가
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// 추가 버튼 클릭 시 추가
addButton.addEventListener('click', addTask);

// 전체 삭제 버튼 클릭 시 목록 비우기
clearButton.addEventListener('click', function () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  updateTaskCount(); // 도전 과제용
});

// 페이지 로딩 시 개수 초기화
updateTaskCount();
}


// 모든 할 일 삭제 함수
function clearAllTasks() {}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener('keypress', function (event) {
  // 사용자가 입력창에서 Enter 키를 누르면 할 일 추가
  if (event.key === 'Enter') {
    addTask(); // 위에서 정의한 addTask() 함수 실행
  }
});


// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener('click', function () {
  // taskList(ul 요소)에 있는 모든 <li> 요소 제거
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // 할 일 개수도 함께 업데이트 (도전 과제용)
  updateTaskCount();
});

