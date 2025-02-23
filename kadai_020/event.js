//　btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

//　HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
   const text = document.getElementById('text');
   text.innerHTML = '<h2>ボタンをクリックしました</h2>';
   console.log(text);
});