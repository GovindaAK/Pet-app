import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,Image } from 'react-native';

const Medic = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const toggleDescription = (diseaseName) => {
    if (selectedDisease === diseaseName) {
      setSelectedDisease(null);
    } else {
      setSelectedDisease(diseaseName);
    }
  };

  const diseases = [
    {
      name: 'Canine Parvovirus (Parvo)',
      description:
        'Parvo is a highly contagious viral disease that affects the gastrointestinal tract of dogs.It spreads through contact with infected feces or contaminated environments.Symptoms include severe vomiting, diarrhea (often bloody), lethargy, loss of appetite, and dehydration.Puppies are particularly susceptible, and the disease can be fatal if not treated promptly with supportive care.',
    },
    {
      name: 'Canine Distemper',
      description:
        'Distemper is a viral disease that affects multiple systems in dogs, including the respiratory, gastrointestinal, and nervous systems.It spreads through airborne droplets or direct contact with infected animals.Symptoms include fever, coughing, nasal discharge, vomiting, diarrhea, neurological signs (e.g., seizures), and eventual paralysis.Distemper can be highly contagious and often leads to death, especially in young or unvaccinated dogs.',
    },
    {
      name: 'Canine Infectious Hepatitis (Adenovirus)',
      description:
        'Infectious Hepatitis is a viral disease that primarily affects the liver, kidneys, and endothelial cells in dogs.It spreads through contact with infected urine, feces, or saliva.Symptoms include fever, abdominal pain, vomiting, diarrhea, enlarged liver, jaundice, and in severe cases, bleeding disorders.Vaccination can help prevent this disease, and supportive care is essential for affected dogs.',
    },
    {
      name: 'Canine Lyme Disease',
      description:
        'Lyme disease is caused by a bacterium called Borrelia burgdorferi, which is transmitted through tick bites.It is prevalent in areas with high tick populations.Symptoms include lameness, joint swelling, fever, lethargy, loss of appetite, and in some cases, kidney or heart problems.Early diagnosis and appropriate antibiotic treatment are important to prevent complications.',
    },
    {
      name: 'Canine Leptospirosis',
      description:
        'Leptospirosis is a bacterial infection caused by various Leptospira species.It is transmitted through contact with infected urine or contaminated water sources.Symptoms can range from mild (fever, muscle pain) to severe (kidney failure, liver damage, respiratory distress, bleeding disorders).Prompt treatment with antibiotics and supportive care is crucial, and vaccination is available to prevent certain strains.',
    },
    {
      name: 'Canine Kennel Cough (Infectious Tracheobronchitis)',
      description:
        'Kennel cough is a highly contagious respiratory disease caused by various viruses and bacteria.It spreads through close contact with infected dogs, such as in kennels or dog parks.Symptoms include a persistent dry cough, retching, nasal discharge, and mild lethargy.Most cases resolve on their own, but in severe cases, antibiotics may be necessary.',
    },
    {
      name: 'Canine Parainfluenza',
      description:
        'Parainfluenza is a highly contagious viral respiratory infection in dogs, often associated with kennel cough.It spreads through respiratory secretions or close contact with infected dogs.Symptoms include coughing, nasal discharge, sneezing, fever, and lethargy.Vaccination can help prevent this disease, and supportive care is typically provided for affected dogs.',
    },
    {
      name: 'Canine Coronavirus',
      description:
        'Coronavirus primarily affects the gastrointestinal tract of dogs.It spreads through contact with infected feces or contaminated environments.Symptoms include diarrhea (sometimes severe), vomiting, loss of appetite, and lethargy.Although most cases resolve on their own, supportive care is important to manage dehydration and other symptoms.',
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems:'center',paddingTop:40,paddingBottom:-20}}>
    <Image
          style={{ height: 250, width: 300 ,}}
          source={require("../../assets/mdog.png")}
        />
    </View>
      <View style={styles.diseaseContainer}>
        {diseases.map((disease, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleDescription(disease.name)}
            style={styles.diseaseItem}
          >
            <Text style={styles.diseaseName}>{disease.name}</Text>
            {selectedDisease === disease.name && (
              <Text style={styles.description}>{disease.description}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  diseaseContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  diseaseItem: {
    marginBottom: 20,
  },
  diseaseName: {
    backgroundColor:'#ff5f1f',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -10,
    color:'#fff'
  },
  description: {
    fontSize: 16,
    marginTop:15,
    color: 'gray',
  },
});

export default Medic;
