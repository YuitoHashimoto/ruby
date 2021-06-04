// 時刻表時するtag情報取得
let timeDom = document.getElementById('date'),
    // 取得した現在時刻
    date = {
        time: null,
        day: null,
    }
    time = "",
    // ユーザー情報
    user = {
        age: null,
        getup: null,
        sleep: null,
    };

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

    console.log(user);
    console.log(time);
}

// 1秒間に一度時間取得
setInterval(() => {
    const newDate = new Date();

    // 取得した時刻を曜日と時刻表示で分ける
    date.time = `${newDate.getHours()}:${newDate.getMinutes()}`
    date.day = newDate.getDay();

    // 入力した起床時間と現在時刻が一致したらプッシュ通知
    if( date.time === user.getup) {
        Push.create('Push 通知だよ！');
    }

    // 取得した現在時刻をセット
    timeDom.innerHTML = date.time;
}, 1000);

//時間が合致した時の処理
