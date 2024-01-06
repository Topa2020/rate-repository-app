import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  languageContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  languageText: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
    color: 'white',
    fontSize: theme.fontSizes.body,
    alignSelf: 'flex-start'
  },
  statisticsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statistics: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const kilos = amount => {
  if (amount < 1000) {
    return amount
  } else {
    const kilo = amount / 1000
    return kilo.toFixed(1)+'k'
  }
}

const Language = (props) => {
  return (
    <View style={styles.languageContainer}>
      <View style={styles.languageTextContainer}>
        <Text style={styles.languageText}>{props.language}</Text>
      </View>
    </View>
  );
}

const Statistics = (props) => {
  return (
    <View style={styles.statisticsContainer}>
      <View style={styles.statistics}>
        <Text fontWeight='bold'>{kilos(props.stars)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statistics}>
        <Text fontWeight='bold'>{kilos(props.forks)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statistics}>
        <Text fontWeight='bold'>{kilos(props.reviews)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.statistics}>
        <Text fontWeight='bold'>{kilos(props.rating)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}

const RepositoryItem = (props) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: props.item.ownerAvatarUrl }} />
      <View style={styles.textContainer}>
        <Text fontWeight='bold' fontSize= 'subheading'>{props.item.fullName}</Text>
        <Text>Description: {props.item.description}</Text>
        <Language language={props.item.language} />
      </View>
    </View>
    <Statistics stars={props.item.stargazersCount} forks={props.item.forksCount} reviews={props.item.reviewCount}
         rating={props.item.ratingAverage} />
    </View>
  );
};

export default RepositoryItem;
