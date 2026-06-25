const btn = document.querySelector('.btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const checkbtn = document.querySelector('.checkbtn');
const todoUl = document.querySelector('.todo-list');// 左邊清單
const doneUl = document.querySelector('.done-list');// 右邊清單

// 新增待辦事項
btn.addEventListener('click',()=>{
    const text = input.value;

    if(text === ''){
        alert('請輸入待辦事項');
        return
    }
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn','checkbtn');
    newBtn.textContent = '完成';
    
    // newLi.textContent = text;
    newLi.append(newBtn,text);
    todoUl.appendChild(newLi);
    input.value = '';
})
// 搬移到已完成
todoUl.addEventListener('click',(e)=>{
   if(e.target.classList.contains('checkbtn')) {
    doneUl.appendChild(e.target.parentElement);
    e.target.textContent = '刪除';
    e.target.classList.remove('checkbtn');
    e.target.classList.add('deletebtn');
   }
})
// 刪除
doneUl.addEventListener('click',(e)=>{
    if(e.target.classList.contains('deletebtn')){
        e.target.parentElement.remove()
    }
})
// 全部完成
const allbtn =document.querySelector('.allbtn');
allbtn.addEventListener('click',(e)=>{
    todoUl.querySelectorAll('li').forEach((li)=>{
        const btn = li.querySelector('button');
        doneUl.appendChild(li);     //移動li              
        btn.textContent = '刪除';                   
        btn.classList.remove('checkbtn');         
        btn.classList.add('deletebtn');
    })
})
// 刪除全部已完成
const alldeletebtn = document.querySelector('.alldeletebtn');
alldeletebtn.addEventListener('click',(e)=>{
   doneUl.innerHTML = ''
    
})
