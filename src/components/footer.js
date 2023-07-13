const Footer =({length})=>{
    const today= new Date();
    let quan='item';
    length==1||length==0 ? quan= 'item' : quan='items'; 
    return (
        <footer>
            <p>{length} list {quan} {today.getFullYear()}</p>
        </footer>
    )
}
export default Footer;