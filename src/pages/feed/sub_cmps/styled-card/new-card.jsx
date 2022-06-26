import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import * as S from './style'

export const NewCard = ({card}) => {

  console.log(card)

  return (
    <Card sx={{ maxWidth: 300, minWidth: 255, minHeight: 155, bgcolor: '#FFF8F0' }}>
      <CardHeader
        avatar={
          <Avatar 
            sx={{ bgcolor: red[500] }} aria-label="recipe"
            >
            <img 
            style={{'width':'100%', 'height': '100%'}}
            src={card?.profileImg}
            />
            
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={card?.username}
        subheader={card?.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={card?.images[0]}
        alt="talent img"
      />
      <CardContent>

        <Typography variant="body2" color="text.secondary">
          {card?.description}
        </Typography>
        
      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>

    </Card>
  );
}




/*
export const NewCard = ({card}) => {


    return (
    <>
    {console.log(card)}
    <div>
        <span> { <S.profileImage src={card?.profileImg} /> } </span>
        <span> { card?.username } </span>
        <span> { card?.title } </span>
        <span> { card?.description } </span>
    </div>
        <S.ImageWrapper>

        {
            card?.images?.map(img => <S.Image src={img} />)
        }
        </S.ImageWrapper>
        
    </>
    )
}
*/