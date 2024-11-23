import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { Text } from "@/components/Themed";
import OptionSelector from "@/components/OptionSelector";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import StyledButton from "@/components/StyledButton";
import { WorkoutData } from "@/types/Workouts";
import TextArea from "../components/TextArea";

type RootStackParamList = {
  two: { workoutData: WorkoutData };
};

export default function TabOneScreen() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Beginner");
  const [workoutPreference, setWorkoutPreference] = useState("Home");
  const [fitnessGoal, setFitnessGoal] = useState("Weight loss");
  const [daysAvailable, setDaysAvailable] = useState<string[]>([]);
  const [availableWorkoutTime, setAvailableWorkoutTime] = useState("");
  const [injuries, setInjuries] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleWorkout = async () => {
    const workoutData: WorkoutData = {
      age,
      weight,
      experienceLevel,
      workoutPreference,
      fitnessGoal,
      daysAvailable,
      availableWorkoutTime,
      injuries,
    };
    navigation.navigate("two", { workoutData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.inputLabel}>Age</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Age"
            value={age}
            onChangeText={setAge}
          />
          <Text style={styles.inputLabel}>Weight</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Weight"
            value={weight}
            onChangeText={setWeight}
          />

          <Text style={styles.label}>Experience level</Text>
          <OptionSelector
            options={[
              { label: "Beginner", value: "Beginner" },
              { label: "Intermediate", value: "Intermediate" },
              { label: "Advanced", value: "Advanced" },
            ]}
            selectedValue={experienceLevel}
            onSelect={(value) => setExperienceLevel(value as string)}
          />

          <Text style={styles.label}>Workout Preferences</Text>
          <OptionSelector
            options={[
              { label: "Home", value: "Home" },
              { label: "Gym", value: "Gym" },
              { label: "Outdoor", value: "Outdoor" },
            ]}
            selectedValue={workoutPreference}
            onSelect={(value) => setWorkoutPreference(value as string)}
          />

          <Text style={styles.label}>Fitness Goal</Text>
          <OptionSelector
            options={[
              { label: "Weight loss", value: "Weight loss" },
              { label: "Muscle gain", value: "Muscle gain" },
            ]}
            selectedValue={fitnessGoal}
            onSelect={(value) => setFitnessGoal(value as string)}
          />

          <Text style={styles.inputLabel}>Available Workout Time</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Available Workout Time"
            value={availableWorkoutTime}
            onChangeText={setAvailableWorkoutTime}
          />

          <Text style={styles.label}>Days Available</Text>
          <ScrollView horizontal>
            <OptionSelector
              options={[
                { label: "Monday", value: "Monday" },
                { label: "Tuesday", value: "Tuesday" },
                { label: "Wednesday", value: "Wednesday" },
                { label: "Thursday", value: "Thursday" },
                { label: "Friday", value: "Friday" },
                { label: "Saturday", value: "Saturday" },
                { label: "Sunday", value: "Sunday" },
              ]}
              selectedValue={daysAvailable}
              onSelect={(value) => setDaysAvailable(value as string[])}
              multiple={true}
            />
          </ScrollView>
          <Text style={styles.inputLabel}>Injuries</Text>
          <TextArea
            value={injuries}
            onChangeText={setInjuries}
            placeholder="Enter any injuries here"
          />
          <StyledButton title="Workout!" onPress={handleWorkout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  activeButton: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  styledButton: {
    alignItems: "center",
    padding: 10,
    borderColor: "#007bff",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#007bff",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  activeButtonText: {
    color: "#fff",
  },
  styledButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  workoutButton: {
    marginTop: 20,
  },
});
