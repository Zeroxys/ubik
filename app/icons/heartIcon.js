import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FBSDK, {ShareApi, ShareDialog} from 'react-native-fbsdk'


export default class HeartIcon extends Component {
  constructor (props) {
    super()

    this.state = {
      like : true,
      likeIcon : "ios-heart-outline"
    }

    this.like = this.like.bind(this)
    this.share = this.share.bind(this)
  }

  like() {
    if(this.state.like) {
      this.setState({
        like : false,
        likeIcon :  'ios-heart'
      })
    }else{
      this.setState({
        like : true,
        likeIcon : 'ios-heart-outline'
      })
    }
  }

  share () {

    let shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://urbanica.site",
      redirect_uri: 'https://urbanica.site',
      contentDescription: 'Wow, check out this great site!',
    }

    alert(JSON.stringify(shareLinkContent))

    ShareDialog.canShow(shareLinkContent).then( (canShow) => {
          if (canShow) {
            return ShareDialog.show(shareLinkContent)
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
        <TouchableOpacity onPress={this.like}>
          <View style={styles.IconContent}>
            <Icon name={this.state.likeIcon} style={styles.heartIcon}></Icon>
            <Text>10</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {this.share}>
          <View style={styles.IconContent}>
            <Icon name="md-share" style={styles.shareIcon} />
            <Text>3</Text>
          </View>
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

  IconContent: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  heartIcon : {
    fontSize: 15
  },

  shareIcon : {
    fontSize: 15,
  }

})