import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WorkoutPlan as WorkoutPlanType } from "@/types/Workouts";
import ExerciseCard from "@/components/Exercise";
import Colors from "@/constants/Colors";

type WorkoutPlanProps = {
  workoutPlan: WorkoutPlanType;
};

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ workoutPlan }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <View>
          <View style={styles.dayCircle}>
            <Text style={styles.dayText}>{workoutPlan.day}</Text>
          </View>
          <Text style={{ textAlign: "center" }}>Day</Text>
        </View>
        <View style={styles.verticalLine} />
      </View>
      <View style={styles.cardsContainer}>
        {workoutPlan.exercises.map((exercise, index) => (
          <ExerciseCard key={index} {...exercise} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 20,
    paddingLeft: 5,
  },
  dayContainer: {
    alignItems: "center",
    marginRight: 20,
  },
  dayCircle: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  verticalLine: {
    width: 2,
    backgroundColor: "lightgray",
    flex: 1,
    marginTop: 4,
  },
  cardsContainer: {
    flex: 1,
  },
});

export default WorkoutPlan;
