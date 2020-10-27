import React,{Component} from 'react';
import Navbar from './../component/layout/navbar';
import Hero from './../component/asset/hero-section-illustration.svg';
import Subscribe from './Subscribe';
import Footer from './../component/layout/footer';

class Landing extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }
    
    render(){
        return(
            <>
                <Navbar/>
                <div className="xl:flex xl:justify-between items-center mb-16">
                    <div style={{fontSize:"45px",float:"left", position:"relative",left:"10%"}} className="font-semibold">
                        <div style={{display:"inline-block",textAlign:'left'}}>
                            <p>Solusi terbaik untuk</p>
                            <p style={{color:"#EB414F"}}>mengelola usaha</p>
                            <p>kamu!</p>
                            <button style={{width:"400px", fontSize:"30px", color:"#ffffff", backgroundColor:"#EB414F"}} className="border rounded-full px-8 py-1 font-semibold">Daftar Sekarang</button><br/>
                            <button style={{width:"400px", fontSize:"30px", color:"#EB414F", borderColor:"#EB414F"}} className="border rounded-full px-8 py-1 font-semibold">Pelajari Dulu!</button>
                        </div>    
                    </div>
                    <div style={{float:"right", position:"relative",right:"10%"}}>
                        <img src={Hero} style={{width:"600px",height:"580px"}}/>
                    </div>
                </div>
                <Subscribe/>
                <Footer/>
            </>
        )
    }
}

export default Landing;