  // ボタンとテキストの要素を定数に代入
  const btn = document.getElementById('btn');
  const outputText = document.getElementById('text');

  btn.addEventListener('click', () => {
      console.log('ボタンをクリックしました');
  // メッセージ表示用の要素にメッセージを設定
      outputText.textContent = 'ボタンをクリックしました';
  });