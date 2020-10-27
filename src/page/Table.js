import React,{Component} from 'react';

class Table extends Component{
    constructor(props){
        super(props)
        this.state={
            datas:[
                {
                    time:"09.21",
                    name:"Budi Cahyadi",
                    item:"Kipas Angin",
                    price:"Rp 100.000",
                    qty:"1",
                    total:"Rp 100.000"
                },
                {
                    time:"13.50",
                    name:"Ahmad Santoso",
                    item:"Sapu Ijuk",
                    price:"Rp 10.000",
                    qty:"2",
                    total:"Rp 20.000"
                },
                {
                    time:"15.00",
                    name:"Yulia",
                    item:"Rinso",
                    price:"Rp 35.000",
                    qty:"4",
                    total:"Rp 140.000"
                },
                {
                    time:"16.00",
                    name:"Evelyn",
                    item:"Molto",
                    price:"Rp 35.000",
                    qty:"4",
                    total:"Rp 140.000"
                },
                {
                    time:"18.30",
                    name:"Tara",
                    item:"Telur Ayam Kampung",
                    price:"Rp 75.000",
                    qty:"1",
                    total:"Rp 75.000"
                },
            ]
        }
    }
    render(){
        return(
            <div className='mt-5 p-5'style={{boxShadow:'0 8px 8px #777', borderRadius:'12px'}}>
                <div>
                    <p className='font-bold'>Penjualan Hari Ini</p>
                    <p>Kamis,13 Agustus 2020</p>
                </div>
                <table className='border' style={{borderWidth:'3px',width:'100%'}}>
                    <tr className='border px-3 py-2' style={{borderWidth:'3px'}}>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Jam</th>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Customer</th>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Barang</th>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Harga Barang</th>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Qty</th>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Total</th>
                        <th className='border px-3 py-2' style={{borderWidth:'3px'}}>Action</th>
                    </tr>
                    {this.state.datas.map((item,idx)=>(
                        <tr className='border px-3 py-2' style={{borderWidth:'3px'}}>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>{item.time}</td>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>{item.name}</td>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>{item.item}</td>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>{item.price}</td>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>{item.qty}</td>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>{item.total}</td>
                            <td className='border px-3 py-2' style={{borderWidth:'3px'}}>
                                <button className='border rounded-full px-3 py-1 focus:outline-none' style={{color:'#ffffff', backgroundColor:'#EB414F', width:'100%'}}>Lihat Detail</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Table;