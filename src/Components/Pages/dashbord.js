import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../Form/FormInput";
import FormButton2 from "../Form/FormButton2";
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

import './home.css';
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
const Dashbord = (props) => {

  const [ATCD, setATCD] = useState("");


  var handleATCDChange = (text) => {
    setATCD(text)
  }


  var handleSubmit = (e) => {
    var values = {
      antecedent: "ATCDchir",
      atcd: ATCD
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }




  return (
    <section className="landing-background4">
    <div class=" d-flex align-items-center m-4 ">
<MDBContainer  >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
          <form>
          <FormButton2 title="Save File ECG" onPress={() => { props.navigation.navigate("Dash1") }} />
                    <FormButton2 title="Save File EEG" onPress={() => { props.navigation.navigate("Dash2") }} />
                    <FormButton2 title="Save File 3" onPress={() => { props.navigation.navigate("Dash3") }} />
                    <FormButton2 title="Save File 4" onPress={() => { props.navigation.navigate("Dash4") }} />
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />
          </form>
           

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </section>
  );
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
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(Dashbord);