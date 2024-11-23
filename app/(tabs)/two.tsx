import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
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
  const navigation = useNavigation();
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
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome
            name="chevron-left"
            size={20}
            color={Colors.light.activeButtonBorder}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerSubtitle}>Your Training Plan</Text>
          <Text style={styles.headerTitle}>Workouts</Text>
        </View>
      </View>
      {/* <MetadataWorkout workoutData={workoutData} /> */}
      <ScrollView>
        <WorkoutPlan workoutPlan={mockWorkoutPlan} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.borderColor,
    backgroundColor: Colors.light.background,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    paddingTop: 60,
  },
  backButton: {
    paddingLeft: 0,
    paddingRight: 20,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.light.text,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 12,
    color: Colors.light.detailText,
    textAlign: "center",
    marginBottom: 4,
  },
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
