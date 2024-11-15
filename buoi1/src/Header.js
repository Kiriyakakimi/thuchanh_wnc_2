function Item(props){
    return (
        <div>
        <li><a href={props.link}>{props.content}</a></li>
        </div>
    );
}
function Menu({list}){
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <Item link={item.link} content={item.content}/>
                ))}
            </ul>
        </div>
    )
}
function Header(){
    const menu = [
        {link:'/',content:'Trang chủ'},
        {link:'/about',content:'About'},
        {link:'/',content:'Liên hệ'},
        {link:'/product',content:'Sản phẩm'},
    ];
    return (
        <div>
            <Menu list={menu}/>
        </div>
    )
}
export default Header;
