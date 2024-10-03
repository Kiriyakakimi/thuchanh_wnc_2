function Hello() {
    const person = {
        name: 'Peter',
        theme: {backgroundColor: 'green',color: 'white'}
     };
     return (
     <div>
      <div style={person.theme}>
        <h1>Xin chào: {person.name}</h1>
      </div>
      <div> Chúc bạn thành công với React</div>
    </div>
    );
}
function HelloPerson(props) {
  return (
    <div>
      <h1>Xin chào bạn: {props.name}</h1>
    </div>
  );
}
function Hello2() {
  const hiAll = ()=>{
    alert('Hello everyone');
  }
  const hiYou=(name)=>{
    alert("Hello" + name);
  }
  return (
    <div>
      <span>
        <button onClick={hiAll}>Hi all</button>
        <button onClick={()=>hiYou('Peter')}>Hi You</button>
      </span>
    </div>
  )
}

export {HelloPerson,Hello,Hello2};

