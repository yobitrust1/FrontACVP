import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import FormButton from "../Form/FormButton";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
//import 'localstorage-polyfill';



const SearchPatient = (props) => {
  let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      position: "all",
      color: [ "#ff0000"],
      cross: "dead",
      random: 10
    };
  useEffect(() => {
    props.search(search)
  }, [])

  const tableHead = ['Cin', 'Nom', 'Prenom']
  const [search, setSearch] = useState(0)
  const [search2, setSearch2] = useState(0)

  const handleSearchChange = (text) => {
    setSearch(text)
    //console.log(search)
  }
  const handleSearch = () => {
    setSearch2(search)
    console.log(search)
    props.search(search)


  }
  return (
<div>
<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
<Container style={{borderradius: "100px", backgroundColor:"rgba(0,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Rechercher un patient</Text>
        <View style={tailwind('py-8 items-center')}>

          <FormInput
            placeholder="Search...Type CIN"
            type="number-pad"
            onChangeText={handleSearchChange}
            maxLength={Number("8")}
          />


          <FormButton title="Rechercher" onPress={handleSearch} />
          <View style={tailwind('py-8 items-center')}>
            <Text style={tailwind("text-red-500")}>
              {(search2 != 0) && ((typeof (props.patientList) === 'string' && props.patientList) ||
                (
                  <View style={tailwind('items-center')}>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>identifiant:{props.patientList["generalInformation"]["identifiant"]}</Text>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Nom:{props.patientList["generalInformation"]["nom"]}</Text>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>prenom:{props.patientList["generalInformation"]["prenom"]}</Text>
                    <FormButton title="Details" onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title="Information" onPress={() => { props.navigation.navigate("InfosGenerales2") }} />
                    <FormButton title="Save file" onPress={() => { props.navigation.navigate("Dashbord") }} />
                  </View>
                ))}

            </Text>

          </View>




        </View>

        <View style={styles.row}>
          <FormButton title="Ajouter un patient" onPress={() => { props.navigation.navigate("AddPatient"); }} />
          <FormButton title="Annuler" onPress={() => { props.navigation.navigate("Home"); }} />

        </View>

      </View>
      </Container>
      </div>
      <ParticlesBg type="cobweb" config={config} bg={true} />
      </div>


  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  search: actions.searchPatient
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

export default connect(mapStateToProps, mapActionToProps)(SearchPatient);
