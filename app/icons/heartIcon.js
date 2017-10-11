import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FBSDK, {ShareApi, ShareDialog} from 'react-native-fbsdk'


export default class HeartIcon extends Component {
  constructor (props) {
    super()
    this.like = this.like.bind(this)
    this.share = this.share.bind(this)
  }

  like() {
    alert('click')
  }

  share () {
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://facebook.com",
      contentDescription: 'Wow, check out this great site!',
    };

    ShareDialog.canShow(shareLinkContent).then(
        function(canShow) {
          if (canShow) {
            return ShareDialog.show(shareLinkContent);
          }
        }
      ).then(
        function(result) {
          if (result.isCancelled) {
            alert('share cancelled')
          }else {
            alert ('Share success with postId : ' + result.postID)
          }
        },
        function(error) {
          alert('Share fail with error :  ' + error)
        }
      )
  }

  render () {
    return (
      <View style={styles.comments}>
        <Icon name="ios-heart" style={styles.heartIcon} onPress={this.like}><Text>10</Text></Icon>
        <Icon name="md-share" style={styles.shareIcon} onPress = {this.share}><Text>3</Text></Icon>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  comments: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  heartIcon : {
    fontSize: 17   
  },

  shareIcon : {
    fontSize: 17   
  }

})