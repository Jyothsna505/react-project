import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  return (
    <div align="center">
    <Box sx={{ width: 1000, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/023/966/743/small/cyber-security-privacy-and-data-storage-protection-document-management-with-password-and-encryption-encrypted-files-on-computer-or-server-finger-touching-lock-icon-on-electronic-circuit-ai-generated-photo.jpg',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290509835/original/93de9f334e6cdc0fd31bdecd7428164e4631d7dc/generate-your-best-password-generator-program-on-market.jpg',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/06/04/74/88/360_F_604748806_gQSyPrazhAocHefqrUtieGBKK22PS5QZ.jpg',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://password-managers.bestreviews.net/wp-content/uploads/sites/34/password-protection-computer.png',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://watermark.lovepik.com/photo/20211208/large/lovepik-password-picture_501613832.jpg',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://cdn.mos.cms.futurecdn.net/5fz9SMYxWbv44jFVcD4vmd.jpg',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://e1.pxfuel.com/desktop-wallpaper/786/742/desktop-wallpaper-324867-fantasy-river-digital-art-illustration-phone-backgrounds-and-chill-iphone-thumbnail.jpg',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://www.shutterstock.com/image-vector/protection-security-system-center-passwords-260nw-2298599687.jpg',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7..v1651170723.jpg',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://img.freepik.com/premium-vector/two-steps-authentication-verification-code-message-smartphone_349999-342.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--zc2H-r7S--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hmnsecxlmq6piu4wfz9c.jpg',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];
