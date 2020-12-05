import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if(isSignedIn) {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}> {/*These are semantic web tags and the style uses flexbox*/}
					<p onClick={() => onRouteChange('signout') } className='f3 link dim black underline pa3 pointer'>Sign Out</p> {/*Use tachyons using className= and chose formatting*/}
				</nav>
			);
		} else {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}> {/*These are semantic web tags and the style uses flexbox*/}
					<p onClick={() => onRouteChange('signin') } className='f3 link dim black underline pa3 pointer'>Sign In</p> {/*Use tachyons using className= and chose formatting*/}
					<p onClick={() => onRouteChange('register') } className='f3 link dim black underline pa3 pointer'>Register</p> {/*Use tachyons using className= and chose formatting*/}
				</nav>
			);
		}
}

export default Navigation; 