import React from 'react';
import { View, Image, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/50937275?s=460&u=33eb4ae0a1fc2bfde3fb6d81b8e971102149193e&v=4' }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Victor Carvalho</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>

      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        {'\n'}
        {'\n'}
        Minus cumque fuga earum adipisci quibusdam unde optio,
        voluptatibus nihil ea sunt illum, assumenda explicabo magni quo dolorem illo?
        In, debitis quibusdam?
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora
          {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.favoriteButton, styles.favorited]}>
          {/* <Image source={heartOutlineIcon} /> */}
          <Image source={unfavoriteIcon} />
        </RectButton>

        <RectButton style={styles.contactButton}>
          <Image source={whatsappIcon} />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default TeacherItem;
