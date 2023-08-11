import { Image, StyleSheet, View } from "react-native";
import { PhotoButton } from "../../Components/PhotoButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../../Services/shopServices";

export const Profile = ({ navigation }) => {
  const { localId, profileImage } = useSelector(
    (state) => state.userReducer.value
  );

  const { data: image } = useGetProfileImageQuery(localId);

  const cameraImage = image?.image;

  const launchCamera = async () => {
    navigation.navigate("Selector de imagen");
  };

  return (
    <View style={styles.container}>
      {profileImage || cameraImage ? (
        <Image
          source={{ uri: profileImage || cameraImage }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require("../../Assets/img/default.png")}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <PhotoButton onPress={launchCamera} title="Cambiar avatar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
