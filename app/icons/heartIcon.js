import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FBSDK, {ShareApi, ShareDialog} from 'react-native-fbsdk'


export default class HeartIcon extends Component {
  constructor (props) {
    super()
    this.shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://urbanica.site",
      redirect_uri: 'https://urbanica.site',
      contentDescription: 'Wow, check out this great site!',
    }
    this.like = this.like.bind(this)
    this.share = this.share.bind(this)
  }

  like() {
    alert('click')
  }

  share () {

    ShareDialog.canShow(shareLinkContent).then( (canShow) => {
          if (canShow) {
            return ShareDialog.show(this.shareLinkContent)
          }
        }
      ).then( (result)  => {
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
        <TouchableOpacity>
          <Icon name="ios-heart" style={styles.heartIcon}><Text>10</Text></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="md-share" style={styles.shareIcon} onPrress = {this.share}><Text>3</Text></Icon>
        </TouchableOpacity>
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