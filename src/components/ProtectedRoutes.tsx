
import {Outlet, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';


function PrivateRoutes () {
  const auth = useSelector((state:any) => state.auth);
  const {isAuthenticated} = auth;

  const url = "/"
  return (
    <div>
      {isAuthenticated ? <Outlet/> : <Navigate to={url}/>}
    </div>
  )
}

export default PrivateRoutes
