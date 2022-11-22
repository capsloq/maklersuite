'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, Rating } from '@mantine/core';



const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));


function Card({ image, category }) {
    const { classes } = useStyles();
  
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>

        </div>
        {/* <Button variant="white" color="dark">
          Read article
        </Button> */}
      </Paper>
    );
  }
  
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   title: 'Best forests to visit in North America',
      category: 'Küche',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   title: 'Hawaii beaches review: better than you think',
      category: 'Schlafzimmer',
    },
    {
      image:
        'https://images.unsplash.com/photo-1530406472580-81dc39c4babe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
    //   title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'Hauseingang',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505692795793-20f543407193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80',
    //   title: 'Aurora in Norway: when to visit for best experience',
      category: 'Kinderzimmer',
    },
    {
      image:
        'https://images.unsplash.com/photo-1547630824-eed1be6a27b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   title: 'Best places to visit this winter',
      category: 'Aufzug',
    },
    {
      image:
        'https://images.unsplash.com/photo-1644477547572-18f86f531192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   title: 'Active volcanos reviews: travel at your own risk',
      category: 'Sexzimmer',
    },
  ];





export default function Einzeldarstellung({immobilie}) {
    
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
   
    // hier kommen die Bilder ins Karussell
    const slides = immobilie.data.attributes.bilder.data.map(({id, attributes}) => (
  
        <Carousel.Slide key={id}>
            <Card category={attributes.caption} image={"http://localhost:1337"+attributes.formats.medium.url} />
        </Carousel.Slide>
    ));

    // const slides = data.map((item) => (

    //     <Carousel.Slide key={item.image}>
    //         <Card category={item.category} image={item.image} title={item.title} />
    //     </Carousel.Slide>
    // ));

    // <>
    // <div>id: {id}</div>
    // <div>attributes: {JSON.stringify(attributes,null,2)}</div>
    // </>

    if (!immobilie) {
      return ('keine immobilie gefunden')
  }


  const {id: immobilienId} = immobilie;
  // Makler rausspilitten
  const { vorname: maklerVorname, nachname: maklerNachname, sterne:sterne } = immobilie.data.attributes.makler.data.attributes


    return (

        <div className="grid grid-cols-3 pt-24 gap-x-6">
            <div className="w-full col-span-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl drop-shadow-lg ">
                {/* karusell */}
                <Carousel
                    slideSize="50%"
                    breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
                    slideGap="xl"
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}
                >
                    {slides}
                </Carousel>


            </div>
            
        
        
            <section aria-labelledby="profile-overview-title" className='flex flex-col' >
                 
                    <h2 className="sr-only" id="profile-overview-title">
                      Profile Overview
                    </h2>
                    <div className="flex-grow p-6 bg-white rounded-2xl">
                      <div className="flex flex-col items-center justify-between">
                        <div className="flex flex-col space-x-5">
                          <div className="flex-shrink-0">
                            <img className="w-20 h-20 mx-auto rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                          </div>
                          <div className="pt-1 mt-4 text-center ">
                            <p className="text-sm font-medium text-gray-600">Immobilien Markler</p>
                            <p className="text-xl font-bold text-gray-900">{maklerVorname} {maklerNachname}</p>
                            <p className="text-sm font-medium text-gray-600">82093 München</p>
                          </div>
                        </div>
                        <div className="flex justify-center mt-5">
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                          >
                            View profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 bg-white border-t border-gray-200 divide-y divide-gray-200 rounded-b-2xl">
                     
                        <div  className="px-6 py-5 text-sm font-medium text-center">
                            <div className='flex justify-center'>
                          <Rating defaultValue={sterne} />
                          </div>
                          <span className="text-xs text-gray-600">212 Bewertungen</span>
                        </div>
                        <div  className="px-6 py-5 text-sm font-medium text-center">
                          <Button color='green'> Nachricht schreiben</Button>
                          {/* <span className="text-gray-600">Sterne</span> */}
                        </div>
                
                    </div>
               
                </section>


           

        </div>


    )
}