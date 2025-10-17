// script.js — небольшая логика: копирование брифа и текущий год
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const fillBtn = document.getElementById('fillBtn');
  const pname = document.getElementById('pname');
  const pdesc = document.getElementById('pdesc');
  const pcontact = document.getElementById('pcontact');

  if(fillBtn){
    fillBtn.addEventListener('click', function(e){
      e.preventDefault();
      const text = [
        'Название проекта: ' + (pname.value || '-'),
        'Описание: ' + (pdesc.value || '-'),
        'Контакты: ' + (pcontact.value || '-'),
        'Ссылка на профиль Kwork: https://kwork.ru/user/jasinas'
      ].join('\n');
      navigator.clipboard.writeText(text).then(function(){
        fillBtn.textContent = 'Скопировано!';
        setTimeout(()=> fillBtn.textContent = 'Скопировать в сообщение Kwork', 2200);
      }, function(){
        alert('Не удалось скопировать. Скопируйте вручную:\n' + text);
      });
    });
  }
});
