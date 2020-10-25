import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../../modules/user'

const Home = (props) => {
console.log(props);
props.fetchUser();
return <div>
    Hello {JSON.stringify(props.user)}
  </div>;
} 
  


const mapStateToProps = ({ counter, user }) => ({
  user
})


export default connect(mapStateToProps, { fetchUser })(Home)
