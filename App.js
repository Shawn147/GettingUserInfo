import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      img : require("./assets/axiom.png"),
      


    }
    this.btnpress = this.btnpress.bind(this)
    // this.handleChangeText = this.handleChangeText.bind(this)
    // this.handleChangeText2 = this.handleChangeText2.bind(this)
  }

    btnpress(){
      console.log("UserName: ",this.state.username,"Password: ",this.state.password);
    }

    // handleChangeText(userN){
    // this.setState({user : userN  
    // });}

    // handleChangeText2(passN){
    // this.setState({pass : passN  
    // });}
    
    
  //     setInterval(()=>{
//   //     if (this.state.img === require("./assets/axiom.png")){
//   //   this.setState({img : require("./assets/react.png")});
//   // }else {
//     this.setState({img : require("./assets/axiom.png")});
  
// },2000)  
  //   setInterval(()=>{
  //     this.setState({
  //       style.inp.color = "red"})
  //   },1000)
  
  

  render(){
    
    
   
    // console.log('=========USERID============');
    // console.log(this.state.user)  
    // console.log('===========Password=========');
    // console.log(this.state.pass);
    
    
    
    
    return (
      <View style={styles.container}>
                    
        <View style={styles.cont1}>
        <Image
            
           source={this.state.img}
            style={{height : "20%", width : "100%",}}/>
          </View>


        <View style={styles.cont2}>
        <Image source={require("./assets/user.jpg")} style={{height : 50,width : 50}}>
          </Image> 

          <TextInput
          defaultValue={this.state.username}
          onChangeText={ Text => this.setState({username : Text})}
          style={styles.inp}
          // onChangeText={this.handleChangeText}
          >
            {/* {this.state.user} */}
          </TextInput>
          
          <Image source={require("./assets/pass.png")} style={{height : 50,width : 50}}>
          </Image> 
          
          <TextInput
          defaultValue={this.state.password}
          onChangeText={ Text => this.setState({password : Text})}
          style={styles.inp}
          // onChangeText={this.handleChangeText2}
          >
            {/* {this.state.pass} */}
          </TextInput>
       
          <Button title={"Log In"} style={styles.btn} onPress={this.btnpress}/>

        </View>
      </View>
          
    );
  }
  

  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent : "center",
      paddingTop: 28,
      paddingRight : 10,
      paddingLeft : 10,
      paddingBottom : 10,
      backgroundColor : "dimgray"
      
      
    },

    cont1 :{
      color : "gray",
      flex  : 2,
      justifyContent : "center",
      backgroundColor : "aliceblue"
      
    },
    cont2 :{
      justifyContent : "space-evenly",
      flex : 3,
      backgroundColor : "aliceblue",
      alignItems: 'center',
      
    },

    inp : {
      backgroundColor : "darkorange",
      color : "navy", 
      height : 50,
      width : "80%",
      color : "white",
      textAlign : "center",
    },
    btn : {
      width : "50%",
      

    }
  });
  