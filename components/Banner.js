import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import StarRating from 'react-native-star-rating-widget';
export default function Banner() {
  const ref = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=<api-key>&language=en-US&page=1'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item, index }) => {
    console.log(typeof item.vote_average);
    return (
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
        }}
        style={styles.imageStyele}
      >
        <Text style={styles.TextStyles}>{item.title}</Text>
        <View style={styles.viewContainerRating}>
          <StarRating rating={item.vote_average / 2} starSize={24} />
          <Text style={styles.textRating}>{`(${item.vote_average})`}</Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View>
      <Carousel
        sliderWidth={400}
        itemWidth={300}
        data={data}
        renderItem={renderItem}
        layout={'default'}
        ref={ref}
        onSnapToItem={(index) => setActiveIndex(index)}
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyele: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    borderRadius: 40,
  },
  TextStyles: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  viewContainerImage: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
  },
  viewContainerRating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    color: '#fdd835',
    fontWeight: 'bold',
  },
});
