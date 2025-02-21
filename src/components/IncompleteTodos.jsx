export const IncompleteTodos = (props) => {
  const {incompleteTodos, clickCompleteButton,clickDeleteButton} = props;
  return (
    <div className='incomplete-area'>
      <p className='title'>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((item, index) => 
          (
            <li key={item}>
              <div className='list-row'>
                <p className='todo-item'>{item}</p>
                <button onClick={() => clickCompleteButton(index)}>完了</button>
                <button onClick={() => clickDeleteButton(index)}>削除</button>
              </div>
            </li>
          )
        )}
        
      </ul>
    </div>
  )
}