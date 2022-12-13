import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";

function Seperator() {
  return <View style={styles.seperator}/>;
}

// export default function MovieSearch({ navigation }) {
//   return (
//     <MovieSearchPage/>
//   );
// };
// const MovieSearchPage = () => {
export default function MovieSearch({ navigation }) {
  const emptyMovie = {
    Title: " ",
    Year: " ",
    Rated: " ",
    Released: " ",
    Runtime: " ",
    Genre: " ",
    Director: " ",
    Writer: " ",
    Actors: " ",
    Plot: " ",
    Language: " ",
    Country: " ",
    Awards: " ",
    Poster: " ",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: " ",
      },
      {
        Source: "Rotten Tomatoes",
        Value: " ",
      },
      {
        Source: "Metacritic",
        Value: " ",
      },
    ],
    Metascore: " ",
    imdbRating: " ",
    imdbVotes: " ",
    imdbID: " ",
    Type: " ",
    DVD: " ",
    BoxOffice: " ",
    Production: " ",
    Website: " ",
    Response: "True",
  };
  const [movie, setMovie] = React.useState(emptyMovie);
  const [showLoad, setShowLoad] = useState(false);
  const searchMovie = (name) => {
    setShowLoad(true);
    fetch("https://www.omdbapi.com/?apikey=a4f1f727&t="+name) //API
      .then((response) => response.json())
      .then((json) => {
        if (json.Response == "True") {
          setMovie(json);
          setShowLoad(false);
        } else {
          setMovie(emptyMovie);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    // console.log("Data Retrived and Assigned")
  };
  return (
    <View style={styles.Screen}>
      <Text style={styles.title}>Search for any movie here</Text>
      <TextInput
        style={styles.input}
        placeholder="Search movie name. . ."
        onChangeText={searchMovie}
      />
       <ActivityIndicator size="large" color="#00ff00" animating={showLoad} />
      <View style={styles.seperator}/>

      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Image
        style={{ width: 100, height: 200, marginBottom: 10 }}
        source={{ uri: movie.Poster }}
      />
      <Text style={styles.movieText}>Year: {movie.Year}   </Text>
      <Text style={styles.movieText}>Plot: {movie.Plot}   </Text>
      <Text style={styles.movieText}>Genres: {movie.Genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#262361",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F9BC08",
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "90%",
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#000000",
    placeholderTextColor: "#6D5C82",
    color: "#F748B7",
  },
  movieTitle: {
    color: "#E3D9FF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 'bold'
  },
  
  movieText: {
    color: "#E3D9FF",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 2,
  },
  seperator: {
    width: 6
  },
});