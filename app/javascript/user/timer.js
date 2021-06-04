window.onload = () => {
    // 画面識別するためのbodyのID取得(今回は時間の都合情仕方なく)
    const bodyId = document.getElementsByTagName('body')[0].id,
    // ユーザーが登録したlocalstorage情報を取得
          uLocalData = JSON.parse(localStorage.getItem('userData'));

    // 時刻表時するtag情報取得
    let date = {
        time: null,
        day: null,
    },
    time = "",
    // ユーザー情報
    user = {
        age: null,
        getup: null,
        sleep: null,
    };

    // firstViewの処理
    if (bodyId === "first") {
        // セットボタン
        const setBtn = document.getElementById('setBtn');


        // セットボタンクリック時にユーザー情報セット
        setBtn.onclick = () => {
        const ageVal = document.getElementById('age').value,
            getupVal = document.getElementById('getup').value,
            sleepVal = document.getElementById('sleep').value;

        user.age = ageVal;
        user.getup = getupVal;
        user.sleep = sleepVal;

        // 取得したユーザー情報をローカルストレージに保存
        localStorage.setItem('userData', JSON.stringify(user))

        location.href = "hello/index"
        }
    }

    if (bodyId === "home") {
        // モーダル処理
        const addBtn = document.getElementById('addBtn');
        const modalBg = document.getElementById('modalBg');
        console.log(modalBg)

        addBtn.onclick = () => {
            modalBg.style.display = "flex"
        }
        modalBg.onclick = () => {
            modalBg.style.display = "none"
        }
        

        // 起床・就寝時間の表示tag情報取得
        let getupTime = document.getElementById('getup');
        let sleepTime = document.getElementById('sleep');

        // 起床・就寝時間を表示
        getupTime.innerHTML = uLocalData.getup;
        sleepTime.innerHTML = uLocalData.sleep;

        // Push通知処理
        setInterval(() => {
            const newDate = new Date();

            // 取得した時刻を曜日と時刻表示で分ける
            date.time = `${newDate.getHours()}:${newDate.getMinutes()}`
            date.day = newDate.getDay();

            console.log(uLocalData.sleep);
            console.log(date.time)

            // 入力した起床時間と現在時刻が一致したらプッシュ通知
            if( date.time === uLocalData.getup) {
                Push.create('おはよう!');
            }
            if( date.time === uLocalData.sleep) {
                Push.create('おやすみ！');
            }
        }, 1000);
    }
}
