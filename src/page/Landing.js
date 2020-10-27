import React,{Component} from 'react';
import Navbar from './../component/layout/navbar';
import Hero from './../component/asset/hero-section-illustration.svg';

class Landing extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <div className="xl:flex xl:justify-between items-center">
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
            </>
        )
    }
}

export default Landing;