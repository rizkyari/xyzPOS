import React,{Component} from 'react';
import { connect } from "react-redux";
import * as action from './../redux/action/index';
import Close from './../component/asset/close-24px.svg';
import LoginFace from './../component/asset/login-illustration.svg';
import Email from './../component/asset/email-24px.svg';
import Pass from './../component/asset/password-24px.svg';
import Name from './../component/asset/face-24px.svg';
import './style.css'
class Register extends Component{
    render(){
        return(
            <div style={{display: `${this.props.modal ? "block" : "none"}`,}} className='py-8'>
                <div>
                    <div style={{textAlign:'right', marginRight:'220px'}} >
                        <button type="button" onClick={()=>this.props.handleRegister(false,false)} className='focus:outline-none'>
                            <img src={Close}/>
                        </button>
                    </div>
                    <div className="xl:flex xl:justify-between">
                        <div style={{float:"left", position:"relative",left:"20%"}}>
                            <img src={LoginFace}/>
                        </div>
                        <div style={{float:"right", position:"relative",right:"23%"}}>
                            <p style={{}} className='font-bold text-3xl mb-5'>Buat Akun</p>
                            <form>
                                <div style={{position:'relative'}} className='my-5'>
                                    <img src={Name} style={{position:'absolute', height:'38px',width:'38px', top:'13%', left:'5%'}} />
                                    <input type="text" id="name" name="name" placeholder="Name" className='px-5 py-3 border rounded-full pl-16 focus:outline-none' style={{width:'300px',borderColor:'#EB414F', borderWidth:'3px'}}/>
                                </div>
                                <div style={{position:'relative'}}>
                                    <img src={Email} style={{position:'absolute', height:'38px',width:'38px', top:'13%', left:'5%'}} />
                                    <input type="email" id="email" name="email" placeholder="Email" className='px-5 py-3 border rounded-full pl-16 focus:outline-none' style={{width:'300px',borderColor:'#EB414F', borderWidth:'3px'}}/>
                                </div>
                                <div style={{position:'relative'}} className='my-5 mb-5'>
                                    <img src={Pass} style={{position:'absolute', height:'38px',width:'38px', top:'13%', left:'5%'}} />
                                    <input type="password" id="password" name="password" placeholder="Password" className='px-5 py-3 border rounded-full pl-16 focus:outline-none' style={{width:'300px',borderColor:'#EB414F',borderWidth:'3px'}}/>
                                </div>
                                <div className='mt-8'>
                                    <button type='submit' style={{backgroundColor:'#EB414F', color:'#fff', width:'300px'}} className='px-8 py-3 font-bold border rounded-full focus:outline-none'>Daftar</button>
                                </div>
                                <div className="text-center">
                                    <span>Sudah punya akun? </span>
                                    <button type="button" style={{color:'#EB414F'}} className='font-bold focus:outline-none' onClick={()=>this.props.handleRegister(false,true)}>
                                        Masuk
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        modal: state.modal.register
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnModal: (data) => dispatch(action.handleOnModal(data)),
        handleRegister: (data,register) => dispatch(action.handleRegister(data,register)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);