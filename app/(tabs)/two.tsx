import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  Exercise,
  WorkoutData,
  WorkoutPlan as WorkoutPlanType,
} from "@/types/Workouts";
import Colors from "@/constants/Colors";
import WorkoutPlan from "@/components/WorkoutPlan";

type TabTwoScreenRouteProp = RouteProp<
  { params: { workoutData: WorkoutData } },
  "params"
>;

type MetadataWorkoutProps = {
  workoutData: WorkoutData;
};

const MetadataWorkout: React.FC<MetadataWorkoutProps> = ({ workoutData }) => {
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
    <>
      <Text style={styles.title}>Workout Data</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Weight: {weight}</Text>
      <Text style={styles.text}>Experience Level: {experienceLevel}</Text>
      <Text style={styles.text}>Workout Preference: {workoutPreference}</Text>
      <Text style={styles.text}>Fitness goal: {fitnessGoal}</Text>
      <Text style={styles.text}>
        Available Workout Time: {availableWorkoutTime}
      </Text>
      {injuries && <Text style={styles.text}>Injuries: {injuries}</Text>}
    </>
  );
};

export default function TabTwoScreen() {
  const route = useRoute<TabTwoScreenRouteProp>();
  const { workoutData } = route.params;
  const mock: Exercise = {
    difficulty: "Hard",
    muscle_group: ["upper", "core"],
    name: "Push-Up",
    reps: 15,
    sets: 3,
  };
  const mockWorkoutPlan: WorkoutPlanType = {
    day: 1,
    exercises: [mock],
  };

  return (
    <View>
      {/* <MetadataWorkout workoutData={workoutData} /> */}
      <ScrollView>
        <WorkoutPlan workoutPlan={mockWorkoutPlan} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.light.text,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.light.text,
  },
});
