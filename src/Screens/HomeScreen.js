import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getHotPosts, hotContentSelector } from "../Redux/hotContent";
import React, { useEffect } from "react";
import { Video } from "expo-av";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { content, error, loading } = useSelector(hotContentSelector);

  useEffect(() => {
    dispatch(getHotPosts());
  }, []);
  const video = React.useRef();

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      {loading ? (
        <Text>Loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={content}
          keyExtractor={(item) => item.post.id}
          renderItem={({ item }) => {
            return item.type === "image" ? (
              <View style={styles.itemBox}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.post.preview.images[0].source.url.includes(
                      "https://external"
                    )
                      ? item.post.thumbnail
                      : item.post.preview.images[0].source.url,
                  }}
                />
                <Text style={styles.text}>{item.post.title}</Text>
              </View>
            ) : (
              <View style={styles.itemBox}>
                <Video
                  ref={video}
                  style={styles.video}
                  source={{
                    uri: item.post.secure_media.reddit_video.fallback_url,
                  }}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                />
                <Text style={styles.text}>{item.post.title}</Text>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
  },
  itemBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#f5f0e4",
    margin: 4,

    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 300,
  },
  text: {
    color: "white",
  },
});
