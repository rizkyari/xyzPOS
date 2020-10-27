import React,{Component} from 'react';
import Check from './../component/asset/check_circle-24px.svg'

class Subscribe extends Component{
    constructor(props){
        super(props)
        this.state={
            packages:[
                {
                    name:"Basic",
                    price:"45.000",
                    features:[
                        "Kelola stok produk dengan mudah",
                        "Laporan Penjualan",
                        "Jual produk digital"
                    ]
                },
                {
                    name:"Premium",
                    price:"50.000",
                    features:[
                        "Semua fitur pada paket basic",
                        "Dukungan printer struk",
                        "Live support 24 jam"
                    ]
                },
                {
                    name:"Super POS!",
                    price:"70.000",
                    features:[
                        "Semua fitur pada paket premium",
                        "Laporan Penjualan",
                        "Jual produk digital"
                    ]
                },
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="">
                    <div className="font-semibold text-4xl mb-5 xl:ml-48">Daftar sekarang dan nikmati fiturnya!</div>
                    <div className="flex justify-center">
                        {this.state.packages.map((item,idx)=>(
                            <div style={{height:"500px", width:"350px", position:'relative'}} className="border rounded-lg mx-3 mb-8" key={idx}>
                                {item.name === "Premium" ? 
                                (
                                <div style={{backgroundColor:'#EB414F', color:'#ffffff', height:'50px', fontSize:'20px'}} className="rounded-t-lg text-center pt-3 font-bold">
                                    Best Seller!
                                </div>
                                ) 
                                : (
                                    <div style={{height:"50px"}}></div>
                                )}
                                <div className="text-center ">
                                    <p style={{color:'#EB414F'}} className="font-bold text-4xl">{item.name}</p>
                                    <div className="text-2xl">
                                        <span style={{position:"absolute", left:'20%'}}>Rp </span>
                                        <span className="font-bold text-5xl">{item.price}</span> 
                                        <p style={{textAlign:'right'}} className="mr-20">/Bulan</p>
                                    </div>
                                </div>
                                <div className="px-3 mt-4">
                                    {item.features.map((item,idx)=>(
                                        <div key={idx} className="flex">
                                            <img src={Check} className="h-8 w-8 mr-2"/>
                                            <div style={{fontSize:"25px"}}>{item}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{backgroundColor:'#EB414F', color:'#ffffff', position:"absolute", bottom:'5%', left:'15%', }} className='text-center rounded-full'>
                                    <button style={{width:'250px'}} className="py-3 font-bold focus:outline-none">Aku mau!</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Subscribe;