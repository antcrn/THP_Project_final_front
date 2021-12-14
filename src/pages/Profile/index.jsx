import React from 'react'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Typography } from '@mui/material'
import GameList from 'components/GameList';


const Profile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const user = useSelector(state => state.userReducer)

  React.useEffect(
    () => {
      const fetchCartsHistory = async () => {
        const response = await APIManager.getCartsHistory()
        if (!response.error) {
          setCartsHistory(response)
        }
      }
      fetchCartsHistory()
    }, []
  )
  return (
    <div className=''>
      {isSigned(user) &&
        <Grid container spacing={8}>

          <Grid item xs={12} md={6} >
            <EditProfile user={user.user_info} />
          </Grid>
          <Grid item xs={12} md={6} >
            <CartHistory carts={cartsHistory} />
          </Grid>
          <Grid item xs={12} md={12} >
            <Typography variant="h2" align="center" color="primary">
              Mes Favoris
            </Typography>
            <GameList games={user.favorites} />
          </Grid>

        </Grid>
      }
    </div>
  )
}

export default Profile
