export const CompleteTodos = (props) => {
  const {completeTodos, clickBackButton} = props;
  return (
    <div className='complete-area'>
      <p className='title' >完了のTODO</p>
      <ul>
        {completeTodos.map((item, index)=>{
          return (
            <li>
              <div className='list-row'>
                <p className='todo-item'>{item}</p>
                <button onClick={() => clickBackButton(index)}>戻す</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}