# Youtube

## 공통부분

### Header

![image](https://github.com/user-attachments/assets/c8a35f71-7df3-4702-86fe-e93d20d65be7)

### Side-Menu

![image](https://github.com/user-attachments/assets/f1a67d0e-58b8-4b40-8d5f-99ea7b72b3fc)

### Scroll-Top

![image](https://github.com/user-attachments/assets/0bc77d5d-4278-4065-9b76-7f356c2082b0)

-   클릭 시 화면의 맨 위로 이동

```javascript
const scrollToUp = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
```

### Subscription-popup

![image](https://github.com/user-attachments/assets/0cdb9853-2b94-47f5-804e-f472e135771b)

-   채널 구독 취소 시 팝업 생성

### Notification window

![image](https://github.com/user-attachments/assets/b90c4ad8-53b4-4105-8ecc-fcbfbd95a8dd)

## 메인페이지

![image](https://github.com/user-attachments/assets/c9c12f86-4772-4d69-88f2-da1a3c9371d8)

-   소스코드 간단한 리뷰
-   무한 로딩 기능 첨부 (useEffect 사용)
-   ```javascript
    useEffect(() => {
        -setMovies(movies);
    }, []);
    ```

## 스튜디오

## 채널

![채널 페이지 gif](https://github.com/user-attachments/assets/d2a3ed81-3898-440f-8fcf-8b938a67480a)

1.  **주요기능**

    -   채널 정보 표시

        -   useParams로 채널 이름을 가져와 Redux 상태에서 해당 채널의 데이터를 조회합니다.
            채널 배너, 프로필 이미지, 구독자 수, 동영상 개수를 표시합니다.

    -   탭 네비게이션
        -   activeTab 상태를 통해 홈(Channel_home)과 동영상 탭(Channel_video) 간 전환을 구현합니다.
            선택된 탭에 따라 콘텐츠를 동적으로 렌더링합니다.
    -   검색 기능
        -   검색창(search_input)에서 입력한 검색어(searchTerm)를 기반으로 동영상을 필터링하여 Search_results 컴포넌트를 표시합니다.
    -   구독 버튼
        -   SubscribersBtn 컴포넌트를 사용해 구독 및 구독 취소 기능을 제공합니다.

## 피드

사용자가 시청 기록, 재생 목록, 나중에 볼 동영상, 좋아요 표시한 동영상, 오프라인 저장 동영상과 같은 다양한 비디오 리스트를 카테고리별로 확인하고 관리할 수 있는 기능을 제공합니다. 검색 및 삭제 기능을 포함하여, 사용자가 비디오를 편리하게 관리할 수 있습니다.

1.  **주요 기능**

-   카테고리별 동영상 목록 출력

    -   useParams() 훅을 사용하여 URL에서 카테고리 정보를 가져옵니다.
        각 카테고리별로 동영상을 필터링하여 목록에 표시합니다.

    ```javascript
    const { Category } = useParams();

    const getCategory = () => {
        switch (Category || category) {
            case 'Viewing_Record':
                return '시청 기록';
            case 'Playlist':
                return '재생 목록';
            case 'Later_Watch':
                return '나중에 볼 동영상';
            case 'like_Movie_List':
                return '좋아요 표시한 동영상';
            case 'Download_List':
                return '오프라인 저장 동영상';
            default:
                return '피드';
        }
    };
    ```

-   카테고리별 동영상 저장

    -   IsAddList 사용자의 액션에 따라 특정 동영상을 "시청 기록", "재생 목록", "나중에 볼 동영상 ", "좋아요 표시한 동영상", "오프라인 저장 동영상"에 추가하는 기능을 처리합니다.

        ```javascript
        dispatch(
            IsAddList({
                user_id: isLoginUser.user_id,
                type: saveType, // 예: 'like_Movie_List'...etc
                movie: movie, // 추가할 동영상
            })
        );
        ```

        ```javascript
        IsAddList(state, action) {
                const { user_id, type, movie } = action.payload;
                const User = state.LoginUser.find((user) => user.user_id === user_id);
                if (User && User[type]) {
                    const existingIndex = User[type].findIndex(
                        (item) => item.movie_id === movie.movie_id
                    );
                    if (existingIndex !== -1) {
                        User[type].splice(existingIndex, 1);
                    }
                    User[type].push(movie);
                    User[type].sort(
                        (a, b) =>
                            new Date(b.movie_date.year, b.movie_date.month - 1, b.movie_date.day) -
                            new Date(a.movie_date.year, a.movie_date.month - 1, a.movie_date.day)
                    );
                    state.isLoginUser = User;
                }
                localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
                localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
            },
        ```

-   동영상 검색
    -   사용자가 검색창에 입력한 텍스트를 기준으로 동영상을 필터링하여 보여줍니다.
        제목(movie_title) 또는 카테고리(movie_category)에 입력된 검색어가 포함된 동영상을 찾습니다.
-   동영상 삭제
    -   AllDelList 액션을 사용하여 전체 동영상을 한 번에 삭제할 수 있는 기능을 제공합니다.
        사용자가 삭제 버튼을 클릭하면, 해당 카테고리에서 모든 동영상이 제거됩니다.

```javascript
       IsDelList(state, action) {
           const { user_id, type, movie } = action.payload;
           const User = state.LoginUser.find((user) => user.user_id === user_id);
           if (User) {
               User[type] = User[type].filter((user) => user.movie_id !== movie.movie_id);
           }
           state.isLoginUser = User;
           localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
           localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
       },
```

## 로그인 | 회원가입

![Login](https://github.com/user-attachments/assets/decc95e5-5911-4797-adfd-dceb82bf5ae4)

```c
const [pageType, setPageType] = useState('quickLogin'); // 페이지 세분화

 // 로그인 성공 시 메인 페이지로 이동
    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);
```

-   ### QuickLogin

    가입된 user의 계정으로 로그인

    ```c
    // 새로 고침 시마다 user 3 개 랜덤으로 출력
    const randomLoginUser = LoginUser.filter((user) => typeof user.user_id === 'number')
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
    ```

-   ### LoginForm

    다른 계정으로 로그인

    ```c
    // 가입된 계정과 일치하는 user 로그인
         const onSubmit = (e) => {
             e.preventDefault();
             if (
                 LoginUser.find(
                     (login) =>
                         login.user_email === user.user_email &&
                         login.user_password === user.user_password
                 )
             ) {
        // navigate 코드 중략
             } else {
                 setLoginCheck(true);
                 return;
             }
         };
    // user 정보가 일치하지 않을 경우 경고
         const handleIdChk = (e) => {
             e.preventDefault();
             if (!user.user_email) {
                 alert('label 문구 출력');
             } else {
                 setIdChk(!idChk);
             }
         };
    ```

-   ### JoinForm
    새로운 user의 정보로 가입
    ```c
    // 회원 정보 입력 시 계정 정보 입력란 출력
       const handleUserChk = (e) => {
           e.preventDefault();
           if (user.user_name && user.user_age && user.user_tel) setNextForm(true);
       };
    ```

## 마이 페이지

## 검색

![Search](https://github.com/user-attachments/assets/990c17de-2d51-4920-be0f-f7e9195b1159)

-   ### NoSearchItem / not-search

    검색 기록 또는 결과가 없는 초기 화면

    ```c
    // 부모 위치 : Search > index
    // 검색어 유무로 리스트를 조회함
    const { Search } = useParams();

    !Search ? <NoSearchItem /> : <SearchList Search={Search}/>

    // 부모 위치 : SearchList
    // 검색어에 일치하는 결과가 없을 경우
    if (filteredChannel.length === 0 && filteredMovies.length === 0) {
        return (
        // NoSearchItem과는 별개의 페이지
            <SearchListWrap>
                <p className='not-search'>"{Search}" 찾으시는 검색 결과가 없습니다.</p>
            </SearchListWrap>
        );
    }
    ```

-   ### SearchList

    검색 결과 리스트

    ```c
     // 이름이 검색어와 일치하는 채널
    const filteredChannel = allChannel.filter((channel) =>
        channel.channel_name.toLowerCase().includes(Search.toLowerCase())
    );

    // 제목이나 분류가 검색어와 일치하는 영상
    const filteredMovies = allMovies.filter(
        (movie) =>
            movie.movie_title.toLowerCase().includes(Search.toLowerCase()) ||
            movie.movie_category.toLowerCase().includes(Search.toLowerCase())
    );
    ```

-   ### SearchChannel
    검색어와 일치하는 채널 출력
    ```c
    // 채널 구독자 수 단위 설정
    const subscribers_count = (channel_subscribers) => {
        if (channel_subscribers >= 10000) {
            return Math.floor(channel_subscribers / 10000) + '만명';
        } else if (channel_subscribers >= 1000) {
            return Math.floor(channel_subscribers / 1000) + '천명';
        } else if (channel_subscribers <= 1000) {
            return channel_subscribers + '명';
        }
    };
    ```
-   ### SearchMovies
    검색어와 일치하는 영상 출력
    ```c
    // 필터링 결과에 일치하는 영상 출력
    if (filteredMovies)
        return (
            <>
                {filteredMovies.map((movie) => (
                    <Video key={movie.movie_id} movie={movie} />
                ))}
            </>
        );
    ```
-   ### SearchHistory

    header에 속하는 검색어 보관 리스트

    ```c
    // 부모 위치 : common > header

    // 검색창 클릭 시 출력, 바닥 클릭 시 숨김 처리 -> !isShown && 검색창
    const [isShown, setIsShown] = useState(true);

    // params로 받은 검색어(search)와 검색된 단어(keyword) 분리
    const [search, setSearch] = useState();

    // SearchHistory
    // 한 번 검색한 항목을 다시 검색
    const searchKeyword = (keyword) => {
    setSearch(keyword);
    setIsShown(true);
    navigate(`/movies/${keyword}`);
    };

    // 검색 기록 삭제
    const deleteKeyword = (keyword) => {
    dispatch(DelSearchList({ user_id: user.user_id, search: keyword }));
    };
    ```

## 구독

![image](https://github.com/user-attachments/assets/080e43df-9e27-4d1c-bcfe-3bd9afe990e7)

## 동영상재생
