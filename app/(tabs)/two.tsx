import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WorkoutData } from "@/types/Workouts";
import { FontAwesome } from "@expo/vector-icons";

type TabTwoScreenRouteProp = RouteProp<
  { params: { workoutData: WorkoutData } },
  "params"
>;

export default function TabTwoScreen() {
  const route = useRoute<TabTwoScreenRouteProp>();
  const { workoutData } = route.params;

  const {
    age,
    weight,
    experienceLevel,
    workoutPreference,
    daysAvailable,
    fitnessGoal,
    availableWorkoutTime,
    injuries,
  } = workoutData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Data</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Weight: {weight}</Text>
      <Text style={styles.text}>Experience Level: {experienceLevel}</Text>
      <Text style={styles.text}>Workout Preference: {workoutPreference}</Text>
      <Text style={styles.text}>Fitness goal: {fitnessGoal}</Text>
      <Text style={styles.text}>Exercises: {daysAvailable.join(", ")}</Text>
      <Text style={styles.text}>
        Available Workout Time: {availableWorkoutTime}
      </Text>
      {injuries && <Text style={styles.text}>Injuries: {injuries}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
