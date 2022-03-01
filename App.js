import React, { Component } from 'react';
import {Button, View, Text} from 'react-native';

export default class App extends Component{
  render(){
    return(

     

    <View style={{marginTop: 140,
    marginLeft:60, 
    marginRight:60, 
    
    }}>
    
    <View style={{marginBottom:20 }}>
      <Text style={{textAlign:"center"}}> Personajes historicos de Mexico</Text>
</View>
     
      <View style={{marginBottom:20}}>
 <RedButton color="cyan"/>
      </View>

<View style={{marginBottom:20}}>
        <GreenButton color="lime"/>
</View>
        
        <View style={{marginBottom:20}}>
        <BlueButton color="teal"/>
</View>

 <View style={{marginBottom:20}}>
        <OrangeButton color="orange"/>
</View>


        <YellowButton color="red"/>
     
      </View>
      
     


    );
  }
}


class RedButton extends Component{

displayAlert=()=>{
  alert("En México se le conoce como el Padre de la Patria.")
}
  render(){
    return(
<Button color={this.props.color} title="Miguel Hidalgo"  onPress={this.displayAlert} />
    )
  }
}

class GreenButton extends Component{
  displayAlert2=()=>{
    alert("Militar y político novohispano en la Guerra de Independencia de México.")
  }

 render(){
   return(
     <Button color={this.props.color} title="Jose Maria y MOrelos" onPress={this.displayAlert2}/>
   )
 }

}


class BlueButton extends Component{
  displayAlert3=()=>{
    alert("Fue un campesino y militar mexicano que participó en la Revolución mexicana")
  }

 render(){
   return(
     <Button color={this.props.color} title="Emiliano Zapata" onPress={this.displayAlert3}/>
   )
 }

}



class OrangeButton extends Component{
  displayAlert4=()=>{
    alert("Fue un militar mexicano que se destacó como uno de los principales jefes de la Revolución Mexicana ")
  }

 render(){
   return(
     <Button color={this.props.color} title="Pancho Villa" onPress={this.displayAlert4}/>
   )
 }

}

class YellowButton extends Component{
  displayAlert5=()=>{
    alert("Presidente de México en varias ocasiones, del 21 de enero de 1858 al 18 de julio de 1872.​ Se le conoce como el Benemérito de las Américas")
  }

 render(){
   return(
     <Button color={this.props.color} title="Benito Juárez"  onPress={this.displayAlert5} />
   )
 }

}

















