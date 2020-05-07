'use strict';

const p1 = document.getElementById('p1');
const p = (a = '') => {
  p1.innerHTML += String(a) + '<br>';
};

p('こんにちは');
p('お元気ですか');
p();
p('一回改行');
