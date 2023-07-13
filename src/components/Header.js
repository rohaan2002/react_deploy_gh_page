import React from 'react'

const Header = ({title="Grocery List"}) => {
    const headerStyle={
        backgroundColor:'mediumblue',
        color: 'white'
    };
  return (
    <header style={headerStyle}>
        <h1>{title} </h1>
    </header>
  )
}
// Header.defaultProps={
//   title:"Default title"
// }
// can also set default props like this - this is preff over the Def Initial Value u give in the funct definition

export default Header