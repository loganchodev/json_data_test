import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS 파일을 임포트합니다.
import "./App.css"; // 애플리케이션 전용 CSS 파일을 임포트합니다.
import React, { useState, useEffect } from "react"; // React와 useState, useEffect 훅을 임포트합니다.

// Item 함수 컴포넌트는 카드 UI를 렌더링하기 위해 사용됩니다.
function Item(props) {
  return (
    <div className="card"> {/* 카드 스타일의 div 컨테이너 */}
      <img src={props.url} className="card-img-top" alt="..." /> {/* 카드의 이미지 */}
      <div className="card-body"> {/* 카드 본문 */}
        <h5 className="card-title">{props.name}</h5> {/* 카드 제목 */}
        <p className="card-text">{props.email}<br></br> {/* 카드 가격과 추가 설명 */}
          - Id : {props.id}<br></br>
          - Phone: {props.phone}<br></br>
          - WebSite: {props.website}<br></br>
        </p>
        <a href="#" className="btn btn-primary"> {/* 구매하기 버튼 */}
          구매하기
        </a>
      </div>
    </div>
  );
}

// App 함수 컴포넌트는 애플리케이션의 메인 컴포넌트입니다.
function App() {
  
  const [users, setUsers] = useState([]); // users 상태를 저장하기 위한 useState 훅입니다.

  useEffect(() => { // 컴포넌트 마운트 후 사용자 데이터를 가져오기 위한 useEffect 훅입니다.
    fetch('https://jsonplaceholder.typicode.com/users') // 사용자 데이터를 가져오는 API 호출
    .then(response => response.json()) // 응답을 JSON으로 파싱
    .then(json => setUsers(json)); // 가져온 데이터를 users 상태에 저장
  }, []); // 빈 배열은 이 효과가 컴포넌트의 마운트 시 단 한 번만 실행되어야 함을 나타냅니다.

  console.log(users); // 현재 users 상태를 콘솔에 로깅

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> {/* 반응형 그리드 레이아웃 */}

      {users.map((user) => (
            <Item
              url = "https://search.pstatic.net/sunny/?src=https%3A%2F%2Frepository-images.githubusercontent.com%2F584688997%2Fea2a29e8-bf9d-4fe0-82f4-d47299b8dec4&type=sc960_832"
              id = {user.id}
              name = {user.name}
              email = {user.email}
              phone = {user.phone}
              website={user.email}

            />))}
    </div>
  );
}

export default App; // App 컴포넌트를 export합니다.
