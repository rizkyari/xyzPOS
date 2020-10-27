import React,{Component} from 'react';
import { connect } from "react-redux";
import Table from './Table';

class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile:{
                expiry : "15 Juli 2020",
                total: "500",
                sold : "1.000",
                profit: "15.000.000"
        }
        }
    }
    render(){
        return(
            <div className='px-5 py-5'>
                <p>Dashboard</p>
                <p className='font-bold text-2xl mb-5'>Halo,{this.props.name}!</p>
                <div className='flex'>
                    <div className='border p-2 mx-3' style={{borderRadius:'15px',color:'#fff', backgroundColor:'#EB414F',width:'200px'}}>
                        <p>Masa Berlaku Langganan</p>
                        <p className='font-bold'>{this.state.profile.expiry}</p>
                    </div>
                    <div className='border p-2 mx-3' style={{borderRadius:'15px',color:'#fff', backgroundColor:'#EB414F',width:'200px'}}>
                        <p>Total Produk</p>
                        <p className='font-bold'>{this.state.profile.total}</p>
                    </div>
                    <div className='border p-2 mx-3' style={{borderRadius:'15px',color:'#fff', backgroundColor:'#EB414F',width:'200px'}}>
                        <p>Produk Terjual</p>
                        <p className='font-bold'>{this.state.profile.sold}</p>
                    </div>
                    <div className='border p-2 mx-3' style={{borderRadius:'15px',color:'#fff', backgroundColor:'#EB414F',width:'200px'}}>
                        <p>Total Keuntungan</p>
                        <p className='font-bold'>{this.state.profile.profit}</p>
                    </div>
                </div>
                <Table/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        modal: state.modal.register,
        name: state.auth.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);