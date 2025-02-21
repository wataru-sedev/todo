export const InputTodos = (props)=>{
  const {todoText, changeInputText, clickAddButton} = props;
  return(
    <div className="input-area">
      <input value={todoText} type="text" placeholder='TODOを入力' onChange={changeInputText}/>
      <button onClick={clickAddButton}>追加</button>
    </div>
  )
}