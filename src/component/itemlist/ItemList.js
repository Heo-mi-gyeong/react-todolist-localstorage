import React, { useEffect, useRef, useState } from 'react'
import Button from '../button/Button';
import TodoItem from '../todoItem/TodoItem';
import styles from '../../styles/itemList.module.css'

const ItemList = () => {
    const [item, setItem] = useState([]); //id, content
    const inputContent = useRef(); //현재 내가 작성한 일정
    const [cnt,setCnt] = useState(0); //id로 사용할 예정
    const isMount = useRef(true);

    useEffect(() => {
        const localTodoList = localStorage.getItem('todoList');
        if (localTodoList) {
            setItem(JSON.parse(localTodoList));
        }
        const localCnt = localStorage.getItem('id');
        if (localCnt) {
            setCnt(parseInt(localCnt));
        }
        isMount.current = false;
    }, []);

    useEffect(() => {
        if (!isMount.current) {
            localStorage.setItem('todoList', JSON.stringify(item));
            localStorage.setItem('id', JSON.stringify(cnt));
        }
    }, [JSON.stringify(item)]);

    const onClick = (e) => {
        e.preventDefault();
        if(!inputContent.current.value){
            alert("일정을 입력해주세요.");
            return;
        }
        setItem([...item,{id : cnt, content : inputContent.current.value}]);
        setCnt((id) => id +1);
        inputContent.current.value = '';
    }

    const remove = (targetId) =>{
         setItem(
            item.filter((it) => 
                it.id !== targetId
            )
        ) 
    }

    const modify = (targetId, targetContent) => {
        const newItem = JSON.parse(JSON.stringify(item));
        newItem.map((data,i) => {
            if(targetId === data.id) {
                data.content = targetContent;
            }
        });
        setItem(newItem); 
    }

  return (
    <div>
        <div className={styles.box}>
            <form>
                <input className={styles.inputBox} type={'text'} placeholder='일정을 입력하세요.' ref={inputContent}/>
                <Button text={'등록'} onClick={onClick}/>
            </form>
        </div>
        {
            item.map((it) => {
                return (
                    <TodoItem key={it.id} it={it} onDelete={remove} onUpdate={modify}/>
                )
            })
        }
    </div>
  )
}

export default ItemList